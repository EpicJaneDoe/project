import React from 'react';
import PaginaEmpresa from './PaginaEmpresa';

function Clientes() {
  return <PaginaEmpresa eyebrow="Clientes que confían" title="Cuidamos cada espacio como propio." description="Acompañamos a negocios, instituciones y familias con soluciones pensadas para su operación real y su tranquilidad diaria."><div className="sector-grid"><div><span>Hogares</span><p>Protección, iluminación y respaldo para vivir con tranquilidad.</p></div><div><span>Comercios</span><p>Control y continuidad para atender mejor a cada cliente.</p></div><div><span>Industrias</span><p>Infraestructura preparada para operaciones exigentes.</p></div></div></PaginaEmpresa>;
}
export default Clientes;

