import React, { memo } from "react";

interface CustomBtnProps {
  className?: string;
  variant?: "outline" | "filled";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
}

const CustomBtn = memo(function CustomBtn({
  className = "",
  variant = "outline",
  children,
  onClick,
  type = "button",
  disabled = false,
}: CustomBtnProps) {
  const variantClasses =
    variant === "filled"
      ? "bg-white text-black"
      : "border border-white text-white";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`p-3 flex-center flex text-xs rounded-lg capitalize cursor-pointer transition-colors ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
});

export default CustomBtn;
