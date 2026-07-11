import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100069105758269",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/your-instagram-page",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@your-youtube-channel",
  },
];
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1 space-y-5">
          <div className="[&_a]:!text-white [&_.text-primary]:!text-white [&_.text-secondary]:!text-white/70">
            <Logo variant="light" />
          </div>

          <p className="text-sm text-white/70 leading-relaxed">
            A revolutionary way to educate — building bright futures through
            innovation, academic excellence, and character development.
          </p>
          {/* <div className="flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div> */}
          <div className="flex gap-3">
  {socialLinks.map(({ icon: Icon, href }, i) => (
    <a
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-10 w-10 grid place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"
      aria-label="Social link"
    >
      <Icon className="h-4 w-4" />
    </a>
  ))}
</div>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/75">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/admissions", "Admissions"],
              ["/academics", "Academics"],
              ["/facilities", "Facilities"],
              ["/activities", "Activities"],
              ["/gallery", "Gallery"],
              ["/news", "News & Events"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-3">
              {/* <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-secondary" /> */}
              <div className="h-10 w-10 shrink-0 rounded-full bg-white flex items-center justify-center">
  <MapPin className="h-5 w-5 text-primary" />
</div>
              <span>
                Plot # A-01,02, Block F, Zennat Villas, Abdullah Shah Ghazi Goth,
                Scheme-33, Karachi, Pakistan
              </span>
            </li>
            {/* <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-secondary" />
              <a href="tel:+923063121642" className="hover:text-white">0306 3121642</a>
            </li> */}
            <li className="flex items-center gap-3">
  <div className="h-10 w-10 shrink-0 rounded-full bg-white flex items-center justify-center">
    <Phone className="h-5 w-5 text-primary" />
  </div>

  <a href="tel:+923063121642" className="hover:text-white">
    0306 3121642
  </a>
</li>
            <li className="flex gap-3">
              {/* <Mail className="h-4 w-4 shrink-0 mt-0.5 text-secondary" /> */}
              <div className="h-10 w-10 shrink-0 rounded-full bg-white flex items-center justify-center">
  <Mail className="h-5 w-5 text-primary" />
</div>
              <a href="mailto:engr.alihassan106@gmail.com" className="hover:text-white break-all">
                engr.alihassan106@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-4">Newsletter</h4>
          <p className="text-sm text-white/70 mb-4">
            Get school news, events, and announcements delivered to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 rounded-full bg-white/10 border border-white/20 px-4 py-2.5 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-semibold px-5 py-2.5">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© 2026 The M.T School System. All Rights Reserved.</p>
          <p>Established 2021 · Karachi, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
