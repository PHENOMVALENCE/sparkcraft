import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = { eyebrow: string; title: string; description: string; action?: { label: string; href: string } };

export default function CorporatePageIntro({ eyebrow, title, description, action }: Props) {
  return <section className="corporate-page-hero"><div className="container-wide grid items-end gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
    <div><p className="corporate-kicker corporate-kicker-light">{eyebrow}</p><h1 className="corporate-title mt-5">{title}</h1></div>
    <div className="border-l-2 border-[var(--sc-gold)] pl-6"><p className="text-lg leading-8 text-white/80">{description}</p>{action && <Link href={action.href} className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--sc-gold-light)] hover:gap-3">{action.label}<ArrowUpRight size={18}/></Link>}</div>
  </div></section>;
}
