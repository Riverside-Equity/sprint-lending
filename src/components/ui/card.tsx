import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl shadow-md bg-white p-6">{children}</div>;
}

export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
