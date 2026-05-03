import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ExcavationSystem } from "@/types";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const WALL_TYPE_LABELS: Record<string, string> = {
  SoldierPile: "Soldier",
  SecantPile: "Secant",
  SheetPile: "Sheet",
  TangentPile: "Tangent",
  Micropile: "Micropile",
  DiaphragmWall: "Diaphragm",
};

const WALL_TYPE_COLOR: Record<string, string> = {
  SoldierPile: "text-chart-1 border-chart-1/30 bg-chart-1/10",
  SecantPile: "text-chart-2 border-chart-2/30 bg-chart-2/10",
  SheetPile: "text-chart-3 border-chart-3/30 bg-chart-3/10",
  TangentPile: "text-chart-4 border-chart-4/30 bg-chart-4/10",
  Micropile: "text-chart-5 border-chart-5/30 bg-chart-5/10",
  DiaphragmWall: "text-primary border-primary/30 bg-primary/10",
};

// SVG icons per system type
const WALL_ICONS: Record<string, React.ReactNode> = {
  SoldierPile: (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="4"
        width="4"
        height="32"
        rx="1"
        fill="currentColor"
        opacity="0.8"
      />
      <rect
        x="16"
        y="4"
        width="4"
        height="32"
        rx="1"
        fill="currentColor"
        opacity="0.8"
      />
      <rect
        x="26"
        y="4"
        width="4"
        height="32"
        rx="1"
        fill="currentColor"
        opacity="0.8"
      />
      <rect
        x="4"
        y="12"
        width="32"
        height="3"
        rx="0.5"
        fill="currentColor"
        opacity="0.4"
      />
      <rect
        x="4"
        y="22"
        width="32"
        height="3"
        rx="0.5"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  ),
  SecantPile: (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <circle cx="8" cy="20" r="6" fill="currentColor" opacity="0.8" />
      <circle cx="17" cy="20" r="6" fill="currentColor" opacity="0.4" />
      <circle cx="26" cy="20" r="6" fill="currentColor" opacity="0.8" />
      <circle cx="35" cy="20" r="6" fill="currentColor" opacity="0.4" />
    </svg>
  ),
  SheetPile: (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <path
        d="M4 4 L10 4 L13 20 L10 36 L4 36 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M10 4 L16 4 L13 20 L16 36 L10 36 Z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M16 4 L22 4 L25 20 L22 36 L16 36 Z"
        fill="currentColor"
        opacity="0.8"
      />
      <path
        d="M22 4 L28 4 L25 20 L28 36 L22 36 Z"
        fill="currentColor"
        opacity="0.4"
      />
      <path
        d="M28 4 L34 4 L37 20 L34 36 L28 36 Z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  ),
  TangentPile: (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="20"
        r="5.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.6"
      />
      <circle
        cx="18"
        cy="20"
        r="5.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.3"
      />
      <circle
        cx="27"
        cy="20"
        r="5.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.6"
      />
      <circle
        cx="36"
        cy="20"
        r="5.5"
        stroke="currentColor"
        strokeWidth="2"
        fill="currentColor"
        opacity="0.3"
      />
    </svg>
  ),
  Micropile: (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <rect
        x="6"
        y="4"
        width="2"
        height="32"
        rx="1"
        fill="currentColor"
        opacity="0.8"
      />
      <rect
        x="10"
        y="4"
        width="2"
        height="32"
        rx="1"
        fill="currentColor"
        opacity="0.5"
      />
      <rect
        x="14"
        y="4"
        width="2"
        height="32"
        rx="1"
        fill="currentColor"
        opacity="0.8"
      />
      <rect
        x="18"
        y="4"
        width="2"
        height="32"
        rx="1"
        fill="currentColor"
        opacity="0.5"
      />
      <rect
        x="22"
        y="4"
        width="2"
        height="32"
        rx="1"
        fill="currentColor"
        opacity="0.8"
      />
      <rect
        x="26"
        y="4"
        width="2"
        height="32"
        rx="1"
        fill="currentColor"
        opacity="0.5"
      />
      <rect
        x="30"
        y="4"
        width="2"
        height="32"
        rx="1"
        fill="currentColor"
        opacity="0.8"
      />
      <rect
        x="34"
        y="4"
        width="2"
        height="32"
        rx="1"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  ),
  DiaphragmWall: (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className="w-full h-full"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="32"
        height="32"
        rx="1"
        fill="currentColor"
        opacity="0.2"
      />
      <rect
        x="4"
        y="4"
        width="32"
        height="4"
        rx="0.5"
        fill="currentColor"
        opacity="0.8"
      />
      <rect
        x="4"
        y="32"
        width="32"
        height="4"
        rx="0.5"
        fill="currentColor"
        opacity="0.8"
      />
      <line
        x1="4"
        y1="14"
        x2="36"
        y2="14"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="4"
        y1="20"
        x2="36"
        y2="20"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="4"
        y1="26"
        x2="36"
        y2="26"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  ),
};

interface SystemCardProps {
  system: ExcavationSystem;
  index: number;
}

export function SystemCard({ system, index }: SystemCardProps) {
  const colorClass =
    WALL_TYPE_COLOR[system.wallType] ??
    "text-primary border-primary/30 bg-primary/10";
  const label = WALL_TYPE_LABELS[system.wallType] ?? system.wallType;
  const icon = WALL_ICONS[system.wallType];

  return (
    <Link
      to="/systems/$systemId"
      params={{ systemId: system.id }}
      data-ocid={`system.card.${index + 1}`}
      className="group block"
    >
      <div
        className={cn(
          "h-full flex flex-col p-4 rounded-md border border-border/50 bg-card",
          "transition-all duration-200 hover:border-primary/40 hover:bg-card hover:shadow-tech",
        )}
      >
        {/* Icon + Badge row */}
        <div className="flex items-start justify-between mb-3">
          <div
            className={cn(
              "w-10 h-10 rounded-sm flex items-center justify-center",
              colorClass,
            )}
          >
            {icon}
          </div>
          <Badge
            variant="outline"
            className={cn(
              "text-[10px] font-mono uppercase tracking-wider",
              colorClass,
            )}
          >
            {label}
          </Badge>
        </div>

        {/* Name */}
        <h3 className="font-display font-semibold text-sm text-foreground mb-1.5 group-hover:text-primary transition-colors">
          {system.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3">
          {system.description}
        </p>

        {/* CTA */}
        <div className="mt-3 flex items-center gap-1 text-xs text-primary/70 group-hover:text-primary transition-colors">
          <span className="font-mono">View system</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
