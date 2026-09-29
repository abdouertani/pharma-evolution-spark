import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  Droplets,
  FlaskConical,
  Leaf,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import heroProducts from "../assets/hero-products.jpg";
import productHyabell from "../assets/product-hyabell.jpg";
import productVarioderm from "../assets/product-varioderm.jpg";
import productVariofill from "../assets/product-variofill.jpg";
import productDermacare from "../assets/product-dermacare.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — PharmaEvolution" },
      {
        name: "description",
        content:
          "Innovative, safe, and clinically tested dermal fillers and skincare solutions: Hyabell®, Varioderm®, Variofill® and DermaCare — 100% made in Germany.",
      },
      { property: "og:title", content: "Products — PharmaEvolution" },
      {
        property: "og:description",
        content:
          "Innovative, safe, and clinically tested dermal fillers and skincare solutions, 100% made in Germany.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const fillers = [
  {
    tag: "Popular",
    name: "Hyabell®",
    image: productHyabell,
    bg: "bg-pastel-lavender",
    text: "Precision and comfort for natural results with advanced hyaluronic acid technology.",
    features: [
      "33 mg/ml HA concentration",
      "Available with lidocaine",
      "Natural-looking results",
      "36-month shelf life",
    ],
  },
  {
    tag: "Versatile",
    name: "Varioderm®",
    image: productVarioderm,
    bg: "bg-pastel-blue",
    text: "Balanced hydration and volume restoration for comprehensive facial aesthetics.",
    features: [
      "33 mg/ml HA concentration",
      "Multi-layer application",
      "Enhanced elasticity",
      "36-month shelf life",
    ],
  },
  {
    tag: "Premium",
    name: "Variofill®",
    image: productVariofill,
    bg: "bg-pastel-pink",
    text: "High-cohesivity HA filler for gluteal contouring, offering exceptional projection and longevity.",
    features: [
      "33 mg/ml HA concentration",
      "143 μm particle size",
      "18+ months longevity",
      "High cohesivity formula",
    ],
  },
];

const skincare = [
  {
    tag: "Essential",
    name: "DermaCare",
    image: productDermacare,
    bg: "bg-pastel-purple",
    text: "Daily use formulations supporting post-treatment recovery and long-term skin health maintenance.",
    features: [
      "Post-treatment support",
      "Daily maintenance",
      "Hydration boost",
      "Skin barrier protection",
    ],
  },
];

const highlights = [
  { icon: Award, big: "100%", label: "Made in Germany" },
  { icon: BadgeCheck, big: "CE", label: "Certified (0297 DQS-Med)" },
  { icon: Droplets, big: "33 mg/ml", label: "HA Concentration" },
  { icon: Leaf, big: "Non-Animal", label: "Hyaluronic Acid" },
  { icon: CalendarClock, big: "36", label: "Months Shelf Life" },
  { icon: FlaskConical, big: "IMCAS", label: "Clinically Validated 2024" },
];

function ProductCard({
  tag,
  name,
  image,
  bg,
  text,
  features,
}: (typeof fillers)[number]) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-md">
      <div className={`${bg} p-6`}>
        <img
          src={image}
          alt={`${name} packaging`}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-xl object-cover"
        />
      </div>
      <div className="p-6">
        <span className="rounded-full bg-teal-soft px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-wide text-navy">
          {tag}
        </span>
        <h3 className="mt-3 font-heading text-xl font-bold text-navy">{name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p>
        <ul className="mt-4 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-foreground">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProductsPage() {
  return (
    <div className="pb-16">
      <PageHero
        label="Products"
        title={
          <>
            Innovative, Safe,
            <br />
            and Clinically tested Solutions
          </>
        }
        description="Our product portfolio combines German innovation with regional expertise, ensuring safe, effective, and accessible treatments for patients and professionals."
        ctaLabel="Request product information"
        ctaTo="/contact"
        image={heroProducts}
        imageAlt="LED light therapy skincare treatment"
      />

      {/* Dermal fillers */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="min-w-0">
            <span className="section-label">Our Products</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Dermal fillers
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We deliver end-to-end solutions for the successful introduction of
              pharmaceutical and medical products, combining scientific expertise
              with a deep understanding of regional dynamics.
            </p>
          </div>
          <Link
            to="/contact"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-navy px-5 py-2.5 font-heading text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Request product information <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {fillers.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* Skincare */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <h2 className="min-w-0 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Skincare Solutions
          </h2>
          <Link
            to="/contact"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-navy px-5 py-2.5 font-heading text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Request product information <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {skincare.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>

      {/* Technical highlights */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <span className="section-label">Our Process</span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Technical Highlights
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-border bg-card p-5 text-center transition-shadow hover:shadow-md"
            >
              <h.icon className="mx-auto h-6 w-6 text-primary" strokeWidth={1.75} />
              <p className="mt-3 font-heading text-sm font-bold text-navy">{h.big}</p>
              <p className="mt-1 text-[11px] leading-snug text-muted-foreground">
                {h.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="rounded-3xl bg-teal-soft p-8 text-center sm:p-12">
          <h2 className="mx-auto max-w-2xl text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Ready to Enhance Your Practice?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Discover our complete product portfolio and learn how PharmaEvolution
            can support your practice with innovative, clinically-proven
            solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Contact for distribution
            </Link>
            <Link
              to="/training"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-heading text-sm font-semibold text-navy transition-transform hover:scale-[1.03]"
            >
              Explore training
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
