import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = { eyebrow: string; title: string; description: string; action?: { label: string; href: string } };

export default function CorporatePageIntro({ eyebrow, title, description, action }: Props) {
  return <section className="corporate-page-hero"><div className="container-wide grid items-end gap-6 sm:gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
    <div><p className="corporate-kicker corporate-kicker-light">{eyebrow}</p><h1 className="corporate-title mt-5">{title}</h1></div>
    <div className="border-t-2 border-[var(--sc-gold)] pt-5 sm:border-l-2 sm:border-t-0 sm:pl-6 sm:pt-0"><p className="text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{description}</p>{action && <Link href={action.href} className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--sc-gold-light)] hover:gap-3">{action.label}<ArrowUpRight size={18}/></Link>}</div>
  </div></section>;
}
