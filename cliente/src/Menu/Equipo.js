import React from 'react';
import PaginaEmpresa from './PaginaEmpresa';

function Equipos() {
  return <PaginaEmpresa eyebrow="Nuestro equipo" title="Expertos que llegan preparados." description="Técnicos, diseñadores e instaladores trabajan coordinados para entregar resultados claros, ordenados y duraderos."><div className="team-block"><span className="section-kicker">Personas detrás de cada proyecto</span><h2>Experiencia técnica con trato cercano.</h2><div className="team-roles"><div><strong>Ingeniería</strong><p>Convierte necesidades en planos y decisiones seguras.</p></div><div><strong>Instalación</strong><p>Ejecuta cada detalle con orden y estándares claros.</p></div><div><strong>Soporte</strong><p>Permanece cerca para mantener todo funcionando.</p></div></div></div></PaginaEmpresa>;
}
export default Equipos;