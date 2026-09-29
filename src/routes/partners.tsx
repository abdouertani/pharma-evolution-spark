import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Globe2, Microscope, Quote } from "lucide-react";
import { PageHero } from "../components/PageHero";
import productVariofill from "../assets/product-variofill.jpg";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners — PharmaEvolution" },
      {
        name: "description",
        content:
          "PharmaEvolution partners with Adoderm GmbH (Germany) and regulatory authorities across Africa — ANMAPS, ARP, AIRP, DPM, and AMMPS.",
      },
      { property: "og:title", content: "Partners — PharmaEvolution" },
      {
        property: "og:description",
        content:
          "Long-term partnerships with international laboratories and regulatory authorities that advance health across Africa and the Middle East.",
      },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
});

const adodermStats = [
  { icon: Globe2, title: "Global Excellence", text: "Distributed in over 50 countries with no recalls or safety issues" },
  { icon: Award, title: "German Quality", text: "100% designed and manufactured in Germany" },
  { icon: Microscope, title: "Scientific Excellence", text: "Supervised by PhD experts and experienced surgeons" },
];

const variofillStats = [
  { big: "33 mg/ml", label: "pure non-animal HA" },
  { big: "143 μm", label: "particle size" },
  { big: "36 months", label: "shelf life" },
  { big: "18+ months", label: "long-lasting results" },
];

const regulators = [
  { abbr: "ANMAPS", region: "Tunisia & Gabon" },
  { abbr: "ARP", region: "Senegal" },
  { abbr: "AIRP", region: "Côte d'Ivoire" },
  { abbr: "DPM", region: "Mali" },
  { abbr: "AMMPS", region: "Morocco" },
];

function PartnersPage() {
  return (
    <div className="pb-16">
      <PageHero
        label="Partners"
        title={
          <>
            Building Long-Term Partnerships
            <br />
            That Advance Health
          </>
        }
        description="Our strength lies in collaboration. PharmaEvolution partners with international laboratories, regulatory authorities, and scientific experts to ensure that every product we promote meets the highest standards of safety, quality, and innovation."
        ctaLabel="Become a partner"
        ctaTo="/contact"
      />

      {/* Adoderm */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <span className="section-label">Flagship Partner</span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Adoderm GmbH — Germany
        </h2>
        <p className="mt-2 font-heading text-sm font-semibold text-primary">
          Innovation in Medical Aesthetics
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Based near Cologne, Adoderm develops proprietary hyaluronic
              acid–based dermal fillers and skincare solutions for professional
              and home use. All products are{" "}
              <strong className="text-foreground">
                100% designed, manufactured, and certified in Germany
              </strong>
              , under the supervision of a scientific team that includes three
              PhD experts and a plastic surgeon with over 45 years of
              experience.
            </p>
            <div className="grid gap-4 pt-2">
              {adodermStats.map((s) => (
                <div key={s.title} className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-soft">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-navy">{s.title}</h3>
                    <p className="text-xs text-muted-foreground">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6">
            <div className="bg-pastel-pink rounded-2xl p-4">
              <img
                src={productVariofill}
                alt="Variofill dermal filler packaging"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-navy">
              Flagship Product: Variofill® for Gluteal Augmentation
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {variofillStats.map((v) => (
                <div key={v.label} className="rounded-xl bg-muted p-3 text-center">
                  <p className="font-heading text-sm font-bold text-navy">{v.big}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{v.label}</p>
                </div>
              ))}
            </div>
            <blockquote className="mt-6 rounded-2xl bg-teal-soft p-5">
              <Quote className="h-5 w-5 text-primary" />
              <p className="mt-2 text-sm italic leading-relaxed text-foreground">
                "From the start, we chose not to imitate, but to innovate — to
                design fillers that enhance individuality rather than
                conformity."
              </p>
              <footer className="mt-3 text-xs font-semibold text-muted-foreground">
                — Dr. Aydin Dogan, Founder & CEO, Adoderm GmbH
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Regulatory partners */}
      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <span className="section-label">Compliance Network</span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
          Regulatory & Institutional Partners
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          We collaborate closely with regulatory authorities across Africa to
          ensure full compliance with local regulations and streamline the
          market entry of innovative products.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {regulators.map((r) => (
            <div
              key={r.abbr}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-shadow hover:shadow-md"
            >
              <p className="font-heading text-lg font-extrabold tracking-tight text-primary">
                {r.abbr}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{r.region}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-14 sm:px-6">
        <div className="rounded-3xl bg-teal-soft p-8 text-center sm:p-12">
          <h2 className="mx-auto max-w-2xl text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Interested in partnering with us?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            We are always looking to build strategic alliances with
            international laboratories and scientific experts.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Become a partner <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
