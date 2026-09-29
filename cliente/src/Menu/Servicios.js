import React from 'react';
import PaginaEmpresa from './PaginaEmpresa';

function Servicios() {
  return <PaginaEmpresa eyebrow="Lo que hacemos" title="Soluciones listas para operar." description="Instalaciones eléctricas, iluminación, sistemas de seguridad, cámaras y automatización con acompañamiento de principio a fin."><div className="service-list"><article><span>01</span><h2>Instalaciones eléctricas</h2><p>Diseño, montaje y revisión de redes para hogares, comercios e industrias.</p></article><article><span>02</span><h2>Seguridad electrónica</h2><p>Cámaras, control de acceso y alarmas para ver y proteger lo importante.</p></article><article><span>03</span><h2>Iluminación y automatización</h2><p>Más eficiencia y control con soluciones pensadas para cada espacio.</p></article></div></PaginaEmpresa>;
}
export default Servicios;
