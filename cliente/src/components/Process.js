import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/services";

// Timeline de 4 pasos del proceso de trabajo.
export default function Process() {
  return (
    <section className="lp-section lp-process" aria-labelledby="process-title">
      <div className="lp-container">
        <SectionHeading
          kicker="Cómo trabajamos"
          title="Del primer contacto a la ejecución"
          id="process-title"
        />
        <ol className="lp-steps">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.number} className="lp-step" delay={index * 80}>
              <span className="lp-step-number" aria-hidden="true">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
