import { Quote } from "lucide-react";
import Reveal from "./Reveal";

export default function TestimonialCard({
  quote,
  name,
  role,
  delay = 0,
}: {
  quote: string;
  name: string;
  role: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="surface-card flex h-full flex-col p-8">
      <Quote className="h-8 w-8 text-teal-500/40" />
      <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink-700">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-6 border-t border-ink-100 pt-5">
        <p className="font-display text-sm font-semibold text-navy-900">{name}</p>
        <p className="text-sm text-ink-500">{role}</p>
      </div>
    </Reveal>
  );
}
