import React, { useEffect, useRef, useState } from 'react';

interface SmoothScrollProps {
    children: React.ReactNode;
    resetKey?: string;
}

/**
 * A robust smooth scroll implementation that leverages the native browser scrollbar.
 * It creates a 'ghost' height on the body and transforms the content based on scroll position.
 */
export const SmoothScrollWrapper: React.FC<SmoothScrollProps> = ({ children, resetKey }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    
    // Internal state for interpolation
    const state = useRef({
        current: 0,
        target: 0,
    });
    
    const rafId = useRef<number>(null);

    // Initial touch device detection - fallback to native for all touch devices
    useEffect(() => {
        const checkTouch = () => {
            const hasTouch = (
                'ontouchstart' in window ||
                navigator.maxTouchPoints > 0 ||
                window.matchMedia('(pointer: coarse)').matches
            );
            setIsTouchDevice(hasTouch);
        };
        checkTouch();
        window.addEventListener('resize', checkTouch);
        return () => window.removeEventListener('resize', checkTouch);
    }, []);

    // Handle native scroll height update
    useEffect(() => {
        if (isTouchDevice) {
            document.body.style.height = '';
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
            return;
        }

        const content = contentRef.current;
        if (!content) return;

        const updateHeight = () => {
            if (content) {
                const height = content.scrollHeight;
                document.body.style.height = `${height}px`;
            }
        };

        // Aggressive height update to catch all layout shifts
        const resizeObserver = new ResizeObserver(() => updateHeight());
        resizeObserver.observe(content);
        
        // Polling height update as a safety measure for images loading
        const interval = setInterval(updateHeight, 1000);
        
        updateHeight();
        
        return () => {
            resizeObserver.disconnect();
            clearInterval(interval);
            document.body.style.height = '';
        };
    }, [isTouchDevice, resetKey]);

    // Interpolation loop
    useEffect(() => {
        if (isTouchDevice) return;

        const content = contentRef.current;
        if (!content) return;

        const loop = () => {
            // Target is the actual scroll position
            state.current.target = window.scrollY;

            // Snap factor (0.15 is responsive)
            const ease = 0.15; 
            const diff = state.current.target - state.current.current;
            
            if (Math.abs(diff) > 0.01) {
                state.current.current += diff * ease;
                if (content) {
                    content.style.transform = `translate3d(0, -${state.current.current}px, 0)`;
                }
            } else if (state.current.current !== state.current.target) {
                state.current.current = state.current.target;
                if (content) {
                    content.style.transform = `translate3d(0, -${state.current.current}px, 0)`;
                }
            }

            rafId.current = requestAnimationFrame(loop);
        };

        rafId.current = requestAnimationFrame(loop);

        return () => {
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, [isTouchDevice]);

    // Fallback for mobile / touch devices
    if (isTouchDevice) {
        return <div className="w-full relative">{children}</div>;
    }

    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div 
                    ref={contentRef} 
                    className="w-full pointer-events-auto will-change-transform"
                >
                    {children}
                </div>
            </div>
            {/* The actual scrollable area is defined by body height set in useEffect */}
        </>
    );
};