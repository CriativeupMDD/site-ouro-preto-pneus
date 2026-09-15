import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { Products } from "@/components/sections/Products";
import { About } from "@/components/sections/About";
import { WhatsappCta } from "@/components/sections/WhatsappCta";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Products />
      <About />
      <WhatsappCta />
      <Contact />
    </>
  );
}
