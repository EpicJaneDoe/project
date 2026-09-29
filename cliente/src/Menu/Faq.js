import React from 'react';
import PaginaEmpresa from './PaginaEmpresa';

function Faq() {
  return <PaginaEmpresa eyebrow="Preguntas frecuentes" title="Respuestas antes de empezar." description="Resolvemos las dudas habituales sobre tiempos, alcance, mantenimiento y acompañamiento de nuestros servicios."><div className="faq-list"><details><summary>¿Cómo inicia un proyecto?</summary><p>Comenzamos con una conversación y una visita técnica para entender el espacio y sus prioridades.</p></details><details><summary>¿Trabajan con empresas y hogares?</summary><p>Sí. Adaptamos el alcance y la solución a cada tipo de operación.</p></details><details><summary>¿Pueden revisar una instalación existente?</summary><p>Realizamos diagnósticos y recomendamos mejoras por prioridad.</p></details></div></PaginaEmpresa>;
}
export default Faq;
