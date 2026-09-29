import React from 'react';
import PaginaEmpresa from './PaginaEmpresa';

function Reportar() {
  return <PaginaEmpresa eyebrow="Atención técnica" title="Reportar una incidencia es el primer arreglo." description="Descríbanos el inconveniente y coordinaremos la respuesta adecuada para recuperar su operación." cta="Reportar incidencia"><div className="incident-steps"><span>01 Describe el problema</span><span>02 Adjunta evidencias</span><span>03 Recibe seguimiento</span></div></PaginaEmpresa>;
}
export default Reportar;