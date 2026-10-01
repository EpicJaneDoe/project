import React from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { company } from "../data/company";

// Mapa con la ubicación real publicada (San Antonio de Pichincha, Quito).
// Integración sencilla de Google Maps (embed sin API key) que identifica al
// negocio por su nombre + dirección reales (no solo coordenadas genéricas),
// de modo que el marcador y la ficha correspondan a "A G. Electric Solutions Ecuador".
// Si en el futuro se dispone del Place ID oficial (company.map.placeId), la
// integración pasa automáticamente a usarlo: es la referencia inequívoca del lugar.
const PLACE_REF = company.map.placeId
  ? `place_id:${company.map.placeId}`
  : `${company.map.placeQuery} (${company.map.lat},${company.map.lng})`;

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(PLACE_REF)}&ll=${company.map.lat},${company.map.lng}&z=16&hl=es&output=embed`;
// Enlace directo a Google Maps usando la URL oficial de búsqueda de lugares
// (Maps URLs for Places): con Place ID abre la ficha exacta del negocio; sin
// él, busca el nombre + dirección del negocio junto a sus coordenadas reales.
const MAP_LINK = company.map.placeId
  ? `https://www.google.com/maps/place/?q=place_id:${company.map.placeId}`
  : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.map.placeQuery)}&center=${company.map.lat},${company.map.lng}`;

export default function Contact() {
  return (
    <section id="contacto" className="lp-section lp-contact" aria-labelledby="contact-title">
      <div className="lp-container">
        <SectionHeading
          kicker="Contacto"
          title="Hablemos de tu proyecto eléctrico"
          description="Escríbenos por WhatsApp o llámanos. Respondemos personalmente en horario de atención."
          id="contact-title"
        />

        <div className="lp-contact-grid">
          {/* Información de contacto (ocupa el espacio del antiguo formulario). */}
          <Reveal className="lp-contact-info">
            <div className="lp-contact-card">
              <h3>{company.name}</h3>

              <div className="lp-info-row">
                <Icon name="pin" size={20} />
                <div>
                  <strong>Dirección</strong>
                  <p>{company.address}</p>
                </div>
              </div>

              <div className="lp-info-row">
                <Icon name="phone" size={20} />
                <div>
                  <strong>Teléfono</strong>
                  <p>
                    <a href={`tel:${company.phoneRaw}`}>{company.phone}</a>
                  </p>
                </div>
              </div>

              <div className="lp-info-row">
                <Icon name="whatsapp" size={20} />
                <div>
                  <strong>WhatsApp</strong>
                  <p>
                    <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer">
                      {company.phone}
                    </a>
                  </p>
                </div>
              </div>

              <div className="lp-info-row">
                <Icon name="clock" size={20} />
                <div>
                  <strong>Horario de atención</strong>
                  <ul className="lp-schedule">
                    {company.schedule.map((row) => (
                      <li key={row.days}>
                        <span>{row.days}</span>
                        <span>{row.hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* TODO: Agregar correo oficial y redes cuando la empresa los confirme. */}
            </div>
          </Reveal>

          {/* Mapa existente: se conserva tal cual (misma integración y coordenadas). */}
          <Reveal delay={100} className="lp-contact-info">
            <div className="lp-map-wrapper">
              <iframe
                title={`Mapa de ubicación de ${company.name} en San Antonio de Pichincha, Quito`}
                src={MAP_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a className="lp-map-link" href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                Ver mapa ampliado <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
