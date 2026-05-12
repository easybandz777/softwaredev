import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { About } from "@/components/About";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Custom Software Development & Cybersecurity | QUANT LAB USA",
  description:
    "Custom software & penetration testing for businesses across Atlanta, Macon, and 12 more US cities. Founder-led engagements, no offshore handoff.",
  alternates: {
    canonical: "https://quantlabusa.dev/",
  },
  openGraph: {
    title: "Custom Software Development & Cybersecurity | QUANT LAB USA",
    description:
      "Custom software & penetration testing for businesses across Atlanta, Macon, and 12 more US cities. Founder-led engagements, no offshore handoff.",
    url: "https://quantlabusa.dev/",
    siteName: "QUANT LAB USA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development & Cybersecurity | QUANT LAB USA",
    description:
      "Custom software & penetration testing for businesses across Atlanta, Macon, and 12 more US cities. Founder-led engagements, no offshore handoff.",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-quant-bg text-quant-text">
      <Hero />
      <Services />
      <Industries />
      <About />
      <Founder />
      <Contact />
    </main>
  );
}
