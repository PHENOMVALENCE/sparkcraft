"use client";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import { divisions } from "@/lib/solutions";

export default function InquiryForm() {
  const service = useSearchParams().get("service");
  const initial = divisions.find(item => item.id === service)?.id ?? "";
  const [selected, setSelected] = useState<string>(initial);
  const [prepared, setPrepared] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const label = divisions.find(item => item.id === selected)?.name ?? "General inquiry";
    const body = `Name: ${data.get("name")}\nOrganization: ${data.get("organization")}\nBusiness email: ${data.get("email")}\nService: ${label}\n\nRequirements:\n${data.get("requirements")}`;
    const mailto = `mailto:contact@sparkcraft.co.tz?subject=${encodeURIComponent(`SparkCraft inquiry: ${label}`)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
    window.location.href = mailto;
  };
  return <form onSubmit={onSubmit} className="corporate-card space-y-5"><h2 className="text-2xl font-bold">Request a Quote</h2><p className="text-sm text-[#445363]">This form prepares an email in your email application. No information is stored by this website.</p><label className="block font-semibold">Full name<input className="corporate-field mt-2" name="name" autoComplete="name" required maxLength={120}/></label><label className="block font-semibold">Organization<input className="corporate-field mt-2" name="organization" autoComplete="organization" required maxLength={160}/></label><label className="block font-semibold">Business email<input className="corporate-field mt-2" name="email" type="email" autoComplete="email" required maxLength={254}/></label><label className="block font-semibold">Service of interest<select className="corporate-field mt-2" value={selected} onChange={event => setSelected(event.target.value)} required><option value="">Select a service</option>{divisions.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
    {selected === "ict" && <p className="text-sm text-[#445363]">Include product specifications, quantities, intended application, and delivery location.</p>}{selected === "fintech" && <p className="text-sm text-[#445363]">Include your platform, supported channels, expected volumes, and integration requirements. Do not include credentials.</p>}{selected === "supplies" && <p className="text-sm text-[#445363]">Include your bill of quantities, specifications, quantities, and delivery timeline.</p>}
    <label className="block font-semibold">Tell us about your requirements<textarea className="corporate-field mt-2 min-h-36" name="requirements" required maxLength={5000}/></label><button type="submit" className="corporate-button">Prepare Email Inquiry</button>{prepared && <p role="status" className="text-sm text-[#445363]">Your email application should open with the inquiry prepared. Please send the message there to complete your request.</p>}</form>;
}
