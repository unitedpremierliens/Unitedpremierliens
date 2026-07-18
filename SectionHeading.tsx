import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal
      className={`mx-auto max-w-3xl ${align === "center" ? "text-center" : "text-left"} ${
        align === "left" ? "mx-0" : ""
      }`}
    >
      {eyebrow && <span className="eyebrow mb-5">{eyebrow}</span>}
      <h2
        className={`font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-white/60" : "text-ink-500"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
