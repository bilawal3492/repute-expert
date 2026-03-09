import React from "react";

export interface BadgeProps {
  label: string;
  variant?: "default" | "outline" | "muted";
  size?: "sm" | "md";
  className?: string;
}

const variants = {
  default: "bg-white/10 text-white border border-white/20",
  outline: "border border-white/30 text-white/70 bg-transparent",
  muted: "bg-white/5 text-white/50 border border-white/10",
};

const sizes = {
  sm: "px-2.5 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export function Badge({ label, variant = "default", size = "sm", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium tracking-wide ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {label}
    </span>
  );
}
