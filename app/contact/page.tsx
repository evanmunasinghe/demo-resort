import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { img, siteConfig, socials, waLink } from "@/lib/data";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsappIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact & Reservations",
  description:
    "Reserve your stay at Solace Bay Resort & Spa — send an inquiry via WhatsApp or email, find us on the map in Uluwatu, Bali, and read answers to common questions.",
  alternates: { canonical: "/contact" },
};

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  x: XIcon,
  youtube: YoutubeIcon,
};

const contactRows = [
  {
    icon: MapPinIcon,
    label: "Visit",
    content: siteConfig.address,
    href: "https://maps.google.com/?q=Suluban+Beach,+Uluwatu,+Bali",
  },
  {
    icon: PhoneIcon,
    label: "Call",
    content: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phoneHref}`,
  },
  {
    icon: MailIcon,
    label: "Email",
    content: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: ClockIcon,
    label: "Front Desk",
    content: "Open around the clock · Check-in 14:00 · Check-out 12:00",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Begin Your Escape"
        sub="A message is all it takes — tell us your dates and we will hold the quiet for you."
        image={img.portraits[2]}
      />

      <section className="py-20 md:py-28">
        <div className="wrap grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <Suspense
              fallback={
                <div className="flex min-h-[560px] items-center justify-center rounded-[1.75rem] bg-white ring-1 ring-pine-900/8">
                  <span className="h-8 w-8 animate-spin rounded-full border-2 border-pine-300 border-t-pine-700" aria-label="Loading form" />
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6 rounded-[1.75rem] bg-pine-900 p-7 text-sand-100 shadow-xl sm:p-9">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold-300">Reach Us</p>
                <h2 className="mt-3 font-display text-3xl font-medium text-sand-50">However You Prefer</h2>
              </div>

              <a
                href={waLink("Hello Solace Bay!")}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl bg-[#25d366]/12 px-5 py-4 ring-1 ring-[#25d366]/30 transition-all duration-300 hover:bg-[#25d366]/20"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25d366] text-white">
                  <WhatsappIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.28em] text-sand-200/60">Fastest reply</span>
                  <span className="mt-0.5 block text-sm font-normal">{siteConfig.whatsappDisplay}</span>
                </span>
              </a>

              <ul className="space-y-5">
                {contactRows.map((row) => (
                  <li key={row.label} className="flex gap-4">
                    <row.icon className="mt-1 h-5 w-5 shrink-0 text-gold-400" />
                    <div className="text-sm">
                      <p className="text-[10px] uppercase tracking-[0.28em] text-sand-200/55">{row.label}</p>
                      {row.href ? (
                        <a
                          href={row.href}
                          target={row.href.startsWith("http") ? "_blank" : undefined}
                          rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="mt-0.5 block font-light leading-relaxed transition-colors hover:text-gold-300"
                        >
                          {row.content}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-light leading-relaxed">{row.content}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-auto border-t border-white/10 pt-6">
                <p className="text-[10px] uppercase tracking-[0.28em] text-sand-200/55">Follow the Quiet</p>
                <div className="mt-4 flex items-center gap-3">
                  {socials.map((s) => {
                    const Icon = socialIcons[s.icon];
                    return (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/12 text-sand-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:text-gold-300"
                      >
                        <Icon className="h-4.5 w-4.5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="wrap">
          <Reveal>
            <div className="relative h-[380px] overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-pine-900/10 md:h-[440px]">
              <iframe
                src={siteConfig.mapEmbed}
                title="Map showing Solace Bay Resort & Spa, Uluwatu, Bali"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 grayscale-[30%] transition-all duration-700 hover:grayscale-0"
              />
              <div className="pointer-events-none absolute left-5 top-5 rounded-full bg-white/95 px-5 py-2.5 text-xs font-medium tracking-wide text-pine-900 shadow-lg backdrop-blur">
                Solace Bay · Suluban Beach, Uluwatu
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand-100 py-20 md:py-28">
        <div className="wrap max-w-4xl">
          <SectionHeading
            eyebrow="Good to Know"
            title="Questions, Answered Softly"
            sub="Everything guests usually ask before their first sunrise with us."
          />
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
