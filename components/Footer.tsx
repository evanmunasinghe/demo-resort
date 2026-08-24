import Link from "next/link";
import NewsletterForm from "./NewsletterForm";
import { LogoMark, MapPinIcon, MailIcon, PhoneIcon, InstagramIcon, FacebookIcon, XIcon, YoutubeIcon } from "./icons";
import { navLinks, siteConfig, socials } from "@/lib/data";

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  x: XIcon,
  youtube: YoutubeIcon,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-pine-950 text-sand-200">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-pine-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="wrap relative grid gap-12 py-16 md:grid-cols-2 md:py-20 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <LogoMark className="h-11 w-11 text-gold-400" />
            <span className="leading-none">
              <span className="block font-display text-2xl font-medium tracking-wide text-sand-50">Solace Bay</span>
              <span className="mt-1 block text-[9px] uppercase tracking-[0.42em] text-sand-200/60">Resort &amp; Spa</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-sm font-light leading-relaxed text-sand-200/70">
            A cliffside hideaway on Bali’s southern coast — quiet villas, warm seas and days that ask nothing of you at all.
          </p>
          <div className="mt-7 flex items-center gap-3">
            {socials.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${s.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-sand-200/70 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:text-gold-300"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              );
            })}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-xs font-medium uppercase tracking-[0.32em] text-gold-300">Explore</h3>
          <ul className="mt-6 space-y-3.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="group inline-flex items-center gap-2 text-sm font-light text-sand-200/75 transition-colors hover:text-gold-300">
                  <span className="h-px w-3 bg-gold-400/50 transition-all duration-300 group-hover:w-5 group-hover:bg-gold-400" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.32em] text-gold-300">Find Us</h3>
          <ul className="mt-6 space-y-4 text-sm font-light text-sand-200/75">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-pine-300" />
              <span>{siteConfig.address}</span>
            </li>
            <li>
              <a href={`tel:${siteConfig.phoneHref}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                <PhoneIcon className="h-4.5 w-4.5 shrink-0 text-pine-300" />
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition-colors hover:text-gold-300">
                <MailIcon className="h-4.5 w-4.5 shrink-0 text-pine-300" />
                {siteConfig.email}
              </a>
            </li>
          </ul>
          <p className="mt-5 inline-flex rounded-full border border-white/10 px-4 py-1.5 text-[11px] tracking-wider text-sand-200/50">
            Front desk open 24 / 7
          </p>
        </div>

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.32em] text-gold-300">Tides &amp; Tales</h3>
          <p className="mt-6 text-sm font-light leading-relaxed text-sand-200/70">
            A short letter each season — quiet offers, island stories and first light from the cliff top.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="wrap flex flex-col items-center justify-between gap-3 py-6 text-xs font-light tracking-wide text-sand-200/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Crafted with care in Uluwatu
            <span className="text-gold-400" aria-hidden>·</span>
            Demo website
          </p>
        </div>
      </div>
    </footer>
  );
}
