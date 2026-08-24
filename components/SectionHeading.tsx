import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  tone = "dark",
}: SectionHeadingProps) {
  const centered = align === "center";
  const titleColor = tone === "dark" ? "text-pine-900" : "text-sand-50";
  const subColor = tone === "dark" ? "text-mist" : "text-sand-200/75";

  return (
    <Reveal className={centered ? "text-center" : "text-left"}>
      <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.42em] text-gold-600">
        {centered && <span className="hidden h-px w-10 bg-gold-400/60 sm:inline-block" aria-hidden />}
        {eyebrow}
        <span className={`h-px w-10 bg-gold-400/60 ${centered ? "sm:hidden" : ""}`} aria-hidden />
      </p>
      <h2 className={`mt-4 font-display text-4xl font-medium leading-[1.12] sm:text-5xl ${titleColor}`}>{title}</h2>
      {sub ? (
        <p className={`mt-5 max-w-2xl text-[15px] font-light leading-relaxed ${subColor} ${centered ? "mx-auto" : ""}`}>
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}
