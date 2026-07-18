import { LucideIcon, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function SpecialtyCard({
  icon: Icon,
  title,
  description,
  referredWhen,
  delay = 0,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  referredWhen: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="surface-card group flex h-full flex-col p-7">
      <div className="flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </span>
        <ArrowUpRight className="h-5 w-5 text-ink-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-500" />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">{title}</h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{description}</p>
      <div className="mt-5 rounded-xl bg-ink-100 px-4 py-3">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-500">
          Typically referred when
        </p>
        <p className="mt-1 text-sm text-ink-700">{referredWhen}</p>
      </div>
    </Reveal>
  );
}
