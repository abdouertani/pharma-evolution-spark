import { Link, useRouterState } from "@tanstack/react-router";
import { Activity, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Our Services" },
  { to: "/products", label: "Products" },
  { to: "/partners", label: "Partners" },
  { to: "/training", label: "Training" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <Activity className="h-6 w-6 text-primary" strokeWidth={2.5} />
          <span className="font-heading text-lg font-bold tracking-tight text-navy">
            PHARMA<span className="font-light text-primary">EVOLUTION</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-heading text-xs font-semibold uppercase tracking-wide transition-colors hover:text-primary ${
                pathname.startsWith(l.to) ? "text-primary" : "text-navy"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-1 rounded-full bg-teal-soft px-4 py-1.5 font-heading text-xs font-semibold text-navy sm:flex"
          >
            English <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            className="text-navy lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`font-heading text-sm font-semibold uppercase tracking-wide ${
                  pathname.startsWith(l.to) ? "text-primary" : "text-navy"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
