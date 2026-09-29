import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

// =============================================================
// GALERÍA DE PROYECTOS — ESTRUCTURA PREPARADA.
// La empresa aún no publica un catálogo confirmado de proyectos,
// por lo que NO se inventan obras ni se atribuyen fotos genéricas
// como trabajos reales de A G. Electric Solutions Ecuador.
//
// TODO: Para publicar proyectos reales, agrega las fotografías en
// public/img/proyectos/ y completa este array con la autorización
// de la empresa, por ejemplo:
// { image: "/img/proyectos/tablero-quit.jpg", title: "...", category: "...", description: "..." }
// =============================================================
const projects = [];

export default function Projects() {
  return (
    <section id="proyectos" className="lp-section lp-projects" aria-labelledby="projects-title">
      <div className="lp-container">
        <SectionHeading
          kicker="Proyectos y galería"
          title="Pronto mostraremos nuestro trabajo"
          description="Estamos preparando esta sección para mostrar proyectos reales ejecutados por el equipo. Mientras tanto, puedes conocernos mejor o solicitar información sobre tu proyecto."
          id="projects-title"
        />

        {projects.length === 0 ? (
          <Reveal className="lp-gallery-placeholder">
            <span className="lp-gallery-icon" aria-hidden="true">
              <Icon name="panel" size={34} />
            </span>
            <h3>Espacio reservado para fotografías reales</h3>
            <p>
              Aquí se mostrarán imágenes de instalaciones y proyectos propios de{" "}
              <strong>A G. Electric Solutions Ecuador</strong>. No utilizamos
              fotografías ajenas como si fueran nuestras.
            </p>
            <div className="lp-gallery-slots" aria-hidden="true">
              <span /><span /><span /><span />
            </div>
          </Reveal>
        ) : (
          <div className="lp-cards-grid">
            {projects.map((project, index) => (
              <Reveal as="article" key={project.title} className="lp-project-card" delay={index * 60}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
