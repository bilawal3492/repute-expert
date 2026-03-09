"use client";

import React from "react";
import Link from "next/link";

export interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
}

const variants = {
  primary:
    "bg-white text-[#0A0A0A] hover:bg-white/90 active:bg-white/80",
  outline:
    "border border-white/40 text-white bg-transparent hover:bg-white hover:text-[#0A0A0A]",
  ghost:
    "text-white bg-transparent hover:bg-white/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  label,
  href,
  onClick,
  variant = "primary",
  size = "md",
  external,
  disabled,
  type = "button",
  className = "",
  icon,
  iconPosition = "right",
  fullWidth,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-smooth cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  const cls = [
    base,
    variants[variant],
    sizes[size],
    disabled && "opacity-40 pointer-events-none",
    fullWidth && "w-full",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{label}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {content}
    </button>
  );
}
