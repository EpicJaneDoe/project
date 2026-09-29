import React from "react";

export default function SectionHeading({ kicker, title, description, id }) {
  return (
    <header className="section-heading">
      {kicker && <span className="kicker">{kicker}</span>}
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
