import React from "react";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props}
    />
  );
}
