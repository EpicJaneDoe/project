import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

function MenuNavegacion() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
    setMobileOpen(false);
  };

  const menus = [
    { id: 'inicio', label: 'Inicio', links: [['/bienvenida', 'Bienvenida'], ['/acerca-de', 'Acerca de'], ['/mision-vision', 'Misión y visión']] },
    { id: 'informacion', label: 'La empresa', links: [['/servicios', 'Servicios'], ['/equipo', 'Equipo'], ['/clientes', 'Clientes'], ['/contacto', 'Contacto']] },
    { id: 'proyectos', label: 'Proyectos', links: [['/casos-exito', 'Casos de éxito'], ['/portafolio', 'Portafolio']] },
    { id: 'recursos', label: 'Recursos', links: [['/blog', 'Blog'], ['/documentacion', 'Documentación'], ['/faq', 'Preguntas frecuentes']] },
    { id: 'soporte', label: 'Soporte', links: [['/ayuda', 'Ayuda'], ['/reportar', 'Reportar problema'], ['/centro-soporte', 'Centro de soporte']] }
  ];

  return (
    <nav ref={navRef} className="site-nav" aria-label="Navegación principal">
      <div className="nav-inner">
        <Link className="brand" to="/bienvenida" onClick={closeMenu}>
          <span className="brand-symbol">AG</span>
          <span><strong>A G. ELECTRIC</strong><small>SOLUTIONS ECUADOR</small></span>
        </Link>
        <button className={`mobile-toggle ${mobileOpen ? 'is-open' : ''}`} type="button" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="main-navigation" aria-label={mobileOpen ? 'Cerrar navegación' : 'Abrir navegación'}>
          <span /> <span /> <span />
        </button>
        <div id="main-navigation" className={`nav-panel ${mobileOpen ? 'is-open' : ''}`}>
          <ul className="nav-list">
            {menus.map((menu) => (
              <li className="nav-item" key={menu.id}>
                <button className={`nav-button ${menu.links.some(([path]) => location.pathname === path) ? 'is-current' : ''}`} type="button" onClick={() => toggleMenu(menu.id)} aria-expanded={activeMenu === menu.id} aria-controls={`submenu-${menu.id}`}>
                  {menu.label} <span className="chevron" aria-hidden="true">⌄</span>
                </button>
                {activeMenu === menu.id && (
                  <ul id={`submenu-${menu.id}`} className="dropdown-menu">
                    {menu.links.map(([path, label]) => (
                      <li key={path}><NavLink to={path} className={({ isActive }) => `menu-link ${isActive ? 'is-active' : ''}`} onClick={closeMenu}>{label}<span aria-hidden="true">-&gt;</span></NavLink></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link className="nav-cta" to="/contacto" onClick={closeMenu}>Cotizar proyecto <span aria-hidden="true">-&gt;</span></Link>
        </div>
      </div>
    </nav>
  );
}

export default MenuNavegacion;
