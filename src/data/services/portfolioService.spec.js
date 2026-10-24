import { describe, it, expect, vi } from 'vitest';
import { obterProjetos } from './portfolioService';
import * as githubService from './githubService';
import { Projeto } from '../../domain/models/Projeto';

vi.mock('./githubService', () => ({
  obterProjetos: vi.fn(),
}));

describe('portfolioService', () => {
  it('deve listar só os repositórios públicos, com autorais antes dos estudos e mais recentes primeiro', async () => {
    githubService.obterProjetos.mockResolvedValue([
      new Projeto({ id: 'estudo', nome: 'estudo', estudo: true, atualizadoEm: '2030-01-01T00:00:00Z' }),
      new Projeto({ id: 'antigo', nome: 'antigo', atualizadoEm: '2020-01-01T00:00:00Z' }),
      new Projeto({ id: 'recente', nome: 'recente', atualizadoEm: '2030-01-01T00:00:00Z' }),
      new Projeto({ id: 'sem-data', nome: 'sem data' }),
      new Projeto({ id: 'sem-data-2', nome: 'sem data 2' }),
    ]);

    const projetos = await obterProjetos();
    const ids = projetos.map((projeto) => projeto.id);

    expect(projetos).toHaveLength(5);
    expect(ids[0]).toBe('recente');
    expect(ids.at(-1)).toBe('estudo');
    expect(ids.indexOf('antigo')).toBeLessThan(ids.indexOf('sem-data'));
    projetos.forEach((projeto) => expect(projeto.privado).toBeFalsy());
  });

  it('não deve repetir na lista do GitHub os apps de código privado', async () => {
    githubService.obterProjetos.mockResolvedValue([]);

    expect(await obterProjetos()).toEqual([]);
  });
});
