import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import MenuNavegacion from './MenuNavegacion';
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

function App() {
  return (
    <Router>
      <MenuNavegacion />

      {/* Contenido principal de la aplicación */}
      <main className="app-main">
        <Routes>
          {/* Redirigir la raíz ("/") a "/bienvenida" */}
          <Route path="/" element={<Navigate to="/bienvenida" replace />} />

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

          {/* Captura cualquier ruta que no coincida y redirige */}
          <Route path="*" element={<Navigate to="/bienvenida" replace />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;