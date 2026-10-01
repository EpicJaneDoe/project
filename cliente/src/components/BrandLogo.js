import React from "react";
import logoImg from "../assets/images/logo-ag-electric-solutions.jpg";

// Logo oficial de A G. Electric Solutions (asset original, sin filtros ni modificaciones).
// Se usa en navbar, hero/portada, footer y menú interno.
export default function BrandLogo({ className = "", alt = "Logo de A G. Electric Solutions Ecuador" }) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src={logoImg}
      alt={alt}
      loading="lazy"
      draggable="false"
    />
  );
}
