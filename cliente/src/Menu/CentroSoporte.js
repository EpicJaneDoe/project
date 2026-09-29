import React from 'react';
import PaginaEmpresa from './PaginaEmpresa';

function CentroSoporte() {
  return <PaginaEmpresa eyebrow="Centro de soporte" title="Su sistema, siempre acompañado." description="Centralice solicitudes, seguimiento y mantenimiento para que su infraestructura siga funcionando con confianza." cta="Ir al soporte"><div className="support-dashboard"><div><span className="status-dot" />Atención disponible</div><div><strong>Solicitudes</strong><p>Registre y consulte el avance de sus casos.</p></div><div><strong>Mantenimiento</strong><p>Planifique revisiones antes de una interrupción.</p></div></div></PaginaEmpresa>;
}
export default CentroSoporte;