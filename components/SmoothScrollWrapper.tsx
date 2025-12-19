import React, { useEffect, useRef, useState } from 'react';

interface SmoothScrollProps {
    children: React.ReactNode;
    resetKey?: string;
}

export const SmoothScrollWrapper: React.FC<SmoothScrollProps> = ({ children, resetKey }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const state = useRef({
        current: 0,
        target: 0,
    });
    const rafId = useRef<number>(null);

    useEffect(() => {
        // Detect if the device has a touch screen or is likely mobile
        const checkTouch = () => {
            setIsTouchDevice(
                'ontouchstart' in window || 
                navigator.maxTouchPoints > 0 || 
                window.matchMedia('(pointer: coarse)').matches
            );
        };
        checkTouch();
    }, []);

    useEffect(() => {
        if (isTouchDevice) return;

        state.current.current = 0;
        state.current.target = 0;
        window.scrollTo(0, 0);
        if (contentRef.current) {
            contentRef.current.style.transform = 'translate3d(0, 0, 0)';
        }
    }, [resetKey, isTouchDevice]);

    useEffect(() => {
        if (isTouchDevice) return;
        
        const content = contentRef.current;
        if (!content) return;

        const updateBodyHeight = () => {
             if (content) document.body.style.height = `${content.scrollHeight}px`;
        };
        
        updateBodyHeight();
        const resizeObserver = new ResizeObserver(() => updateBodyHeight());
        resizeObserver.observe(content);

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            const speedFactor = 0.95; 
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            
            state.current.target += e.deltaY * speedFactor;
            state.current.target = Math.max(0, Math.min(state.current.target, maxScroll));
        };

        const loop = () => {
            const ease = 0.12; 
            const diff = state.current.target - state.current.current;
            const delta = diff * ease;

            if (Math.abs(diff) > 0.1) {
                state.current.current += delta;
                content.style.transform = `translate3d(0, -${state.current.current}px, 0)`;
                // Sync the actual scroll position for things like scroll listeners
                if (Math.abs(window.scrollY - state.current.current) > 1) {
                     window.scrollTo({ top: state.current.current, behavior: 'auto' });
                }
            }

            rafId.current = requestAnimationFrame(loop);
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        rafId.current = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('wheel', onWheel);
            if (rafId.current) cancelAnimationFrame(rafId.current);
            resizeObserver.disconnect();
            document.body.style.height = '';
        };
    }, [isTouchDevice]);

    if (isTouchDevice) {
        // Return standard layout for mobile/touch devices to use native browser scrolling
        return <div className="w-full relative">{children}</div>;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
            <div ref={contentRef} className="w-full pointer-events-auto will-change-transform">
                {children}
            </div>
        </div>
    );
};