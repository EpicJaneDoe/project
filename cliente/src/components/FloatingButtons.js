import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { company, buildWhatsAppLink } from "../data/company";

// Botón flotante de WhatsApp + botón "volver arriba".
export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`lp-back-top ${showTop ? "is-visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Volver arriba"
        tabIndex={showTop ? 0 : -1}
      >
        ↑
      </button>
      <a
        className="lp-whatsapp-float"
        href={buildWhatsAppLink(
          "Hola, vengo de la página web y me gustaría más información."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <Icon name="whatsapp" size={30} />
      </a>
    </>
  );
}
