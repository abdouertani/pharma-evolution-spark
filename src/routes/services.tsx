import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardCheck,
  Cross,
  FileCheck,
  GraduationCap,
  Handshake,
  LineChart,
} from "lucide-react";
import { PageHero } from "../components/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — PharmaEvolution" },
      {
        name: "description",
        content:
          "Strategic support from product launch to market expansion: medical promotion, regulatory affairs, training, market research, tenders, and partnership development.",
      },
      { property: "og:title", content: "Our Services — PharmaEvolution" },
      {
        property: "og:description",
        content:
          "Strategic support from product launch to market expansion across the MEA pharmaceutical market.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Cross,
    title: "Medical Promotion",
    text: "Tailored strategies to engage healthcare professionals, pharmacists, and medical institutions through ethical, evidence-based promotion.",
  },
  {
    icon: ClipboardCheck,
    title: "Regulatory Affairs",
    text: "Comprehensive support for obtaining AMM (Marketing Authorization) and ensuring compliance with national pharmaceutical regulations.",
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    text: "Continuous education programs for medical representatives and pharmacists, promoting scientific accuracy and patient-centered communication.",
  },
  {
    icon: LineChart,
    title: "Market Research & Strategy",
    text: "In-depth analysis of therapeutic segments, competition, and market potential to guide strategic decisions.",
  },
  {
    icon: FileCheck,
    title: "Public Tenders & Procurement",
    text: "Expert assistance in preparing and submitting bids in line with national regulations and procurement standards.",
  },
  {
    icon: Handshake,
    title: "Partnership Development",
    text: "Building strategic alliances with international laboratories, regulatory authorities, and scientific experts.",
  },
];

const steps = [
  { n: 1, title: "Assessment", text: "Comprehensive market analysis and regulatory evaluation", color: "bg-pastel-blue" },
  { n: 2, title: "Strategy", text: "Development of tailored market entry and promotion plans", color: "bg-pastel-green" },
  { n: 3, title: "Implementation", text: "Execution of regulatory, marketing, and training initiatives", color: "bg-pastel-lavender" },
  { n: 4, title: "Optimization", text: "Continuous monitoring and refinement for maximum impact", color: "bg-pastel-red" },
];

function ServicesPage() {
  return (
    <div className="pb-16">
      <PageHero
        label="Our Services"
        title={
          <>
            Strategic Support from Product
            <br />
            Launch to Market Expansion
          </>
        }
        description="We offer specialized services designed to accelerate market entry and strengthen brand positioning. Our goal is to turn innovation into trusted, accessible healthcare solutions."
        ctaLabel="Request consultation"
        ctaTo="/contact"
      />

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <span className="section-label">What We Do</span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Our Services
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <s.icon className="h-7 w-7 text-primary" strokeWidth={1.75} />
              <h3 className="mt-5 font-heading text-base font-bold text-navy">
                {s.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <span className="section-label">Our Process</span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          From market research
          <br />
          to regulatory support
        </h2>
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

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="rounded-3xl bg-teal-soft p-8 text-center sm:p-12">
          <h2 className="mx-auto max-w-2xl text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Ready to Expand Your Market Presence?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Partner with PharmaEvolution to navigate the complexities of the MEA
            pharmaceutical market and achieve sustainable growth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Partner with us
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 font-heading text-sm font-semibold text-navy transition-transform hover:scale-[1.03]"
            >
              Request consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
