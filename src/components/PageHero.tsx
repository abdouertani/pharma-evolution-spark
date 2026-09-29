import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

interface PageHeroProps {
  label: string;
  title: ReactNode;
  description: string;
  ctaLabel: string;
  ctaTo: string;
  image?: string;
  imageAlt?: string;
}

export function PageHero({
  label,
  title,
  description,
  ctaLabel,
  ctaTo,
  image,
  imageAlt = "",
}: PageHeroProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl bg-primary">
        <div className="grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-2">
          <div className="relative z-10">
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
            <Link
              to={ctaTo}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-heading text-sm font-semibold text-navy shadow-sm transition-transform hover:scale-[1.03]"
            >
              {ctaLabel} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {image && (
            <div className="relative hidden lg:block">
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                className="h-64 w-full rounded-2xl object-cover xl:h-72"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
