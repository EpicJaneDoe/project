import React from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { company } from "../data/company";

// Imagen ilustrativa genérica; TODO: reemplazar por fotos reales del local/equipo.
const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=70";

export default function About() {
  return (
    <section id="nosotros" className="lp-section lp-about" aria-labelledby="about-title">
      <div className="lp-container lp-about-grid">
        <Reveal className="lp-about-media">
          {/* IMAGEN PROVISIONAL: reemplazar por fotografía real de la empresa. */}
          <img
            src={ABOUT_IMAGE}
            alt="Herramientas y componentes eléctricos de trabajo (imagen ilustrativa)"
            loading="lazy"
          />
          <div className="lp-about-location">
            <Icon name="pin" size={20} />
            <div>
              <strong>{company.location}</strong>
              <span>{company.address}</span>
            </div>
          </div>
        </Reveal>

        <Reveal className="lp-about-copy" delay={80}>
          <SectionHeading
            kicker="Sobre nosotros"
            title="Una empresa electricista cercana a tus proyectos en Quito"
            id="about-title"
          />
          <p>
            <strong>{company.name}</strong> es una empresa ubicada en San
            Antonio de Pichincha, Quito, orientada a servicios relacionados con
            instalaciones y soluciones eléctricas para hogares, comercios e
            industrias.
          </p>
          <p>
            Trabajamos escuchando primero la necesidad de cada cliente:
            evaluamos el espacio, proponemos una solución clara y coordinamos
            la ejecución del trabajo. Nuestro objetivo es que cada instalación
            funcione de forma segura, ordenada y confiable.
          </p>

          {/*
            TODO: Cuando la empresa proporcione su información oficial,
            completar aquí: historia, misión, visión, valores,
            años de experiencia y fotografías reales.
          */}
          <ul className="lp-about-points">
            <li><Icon name="bolt" size={18} /> Atención directa y personalizada</li>
            <li><Icon name="shield" size={18} /> Enfoque en seguridad eléctrica</li>
            <li><Icon name="pin" size={18} /> Presencia local en Quito</li>
          </ul>

          <a className="lp-btn lp-btn-dark" href="#contacto">
            Conocer más y contactarnos
          </a>
        </Reveal>
      </div>
    </section>
  );
}
