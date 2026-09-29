import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, GraduationCap, Quote, Users, Video } from "lucide-react";
import { PageHero } from "../components/PageHero";
import heroTraining from "../assets/hero-training.jpg";

export const Route = createFileRoute("/training")({
  head: () => ({
    meta: [
      { title: "Training — PharmaEvolution" },
      {
        name: "description",
        content:
          "Continuous education for safer, smarter aesthetic practice: IMCAS Training Village, FACE Anatomy Master Course, regional symposiums, and webinars.",
      },
      { property: "og:title", content: "Training — PharmaEvolution" },
      {
        property: "og:description",
        content:
          "Continuous education for safer, smarter aesthetic practice with Adoderm's global faculty.",
      },
      { property: "og:url", content: "/training" },
    ],
    links: [{ rel: "canonical", href: "/training" }],
  }),
  component: TrainingPage,
});

const highlights = [
  {
    icon: Globe2,
    title: "IMCAS Training Village",
    text: "Paris, Bangkok, Dubai",
  },
  {
    icon: GraduationCap,
    title: "FACE Anatomy Master Course",
    text: "Barcelona",
  },
  {
    icon: Users,
    title: "Regional Symposiums & Private Training",
    text: "Regional symposiums and 1:1 private training",
  },
  {
    icon: Video,
    title: "Webinars & Continuous Education",
    text: "Webinars and continuous education sessions",
  },
];

function TrainingPage() {
  return (
    <div className="pb-16">
      <PageHero
        label="Training"
        title={
          <>
            Continuous Education for Safer,
            <br />
            Smarter Aesthetic Practice
          </>
        }
        description="PharmaEvolution supports scientific exchange and practitioner training through our partnership with Adoderm's global faculty. Our programs combine anatomy-based instruction with hands-on learning to ensure safe and effective HA filler use."
        ctaLabel="Join our next training event"
        ctaTo="/contact"
        image={heroTraining}
        imageAlt="Aesthetic medicine training workshop"
      />

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <span className="section-label">Training & Events</span>
        <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Advancing skills and knowledge in aesthetic medicine
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          We provide comprehensive training programs and educational events to
          advance skills and knowledge in aesthetic medicine.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <h.icon className="h-7 w-7 text-primary" strokeWidth={1.75} />
              <h3 className="mt-5 font-heading text-base font-bold leading-snug text-navy">
                {h.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {h.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <blockquote className="rounded-3xl bg-teal-soft p-8 text-center sm:p-12">
          <Quote className="mx-auto h-8 w-8 text-primary" />
          <p className="mx-auto mt-4 max-w-2xl text-xl font-medium italic leading-relaxed text-navy sm:text-2xl">
            "At every congress, we believe in learning together — not just
            training, but sharing knowledge and friendship."
          </p>
          <footer className="mt-4 font-heading text-sm font-semibold text-muted-foreground">
            — PharmaEvolution Training Philosophy
          </footer>
        </blockquote>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="rounded-3xl border border-border bg-card p-8 text-center sm:p-12">
          <h2 className="mx-auto max-w-2xl text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Ready to Advance Your Skills?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Join our next training event and become part of a global community
            dedicated to excellence in aesthetic medicine.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Join our next training event <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
