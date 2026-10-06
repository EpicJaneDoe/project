import React from "react";
import Icon from "./Icon";
import { company, buildWhatsAppLink } from "../data/company";
import heroImage from "../assets/images/portada.jpeg";

// Imagen principal: fotografía real de la empresa (project/imagenes/Portada.jpeg).
const HERO_IMAGE = heroImage;

export default function Hero() {
  return (
    <section id="inicio" className="lp-hero" aria-label="Presentación de A G. Electric Solutions Ecuador">
      <div className="lp-hero-inner">
        <div className="lp-hero-copy">
          <span className="lp-hero-badge">
            <Icon name="bolt" size={16} /> {company.category} · {company.location}
          </span>
          <h1>
            Instalaciones eléctricas y <em>seguridad electrónica</em>
          </h1>
          <p>
            Servicios e instalaciones eléctricas, seguridad electrónica,
            sistemas de video vigilancia y cercos eléctricos con atención
            profesional en San Antonio de Pichincha y Quito.
          </p>
          <div className="lp-hero-actions">
            <a
              className="lp-btn lp-btn-whatsapp"
              href={buildWhatsAppLink(
                "Hola, me interesa información sobre los servicios eléctricos y de seguridad electrónica de A G. Electric Solutions Ecuador."
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={20} /> Contactar por WhatsApp
            </a>
          </div>
          <a className="lp-hero-phone" href={`tel:${company.phoneRaw}`}>
            ¿Prefieres hablar? Llama al <strong>{company.phone}</strong>
          </a>
        </div>

        <div className="lp-hero-media">
          {/* Fotografía real de la empresa. */}
          <img
            src={HERO_IMAGE}
            alt="Instalaciones eléctricas y sistemas de seguridad electrónica de A .G Electrics Solutions Ecuador"
            loading="eager"
          />
          <div className="lp-hero-card" aria-hidden="true">
            <Icon name="shield" size={22} />
            <div>
              <strong>Trabajo técnico</strong>
              <span>Seguridad y orden en cada instalación</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
