import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import About from "../components/About";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Process from "../components/Process";
import Projects from "../components/Projects";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

// Landing page comercial principal de A G. Electric Solutions Ecuador.
export default function Landing() {
  // Título dinámico para SEO básico en SPA.
  useEffect(() => {
    document.title =
      "A G. Electric Solutions Ecuador | Soluciones e instalaciones eléctricas en Quito";
  }, []);

  return (
    <div className="lp-page">
      <Navbar />
      <main id="contenido-principal">
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
