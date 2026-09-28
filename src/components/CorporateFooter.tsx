import Link from "next/link";
import { divisions } from "@/lib/solutions";

export default function CorporateFooter() {
  return <footer className="bg-[#071b30] py-14 text-white"><div className="container-wide grid gap-10 border-b border-white/20 pb-12 md:grid-cols-3">
    <div><Link href="/" className="text-xl font-black">SPARKCRAFT <span className="block text-xs tracking-[.22em] text-spark-accent">TECHNOLOGIES</span></Link><p className="mt-5 max-w-sm text-sm leading-7 text-white/70">Technology. Payments. Business Infrastructure. Delivering ICT solutions, fintech integration, and enterprise procurement services that help organizations operate and grow.</p></div>
    <div><h2 className="font-bold">Our Services</h2><ul className="mt-4 space-y-3 text-sm text-white/70">{divisions.map(item => <li key={item.id}><Link href={`/services#${item.id}`} className="hover:text-white">{item.name}</Link></li>)}</ul></div>
    <div><h2 className="font-bold">Contact</h2><ul className="mt-4 space-y-3 text-sm text-white/70"><li><a href="mailto:contact@sparkcraft.co.tz">contact@sparkcraft.co.tz</a></li><li><a href="tel:+255756948267">+255 756 948 267</a></li><li>Dar es Salaam, Tanzania</li></ul></div>
  </div><div className="container-wide mt-7 flex flex-wrap justify-between gap-4 text-sm text-white/60"><span>© 2026 SparkCraft Technologies. All rights reserved.</span><div className="flex gap-5"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></div></div></footer>;
}
