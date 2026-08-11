import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "dark";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = ButtonBaseProps & {
  href: string;
  onClick?: never;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  "aria-expanded"?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-spark-accent text-spark-dark hover:bg-[#d4a83a] focus-visible:ring-spark-accent",
  secondary:
    "border border-current bg-transparent hover:bg-white/10 focus-visible:ring-white",
  ghost:
    "border border-spark-primary/20 text-spark-primary hover:border-spark-accent hover:text-spark-accent",
  dark:
    "bg-spark-dark text-white hover:bg-spark-primary focus-visible:ring-spark-dark",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

function isLinkProps(props: ButtonAsLink | ButtonAsButton): props is ButtonAsLink {
  return "href" in props && Boolean(props.href);
}

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, children } = props;
  const classes = cn(base, variants[variant], className);

  if (isLinkProps(props)) {
    const isExternal = props.href.startsWith("http") || props.href.startsWith("mailto:");
    if (isExternal || props.href.startsWith("#") || props.href.includes("#")) {
      return (
        <a href={props.href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  return (
    <button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      aria-expanded={buttonProps["aria-expanded"]}
      className={classes}
    >
      {children}
    </button>
  );
}
