import React from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { services } from "../data/services";
import { buildWhatsAppLink } from "../data/company";

// Tarjetas de servicios. Datos provisionales editables en src/data/services.js.
export default function Services() {
  return (
    <section id="servicios" className="lp-section lp-services" aria-labelledby="services-title">
      <div className="lp-container">
        <SectionHeading
          kicker="Servicios"
          title="Soluciones eléctricas y de seguridad para cada necesidad"
          description="Cada proyecto es distinto. Cuéntanos qué necesitas y definimos juntos el alcance del trabajo."
          id="services-title"
        />
        <div className="lp-cards-grid">
          {services.map((service, index) => (
            <Reveal
              as="article"
              key={service.id}
              className="lp-service-card"
              delay={index * 60}
            >
              <span className="lp-service-icon" aria-hidden="true">
                <Icon name={service.icon} size={26} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a
                className="lp-service-link"
                href={buildWhatsAppLink(
                  `Hola, quisiera más información sobre el servicio: ${service.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Más información sobre ${service.title} por WhatsApp`}
              >
                Más información <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
