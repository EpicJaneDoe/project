import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import BackToMainMenuButton from './components/BackToMainMenuButton';

describe('Botón "Volver al menú principal"', () => {
  test('se muestra deshabilitado cuando no hay URL configurada', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={['/bienvenida']}>
        <BackToMainMenuButton />
      </MemoryRouter>
    );
    const boton = screen.getByRole('button', { name: /volver al men[uú] principal/i });
    expect(boton).toBeDisabled();
    // No navega ni modifica la URL al pulsarse sin configuración.
    await user.click(boton);
    expect(window.location.pathname).toBe('/');
  });

  test('el header interno sigue presente junto al botón en las páginas internas', () => {
    render(<App />);
    expect(screen.getByRole('navigation', { name: /navegaci[oó]n principal/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /volver al men[uú] principal/i })).toBeInTheDocument();
  });
});
