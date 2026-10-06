// =============================================================
// Información centralizada de la empresa.
// TODO: Este es el ÚNICO lugar donde actualizar datos de contacto,
// horarios, dirección y redes cuando la empresa los confirme.
// =============================================================

export const company = {
  name: "A G. Electric Solutions Ecuador",
  shortName: "A G. Electric",
  tagline: "Solutions Ecuador",
  slogan: "Energía segura. Soluciones que conectan.",
  country: "Ecuador",
  location: "San Antonio de Pichincha, Quito, Ecuador",
  address: "Calle Juana Engler y Pasaje Los Pinos S1-03 y, 170311 Quito, Ecuador",
  phone: "+593 98 342 9670",
  phoneRaw: "+593983429670",
  whatsappUrl: "https://wa.me/593983429670",
  category: "Instalaciones eléctricas y seguridad electrónica",
  schedule: [
    { days: "Lunes a viernes", hours: "08:00 – 18:30" },
    { days: "Sábado", hours: "08:30 – 14:30" },
    { days: "Domingo", hours: "Cerrado" },
  ],
  // TODO: Completar cuando la empresa proporcione un correo oficial.
  email: "",
  // TODO: Completar con las redes sociales oficiales si existen.
  social: {},
  // Coordenadas aproximadas de San Antonio de Pichincha (mitad del mundo), Quito.
  map: {
    lat: -0.1559,
    lng: -78.4453,
    query: "San Antonio de Pichincha, Quito, Ecuador",
    // Place ID oficial del negocio en Google Maps (Google Business Profile).
    // Referencia principal e inequívoca del lugar en la integración de mapas.
    placeId: "ChIJcdz8IceJ1ZERPxZsdXSFjZA",
    // Query que identifica el lugar como negocio (nombre + dirección reales).
    placeQuery: "A G. Electric Solutions Ecuador, Calle Juana Engler y Pasaje Los Pinos S1-03 y, 170311 Quito, Ecuador",
  },
};

export function buildWhatsAppLink(message) {
  const base = company.whatsappUrl;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
