import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';

function PaginaEmpresa({ eyebrow, title, description, children, cta = 'Solicitar asesoría' }) {
  const sharedContent = (
    <>
      <div className="company-values">
        <div>
          <span className="section-kicker">La diferencia A G.</span>
          <h2>Una mirada técnica para decisiones más simples.</h2>
        </div>
        <p>Escuchamos el contexto, ordenamos las prioridades y construimos una solución que pueda mantenerse en el tiempo.</p>
      </div>
      <div className="value-grid">
        <article className="value-item"><span>01</span><h3>Diagnóstico claro</h3><p>Identificamos riesgos, oportunidades y el alcance real antes de recomendar.</p></article>
        <article className="value-item"><span>02</span><h3>Instalación ordenada</h3><p>Trabajamos con planificación, materiales adecuados y atención al detalle.</p></article>
        <article className="value-item"><span>03</span><h3>Respaldo continuo</h3><p>Seguimos cerca después de la entrega para que su sistema evolucione.</p></article>
      </div>
      <div className="process-row">
        <span className="section-kicker">Así trabajamos</span>
        <div className="process-steps"><strong>Escuchar</strong><span>-&gt;</span><strong>Diseñar</strong><span>-&gt;</span><strong>Instalar</strong><span>-&gt;</span><strong>Acompañar</strong></div>
      </div>
      <div className="common-questions">
        <span className="section-kicker">Preguntas rápidas</span>
        <details><summary>¿Atienden proyectos pequeños?</summary><p>Sí. Evaluamos desde una necesidad puntual hasta instalaciones integrales para hogares, comercios e industrias.</p></details>
        <details><summary>¿Incluyen mantenimiento?</summary><p>Podemos acompañar la operación con revisiones preventivas y soporte adaptado al sistema instalado.</p></details>
      </div>
    </>
  );

  return (
    <section className="page-shell">
      <div className="page-grid">
        <div className="page-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="page-description">{description}</p>
          <Link className="primary-button" to="/contacto">
            {cta} <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
        <div className="signal-card" aria-label="A G. Electric Solutions Ecuador">
          <BrandLogo className="signal-logo" />
          <div>
            <strong>A G. ELECTRIC</strong>
            <span>SOLUTIONS ECUADOR</span>
          </div>
          <p>Energia segura. Soluciones que conectan.</p>
        </div>
      </div>
      <div className="page-content">{children || sharedContent}</div>
    </section>
  );
}

export default PaginaEmpresa;
