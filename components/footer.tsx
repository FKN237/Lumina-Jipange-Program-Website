import { Mail, Instagram, MapPin, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="gradient-dark py-16 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-blob" />
      <div
        className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-blob"
        style={{ animationDelay: "5s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src="https://i.ibb.co/F4D9SSnw/lumina-hub-logo-removebg-preview.png"
              alt="Lumina Hub Africa"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-secondary-foreground/70 leading-relaxed max-w-md">
              Building a bridge between education and opportunity. Transforming unemployed youth into employable
              professionals and job creators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-secondary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "#mission", label: "Our Mission" },
                { href: "#what-we-do", label: "What We Do" },
                { href: "#program", label: "The Program" },
                { href: "#outcomes", label: "Outcomes" },
                { href: "#team", label: "Our Team" },
                { href: "https://v0-lumina-delta.vercel.app/", label: "App Prototype", external: true },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-secondary-foreground mb-4">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:luminahubafrica@gmail.com"
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  luminahubafrica@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/luminahub_Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-secondary-foreground/70 hover:text-primary transition-colors group"
                >
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  @luminahub_Africa
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                ALCHE, Pamplemousses, Mauritius
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/50">
            © {currentYear} Lumina Hub Africa. All rights reserved.
          </p>
          <p className="text-sm text-secondary-foreground/50 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary animate-scale-pulse" /> for Africa's Youth
          </p>
        </div>
      </div>
    </footer>
  )
}
