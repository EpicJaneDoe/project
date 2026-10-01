import React, { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";
import Icon from "./Icon";
import { company } from "../data/company";

// Navbar de la landing: enlaces por ancla.
// En rutas internas (otras páginas) los enlaces vuelven a "/" con el hash.
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Proyectos" },
    { href: "#faq", label: "Preguntas frecuentes" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className={`lp-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="lp-nav-inner">
        <a className="lp-brand" href="#inicio" onClick={() => setMobileOpen(false)}>
          <BrandLogo className="brand-logo--nav" />
          <span className="lp-brand-text">
            <strong>A G. ELECTRIC</strong>
            <small>SOLUTIONS ECUADOR</small>
          </span>
        </a>

        <nav
          id="lp-navigation"
          className={`lp-nav-links ${mobileOpen ? "is-open" : ""}`}
          aria-label="Navegación de la página principal"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
              {link.label}
            </a>
          ))}

          {/* Botón "Contáctanos por WhatsApp" integrado en el menú fijo. */}
          <a
            className="lp-nav-cta lp-btn-whatsapp"
            href={company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
          >
            <Icon name="whatsapp" size={18} /> Contáctanos por WhatsApp
          </a>
        </nav>

        <div className="lp-nav-actions">
          <a
            className="lp-nav-phone"
            href={`tel:${company.phoneRaw}`}
            aria-label={`Llamar al ${company.phone}`}
          >
            <Icon name="phone" size={18} />
            <span>{company.phone}</span>
          </a>
          <button
            type="button"
            className={`lp-burger ${mobileOpen ? "is-open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="lp-navigation"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span /> <span /> <span />
          </button>
        </div>
      </div>
    </header>
  );
}
