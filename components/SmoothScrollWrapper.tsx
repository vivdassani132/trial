import React, { useEffect, useRef } from 'react';

interface SmoothScrollProps {
    children: React.ReactNode;
    resetKey?: string;
}

export const SmoothScrollWrapper: React.FC<SmoothScrollProps> = ({ children, resetKey }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const state = useRef({
        current: 0,
        target: 0,
    });
    const rafId = useRef<number>(null);

    // Reset scroll when key changes (route change)
    useEffect(() => {
        state.current.current = 0;
        state.current.target = 0;
        window.scrollTo(0, 0);
        if (contentRef.current) {
            contentRef.current.style.transform = 'translate3d(0, 0, 0)';
        }
    }, [resetKey]);

    useEffect(() => {
        const content = contentRef.current;
        if (!content) return;

        const updateBodyHeight = () => {
             if (content) document.body.style.height = `${content.scrollHeight}px`;
        };
        
        // Initial measurement
        updateBodyHeight();
        
        const resizeObserver = new ResizeObserver(() => updateBodyHeight());
        resizeObserver.observe(content);

        const onWheel = (e: WheelEvent) => {
            e.preventDefault();
            const speedFactor = 0.75; // Increased speed (75% of native)
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            
            state.current.target += e.deltaY * speedFactor;
            state.current.target = Math.max(0, Math.min(state.current.target, maxScroll));
        };

        const onScroll = () => {
             // If window scroll deviates significantly from our internal current, 
             // it means external input (scrollbar drag, keyboard), so we sync.
             if (Math.abs(window.scrollY - state.current.current) > 10) {
                 state.current.target = window.scrollY;
             }
        };

        const loop = () => {
            const ease = 0.08; 
            const diff = state.current.target - state.current.current;
            const delta = diff * ease;

            if (Math.abs(diff) > 0.1) {
                state.current.current += delta;
                
                // Update transform
                content.style.transform = `translate3d(0, -${state.current.current}px, 0)`;
                
                // Sync window scroll (but avoid thrashing if close enough)
                if (Math.abs(window.scrollY - state.current.current) > 1) {
                     window.scrollTo(0, state.current.current);
                }
            }

            rafId.current = requestAnimationFrame(loop);
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('scroll', onScroll);
        rafId.current = requestAnimationFrame(loop);

        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('scroll', onScroll);
            if (rafId.current) cancelAnimationFrame(rafId.current);
            resizeObserver.disconnect();
            document.body.style.height = '';
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
            <div ref={contentRef} className="w-full pointer-events-auto will-change-transform">
                {children}
            </div>
        </div>
    );
};