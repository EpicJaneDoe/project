import React from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { whyUsItems } from "../data/services";

export default function WhyUs() {
  return (
    <section className="lp-section lp-why" aria-labelledby="why-title">
      <div className="lp-container">
        <SectionHeading
          kicker="¿Por qué elegirnos?"
          title="Una forma clara de trabajar contigo"
          description="Estos son los principios con los que abordamos cada proyecto. Sin promesas vacías: solo trabajo cercano, ordenado y pensado para tu seguridad."
          id="why-title"
        />
        <div className="lp-why-grid">
          {whyUsItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 50}>
              <div className="lp-why-item">
                <span className="lp-why-icon" aria-hidden="true">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
