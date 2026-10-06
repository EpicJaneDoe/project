// =============================================================
// Catálogo de servicios.
// TODO: Reemplazar con los servicios oficiales proporcionados
// por la empresa. Los textos actuales son PROVISIONALES/EDITABLES
// y solo describen categorías generales del rubro
// "Servicio de instalación eléctrica".
// Cada tarjeta usa: icon (svg key), title, description.
// =============================================================

export const services = [
  {
    id: "instalaciones",
    icon: "outlet",
    // TODO: Confirmar nombre oficial del servicio.
    title: "Instalaciones eléctricas",
    description:
      "Montaje y ampliación de instalaciones eléctricas para hogares, comercios e industrias, según las necesidades de cada proyecto.",
  },
  {
    id: "tableros",
    icon: "panel",
    // TODO: Confirmar nombre oficial del servicio.
    title: "Tableros y protecciones",
    description:
      "Organización, revisión y adecuación de tableros eléctricos con protecciones para mayor seguridad de su instalación.",
  },
  {
    id: "iluminacion",
    icon: "bulb",
    // TODO: Confirmar nombre oficial del servicio.
    title: "Iluminación",
    description:
      "Soluciones de iluminación interior y exterior, con criterios de eficiencia y comodidad para cada espacio.",
  },
  {
    id: "mantenimiento",
    icon: "wrench",
    // TODO: Confirmar nombre oficial del servicio.
    title: "Mantenimiento y revisiones",
    description:
      "Revisiones preventivas y correctivas para mantener su instalación eléctrica funcionando de forma ordenada y segura.",
  },
  {
    id: "cableado",
    icon: "cable",
    // TODO: Confirmar nombre oficial del servicio.
    title: "Cableado y redes",
    description:
      "Pasado de cableado estructurado y organización de puntos eléctricos para nuevos espacios o remodelaciones.",
  },
  {
    id: "asesoria",
    icon: "clipboard",
    // TODO: Confirmar nombre oficial del servicio.
    title: "Asesoría para proyectos",
    description:
      "Acompañamiento técnico para definir el alcance eléctrico y de seguridad de su proyecto antes de ejecutarlo.",
  },
  {
    id: "seguridad-electronica",
    icon: "shield",
    // TODO: Confirmar nombre oficial del servicio.
    title: "Seguridad electrónica",
    description:
      "Instalamos sistemas de seguridad electrónica completos: cercos eléctricos, sistemas de seguridad y video vigilancia para proteger hogares, comercios e industrias con soluciones confiables.",
  },
  {
    id: "video-vigilancia",
    icon: "camera",
    // TODO: Confirmar nombre oficial del servicio.
    title: "Video vigilancia",
    description:
      "Instalación de sistemas de video vigilancia y cámaras para monitorear sus espacios en tiempo real.",
  },
  {
    id: "cercos-electricos",
    icon: "bolt",
    // TODO: Confirmar nombre oficial del servicio.
    title: "Cercos eléctricos",
    description:
      "Montaje de cercos eléctricos como barrera de seguridad perimetral para sus propiedades.",
  },
];

// Barra de confianza (solo aspectos objetivos, sin cifras inventadas).
export const trustItems = [
  { icon: "handshake", label: "Atención personalizada" },
  { icon: "bolt", label: "Soluciones eléctricas" },
  { icon: "shield", label: "Seguridad electrónica" },
  { icon: "pin", label: "Ubicación en Quito" },
  { icon: "phone", label: "Contacto directo" },
];

// Sección "¿Por qué elegirnos?" — conceptos generales, sin afirmaciones no verificadas.
export const whyUsItems = [
  {
    icon: "handshake",
    title: "Atención personalizada",
    text: "Escuchamos su necesidad concreta antes de recomendar una solución.",
  },
  {
    icon: "clipboard",
    title: "Enfoque profesional",
    text: "Trabajamos con planificación y orden en cada etapa del proyecto.",
  },
  {
    icon: "chat",
    title: "Comunicación directa",
    text: "Hablamos con usted por WhatsApp o teléfono, sin intermediarios.",
  },
  {
    icon: "puzzle",
    title: "Soluciones adaptadas",
    text: "Cada propuesta se ajusta al tipo de espacio y objetivo del cliente.",
  },
  {
    icon: "pin",
    title: "Atención local",
    text: "Estamos en San Antonio de Pichincha, cerca de sus proyectos en Quito.",
  },
  {
    icon: "shield",
    title: "Seguridad primero",
    text: "Priorizamos instalaciones seguras y bien ejecutadas.",
  },
];

// Proceso de trabajo en 5 pasos.
export const processSteps = [
  {
    number: "01",
    title: "Contacto",
    text: "El cliente se comunica con la empresa por WhatsApp, teléfono o el formulario web.",
  },
  {
    number: "02",
    title: "Evaluación",
    text: "Se analiza la necesidad del proyecto y el contexto del espacio.",
  },
  {
    number: "03",
    title: "Propuesta",
    text: "Se presenta una solución adecuada al alcance y prioridades del cliente.",
  },
  {
    number: "04",
    title: "Recibir la aprobación",
    text: "Una vez presentada la propuesta o cotización, recibimos la aprobación del cliente antes de iniciar el trabajo.",
  },
  {
    number: "05",
    title: "Ejecución",
    text: "Se coordina y realiza el trabajo correspondiente.",
  },
];
