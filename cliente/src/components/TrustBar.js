import React from "react";
import Icon from "./Icon";
import BrandLogo from "./BrandLogo";
import { trustItems } from "../data/services";

export default function TrustBar() {
  return (
    <section className="lp-trust" aria-label="Qué puedes esperar de nosotros">
      <ul>
        <li className="lp-trust-brand" key="brand">
          <BrandLogo className="brand-logo--trust" alt="" />
          <span>A G. Electric Solutions</span>
        </li>
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
