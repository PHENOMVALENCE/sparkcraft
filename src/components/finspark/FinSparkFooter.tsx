import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FINSPARK_CONTACT } from "@/lib/finspark-data";

const sectionLinks = [
  { label: "The problem", href: "#problem" },
  { label: "Operating model", href: "#model" },
  { label: "Products", href: "#products" },
  { label: "The Legibility Loop", href: "#loop" },
  { label: "Who we build for", href: "#audiences" },
  { label: "Partnership", href: "#partner" },
];

const portfolioLinks = [
  { label: "Sparkcraft Technologies", href: "/" },
  { label: "Sparkgreen", href: "/sparkgreen" },
];

export default function FinSparkFooter() {
  return (
    <footer className="border-t border-white/10 bg-fs-navy-3 py-14 text-white">
      <div className="container-wide">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="max-w-sm">
            <p className="text-xl font-black tracking-tightest text-white">FinSpark</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider2 text-fs-gold">
              A Sparkcraft Technologies company
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-400">
              Last-mile financial infrastructure — the credit, insurance, transaction and
              distribution layer that helps regulated partners serve farmers, traders and
              cooperatives.
            </p>
          </div>

          <nav aria-label="FinSpark sections">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fs-gold">
              On this page
            </h2>
            <ul className="mt-4 space-y-2.5">
              {sectionLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 underline-offset-4 transition-colors hover:text-fs-gold-bright hover:underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Sparkcraft Technologies portfolio">
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fs-gold">
              Portfolio
            </h2>
            <ul className="mt-4 space-y-2.5">
              {portfolioLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 underline-offset-4 transition-colors hover:text-fs-gold-bright hover:underline"
                  >
                    {item.label}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-fs-gold">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a
                  href={`mailto:${FINSPARK_CONTACT.email}`}
                  className="select-all underline-offset-4 transition-colors hover:text-fs-gold-bright hover:underline"
                >
                  {FINSPARK_CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={FINSPARK_CONTACT.phoneHref}
                  className="select-all underline-offset-4 transition-colors hover:text-fs-gold-bright hover:underline"
                >
                  {FINSPARK_CONTACT.phone}
                </a>
              </li>
              <li>{FINSPARK_CONTACT.location}</li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Sparkcraft Technologies. All rights reserved.
          </p>
          <p>
            FinSpark is a technology venture. It does not lend and does not underwrite
            insurance.
          </p>
        </div>
      </div>
    </footer>
  );
}
