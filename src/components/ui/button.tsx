import React from "react";

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: any) {
  const base = "rounded-2xl px-4 py-2 font-semibold shadow";
  const styles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
