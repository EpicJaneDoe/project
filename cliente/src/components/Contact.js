import React from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { company } from "../data/company";

// Mapa con la ubicación del negocio identificado por su Place ID oficial de
// Google Maps (company.map.placeId): es la referencia principal e inequívoca
// del establecimiento, de modo que el marcador y la ficha correspondan a
// "A G. Electric Solutions Ecuador" (no a una dirección genérica).
// La integración sigue siendo el embed sencillo de Google Maps sin API key.
// Si algún día el Place ID no estuviera definido, se usa como respaldo la
// dirección/coordenadas reales ya publicadas en company.map.
const PLACE_REF = company.map.placeId
  ? `place_id:${company.map.placeId}`
  : `${company.map.placeQuery} (${company.map.lat},${company.map.lng})`;

const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(company.name)}+@${company.map.lat},${company.map.lng},16z&output=embed`;
// Enlace directo a Google Maps usando la URL oficial de fichas de lugares
// (Maps URLs for Places): abre directamente la ficha/ubicación asociada al
// Place ID del negocio en una pestaña nueva.
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
