import React from "react";
import BrandLogo from "./BrandLogo";
import Icon from "./Icon";
import { company } from "../data/company";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="lp-footer">
      <div className="lp-container lp-footer-grid">
        <div>
          <a className="lp-brand" href="#inicio">
            <BrandLogo className="brand-logo--nav" />
            <span className="lp-brand-text">
              <strong>A .G Electrics Solutions</strong>
              <small>Ecuador</small>
            </span>
          </a>
          <p>{company.slogan}</p>
          {/* TODO: Agregar redes sociales oficiales cuando la empresa las confirme. */}
        </div>

        <nav aria-label="Enlaces del pie de página">
          <h3>Navegación</h3>
          <ul>
            <li><a href="#nosotros">Nosotros</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#faq">Preguntas frecuentes</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <div>
          <h3>Contacto</h3>
          <ul className="lp-footer-contact">
            <li>{company.address}</li>
            <li>
              <a href={`tel:${company.phoneRaw}`}>{company.phone}</a>
            </li>
            <li>
              <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp directo
              </a>
            </li>
            <li>Lun–Vie 08:00–18:30 · Sáb 08:30–14:30</li>
          </ul>
        </div>
      </div>
      <div className="lp-footer-bottom">
        <p>© {year} {company.name}. {company.location}.</p>
      </div>
    </footer>
  );
}
