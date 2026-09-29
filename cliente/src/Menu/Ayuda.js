import React from 'react';
import PaginaEmpresa from './PaginaEmpresa';

function Ayuda() {
  return <PaginaEmpresa eyebrow="Estamos para ayudar" title="Cuando lo necesita, estamos cerca." description="Reciba orientación para usar, revisar o escalar sus sistemas. Nuestro soporte habla claro y actúa rápido." cta="Pedir ayuda"><div className="help-options"><div><strong>Orientación de uso</strong><p>Resolvemos dudas sobre sus equipos y funciones.</p></div><div><strong>Revisión remota</strong><p>Analizamos el caso y definimos el siguiente paso.</p></div><div><strong>Visita técnica</strong><p>Coordinamos atención en sitio cuando hace falta.</p></div></div></PaginaEmpresa>;
}
export default Ayuda;