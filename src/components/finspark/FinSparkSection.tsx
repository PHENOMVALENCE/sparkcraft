import { cn } from "@/lib/utils";

type Tone = "canvas" | "navy" | "white";

const toneClasses: Record<Tone, string> = {
  canvas: "bg-fs-canvas text-fs-ink",
  navy: "bg-fs-navy text-white",
  white: "bg-white text-fs-ink",
};

type FinSparkSectionProps = {
  id?: string;
  tone?: Tone;
  grid?: boolean;
  className?: string;
  children: React.ReactNode;
};

/** Shared shell for /finspark sections: tone, rhythm and optional ledger grid. */
export default function FinSparkSection({
  id,
  tone = "canvas",
  grid = false,
  className,
  children,
}: FinSparkSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative isolate overflow-hidden py-20 md:py-28",
        toneClasses[tone],
        className,
      )}
    >
      {grid && (
        <div
          className={cn(
            "absolute inset-0",
            tone === "navy" ? "fs-grid" : "fs-grid-light",
          )}
          aria-hidden="true"
        />
      )}
      <div className="container-wide relative z-10">{children}</div>
    </section>
  );
}

type FinSparkHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  lede?: string;
  dark?: boolean;
  className?: string;
};

/** Eyebrow + signal rule + heading, used at the top of each FinSpark section. */
export function FinSparkHeading({
  eyebrow,
  title,
  lede,
  dark = false,
  className,
}: FinSparkHeadingProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className={cn("fs-eyebrow", dark ? "text-fs-gold" : "text-fs-teal")}>{eyebrow}</p>
      <div
        className={cn("mt-4 h-px w-full max-w-xs", dark ? "fs-rule-dark" : "fs-rule")}
        aria-hidden="true"
      />
      <h2 className={cn("fs-heading mt-6", dark ? "text-white" : "text-fs-navy")}>
        {title}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-5 max-w-prose-wide text-base leading-8 md:text-lg",
            dark ? "text-slate-300" : "text-fs-slate",
          )}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
