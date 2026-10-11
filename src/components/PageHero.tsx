import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "./ui/button";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  description: string;
  ctaLabel: string;
  ctaTo: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
}

export function PageHero({
  label,
  title,
  description,
  ctaLabel,
  ctaTo,
  image,
  imageAlt = "",
  imageFit = "cover",
}: PageHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-primary">
        <div className="grid items-stretch md:grid-cols-[1.15fr_1fr]">
          <div className="relative z-10 self-center p-6 sm:p-10 lg:p-12">
            <span className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-primary-foreground">
              <span className="h-2 w-2 rounded-sm bg-primary-foreground" />
              {label}
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
              {description}
            </p>
            <Button asChild className="mt-8 h-auto rounded-full bg-background px-6 py-3 font-heading text-sm font-semibold text-navy shadow-sm hover:bg-background/90">
            <Link
              to={ctaTo}
            >
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
            </Button>
          </div>
          {image && (
            <div className={`relative min-h-56 overflow-hidden md:min-h-80 ${imageFit === "contain" ? "bg-pastel-pink" : ""}`}>
              <img
                src={image}
                alt={imageAlt}
                loading="eager"
                fetchPriority="high"
                className={`h-56 w-full md:absolute md:inset-0 md:h-full ${imageFit === "contain" ? "object-contain p-4" : "object-cover"}`}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
