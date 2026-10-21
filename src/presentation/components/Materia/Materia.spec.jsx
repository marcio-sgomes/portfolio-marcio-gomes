import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Manchete } from './Manchete';
import { Historia } from './Historia';
import { ProjetosDestaque } from './ProjetosDestaque';
import { Competencias } from './Competencias';
import { Encaixe } from './Encaixe';
import { Contato } from './Contato';
import { gruposDeProjetos, todosOsProjetos, casoEmDestaque } from '../../../data/projetosDestaque';
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
  });

  it('Manchete deve exibir o monograma quando a foto não carregar', () => {
    render(<Manchete />);

    fireEvent.error(screen.getByRole('img', { name: /foto/i }));

    expect(screen.queryByRole('img', { name: /foto/i })).not.toBeInTheDocument();
    expect(screen.getByTestId('monograma')).toHaveTextContent('MG');
  });

  it('Historia deve contar os capítulos, a citação, as frentes da DevLand e o Raio-X', () => {
    render(<Historia />);

    expect(screen.getByRole('heading', { name: 'A escola da qualidade' })).toBeInTheDocument();
    expect(screen.getByText('Certificação de qualidade.')).toBeInTheDocument();
    expect(screen.getByText(/ia anotando os pontos/i)).toBeInTheDocument();
    expect(screen.getByText('As frentes na DevLand · 2022 – 2025')).toBeInTheDocument();
    expect(screen.getByText('BoutSex')).toBeInTheDocument();

    const raioX = screen.getByRole('complementary', { name: 'Raio-X' });
    expect(within(raioX).getByText('Mais de 40')).toBeInTheDocument();
    expect(within(raioX).getByRole('link', { name: /falar com márcio/i })).toHaveAttribute('href', '#contato');
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
    expect(screen.getAllByRole('link', { name: /abrir o app/i })).toHaveLength(comPagina.length);
    expect(screen.queryByRole('link', { name: /abrir o app prismaq/i })).not.toBeInTheDocument();
    expect(screen.getByText('Tarefa feita, cofrinho cheio!')).toBeInTheDocument();
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
