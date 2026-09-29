import React, { useState } from "react";
import { sendContactRequest } from "../services/api";
import { services } from "../data/services";
import Icon from "./Icon";

const initialForm = { nombre: "", telefono: "", email: "", servicio: "", mensaje: "" };

function validate(form) {
  const errors = {};
  if (!form.nombre.trim() || form.nombre.trim().length < 3) {
    errors.nombre = "Escribe tu nombre (mínimo 3 caracteres).";
  }
  const phone = form.telefono.replace(/[\s()-]/g, "");
  if (!phone) {
    errors.telefono = "El teléfono es obligatorio.";
  } else if (!/^\+?\d{7,15}$/.test(phone)) {
    errors.telefono = "Ingresa un teléfono válido (7 a 15 dígitos).";
  }
  if (!form.email.trim()) {
    errors.email = "El correo es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = "Ingresa un correo electrónico válido.";
  }
  const msg = form.mensaje.trim();
  if (!msg) {
    errors.mensaje = "Cuéntanos brevemente qué necesitas.";
  } else if (msg.length < 10 || msg.length > 1500) {
    errors.mensaje = "El mensaje debe tener entre 10 y 1500 caracteres.";
  }
  return errors;
}

// Formulario conectado a POST /api/contact (ver src/services/api.js).
export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [feedback, setFeedback] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const foundErrors = validate(form);
    setErrors(foundErrors);
    if (Object.keys(foundErrors).length > 0) return;

    setStatus("sending");
    try {
      const result = await sendContactRequest({
        nombre: form.nombre.trim(),
        telefono: form.telefono.trim(),
        email: form.email.trim(),
        servicio: form.servicio,
        mensaje: form.mensaje.trim(),
      });
      setStatus("success");
      setFeedback(result.message || "Solicitud recibida correctamente");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error.message);
    }
  };

  const field = (name, label, type = "text", placeholder = "") => (
    <div className="lp-field">
      <label htmlFor={`cf-${name}`}>
        {label} <span className="lp-required" aria-hidden="true">*</span>
      </label>
      <input
        id={`cf-${name}`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={form[name]}
        onChange={handleChange}
        required
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `cf-${name}-error` : undefined}
      />
      {errors[name] && (
        <p className="lp-field-error" id={`cf-${name}-error`} role="alert">
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form className="lp-contact-form" onSubmit={handleSubmit} noValidate>
      <h3>Solicita información o tu cotización</h3>

      {field("nombre", "Nombre completo", "text", "Tu nombre")}
      {field("telefono", "Teléfono", "tel", "+593 ...")}
      {field("email", "Correo electrónico", "email", "correo@ejemplo.com")}

      <div className="lp-field">
        <label htmlFor="cf-servicio">Servicio de interés</label>
        <select id="cf-servicio" name="servicio" value={form.servicio} onChange={handleChange}>
          <option value="">Selecciona una opción (opcional)</option>
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Otro">Otro / Aún no lo sé</option>
        </select>
      </div>

      <div className="lp-field">
        <label htmlFor="cf-mensaje">
          Mensaje <span className="lp-required" aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-mensaje"
          name="mensaje"
          rows="4"
          placeholder="Describe tu proyecto o necesidad…"
          value={form.mensaje}
          onChange={handleChange}
          required
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={errors.mensaje ? "cf-mensaje-error" : undefined}
        />
        {errors.mensaje && (
          <p className="lp-field-error" id="cf-mensaje-error" role="alert">
            {errors.mensaje}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="lp-btn lp-btn-primary lp-btn-block"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Solicitar información"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="lp-form-status is-success" role="status">
            <Icon name="shield" size={18} /> {feedback}. Te contactaremos pronto.
          </p>
        )}
        {status === "error" && (
          <p className="lp-form-status is-error" role="alert">
            No se pudo enviar la solicitud: {feedback}
          </p>
        )}
      </div>

      <p className="lp-form-note">
        ¿Urgente? Escríbenos directo por{" "}
        <a href="https://wa.me/593983429670" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>{" "}
        o llama al{" "}
        <a href="tel:+593983429670">+593 98 342 9670</a>.
      </p>
    </form>
  );
}
