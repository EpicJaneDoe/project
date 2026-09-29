import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import './App.css';
import './styles/landing.css';

import MenuNavegacion from './MenuNavegacion';
import Landing from './pages/Landing';
import Bienvenida from './Menu/Bienvenida';
import AcercaDe from './Menu/AcercaDe';
import MisionVision from './Menu/MisionVision';
import Servicios from './Menu/Servicios';
import Equipo from './Menu/Equipo';
import Clientes from './Menu/Clientes';
import Contacto from './Menu/Contacto';
import CasosExito from './Menu/CasosExito';
import Portafolio from './Menu/Portafolio';
import Blog from './Menu/Blog';
import Documentacion from './Menu/Documentacion';
import Faq from './Menu/Faq';
import Ayuda from './Menu/Ayuda';
import Reportar from './Menu/Reportar';
import CentroSoporte from './Menu/CentroSoporte';

// Layout de las páginas internas existentes: conserva el menú original.
function InternalLayout() {
  return (
    <>
      <MenuNavegacion />
      <main className="app-main">
        <Outlet />
      </main>
    </>
  );
}

function App() {
  return (
    <Router>
      {/* La raíz "/" es la landing comercial completa con su propia barra de navegación.
          Las rutas internas ("/bienvenida", "/servicios", etc.) conservan el menú existente. */}
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route element={<InternalLayout />}>
          <Route path="/bienvenida" element={<Bienvenida />} />
          <Route path="/acerca-de" element={<AcercaDe />} />
          <Route path="/mision-vision" element={<MisionVision />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/equipo" element={<Equipo />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/casos-exito" element={<CasosExito />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/documentacion" element={<Documentacion />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/ayuda" element={<Ayuda />} />
          <Route path="/reportar" element={<Reportar />} />
          <Route path="/centro-soporte" element={<CentroSoporte />} />

          {/* Captura cualquier ruta que no coincida y redirige a la landing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;