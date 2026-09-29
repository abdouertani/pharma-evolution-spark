import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { PageHero } from "../components/PageHero";
import heroContact from "../assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PharmaEvolution" },
      {
        name: "description",
        content:
          "Get in touch with PharmaEvolution in Sousse, Tunisia — for partnership inquiries, distribution, training programs, and product information.",
      },
      { property: "og:title", content: "Contact — PharmaEvolution" },
      {
        property: "og:description",
        content:
          "Get in touch with PharmaEvolution in Sousse, Tunisia — for partnership inquiries, distribution, training programs, and product information.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please provide the full name").max(100),
  company: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Please provide a valid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  subject: z.string().trim().min(1, "Please select a subject"),
  message: z.string().trim().min(1, "Please write down a message").max(1000),
});

type FormErrors = Partial<Record<keyof z.infer<typeof contactSchema>, string>>;

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

function ContactPage() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = contactSchema.safeParse({
      name: fd.get("name"),
      company: fd.get("company") || undefined,
      email: fd.get("email"),
      phone: fd.get("phone") || undefined,
      subject: fd.get("subject"),
      message: fd.get("message"),
    });
    if (!result.success) {
      const errs: FormErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FormErrors;
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div className="pb-16">
      <PageHero
        label="Contact"
        title={
          <>
            Get in Touch With
            <br />
            PharmaEvolution
          </>
        }
        description="Whether you're a laboratory seeking a regional partner, or a distributor exploring new markets, our team is ready to collaborate."
        ctaLabel="Send a message"
        ctaTo="/contact"
        image={heroContact}
        imageAlt="The PharmaEvolution medical team"
      />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-12 sm:px-6 lg:grid-cols-[1fr_2fr]">
        {/* Info card */}
        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="font-heading text-xl font-bold text-navy">Get in touch</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Reach out to our team for inquiries, support, or partnership
            opportunities.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="font-heading text-sm font-bold text-primary">Address</h3>
              <p className="mt-1 text-sm text-foreground">
                64 Avenue Azzouz Boukhris, 4054
                <br />
                Sahloul 3 — Sousse, Tunisia
              </p>
              <a
                href="https://maps.google.com/?q=64+Avenue+Azzouz+Boukhris+Sahloul+Sousse+Tunisia"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1 font-heading text-xs font-semibold text-navy underline underline-offset-4"
              >
                Send a message <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold text-primary">Phone</h3>
              <p className="mt-1 text-sm text-foreground">
                +216 24 610 004 / +216 73 369 975
              </p>
            </div>
            <div>
              <h3 className="font-heading text-sm font-bold text-primary">Email</h3>
              <p className="mt-1 text-sm text-foreground">
                firas.b.khalifa@pharmaevolution.net
              </p>
            </div>
            <div className="rounded-2xl bg-teal-soft p-5">
              <h3 className="flex items-center gap-2 font-heading text-sm font-bold text-navy">
                <Clock className="h-4 w-4" /> Business Hours
              </h3>
              <p className="mt-2 text-sm text-foreground">
                Monday—Friday, 9:00—17:00 (GMT+1)
              </p>
            </div>
          </div>
        </div>

        {/* Form card */}
        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="font-heading text-xl font-bold text-navy">Send Us a Message</h2>

          {sent ? (
            <div className="mt-8 rounded-2xl bg-teal-soft p-6 text-center">
              <Send className="mx-auto h-8 w-8 text-primary" />
              <p className="mt-4 font-heading text-base font-bold text-navy">
                Thank you! Your message has been sent successfully.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                We'll get back to you soon.
              </p>
            </div>
          ) : (
            <form className="mt-6 space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-foreground">
                    Full name<span className="text-destructive">*</span>
                  </label>
                  <input id="name" name="name" placeholder="e.g Ahmed ben Mohamed" className={inputClass} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="mb-1.5 block text-xs font-semibold text-foreground">
                    Company
                  </label>
                  <input id="company" name="company" placeholder="Medical organization name" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-foreground">
                    Email Address<span className="text-destructive">*</span>
                  </label>
                  <input id="email" name="email" type="email" placeholder="e.g contact@mail.com" className={inputClass} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-foreground">
                    Phone Number
                  </label>
                  <input id="phone" name="phone" placeholder="e.g +216 54 544 554" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-semibold text-foreground">
                  Subject<span className="text-destructive">*</span>
                </label>
                <select id="subject" name="subject" className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option>Partnership Inquiry</option>
                  <option>Distribution Information</option>
                  <option>Training Programs</option>
                  <option>Product Information</option>
                  <option>Other</option>
                </select>
                {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-foreground">
                  Message<span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Please write down a message"
                  className={inputClass}
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Send <ArrowDown className="h-4 w-4 rotate-[-135deg]" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-border">
          <iframe
            title="PharmaEvolution office — Sousse, Tunisia"
            src="https://www.google.com/maps?q=Sahloul+Sousse+Tunisia&output=embed"
            className="h-80 w-full"
            loading="lazy"
          />
        </div>
        <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-primary" /> Visit our office — Sousse, Tunisia
        </p>
        <p className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
          <Phone className="h-3.5 w-3.5 text-primary" /> +216 24 610 004
          <Mail className="ml-3 h-3.5 w-3.5 text-primary" /> firas.b.khalifa@pharmaevolution.net
        </p>
      </section>
    </div>
  );
}
