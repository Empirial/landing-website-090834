import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-xl font-bold tracking-tight">
              Meridian Consulting Group
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Strategic solutions for modern enterprises.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Navigation
            </h3>
            <nav className="mt-4">
              <ul className="space-y-3">
                <li>
                  <a
                    href={`#hero`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href={`#about`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href={`#services`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Services
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Services
            </h3>
            <nav className="mt-4">
              <ul className="space-y-3">
                <li>
                  <a
                    href={`#testimonials`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href={`#contact`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:hello@meridianconsulting.com`}
                  className="transition-colors hover:text-foreground"
                >
                  hello@meridianconsulting.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:+1 (555) 123-4567`}
                  className="transition-colors hover:text-foreground"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>500 Market Street, Suite 1200, San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-muted-foreground">
            © 2026 Meridian Consulting Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}