import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, HeartHandshake, Microscope, Target } from "lucide-react";
import { PageHero } from "../components/PageHero";
import heroContact from "../assets/hero-contact.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — PharmaEvolution" },
      {
        name: "description",
        content:
          "PharmaEvolution is a Tunisian-based pharmaceutical marketing company led by pharmacists and physicians with over 25 years of experience across the MEA region.",
      },
      { property: "og:title", content: "About — PharmaEvolution" },
      {
        property: "og:description",
        content:
          "Tunisian-based pharmaceutical marketing company led by pharmacists and physicians with over 25 years of experience.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Microscope,
    title: "Scientific Expertise",
    text: "Every decision is grounded in evidence, clinical data, and deep pharmaceutical knowledge.",
  },
  {
    icon: HeartHandshake,
    title: "Ethical Promotion",
    text: "We engage healthcare professionals through transparent, evidence-based communication.",
  },
  {
    icon: Compass,
    title: "Regional Insight",
    text: "A deep understanding of Africa and Middle East market dynamics and regulations.",
  },
  {
    icon: Target,
    title: "Measurable Growth",
    text: "We focus on sustainable, measurable outcomes for every brand we represent.",
  },
];

function AboutPage() {
  return (
    <div className="pb-16">
      <PageHero
        label="About Us"
        title={
          <>
            Connecting Global Innovation
            <br />
            With Regional Healthcare Needs
          </>
        }
        description="PharmaEvolution is a Tunisian-based pharmaceutical marketing company led by pharmacists and physicians with over 25 years of experience."
        ctaLabel="Meet our partners"
        ctaTo="/partners"
        image={heroContact}
        imageAlt="The PharmaEvolution team"
      />

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <span className="section-label">Our Story</span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Led by pharmacists
              <br />
              and physicians
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              From market research to regulatory support, we deliver end-to-end
              solutions for the successful introduction of pharmaceutical and
              medical products across Africa and the Middle East.
            </p>
            <p>
              Our approach combines scientific expertise, market intelligence,
              and a deep understanding of regional dynamics to achieve
              measurable, sustainable growth for the brands we represent.
            </p>
            <p>
              We help medical brands grow, comply, and make a real impact
              across the MEA region — turning innovation into trusted,
              accessible healthcare solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <span className="section-label">Our Values</span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          What drives us
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <v.icon className="h-7 w-7 text-primary" strokeWidth={1.75} />
              <h3 className="mt-5 font-heading text-base font-bold text-navy">
                {v.title}
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {v.text}
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
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Partner with us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
