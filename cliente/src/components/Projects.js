import React, { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";


import casaAgave1 from "../assets/images/proyectos/casa-agave/primera.jpg";
import casaAgave2 from "../assets/images/proyectos/casa-agave/segunda.jpg";
import casaAgave3 from "../assets/images/proyectos/casa-agave/tercera.jpg";
import casaAgave4 from "../assets/images/proyectos/casa-agave/cuarta.jpg";

import motores1 from "../assets/images/proyectos/motores/primera.jpg";
import motores2 from "../assets/images/proyectos/motores/segunda.jpg";
import motores3 from "../assets/images/proyectos/motores/tercera.jpg";
import motores4 from "../assets/images/proyectos/motores/cuarta.jpg";

import kaynu1 from "../assets/images/proyectos/kaynu/primera.jpg";
import kaynu2 from "../assets/images/proyectos/kaynu/segunda.jpg";
import kaynu3 from "../assets/images/proyectos/kaynu/tercera.jpg";

import chorigol1 from "../assets/images/proyectos/chorigol/primera.jpg";
import chorigol2 from "../assets/images/proyectos/chorigol/segunda.jpg";
import chorigol3 from "../assets/images/proyectos/chorigol/tercera.jpg";

import lamiske1 from "../assets/images/proyectos/lamiske/primera.jpg";
import lamiske2 from "../assets/images/proyectos/lamiske/segunda.jpg";
import lamiske3 from "../assets/images/proyectos/lamiske/tercera.jpg";
import lamiske4 from "../assets/images/proyectos/lamiske/cuarta.jpg";
import lamiske5 from "../assets/images/proyectos/lamiske/quinta.jpg";
import lamiske6 from "../assets/images/proyectos/lamiske/sexta.jpg";
import lamiske7 from "../assets/images/proyectos/lamiske/septima.jpg";

// =============================================================
// GALERÍA DE PROYECTOS — Proyectos reales de A .G Electrics
// Solutions Ecuador. Cada proyecto usa su primera imagen en la
// tarjeta principal; el resto queda organizado para la futura
// galería/modal.
// =============================================================
const projects = [
  {
    id: "casa-agave",
    title: "Casa Agave",
    category: "Instalaciones eléctricas y seguridad",
    work: [
      "Circuito exterior.",
      "Iluminación.",
      "Sistema de video vigilancia.",
      "Sistema contra incendios.",
    ],
    images: [casaAgave1, casaAgave2, casaAgave3, casaAgave4],
  },
  {
    id: "motores-sauces",
    title: "Urbanización Los Sauces – La Pampa",
    category: "Motores y automatización",
    description:
      "Instalación de motores tipo brazo y mantenimiento preventivo de motores de cremallera.",
    work: [
      "Instalación de motores tipo brazo.",
      "Mantenimiento preventivo de motores de cremallera.",
    ],
    images: [motores1, motores2, motores3, motores4],
  },
  {
    id: "tienda-kaynu",
    title: "Tienda Kaynu",
    category: "Iluminación y fuerza",
    description: "Proyecto para tienda de productos naturales.",
    work: ["Sistema de iluminación y fuerza.", "Rótulos luminosos."],
    images: [kaynu1, kaynu2, kaynu3],
  },
  {
    id: "chorigol",
    title: "Chorigol",
    category: "Iluminación y fuerza",
    work: ["Sistema de iluminación y fuerza de todo el local."],
    images: [chorigol1, chorigol2, chorigol3],
  },
  {
    id: "la-miske",
    title: "La Miske",
    category: "Instalaciones eléctricas y video vigilancia",
    work: [
      "Instalación del sistema de iluminación y fuerza de todo el local.",
      "Sistema de video vigilancia.",
    ],
    images: [lamiske1, lamiske2, lamiske3, lamiske4, lamiske5, lamiske6, lamiske7],
  },
];

// =============================================================
// GALERÍA / MODAL — al hacer click en una tarjeta se abre un
// modal centrado que muestra EXCLUSIVAMENTE las imágenes del
// proyecto seleccionado, empezando por su primera imagen.
// Navegación: botones avanzar/retroceder, teclado (← → Esc),
// click fuera y botón de cerrar. Funciona en escritorio y móvil.
// =============================================================
function ProjectGallery({ project, onClose }) {
  const [index, setIndex] = useState(0);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + project.images.length) % project.images.length),
    [project.images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % project.images.length),
    [project.images.length]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    // Bloquea el scroll del fondo mientras el modal está abierto
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="lp-gallery-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Galería: ${project.title}`}
      onClick={onClose}
    >
      <div className="lp-gallery" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lp-gallery-close"
          aria-label="Cerrar galería"
          onClick={onClose}
        >
          ×
        </button>

        <div className="lp-gallery-header">
          <span>{project.category}</span>
          <h3>{project.title}</h3>
          {project.description && <p>{project.description}</p>}
        </div>

        <div className="lp-gallery-stage">
          <button
            type="button"
            className="lp-gallery-nav lp-gallery-prev"
            aria-label="Imagen anterior"
            onClick={prev}
            disabled={project.images.length < 2}
          >
            ‹
          </button>

          <img
            src={project.images[index]}
            alt={`${project.title} — Imagen ${index + 1} de ${project.images.length}`}
          />

          <button
            type="button"
            className="lp-gallery-nav lp-gallery-next"
            aria-label="Imagen siguiente"
            onClick={next}
            disabled={project.images.length < 2}
          >
            ›
          </button>
        </div>

        <div className="lp-gallery-footer">
          <p>{project.work.join(" ")}</p>
          <span className="lp-gallery-counter">
            {index + 1} / {project.images.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="proyectos" className="lp-section lp-projects" aria-labelledby="projects-title">
      <div className="lp-container">
        <SectionHeading
          kicker="Proyectos y galería"
          title="Proyectos reales de nuestro trabajo"
          description="Instalaciones eléctricas, seguridad electrónica y video vigilancia ejecutadas por el equipo de A .G Electrics Solutions."
          id="projects-title"
        />

        <div className="lp-cards-grid">
          {projects.map((project, index) => (
            <Reveal as="article" key={project.id} className="lp-project-card" delay={index * 60}>
              <button
                type="button"
                className="lp-project-card-open"
                aria-label={`Ver galería de ${project.title}`}
                onClick={() => setSelected(project)}
              >
                <img src={project.images[0]} alt={project.title} loading="lazy" />
              </button>
              <div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                {project.description && <p>{project.description}</p>}
                <p>{project.work.join(" ")}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectGallery project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
