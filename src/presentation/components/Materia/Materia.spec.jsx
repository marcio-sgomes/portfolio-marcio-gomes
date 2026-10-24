import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Manchete } from './Manchete';
import { Historia } from './Historia';
import { ProjetosDestaque } from './ProjetosDestaque';
import { Competencias } from './Competencias';
import { Encaixe } from './Encaixe';
import { Contato } from './Contato';
import { gruposDeProjetos, todosOsProjetos, casoEmDestaque, situacoes, situacaoDoProjeto } from '../../../data/projetosDestaque';
import { contatoPorId, atributosDoLink } from '../../../data/perfil';

describe('Matéria da Home', () => {
  it('Manchete deve exibir título, linha fina, crédito e foto com legenda', () => {
    render(<Manchete />);

    expect(screen.getByRole('heading', { level: 1, name: /do campo à tecnologia/i })).toBeInTheDocument();
    expect(screen.getByText(/12 anos na ponta da operação/i)).toBeInTheDocument();
    expect(screen.getByText('Atualizado em outubro de 2026')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /foto de márcio gomes/i })).toBeInTheDocument();
    expect(screen.getByText(/técnico de instalação, VT, certificação de qualidade/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /baixar currículo/i })).toHaveAttribute('href', '/curriculo-marcio-gomes.pdf');
    expect(screen.getByRole('link', { name: /ver projetos/i })).toHaveAttribute('href', '#projetos');

    const raioX = screen.getByRole('complementary', { name: 'Raio-X' });
    expect(within(raioX).getByText('Mais de 40')).toBeInTheDocument();
    expect(within(raioX).getByText(/requisitos, implantação, qualidade e projetos/i)).toBeInTheDocument();
  });

  it('Manchete deve exibir o monograma quando a foto não carregar', () => {
    render(<Manchete />);

    fireEvent.error(screen.getByRole('img', { name: /foto/i }));

    expect(screen.queryByRole('img', { name: /foto/i })).not.toBeInTheDocument();
    expect(screen.getByTestId('monograma')).toHaveTextContent('MG');
  });

  it('Historia deve abrir com a introdução e mostrar o resto só ao pedir', () => {
    render(<Historia />);

    expect(screen.getByRole('heading', { level: 2, name: /doze anos de operação/i })).toBeInTheDocument();
    expect(screen.getByText(/aprendeu tecnologia de fora para dentro/i)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'A escola da qualidade' })).not.toBeInTheDocument();

    const botao = screen.getByRole('button', { name: /ler a trajetória completa/i });
    expect(botao).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(botao);

    expect(botao).toHaveAttribute('aria-expanded', 'true');
    expect(botao).toHaveTextContent(/recolher/i);
    expect(screen.getByRole('heading', { level: 3, name: 'A escola da qualidade' })).toBeInTheDocument();
    expect(screen.getByText('Certificação de qualidade.')).toBeInTheDocument();
    expect(screen.getByText(/ia anotando os pontos/i)).toBeInTheDocument();
    expect(screen.getByText('As frentes na DevLand · 2022 – 2025')).toBeInTheDocument();
    expect(screen.getByText('BoutSex')).toBeInTheDocument();

    // Recolher volta a tela para o começo da trajetória
    Element.prototype.scrollIntoView = vi.fn();
    fireEvent.click(botao);
    expect(Element.prototype.scrollIntoView).toHaveBeenCalledWith(expect.objectContaining({ block: 'start' }));
    expect(botao).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('heading', { name: 'A escola da qualidade' })).not.toBeInTheDocument();
    delete Element.prototype.scrollIntoView;

    // Em navegador sem scrollIntoView, abrir e recolher não quebra
    fireEvent.click(botao);
    fireEvent.click(botao);
    expect(botao).toHaveAttribute('aria-expanded', 'false');
  });

  it('ProjetosDestaque deve agrupar os projetos por situação e só ter link onde há página', () => {
    render(<ProjetosDestaque />);

    gruposDeProjetos.forEach((grupo) => {
      expect(screen.getByRole('heading', { level: 3, name: grupo.titulo })).toBeInTheDocument();
    });
    // O caso em destaque é um artigo próprio; o cartão dele sai da grade
    const nasGrades = todosOsProjetos().filter((projeto) => projeto.nome !== casoEmDestaque.nome);
    expect(screen.getAllByRole('article')).toHaveLength(nasGrades.length + 1);

    const comPagina = nasGrades.filter((projeto) => projeto.url);
    const comRotuloProprio = comPagina.filter((projeto) => projeto.rotuloLink);
    expect(screen.getAllByRole('link', { name: /abrir o app/i })).toHaveLength(comPagina.length - comRotuloProprio.length);
    expect(screen.getByRole('link', { name: /baixar o apk gomestech otimizador/i })).toHaveAttribute(
      'href',
      'https://github.com/marcio-sgomes/gomestech-otimizador/releases/latest',
    );
    expect(screen.queryByRole('link', { name: /abrir o app prismaq/i })).not.toBeInTheDocument();
    expect(screen.getByText('Tarefa feita, cofrinho cheio!')).toBeInTheDocument();
  });

  it('Jogos ficam num grupo próprio, cada um com o selo da sua situação', () => {
    render(<ProjetosDestaque />);

    const jogos = gruposDeProjetos.find((grupo) => grupo.id === 'jogos');
    expect(jogos.projetos.map((projeto) => projeto.nome)).toEqual(['Guardiões do Saber', 'Soberania: Era das Forças', 'Neon Drop']);
    jogos.projetos.forEach((projeto) => {
      const cartao = screen.getByRole('heading', { level: 4, name: projeto.nome }).closest('article');
      expect(within(cartao).getByText(situacoes[projeto.situacao].selo)).toBeInTheDocument();
    });
    // Nenhum jogo aparece repetido nos grupos por situação
    const foraDeJogos = gruposDeProjetos.filter((grupo) => grupo.id !== 'jogos').flatMap((grupo) => grupo.projetos);
    jogos.projetos.forEach((jogo) => expect(foraDeJogos.some((projeto) => projeto.nome === jogo.nome)).toBe(false));
  });

  it('todo projeto tem selo: o do grupo ou o da própria situação', () => {
    gruposDeProjetos.forEach((grupo) => {
      grupo.projetos.forEach((projeto) => {
        expect(situacaoDoProjeto(projeto, grupo)?.selo, projeto.nome).toBeTruthy();
      });
    });
    const nomes = todosOsProjetos().map((projeto) => projeto.nome);
    expect(new Set(nomes).size).toBe(nomes.length);
  });

  it('CasoDestaque deve contar a origem do PrismaQ, o antes e depois, quem usa e as regras', () => {
    render(<ProjetosDestaque />);

    const caso = screen.getByRole('article', { name: /prismaq/i });
    expect(caso).toHaveAttribute('id', 'prismaq');
    expect(within(caso).getByText(/em 2019, na procisa do brasil/i)).toBeInTheDocument();
    expect(within(caso).getByText('Em testes')).toBeInTheDocument();
    expect(within(caso).getAllByRole('row')).toHaveLength(casoEmDestaque.antesDepois.length + 1);
    expect(within(caso).getByText('Em campo · celular')).toBeInTheDocument();
    expect(within(caso).getAllByRole('listitem')).toHaveLength(casoEmDestaque.regras.length);
    expect(within(caso).getByRole('link', { name: /abrir o prismaq/i })).toHaveAttribute('href', casoEmDestaque.url);
    expect(within(caso).getByText(/dados fictícios/i)).toBeInTheDocument();
  });

  it('Competencias deve listar as três colunas, com Em aperfeiçoamento', () => {
    render(<Competencias />);

    expect(screen.getAllByRole('article')).toHaveLength(3);
    expect(screen.getByRole('heading', { name: 'Em aperfeiçoamento' })).toBeInTheDocument();
    expect(screen.getByText('Clean Architecture e Clean Code')).toBeInTheDocument();
  });

  it('Encaixe deve mostrar a tabela de áreas e o próximo passo', () => {
    render(<Encaixe />);

    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(screen.getByRole('rowheader', { name: /analista de requisitos/i })).toBeInTheDocument();
    expect(screen.getByText(/product owner ou gestão de projetos/i)).toBeInTheDocument();
  });

  it('Contato deve ter e-mail, WhatsApp, LinkedIn e GitHub', () => {
    render(<Contato />);

    expect(screen.getByRole('link', { name: /e-mail/i })).toHaveAttribute('href', expect.stringMatching(/^mailto:/));
    expect(screen.getByRole('link', { name: /e-mail/i })).not.toHaveAttribute('target');
    expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute('href', 'https://wa.me/5521975604306');
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link', { name: /baixar currículo/i })).toHaveAttribute('download', 'Curriculo-Marcio-Gomes.pdf');
  });

  it('atributosDoLink deve abrir externos em nova aba e o e-mail no próprio app', () => {
    expect(atributosDoLink(contatoPorId('email'))).toEqual({});
    expect(atributosDoLink(contatoPorId('whatsapp'))).toEqual({ target: '_blank', rel: 'noopener noreferrer' });
  });
});
