import React from "react";
import clsx from 'clsx'


interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"; // default classes applied if set
  size?: "sm" | "md" | "lg";
  className?: string; // always merges with default/conditional classes
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  className,
  ...props
}) => {
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
  };

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        variant ? variantClasses[variant] : "",
        size ? sizeClasses[size] : "",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
