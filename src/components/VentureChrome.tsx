"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VentureChrome() {
  const path = usePathname();
  return path === "/finspark" || path === "/sparkgreen" ? <><Navbar /><Footer /></> : null;
}
