import React from 'react';
import PaginaEmpresa from './PaginaEmpresa';

function Contactos() {
  return <PaginaEmpresa eyebrow="Hablemos de su proyecto" title="El siguiente paso es conectar." description="Cuéntenos qué necesita proteger, iluminar o automatizar. Nuestro equipo le ayudará a encontrar una solución clara." cta="Contactar al equipo"><div className="contact-block"><div><span className="section-kicker">Cuéntenos su idea</span><h2>Preparemos una recomendación a su medida.</h2><p>Incluya el tipo de espacio, la ciudad y la necesidad principal para orientarle mejor.</p></div><form className="contact-form" onSubmit={(event) => event.preventDefault()}><label>Nombre<input type="text" placeholder="Su nombre" /></label><label>Correo<input type="email" placeholder="correo@ejemplo.com" /></label><button type="submit">Enviar solicitud <span aria-hidden="true">-&gt;</span></button></form></div></PaginaEmpresa>;
}
export default Contactos;