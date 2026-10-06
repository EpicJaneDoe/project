import React from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { company } from "../data/company";
import aboutImage from "../assets/images/sobre-nosotros.jpeg";

// Fotografía real de la empresa (project/imagenes/Sobre Nosotros.jpeg).
const ABOUT_IMAGE = aboutImage;

export default function About() {
  return (
    <section id="nosotros" className="lp-section lp-about" aria-labelledby="about-title">
      <div className="lp-container lp-about-grid">
        <Reveal className="lp-about-media">
          <img
            src={ABOUT_IMAGE}
            alt="Equipo y trabajos de A .G Electrics Solutions Ecuador"
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
            title="Instalaciones eléctricas y seguridad electrónica en Quito"
            id="about-title"
          />
          <p>
            <strong>{company.name}</strong> es una empresa ubicada en San
            Antonio de Pichincha, Quito, orientada a servicios relacionados con
            instalaciones y soluciones eléctricas, además de seguridad
            electrónica, sistemas de video vigilancia, cercos eléctricos y
            sistemas de seguridad para hogares, comercios e industrias.
          </p>
          <p>
            Trabajamos escuchando primero la necesidad de cada cliente:
            evaluamos el espacio, proponemos una solución clara y coordinamos
            la ejecución del trabajo. Nuestro objetivo es que cada instalación
            eléctrica o sistema de seguridad funcione de forma segura, ordenada
            y confiable.
          </p>

          {/*
            TODO: Cuando la empresa proporcione su información oficial,
            completar aquí: historia, misión, visión, valores,
            años de experiencia y fotografías reales.
          */}
          <ul className="lp-about-points">
            <li><Icon name="bolt" size={18} /> Instalaciones eléctricas y seguridad electrónica</li>
            <li><Icon name="shield" size={18} /> Video vigilancia, cercos eléctricos y sistemas de seguridad</li>
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
