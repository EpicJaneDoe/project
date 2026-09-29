import React from 'react';
import PaginaEmpresa from './PaginaEmpresa';

function Portafolio() {
  return <PaginaEmpresa eyebrow="Portafolio de soluciones" title="Tecnología que trabaja para usted." description="Desde una revisión puntual hasta un proyecto integral, reunimos las herramientas adecuadas para resolver cada desafío."><div className="portfolio-grid"><div><strong>Protección</strong><p>CCTV, alarmas y control de acceso.</p></div><div><strong>Eficiencia</strong><p>Iluminación y automatización inteligente.</p></div><div><strong>Continuidad</strong><p>Tableros, respaldo y mantenimiento.</p></div></div></PaginaEmpresa>;
}
export default Portafolio;