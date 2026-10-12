import './te';
import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('verificacion final: boton en header landing + pagina interna', async () => {
  // 1) Landing (ruta "/")
  const { unmount } = render(<App />);
  const btnLanding = document.querySelector('.back-to-menu__button');
  console.log('[LANDING] existe:', !!btnLanding, '| dentro header.lp-nav:', !!btnLanding?.closest('header.lp-nav'), '| dentro .lp-nav-inner:', !!btnLanding?.closest('.lp-nav-inner'));
  console.log('[LANDING] orden inner:', Array.from(btnLanding.closest('.lp-nav-inner').children).map(c => String(c.className).trim().split(/\s+/)[0]).join(' | '));
  console.log('[LANDING] disabled:', btnLanding.disabled, '| aria-disabled:', btnLanding.getAttribute('aria-disabled'), '| texto:', JSON.stringify(btnLanding.textContent), '| icono svg:', !!btnLanding.querySelector('svg'));
  const urlBefore = window.location.href;
  await userEvent.click(btnLanding);
  console.log('[LANDING] no navega con URL vacia:', window.location.href === urlBefore);
  console.log('[LANDING] header intacto: marca:', !!document.querySelector('header .lp-brand'), 'links:', document.querySelectorAll('.lp-nav-links a').length, 'cta whatsapp:', !!document.querySelector('.lp-btn-whatsapp'), 'burger:', !!document.querySelector('.lp-burger'));
  unmount();

  // 2) Pagina interna (conserva su boton bajo el header)
  window.history.pushState({}, '', '/bienvenida');
  render(<App />);
  const navInterno = document.querySelector('nav.site-nav');
  const btnInterno = document.querySelector('.app-main .back-to-menu__button');
  console.log('[INTERNA] header presente:', !!navInterno, '| boton fuera del header (bajo el):', !!btnInterno && !btnInterno.closest('nav.site-nav'));
});
