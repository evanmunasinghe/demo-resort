import { waLink } from "@/lib/data";
import { WhatsappIcon } from "./icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hello Solace Bay! I have a question about my stay.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 md:bottom-7 md:right-7"
    >
      <span className="absolute inset-0 animate-ring rounded-full bg-[#25d366]" aria-hidden />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl shadow-pine-950/30 transition-transform duration-300 group-hover:scale-110">
        <WhatsappIcon className="h-7 w-7" />
      </span>
      <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-full bg-pine-950 px-4 py-2 text-xs tracking-wide text-sand-100 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        Questions? Chat with us
      </span>
    </a>
  );
}
