import React from "react";
import Icon from "./Icon";
import { company, buildWhatsAppLink } from "../data/company";

// Imagen ilustrativa GENÉRICA (Unsplash). No representa trabajos reales de la empresa.
// TODO: Reemplazar por fotografías reales de A G. Electric Solutions Ecuador
// (colocarlas en src/assets o public/img y actualizar esta ruta).
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=70";

export default function Hero() {
  return (
    <section id="inicio" className="lp-hero" aria-label="Presentación de A G. Electric Solutions Ecuador">
      <div className="lp-hero-inner">
        <div className="lp-hero-copy">
          <span className="lp-hero-badge">
            <Icon name="bolt" size={16} /> {company.category} · {company.location}
          </span>
          <h1>
            Soluciones eléctricas <em>para tus proyectos</em>
          </h1>
          <p>
            Servicios e instalaciones eléctricas con atención profesional en
            San Antonio de Pichincha y Quito.
          </p>
          <div className="lp-hero-actions">
            <a className="lp-btn lp-btn-primary" href="#contacto">
              Solicitar cotización
            </a>
            <a
              className="lp-btn lp-btn-whatsapp"
              href={buildWhatsAppLink(
                "Hola, me interesa información sobre los servicios eléctricos de A G. Electric Solutions Ecuador."
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
          {/* IMAGEN PROVISIONAL: reemplazar por fotos reales de la empresa. */}
          <img
            src={HERO_IMAGE}
            alt="Instalación eléctrica profesional: tablero y cableado ordenado (imagen ilustrativa)"
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
