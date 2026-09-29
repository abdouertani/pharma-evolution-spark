import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowLeft,
  Cross,
  ClipboardCheck,
  GraduationCap,
  LineChart,
} from "lucide-react";
import { useState } from "react";
import heroHome from "../assets/hero-home.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PharmaEvolution — Innovating Health Across Africa and the Middle East" },
      {
        name: "description",
        content:
          "PharmaEvolution is a Tunisian-based pharmaceutical marketing company connecting global innovation with regional healthcare needs across the MEA region.",
      },
      { property: "og:title", content: "PharmaEvolution — Innovating Health Across Africa and the Middle East" },
      {
        property: "og:description",
        content:
          "Tunisian-based pharmaceutical marketing company connecting global innovation with regional healthcare needs.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Cross,
    title: "Medical & Pharmaceutical Promotion",
    text: "Tailored strategies to engage healthcare professionals, pharmacists, and medical institutions through ethical, evidence-based promotion.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Affairs & AMM Support",
    text: "Comprehensive support for obtaining AMM (Marketing Authorization) and ensuring compliance with national pharmaceutical regulations.",
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity Building",
    text: "Continuous education programs for medical representatives and pharmacists, promoting scientific accuracy and patient-centered communication.",
  },
  {
    icon: LineChart,
    title: "Market Access & Tenders",
    text: "In-depth analysis of therapeutic segments, competition, and market potential to guide strategic decisions.",
  },
];

const steps = [
  { n: 1, title: "Assessment", text: "Comprehensive market analysis and regulatory evaluation", color: "bg-pastel-blue" },
  { n: 2, title: "Strategy", text: "Development of tailored market entry and promotion plans", color: "bg-pastel-green" },
  { n: 3, title: "Implementation", text: "Execution of regulatory, marketing, and training initiatives", color: "bg-pastel-lavender" },
  { n: 4, title: "Optimization", text: "Continuous monitoring and refinement for maximum impact", color: "bg-pastel-red" },
];

function HomePage() {
  const [slide, setSlide] = useState(0);
  const slides = [heroHome];

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
        <div>
          <span className="section-label">Pharma Evolution</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl">
            Innovating Health Across{" "}
            <span className="text-highlight">Africa and the Middle East</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            PharmaEvolution is a Tunisian-based pharmaceutical marketing company
            connecting global innovation with regional healthcare needs.
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Led by pharmacists and physicians with over 25 years of experience,
            we help medical brands grow, comply, and make a real impact across
            the MEA region.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Explore our products
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-teal-soft px-6 py-3 font-heading text-sm font-semibold text-navy transition-transform hover:scale-[1.03]"
            >
              Contact sales
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img
              src={slides[slide]}
              alt="Body contouring aesthetic treatment"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
          </div>
          {/* Product overlay chip */}
          <div className="absolute bottom-14 left-4 flex max-w-xs items-center gap-3 rounded-2xl border border-border bg-background/95 p-3 shadow-lg backdrop-blur">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-pastel-pink font-heading text-xs font-bold text-navy">
              V
            </div>
            <div className="min-w-0">
              <p className="font-heading text-sm font-bold text-navy">Variofill®</p>
              <p className="truncate text-xs text-muted-foreground">
                High-Cohesivity HA Filler For Gluteal Contouring, Offering
                Exceptional Projection And Longevity
              </p>
            </div>
          </div>
          {/* Slider controls */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-background" />
            <span className="h-2 w-2 rounded-full bg-background/50" />
            <span className="h-2 w-2 rounded-full bg-background/50" />
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => setSlide((s) => (s - 1 + slides.length) % slides.length)}
              className="grid h-7 w-7 place-items-center rounded-full bg-background text-navy"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => setSlide((s) => (s + 1) % slides.length)}
              className="grid h-7 w-7 place-items-center rounded-full bg-navy text-primary-foreground"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Core services */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="min-w-0">
            <span className="section-label">Core Services</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              From market research
              <br />
              to regulatory support
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
              We deliver end-to-end solutions for the successful introduction of
              pharmaceutical and medical products. Our approach combines
              scientific expertise, market intelligence, and a deep
              understanding of regional dynamics to achieve measurable,
              sustainable growth.
            </p>
          </div>
          <Link
            to="/services"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-navy px-5 py-2.5 font-heading text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Explore our services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <s.icon className="h-7 w-7 text-primary" strokeWidth={1.75} />
              <h3 className="mt-5 font-heading text-base font-bold leading-snug text-navy">
                {s.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <span className="section-label">Our Process</span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          From market research
          <br />
          to regulatory support
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Our approach combines scientific expertise, market intelligence, and a
          deep understanding of regional dynamics to achieve measurable,
          sustainable growth.
        </p>

        <div className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden border-t-2 border-dotted border-border lg:block"
          />
          {steps.map((s) => (
            <div key={s.n} className="relative text-center lg:text-left">
              <div
                className={`relative z-10 mx-auto grid h-12 w-12 place-items-center rounded-2xl font-heading text-lg font-bold text-navy lg:mx-0 ${s.color}`}
              >
                {s.n}
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-navy">
                {s.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted partnerships */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="rounded-3xl bg-teal-soft p-8 text-center sm:p-12">
          <span className="section-label justify-center">Trusted Partnerships</span>
          <h2 className="mx-auto mt-4 max-w-2xl text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            We proudly collaborate with Adoderm GmbH (Germany) and national
            regulatory agencies across Africa and the Middle East
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Together, we advance innovation in medical aesthetics and healthcare
            marketing.
          </p>
          <Link
            to="/partners"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Meet our partners <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
