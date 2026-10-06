import React, { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

// Preguntas frecuentes (mejora del concepto del Faq existente).
// Solo información verificable: contacto, ubicación, horarios y proceso general.
const faqs = [
  {
    q: "¿Cómo puedo solicitar información o una cotización?",
    a: "Puedes escribirnos por WhatsApp al +593 98 342 9670, llamarnos por teléfono o completar el formulario de esta página. Cuéntanos qué necesitas y te orientaremos sobre los siguientes pasos.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Nuestra dirección pública es Calle Juana Engler y Pasaje Los Pinos S1-03 y, 170311 Quito, en San Antonio de Pichincha. Puedes vernos en el mapa de la sección de contacto.",
  },
  {
    q: "¿Cuál es el horario de atención?",
    a: "Atendemos de lunes a viernes de 08:00 a 18:30 y los sábados de 08:30 a 14:30. Los domingos permanecemos cerrados; los mensajes se responden al día siguiente de hábil.",
  },
  {
    q: "¿Con qué tipo de proyectos trabajan?",
    a: "Trabajamos instalaciones eléctricas y, además, seguridad electrónica: sistemas de video vigilancia, cercos eléctricos y sistemas de seguridad. Para conocer el alcance exacto de tu proyecto —tamaño, espacio o necesidad— escríbenos y lo evaluamos contigo.",
  },
  {
    q: "¿La cotización tiene algún compromiso?",
    a: "Contáctanos para conversar sobre tu necesidad. A partir de esa conversación coordinamos la evaluación y te presentamos una propuesta clara antes de cualquier trabajo.",
  },
  {
    q: "¿Pueden revisar una instalación existente?",
    a: "Cuéntanos por WhatsApp o teléfono qué está ocurriendo con tu instalación. Según lo que necesites, coordinamos la revisión o visita que corresponda.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="lp-section lp-faq" aria-labelledby="faq-title">
      <div className="lp-container lp-faq-grid">
        <Reveal>
          <SectionHeading
            kicker="Preguntas frecuentes"
            title="Resolvamos tus dudas antes de empezar"
            description="Si tu pregunta no está aquí, escríbenos por WhatsApp: respondemos personalmente."
            id="faq-title"
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="lp-accordion">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div className={`lp-accordion-item ${isOpen ? "is-open" : ""}`} key={faq.q}>
                  <button
                    type="button"
                    className="lp-accordion-button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  >
                    <span>{faq.q}</span>
                    <Icon name="bolt" size={18} className="lp-accordion-icon" />
                  </button>
                  <div
                    role="region"
                    id={`faq-panel-${index}`}
                    aria-labelledby={`faq-button-${index}`}
                    className="lp-accordion-panel"
                    hidden={!isOpen}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
