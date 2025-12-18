import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 rounded-xl";
  
  const variants = {
    primary: "bg-[#18181B] text-white hover:bg-[#27272A] border border-transparent shadow-lg",
    secondary: "bg-white text-[#18181B] hover:bg-[#F4F4F5] border border-[#E4E4E7] shadow-sm",
    ghost: "bg-transparent text-[#18181B] hover:bg-[#F4F4F5]",
    outline: "bg-transparent text-[#18181B] border border-[#E4E4E7] hover:bg-[#FAFAFA]"
  };

  const sizes = {
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};