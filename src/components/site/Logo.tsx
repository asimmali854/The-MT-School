import logo from "@/assets/mt-logo.asset.json";
import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative shrink-0">
        <div className="absolute inset-0 rounded-full bg-white shadow-soft ring-1 ring-primary/10" />
        <img
          src="/Imges/76.jpeg"
          alt="The M.T School System"
          width={56}
          height={56}
          className="relative h-11 w-11 sm:h-14 sm:w-14 rounded-full object-contain p-0.5 transition-transform group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 leading-tight">
        <div
          className={`font-display text-[15px] sm:text-base font-bold tracking-tight truncate ${
            variant === "light" ? "text-white" : "text-primary"
          }`}
        >
          The M.T School System
        </div>
        <div
          className={`text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold ${
            variant === "light" ? "text-white/70" : "text-secondary"
          }`}
        >
          Karachi · Est. 2021
        </div>
      </div>
    </Link>
  );
}
