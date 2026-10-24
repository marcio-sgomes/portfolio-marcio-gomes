import { screen } from '@testing-library/react';
import { act } from 'react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('./data/services/portfolioService', () => ({ obterProjetos: vi.fn(() => new Promise(() => {})) }));

describe('main.jsx', () => {
  it('monta o site dentro de #root', async () => {
    window.scrollTo = vi.fn();
    document.body.innerHTML = '<div id="root"></div>';

    await act(async () => {
      await import('./main.jsx');
    });

    expect(screen.getByRole('heading', { level: 1, name: /do campo à tecnologia/i })).toBeInTheDocument();
  });
});
