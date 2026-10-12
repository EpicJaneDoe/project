import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './Icon';
import { MENU_PRINCIPAL_URL } from '../config/menuPrincipal';

// Botón para regresar al menú principal del conjunto de páginas.
// La URL se define en un único lugar: src/config/menuPrincipal.js.
// Mientras no esté configurada, el botón se muestra deshabilitado y accesible,
// sin navegar, recargar ni modificar la URL actual.
export default function BackToMainMenuButton() {
  const navigate = useNavigate();
  const isConfigured = Boolean(MENU_PRINCIPAL_URL);

  const handleClick = () => {
    if (!isConfigured) return;
    // Rutas internas se navegan con el router; URLs externas absolutas, con el navegador.
    if (/^https?:\/\//i.test(MENU_PRINCIPAL_URL)) {
      window.location.assign(MENU_PRINCIPAL_URL);
    } else {
      navigate(MENU_PRINCIPAL_URL);
    }
  };

  return (
    <div className="back-to-menu">
      <button
        type="button"
        className="back-to-menu__button"
        onClick={handleClick}
        disabled={!isConfigured}
        aria-disabled={!isConfigured}
        title={isConfigured ? undefined : 'Menú principal no disponible todavía'}
      >
        <Icon name="arrowLeft" size={18} />
        <span>Volver al menú principal</span>
      </button>
    </div>
  );
}
