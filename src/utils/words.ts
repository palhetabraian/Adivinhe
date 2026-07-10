//tipagem do Desafio
export type Challenge = {
  id: number;
  word: string;
  tip: string;
};

// exporta um array chamado WORDS que contém uma lista de palavras e dicas
export const WORDS: Challenge[] = [
  { id: 1, word: 'CSS', tip: 'Linguagem de estilos' },
  { id: 2, word: 'REACT', tip: 'Biblioteca para criar interfaces Web' },
  { id: 3, word: 'HTML', tip: 'Linguagem de marcação' },
  {
    id: 4,
    word: 'JAVASCRIPT',
    tip: 'Uma das linguagens de programação mais utilizadas no mundo',
  },
  {
    id: 5,
    word: 'TYPESCRIPT',
    tip: 'Adiciona tipagem estática ao JavaScript',
  },
  {
    id: 6,
    word: 'NODE',
    tip: 'Ambiente de execução para JavaScript no servidor',
  },
  {
    id: 7,
    word: 'EXPRESS',
    tip: 'Framework para criação de APIs com Node.js',
  },
  {
    id: 8,
    word: 'GITHUB',
    tip: 'Plataforma para hospedagem e versionamento de código',
  },
  {
    id: 9,
    word: 'DOCKER',
    tip: 'Ferramenta para criar e executar aplicações em contêineres',
  },
  {
    id: 10,
    word: 'PRISMA',
    tip: 'ORM utilizado para trabalhar com bancos de dados em TypeScript',
  },
];
