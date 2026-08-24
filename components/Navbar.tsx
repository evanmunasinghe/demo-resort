"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, siteConfig, socials, waLink } from "@/lib/data";
import { CloseIcon, InstagramIcon, FacebookIcon, XIcon, YoutubeIcon, LogoMark, MenuIcon, WhatsappIcon } from "./icons";

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  x: XIcon,
  youtube: YoutubeIcon,
};

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || open
            ? "bg-pine-950/90 shadow-lg shadow-pine-950/20 backdrop-blur-md"
            : "bg-gradient-to-b from-pine-950/60 to-transparent"
        }`}
      >
        <div className={`wrap flex items-center justify-between transition-all duration-500 ${scrolled ? "py-2.5" : "py-4"}`}>
          <Link href="/" className="group flex items-center gap-3" aria-label={`${siteConfig.fullName} — home`}>
            <LogoMark className={`text-gold-400 transition-all duration-500 ${scrolled ? "h-9 w-9" : "h-11 w-11"} group-hover:rotate-12`} />
            <span className="leading-none">
              <span className="block font-display text-[1.65rem] font-medium tracking-wide text-sand-50">Solace Bay</span>
              <span className="mt-1 block text-[9px] font-light uppercase tracking-[0.42em] text-sand-200/70">Resort &amp; Spa</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-[13px] font-normal uppercase tracking-[0.2em] transition-colors duration-300 ${
                  isActive(link.href) ? "text-gold-300" : "text-sand-100/85 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-gold-400 transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <a
              href={waLink("Hello Solace Bay! I would like to enquire about booking a stay.")}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-full border border-gold-400/60 px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-gold-300 transition-all duration-300 hover:bg-gold-400 hover:text-pine-950"
            >
              <WhatsappIcon className="h-4 w-4" />
              Book Now
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-sand-50 transition-colors hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-pine-950/[0.985] backdrop-blur-xl transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-1 flex-col justify-center px-8">
          <nav aria-label="Mobile">
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  className={`border-b border-white/5 transition-all duration-500 ${
                    open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline gap-4 py-4 font-display text-4xl transition-colors duration-300 ${
                      isActive(link.href) ? "italic text-gold-300" : "text-sand-50 hover:text-gold-200"
                    }`}
                  >
                    <span className="font-sans text-xs tracking-widest text-pine-400">0{i + 1}</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div
            className={`mt-10 transition-all delay-500 duration-500 ${open ? "opacity-100" : "opacity-0"}`}
          >
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-sand-200/50">Reserve your escape</p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={waLink("Hello Solace Bay! I would like to enquire about booking a stay.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-xs uppercase tracking-[0.22em] text-pine-950"
              >
                <WhatsappIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a href={`tel:${siteConfig.phoneHref}`} className="text-sm text-sand-100/80 underline-offset-4 hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5">
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="text-sand-200/60 transition-colors hover:text-gold-300">
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
