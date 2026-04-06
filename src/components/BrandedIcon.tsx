"use client";

/**
 * Branded icon component — dark gradient container with emerald/teal accent icon.
 * Matches the OG image style for visual consistency across the site.
 * Use for feature cards, trust badges, and prominent icon placements.
 */

import type { LucideIcon } from "lucide-react";

interface BrandedIconProps {
  icon: LucideIcon;
  /** sm = 36px, md = 48px, lg = 64px */
  size?: "sm" | "md" | "lg";
  /** Gradient variant */
  variant?: "emerald" | "blue" | "amber" | "purple" | "slate";
  className?: string;
}

const sizeMap = {
  sm: { container: 36, icon: 16, radius: 8 },
  md: { container: 48, icon: 22, radius: 12 },
  lg: { container: 64, icon: 28, radius: 16 },
};

const variantMap = {
  emerald: {
    bg: "bg-gradient-to-br from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20",
    icon: "text-emerald-400",
  },
  blue: {
    bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/20",
    icon: "text-blue-400",
  },
  amber: {
    bg: "bg-gradient-to-br from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/20",
    icon: "text-amber-400",
  },
  purple: {
    bg: "bg-gradient-to-br from-purple-500/20 to-violet-500/10",
    border: "border-purple-500/20",
    icon: "text-purple-400",
  },
  slate: {
    bg: "bg-gradient-to-br from-slate-600/30 to-slate-700/20",
    border: "border-slate-500/20",
    icon: "text-slate-300",
  },
};

export default function BrandedIcon({
  icon: Icon,
  size = "md",
  variant = "emerald",
  className = "",
}: BrandedIconProps) {
  const s = sizeMap[size];
  const v = variantMap[variant];

  return (
    <div
      className={`flex items-center justify-center border ${v.bg} ${v.border} backdrop-blur-sm ${className}`}
      style={{
        width: s.container,
        height: s.container,
        borderRadius: s.radius,
      }}
    >
      <Icon size={s.icon} className={v.icon} />
    </div>
  );
}

/**
 * Dark-on-dark branded icon — the "OG image" style.
 * Dark slate background with subtle gradient, glowing accent icon.
 * Best for hero sections and marketing callouts on light backgrounds.
 */
export function BrandedIconDark({
  icon: Icon,
  size = "md",
  variant = "emerald",
  className = "",
}: BrandedIconProps) {
  const s = sizeMap[size];
  const iconColorMap = {
    emerald: "text-emerald-400",
    blue: "text-blue-400",
    amber: "text-amber-400",
    purple: "text-purple-400",
    slate: "text-slate-400",
  };
  const glowColorMap = {
    emerald: "shadow-emerald-500/20",
    blue: "shadow-blue-500/20",
    amber: "shadow-amber-500/20",
    purple: "shadow-purple-500/20",
    slate: "shadow-slate-500/20",
  };

  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 shadow-lg ${glowColorMap[variant]} ${className}`}
      style={{
        width: s.container,
        height: s.container,
        borderRadius: s.radius,
      }}
    >
      <Icon size={s.icon} className={iconColorMap[variant]} />
    </div>
  );
}
