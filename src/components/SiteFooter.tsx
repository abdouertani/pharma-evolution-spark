import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logoMark from "@/assets/logo-mark.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img
              src={logoMark.url}
              alt="PharmaEvolution logo"
              className="h-9 w-auto"
            />
            <span className="font-heading text-lg font-bold tracking-tight">
              PHARMA<span className="font-light text-primary">EVOLUTION</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Tunisian-based pharmaceutical marketing company connecting global
            innovation with regional healthcare needs across Africa and the
            Middle East.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Our Services</Link></li>
            <li><Link to="/products" className="hover:text-primary">Products</Link></li>
            <li><Link to="/partners" className="hover:text-primary">Partners</Link></li>
            <li><Link to="/training" className="hover:text-primary">Training</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              64 Avenue Azzouz Boukhris, 4054 Sahloul 3 — Sousse, Tunisia
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              +216 24 610 004 / +216 73 369 975
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              firas.b.khalifa@pharmaevolution.net
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-5 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} PharmaEvolution. All rights reserved.
      </div>
    </footer>
  );
}
