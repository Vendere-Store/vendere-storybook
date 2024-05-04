// Button.tsx
import React from 'react';

// Define Props type for TypeScript
export type ButtonProps = {
    primary?: boolean; // Indicates if button is primary (will be deprecated)
    type?: 'primary' | 'secondary' | 'danger' | 'info';
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
    color: string;
    fullWidth: boolean;
    className: string;
}

export const Button: React.FC<ButtonProps> = (
    {
        type = 'primary',
        size = 'medium',
        label,
        onClick,
        color,
        fullWidth,
        className
    }) => {
    // Map type to Tailwind CSS classes
    const defaultClasses = `flex items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`
    const typeClasses = {
        primary: 'bg-blue-500 hover:bg-blue-700',
        secondary: 'bg-gray-500 hover:bg-gray-700',
        danger: 'bg-red-500 hover:bg-red-700',
        info: 'bg-teal-500 hover:bg-teal-700',
    };

    // Map size to Tailwind CSS classes
    const sizeClasses = {
        small: 'text-xs py-1 px-2',
        medium: 'text-sm py-2 px-4',
        large: 'text-lg py-3 px-5',
    };


    // Combine the classes based on the props
    const buttonClasses = `text-white font-bold rounded ${color} ${defaultClasses} ${typeClasses[type]} ${sizeClasses[size]} ${fullWidth && 'w-full'} ${className}`;

    return (
        <button
            type="button"
            className={buttonClasses}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;
