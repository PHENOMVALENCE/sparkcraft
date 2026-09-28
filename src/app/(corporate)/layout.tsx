import CorporateNav from "@/components/CorporateNav";
import CorporateFooter from "@/components/CorporateFooter";

export default function CorporateLayout({ children }: { children: React.ReactNode }) {
  return <><CorporateNav />{children}<CorporateFooter /></>;
}
