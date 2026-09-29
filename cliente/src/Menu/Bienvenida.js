import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PaginaEmpresa from './PaginaEmpresa';

function Bienvenida() {
  const [activeNeed, setActiveNeed] = useState('Todos');
  const needs = ['Todos', 'Hogar', 'Negocio', 'Industria'];
  const solutions = [
    { type: 'Hogar', number: '01', title: 'Instalaciones seguras', text: 'Protege tu hogar con energía estable, iluminación eficiente y respaldo confiable.', link: '/servicios' },
    { type: 'Negocio', number: '02', title: 'Control que conecta', text: 'Integra cámaras, acceso y automatización para operar con más tranquilidad.', link: '/servicios' },
    { type: 'Industria', number: '03', title: 'Continuidad operativa', text: 'Diseñamos soluciones robustas para reducir riesgos y mantener tu operación activa.', link: '/casos-exito' }
  ];
  const visibleSolutions = activeNeed === 'Todos' ? solutions : solutions.filter((solution) => solution.type === activeNeed);

  return (
    <PaginaEmpresa eyebrow="A G. Electric Solutions Ecuador" title="Energía que protege lo que importa." description="Diseñamos soluciones eléctricas, de iluminación, seguridad electrónica y videovigilancia para hogares, comercios e industrias.">
      <div className="welcome-intro">
        <div>
          <span className="section-kicker">Una solución para cada espacio</span>
          <h2>Empieza por lo que necesitas hoy.</h2>
        </div>
        <p>Selecciona tu tipo de proyecto y descubre cómo podemos ayudarte.</p>
      </div>
      <div className="need-tabs" role="tablist" aria-label="Filtrar soluciones por tipo de proyecto">
        {needs.map((need) => (
          <button key={need} type="button" role="tab" aria-selected={activeNeed === need} className={activeNeed === need ? 'is-selected' : ''} onClick={() => setActiveNeed(need)}>{need}</button>
        ))}
      </div>
      <div className="solution-grid">
        {visibleSolutions.map((solution) => (
          <article className="solution-card" key={solution.type}>
            <span className="solution-number">{solution.number}</span>
            <span className="solution-type">{solution.type}</span>
            <h3>{solution.title}</h3>
            <p>{solution.text}</p>
            <Link to={solution.link}>Ver soluciones <span aria-hidden="true">-&gt;</span></Link>
          </article>
        ))}
      </div>
      <div className="trust-strip">
        <div><strong>15+</strong><span>años de experiencia</span></div>
        <div><strong>360°</strong><span>acompañamiento técnico</span></div>
        <div><strong>24/7</strong><span>seguridad y respaldo</span></div>
      </div>
    </PaginaEmpresa>
  );
}
export default Bienvenida;