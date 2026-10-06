import React from "react";
import Icon from "./Icon";
import { trustItems } from "../data/services";

export default function TrustBar() {
  return (
    <section className="lp-trust" aria-label="Qué puedes esperar de nosotros">
      <ul>
        {trustItems.map((item) => (
          <li key={item.label}>
            <Icon name={item.icon} size={22} />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
