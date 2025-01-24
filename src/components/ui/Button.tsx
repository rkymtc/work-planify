import { ButtonProps } from "@/types/types";
import React from "react";

const Button: React.FC<ButtonProps> = ({
  children,
  iconLeft,
  iconRight,
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  ...props
}) => {
  // Tailwind bazlı renk stilleri
  const variantClasses: Record<string, string> = {
    primary: "bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white",
    secondary: "hover:bg-green-900 disabled:bg-gray-300 text-white text-[16px] font-normal",
    success: "bg-[#47734D]/85 hover:bg-[#47734D]/90 disabled:bg-gray-300 text-white",
    danger: "bg-red-500 hover:bg-red-600 disabled:bg-gray-300 text-white",
    custom:
      "bg-[rgba(76,208,128,0.12)] text-[#4CD080] border-[#4CD080] hover:bg-[#4CD080] hover:text-white disabled:cursor-not-allowed",
    customBorder:
      "border-[#4CD080] text-[#4CD080] text-nowrap rounded-[5px] hover:bg-[#4CD080] hover:text-white disabled:cursor-not-allowed border text-[12px] font-normal",
  };
  

  // Boyuta göre padding, font-size vb.nowrap 
  const sizeClasses: Record<string, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Birleştirilmiş className
  const combinedClassName = `
    flex
    items-center
    justify-center
    font-semibold
    rounded-[5px]
    transition-colors
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim();

  return (
    <button
      {...props}
      disabled={disabled}
      className={combinedClassName}
    >
      {/* iconLeft varsa solda göster */}
      {iconLeft && <span className="mr-2 flex items-center">{iconLeft}</span>}

      {children}

      {/* iconRight varsa sağda göster */}
      {iconRight && <span className="ml-2 flex items-center">{iconRight}</span>}
    </button>
  );
};

export default Button;
