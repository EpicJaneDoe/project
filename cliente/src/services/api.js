// =============================================================
// Configuración centralizada de la API y servicios externos.
// No colocar URLs sueltas dentro de los componentes.
// =============================================================

// Create React App: definir REACT_APP_API_URL en .env si el backend
// corre en otro origen (por defecto usa localhost:3001 en desarrollo).
const RAW_API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:3001";

export const API_BASE_URL = RAW_API_URL.replace(/\/+$/, "");

/**
 * Envía la solicitud del formulario de contacto al backend.
 * POST /api/contact
 * @param {{nombre:string, telefono:string, email:string, servicio:string, mensaje:string}} payload
 * @returns {Promise<{success:boolean, message:string}>}
 */
export async function sendContactRequest(payload) {
  const response = await fetch(`${API_BASE_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await response.json();
  } catch (error) {
    // El servidor respondió sin JSON válido.
  }

  if (!response.ok) {
    throw new Error(
      (data && data.message) ||
        "No pudimos enviar tu solicitud. Intenta por WhatsApp o teléfono."
    );
  }

  return data || { success: true, message: "Solicitud recibida correctamente" };
}
