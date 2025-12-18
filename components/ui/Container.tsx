import React from 'react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1200px] mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
};