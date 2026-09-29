import React from "react";

// Iconografía eléctrica en SVG (sin dependencias nuevas).
const paths = {
  bolt: <path d="M13 2 4.5 13.5H11L9.5 22 18 10.5h-6.5L13 2z" />,
  outlet: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="9" cy="10" r="1.4" />
      <circle cx="15" cy="10" r="1.4" />
      <path d="M9 15h6" />
    </>
  ),
  panel: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 8h4M7 12h4M7 16h4M15 8v8" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.6L3 17.6V21h3.4l5.7-5.7a4.5 4.5 0 0 0 5.6-6l-3 3-2.8-.7-.7-2.8 3.2-2.5z" />
  ),
  cable: (
    <>
      <path d="M4 4v6a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4v2" />
      <path d="M2 4h4M18 20h4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M9 10h6M9 14h6M9 18h4" />
    </>
  ),
  handshake: (
    <path d="M3 11l4-5h4l2 2h4l4 3-3 3-2-1-3 3-2-1-3 3-4-4 3-3zM8 13l2 2" />
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M5 4h4l1.5 4.5-2.5 1.8a13 13 0 0 0 5.7 5.7l1.8-2.5L20 15v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  chat: (
    <path d="M4 5h16v11H8l-4 4V5z" />
  ),
  puzzle: (
    <path d="M10 4h4a1 1 0 0 1 1 1v2h2a1 1 0 0 1 1 1v4h-2a2 2 0 0 0 0 4h2v3a1 1 0 0 1-1 1h-4v-2a2 2 0 0 0-4 0v2H5a1 1 0 0 1-1-1v-4h2a2 2 0 0 0 0-4H4V8a1 1 0 0 1 1-1h4V5a1 1 0 0 1 1-1z" />
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  whatsapp: (
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l4.9-1.3A10 10 0 1 0 12 2zm4.5 13.8c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a11 11 0 0 1-4.7-3.4c-1-1.2-1.5-2.5-1.6-3 0-.5.2-1.2.6-1.6.2-.2.4-.3.6-.3h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.5l-.4.5c-.1.1-.2.3-.1.4a8 8 0 0 0 3.6 3.2c.2.1.3 0 .4-.1l.5-.6c.1-.2.3-.2.5-.1l1.6.8c.2.1.3.2.3.3 0 .2 0 .8-.1 1z" />
  ),
};

export default function Icon({ name, size = 24, className = "" }) {
  const content = paths[name] || paths.bolt;
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {content}
    </svg>
  );
}
