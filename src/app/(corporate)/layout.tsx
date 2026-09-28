import CorporateNav from "@/components/CorporateNav";
import ScrollReveal from "@/components/ScrollReveal";
import CorporateFooter from "@/components/CorporateFooter";

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return <><CorporateNav /><ScrollReveal />{children}<CorporateFooter /></>;
}
