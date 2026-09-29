import React from 'react';
import PaginaEmpresa from './PaginaEmpresa';

function Documentacion() {
  return <PaginaEmpresa eyebrow="Recursos técnicos" title="Todo claro, desde el plano hasta la entrega." description="Encuentre documentación, criterios y recursos para comprender mejor su solución eléctrica y aprovecharla al máximo."><div className="resource-list"><a href="#fichas">Fichas de servicio <span>-&gt;</span></a><a href="#mantenimiento">Guía de mantenimiento <span>-&gt;</span></a><a href="#entrega">Checklist de entrega <span>-&gt;</span></a></div></PaginaEmpresa>;
}
export default Documentacion;