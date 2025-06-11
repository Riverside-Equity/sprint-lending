import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "default" | "outline";
};

const styles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "bg-blue-900 text-white",
  outline: "border border-white text-white bg-transparent",
};

export function Button({
  children,
  className = "",
  type = "button",
  variant = "default",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-xl px-4 py-2 text-sm font-medium ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
