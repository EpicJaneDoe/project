import React from 'react';
import PaginaEmpresa from './PaginaEmpresa';

function Blog() {
  return <PaginaEmpresa eyebrow="Ideas y novedades" title="Entender la energía también es proteger." description="Consejos prácticos, tendencias y aprendizajes para tomar mejores decisiones sobre sus instalaciones."><div className="article-list"><article><span>Guía práctica</span><h2>Cómo preparar una revisión eléctrica.</h2><p>Las señales que conviene observar antes de que aparezca una falla.</p></article><article><span>Seguridad</span><h2>Ver más también es prevenir.</h2><p>Qué considerar al elegir cámaras para un negocio o vivienda.</p></article></div></PaginaEmpresa>;
}
export default Blog;