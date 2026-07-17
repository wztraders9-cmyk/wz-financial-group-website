import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChoose />
      <Process />
      <CTA />
    </main>
  );
}