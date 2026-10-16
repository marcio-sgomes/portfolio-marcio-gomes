import { describe, it, expect, vi } from 'vitest';
import { obterProjetos } from './portfolioService';
import * as githubService from './githubService';
import { projetosPrivados } from '../projetosPrivados';
import { Projeto } from '../../domain/models/Projeto';

vi.mock('./githubService', () => ({
  obterProjetos: vi.fn(),
}));

describe('portfolioService', () => {
  it('deve juntar públicos e privados, com autorais antes dos estudos e mais recentes primeiro', async () => {
    githubService.obterProjetos.mockResolvedValue([
      new Projeto({ id: 'estudo', nome: 'estudo', estudo: true, atualizadoEm: '2030-01-01T00:00:00Z' }),
      new Projeto({ id: 'antigo', nome: 'antigo', atualizadoEm: '2020-01-01T00:00:00Z' }),
      new Projeto({ id: 'recente', nome: 'recente', atualizadoEm: '2030-01-01T00:00:00Z' }),
      new Projeto({ id: 'sem-data', nome: 'sem data' }),
    ]);

    const projetos = await obterProjetos();
    const ids = projetos.map((projeto) => projeto.id);

    expect(projetos).toHaveLength(4 + projetosPrivados.length);
    expect(ids[0]).toBe('recente');
    expect(ids.at(-1)).toBe('estudo');
    expect(ids.indexOf('antigo')).toBeLessThan(ids.indexOf('sem-data'));
  });

  it('nunca deve expor código ou tecnologias dos projetos privados', async () => {
    githubService.obterProjetos.mockResolvedValue([]);

    const projetos = await obterProjetos();

    expect(projetos.length).toBeGreaterThan(0);
    projetos.forEach((projeto) => {
      expect(projeto.privado).toBe(true);
      expect(projeto.codigoUrl).toBeNull();
      expect(projeto.tecnologias).toEqual([]);
      expect(projeto.paginaUrl).toMatch(/^https:\/\//);
    });
  });
});
