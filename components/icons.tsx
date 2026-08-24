import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

function base(props: P): P {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    width: 24,
    height: 24,
    "aria-hidden": true,
    ...props,
  };
}

export function LogoMark(props: P) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden {...props}>
      <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      <path d="M10 29c4.7-6 9.3-6 14 0s9.3 6 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13 35c3.7-4.6 7.3-4.6 11 0s7.3 4.6 11 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.65" />
      <circle cx="30" cy="16" r="4.5" fill="currentColor" />
    </svg>
  );
}

export function MenuIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M3 8h18M3 16h12" />
    </svg>
  );
}

export function CloseIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ArrowRightIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowLeftIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M20 12H4M10 6l-6 6 6 6" />
    </svg>
  );
}

export function ChevronDownIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function CheckIcon(props: P) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" opacity="0.35" />
      <path d="M8 12.5l2.6 2.5L16 9.5" />
    </svg>
  );
}

export function StarIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.45l-5.8 3.05 1.1-6.47L2.6 9.45l6.5-.95L12 2.6z" />
    </svg>
  );
}

export function ExpandIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
    </svg>
  );
}

export function WhatsappIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.05-1.32A10 10 0 1 0 12 2Zm0 18.2c-1.55 0-3-.43-4.24-1.17l-.3-.18-3 .78.8-2.93-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.72-6.02c-.26-.13-1.53-.75-1.76-.84-.24-.09-.41-.13-.59.13-.17.26-.68.84-.83 1.01-.15.17-.31.2-.57.06-.26-.13-1.1-.4-2.09-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.31.39-.46.13-.15.17-.26.26-.44.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.8-1.94-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.44.06-.67.31-.23.26-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.6.13.17 1.79 2.73 4.33 3.83.61.26 1.08.42 1.44.53.61.19 1.16.17 1.6.1.49-.07 1.53-.62 1.74-1.22.22-.6.22-1.12.15-1.23-.06-.11-.23-.17-.49-.3Z" />
    </svg>
  );
}

export function InstagramIcon(props: P) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M15.5 4H13a4 4 0 0 0-4 4v3H6.5v3.5H9V20h3.5v-5.5H15l.5-3.5h-3V8.5a1 1 0 0 1 1-1h2.5V4Z" />
    </svg>
  );
}

export function XIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 4.5l15 15M19.5 4.5l-15 15" />
    </svg>
  );
}

export function YoutubeIcon(props: P) {
  return (
    <svg {...base(props)}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.75v4.5L14.5 12l-4-2.25Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LotusIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M12 5c-1.8 2.4-1.8 5.6 0 8 1.8-2.4 1.8-5.6 0-8Z" />
      <path d="M12 13c-1.2-2.8-3.8-4.3-6.5-4 .4 3.2 2.6 5.6 6.5 4Z" />
      <path d="M12 13c1.2-2.8 3.8-4.3 6.5-4-.4 3.2-2.6 5.6-6.5 4Z" />
      <path d="M4.5 12.5c.8 4 3.8 6.5 7.5 6.5s6.7-2.5 7.5-6.5c-1.6 1.2-3.2 1.8-4.8 1.8" />
      <path d="M9.3 14.3c-1.6 0-3.2-.6-4.8-1.8" />
    </svg>
  );
}

export function WavesIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 8c2.4-2.4 4.7-2.4 7 0s4.6 2.4 7 0 4.6-2.4 7 0" transform="translate(-1 0)" />
      <path d="M2.5 13c2.4-2.4 4.7-2.4 7 0s4.6 2.4 7 0 4.6-2.4 7 0" transform="translate(-1 0)" />
      <path d="M2.5 18c2.4-2.4 4.7-2.4 7 0s4.6 2.4 7 0 4.6-2.4 7 0" transform="translate(-1 0)" />
    </svg>
  );
}

export function UtensilsIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M7 3v6M5 3v4a2 2 0 0 0 4 0V3" />
      <path d="M7 12v9" />
      <path d="M17.5 3c-2 2.6-2 5.4 0 8v10" />
      <path d="M17.5 11c2-2.6 2-5.4 0-8" opacity="0.5" />
    </svg>
  );
}

export function LeafIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M5 19C5 10.7 10.7 5 19.5 4.5 20 13.3 14.3 19 6 19" />
      <path d="M4.5 20c3.5-6 8-10.5 13.5-13.5" />
    </svg>
  );
}

export function CompassIcon(props: P) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2.2 5-5 2.2 2.2-5 5-2.2Z" />
    </svg>
  );
}

export function SparklesIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M12 4l1.6 4.4L18 10l-4.4 1.6L12 16l-1.6-4.4L6 10l4.4-1.6L12 4Z" />
      <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" opacity="0.6" />
      <path d="M5 3l.6 1.6L7.2 5.2 5.6 5.8 5 7.4 4.4 5.8 2.8 5.2l1.6-.6L5 3Z" opacity="0.6" />
    </svg>
  );
}

export function SunIcon(props: P) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5 5l1.4 1.4M17.6 17.6L19 19M19 5l-1.4 1.4M6.4 17.6L5 19" />
    </svg>
  );
}

export function HeartIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M12 20s-7.5-4.6-9.3-9C1.4 7.7 3.4 4.5 6.7 4.5c2 0 3.7 1 5.3 3 1.6-2 3.3-3 5.3-3 3.3 0 5.3 3.2 4 6.5-1.8 4.4-9.3 9-9.3 9Z" />
    </svg>
  );
}

export function MapPinIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function PhoneIcon(props: P) {
  return (
    <svg {...base(props)}>
      <path d="M5.5 3h3l1.7 4.3-2.1 1.6a12.8 12.8 0 0 0 6 6l1.6-2.1L20 14.5v3A2.5 2.5 0 0 1 17.3 20 15.4 15.4 0 0 1 4 6.7 2.5 2.5 0 0 1 5.5 3Z" />
    </svg>
  );
}

export function MailIcon(props: P) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  );
}

export function ClockIcon(props: P) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
