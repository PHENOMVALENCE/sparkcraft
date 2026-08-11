import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark" | "cream" | "accent";
  divider?: "top" | "bottom" | "both" | "none";
  spacing?: "default" | "compact" | "hero";
};

const toneClasses = {
  light: "bg-white text-spark-text",
  dark: "bg-spark-dark text-white",
  cream: "bg-spark-bg text-spark-text",
  accent: "bg-spark-accent text-spark-dark",
};

const spacingClasses = {
  default: "py-20 md:py-28",
  compact: "py-16 md:py-20",
  hero: "pt-28 pb-16 md:pt-32 md:pb-20",
};

export default function Section({
  id,
  children,
  className,
  tone = "cream",
  divider = "none",
  spacing = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative",
        toneClasses[tone],
        spacingClasses[spacing],
        divider === "top" || divider === "both" ? "section-divider-top" : "",
        divider === "bottom" || divider === "both" ? "section-divider-bottom" : "",
        className,
      )}
    >
      {children}
    </section>
  );
}
