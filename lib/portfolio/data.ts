import type { Category } from './types';

export const categories: Category[] = [
  {
    key: 'websites',
    label: 'Websites',
    projects: [
      {
        slug: 'ato',
        year: 2026,
        inProgress: true,
        link: 'https://ato-artivista.netlify.app/',
        title: 'ATO',
        summary: {
          en: 'Replace with a one-line summary of this project.',
          pt: 'Substitua por um resumo de uma linha deste projeto.',
        },
   
        tags: ['UX/UI', 'TypeScript'],
        blocks: [
          {
            type: 'paragraph',
            text: {
              en: 'Example showing a different block order — this project opens with two images side by side before any text.',
              pt: 'Exemplo mostrando outra ordem de blocos — este projeto abre com duas imagens lado a lado antes de qualquer texto.',
            },
          },
          {
            type: 'imageGrid',
            images: [
              {
                src: '/projects/temp.jpg',
                alt: { en: 'Projeto 2 screenshot 1', pt: 'Captura de tela 1 do Projeto 2' },
              },
              {
                src: '/projects/temp.jpg',
                alt: { en: 'Projeto 2 screenshot 2', pt: 'Captura de tela 2 do Projeto 2' },
              },
            ],
          },
          {
            type: 'quote',
            text: {
              en: 'Replace with a client quote or a key takeaway from the project — optional.',
              pt: 'Substitua por uma citação do cliente ou um aprendizado chave do projeto — opcional.',
            },
          },
        ],
      },
      {
        slug: 'pink-molotov',
        year: 2026,
        inProgress: true,
        title: 'Pink Molotov',
        summary: {
          en: 'Replace with a one-line summary of this project.',
          pt: 'Substitua por um resumo de uma linha deste projeto.',
        },
   
        tags: ['UX/UI', 'TypeScript'],
        blocks: [
          {
            type: 'paragraph',
            text: {
              en: 'Example showing a different block order — this project opens with two images side by side before any text.',
              pt: 'Exemplo mostrando outra ordem de blocos — este projeto abre com duas imagens lado a lado antes de qualquer texto.',
            },
          },
          {
            type: 'imageGrid',
            images: [
              {
                src: '/projects/temp.jpg',
                alt: { en: 'Projeto 2 screenshot 1', pt: 'Captura de tela 1 do Projeto 2' },
              },
              {
                src: '/projects/temp.jpg',
                alt: { en: 'Projeto 2 screenshot 2', pt: 'Captura de tela 2 do Projeto 2' },
              },
            ],
          },
          {
            type: 'quote',
            text: {
              en: 'Replace with a client quote or a key takeaway from the project — optional.',
              pt: 'Substitua por uma citação do cliente ou um aprendizado chave do projeto — opcional.',
            },
          },
        ],
      },
      {
        slug: 'Ally Ribeiro',
        year: 2025,
        title: 'Ally Ribeiro',
        summary: {
          en: 'A portfolio website designed to give an illustrator a more expressive and immersive space to showcase her work.',
          pt: 'Um portfólio desenvolvido para dar a uma ilustradora um espaço mais expressivo e imersivo para apresentar seu trabalho.',
        },

        tags: ['UX/UI', 'Figma', 'Next.js', 'Front-end'],
        link: 'https://allyribeiro.com/',
        blocks: [
          {
            type: 'paragraph',
            text: {
              en: 'Ally is a Brazilian illustrator currently living in Germany. She reached out to me looking for a more robust online space to showcase her work, moving beyond a simple gallery and creating a website that could better represent her personality and artistic universe.',
              pt: 'Ally é uma ilustradora brasileira que atualmente vive na Alemanha. Ela entrou em contato comigo buscando um espaço online mais robusto para apresentar seu trabalho, indo além de uma simples galeria e criando um site que representasse melhor sua personalidade e seu universo artístico.',
            },
          },
          {
            type: 'image',
            image: {
              src: '/projects/ally/cover.webp',
              alt: {
                en: 'Ally Ribeiro website',
                pt: 'Site da Ally Ribeiro',
              },
            },
          },
          {
            type: 'heading',
            text: {
              en: 'A portfolio with personality',
              pt: 'Um portfólio com personalidade',
            },
          },
          {
            type: 'paragraph',
            text: {
              en: 'Ally’s work is strongly connected to nature, folklore, literature and storytelling. The challenge was to create an interface that could showcase the illustrations without competing with them, while still feeling playful, warm and distinctive.',
              pt: 'O trabalho da Ally tem uma forte relação com natureza, folclore, literatura e storytelling. O desafio foi criar uma interface capaz de valorizar as ilustrações sem competir com elas, mas que ainda tivesse uma personalidade própria, lúdica e acolhedora.',
            },
          },
          {
            type: 'heading',
            text: {
              en: 'From Figma to Next.js',
              pt: 'Do Figma ao Next.js',
            },
          },
          {
            type: 'paragraph',
            text: {
              en: 'I designed the website from scratch in Figma, defining the visual direction, layout, typography and interaction patterns before moving into development. The final interface was then implemented in Next.js, turning the original design into a responsive and functional website.',
              pt: 'Criei todo o layout do projeto no Figma, definindo a direção visual, estrutura, tipografia e padrões de interação antes de partir para o desenvolvimento. Depois, a interface foi implementada em Next.js, transformando o design em um site responsivo e funcional.',
            },
          },
        ],
      },

      {
        slug: 'masca',
        year: 2023,
        title: {
          en: 'Estúdio Masca',
          pt: 'Estúdio Masca',
        },
        summary: {
          en: 'A digital presence for an architecture studio focused on creating authentic spaces connected to their surroundings.',
          pt: 'Uma presença digital para um estúdio de arquitetura focado em criar espaços autênticos e conectados ao seu entorno.',
        },

        tags: ['UX/UI', 'Figma', 'Next.js', 'Front-end'],
        link: 'https://estudiomasca.com/',
                blocks: [
          {
            type: 'paragraph',
            text: {
              en: 'Estúdio Masca is an architecture studio founded by architect Paula Mascarenhas in Curvelo, Minas Gerais. The studio works across Brazil, creating and transforming spaces with a strong focus on authenticity, quality and the relationship between architecture and its surroundings.',
              pt: 'O Estúdio Masca é um escritório de arquitetura fundado pela arquiteta Paula Mascarenhas, em Curvelo, Minas Gerais. O estúdio atua em diferentes regiões do Brasil, criando e transformando espaços com forte foco em autenticidade, qualidade e na relação entre arquitetura e seu entorno.',
            },
          },
          {
            type: 'image',
            image: {
              src: '/projects/temp.jpg',
              alt: {
                en: 'Estúdio Masca website',
                pt: 'Site do Estúdio Masca',
              },
            },
          },
          {
            type: 'heading',
            text: {
              en: 'The Challenge',
              pt: 'O desafio',
            },
          },
          {
            type: 'paragraph',
            text: {
              en: 'The website needed to communicate the studio’s architectural approach while giving enough space to the projects themselves. The goal was to create a visual experience that felt editorial and sophisticated without making navigation unnecessarily complex.',
              pt: 'O site precisava comunicar a abordagem do estúdio sem tirar o protagonismo dos próprios projetos. A proposta foi criar uma experiência visual com uma linguagem mais editorial e sofisticada, mas sem tornar a navegação desnecessariamente complexa.',
            },
          },
          {
            type: 'heading',
            text: {
              en: 'My approach',
              pt: 'Minha abordagem',
            },
          },
          {
            type: 'paragraph',
            text: {
              en: 'I designed the complete interface in Figma, working on the visual hierarchy, layouts, typography and presentation of the architectural projects. After defining the design, I translated the interface into Next.js, building the responsive frontend and turning the visual concept into a functional website.',
              pt: 'Desenvolvi todo o layout no Figma, trabalhando hierarquia visual, layouts, tipografia e apresentação dos projetos arquitetônicos. Depois de definir o design, passei o projeto para Next.js, construindo o frontend responsivo e transformando o conceito visual em um site funcional.',
            },
          },
        ],
      },

    ],
  },

  {
    key: 'saas',
    label: {
      en: 'SaaS',
      pt: 'SaaS',
    },
    projects: [],
  },

  {
    key: 'ecommerce',
    label: {
      en: 'E-commerce',
      pt: 'E-commerce',
    },
    projects: [],
  },

  {
    key: 'dashboard',
    label: {
      en: 'Dashboard',
      pt: 'Dashboard',
    },
    projects: [
      {
        slug: 'kipia',
        year: 2026,
        title: 'Kipia',
        link: 'https://kipiametrics.netlify.app/',
        
        summary: {
          en: 'B2B analytics platform designed to help small businesses understand their financial and operational performance.',
          pt: 'Plataforma de analytics B2B desenvolvida para ajudar pequenas empresas a entender melhor seu desempenho financeiro e operacional.',
        },

        tags: [
          'UX/UI',
          'Product Design',
          'Next.js',
          'TypeScript',
          'Dashboard',
        ],
        blocks: [
          {
            type: 'paragraph',
            text: {
              en: 'Kipia is a B2B analytics platform concept designed around a simple idea: business data should help people make decisions, not just fill dashboards. The project, developed in a very informal manner, with its first commit in 2024, explores how financial and operational information can be organized into a clear, useful, and scalable experience.',
              pt: 'Kipia é um conceito de plataforma de analytics B2B criado a partir de uma ideia simples: dados de negócio devem ajudar na tomada de decisões, e não apenas preencher dashboards. O projeto, que foi desenvolido de maneira bem casual tendo seu primeiro commit em 2024, explora como informações financeiras e operacionais podem ser organizadas em uma experiência clara, útil e escalável.',
            },
          },
          {
            type: 'imageGrid',
            images: [
              {
                src: '/projects/kipia/1.png',
                alt: { en: 'Projeto 2 screenshot 1', pt: 'Captura de tela 1 do Projeto 2' },
              },
              {
                src: '/projects/kipia/2.png',
                alt: { en: 'Projeto 2 screenshot 2', pt: 'Captura de tela 2 do Projeto 2' },
              },
            ],
          },
                    {
            type: 'quote',
            text: {
              en: 'Replace with a client quote or a key takeaway from the project — optional.',
              pt: 'fig.1 Logo - fig.2 Sketch no Figma',
            },
          },
          {
            type: 'heading',
            text: {
              en: 'The Challenge',
              pt: 'O desafio',
            },
          },
          {
            type: 'paragraph',
            text: {
              en: 'The challenge was to design a dashboard that could present a large amount of business information without overwhelming the user. Instead of simply displaying numbers and charts, the interface needed to create hierarchy, provide context and make the most relevant information easy to understand at a glance.',
              pt: 'O desafio foi criar um dashboard capaz de apresentar uma grande quantidade de informações de negócio sem sobrecarregar o usuário. Em vez de simplesmente exibir números e gráficos, a interface precisava criar hierarquia, fornecer contexto e tornar as informações mais importantes fáceis de compreender rapidamente.',
            },
          },
          {
            type: 'heading',
            text: {
              en: 'My approach',
              pt: 'Minha abordagem',
            },
          },
          {
            type: 'paragraph',
            text: {
              en: 'I approached the project as a product rather than just a visual dashboard. The interface is organized around key business questions such as revenue, customer growth, subscriptions, expenses and churn. Filters, data visualization and contextual information are designed to work together, helping users move from a high-level overview into more detailed information.',
              pt: 'Abordei o projeto como um produto, e não apenas como um dashboard visual. A interface é organizada em torno de questões importantes do negócio, como receita, crescimento de clientes, assinaturas, despesas e churn. Filtros, visualização de dados e informações contextuais trabalham juntos para permitir que o usuário saia de uma visão geral e avance para informações mais detalhadas.',
            },
          },
                    {
            type: 'image',
            image: {
              src: '/projects/temp.jpg',
              alt: {
                en: 'Kipia analytics dashboard',
                pt: 'Dashboard de analytics do Kipia',
              },
            },
          },
          {
            type: 'heading',
            text: {
              en: 'Designed for a real product',
              pt: 'Pensado para um produto real',
            },
          },
          {
            type: 'paragraph',
            text: {
              en: 'Although the current version uses fictional data, the project is being structured with a future backend in mind. The frontend is designed to consume data through a service layer, making it possible to replace the mock data with a real API later without rebuilding the interface from scratch.',
              pt: 'Embora a versão atual utilize dados fictícios, o projeto está sendo estruturado pensando em um backend futuro. O frontend é organizado para consumir dados através de uma camada de serviços, permitindo substituir os dados simulados por uma API real posteriormente sem precisar reconstruir a interface.',
            },
          },
          {
            type: 'heading',
            text: {
              en: 'From data to decisions',
              pt: 'De dados a decisões',
            },
          },
          {
            type: 'paragraph',
            text: {
              en: 'Kipia is an opportunity to explore the intersection between UX/UI and frontend development: information architecture, data visualization, interaction design, responsive layouts and a scalable component system all come together in the same product.',
              pt: 'O Kipia é uma oportunidade para explorar a interseção entre UX/UI e desenvolvimento frontend: arquitetura da informação, visualização de dados, design de interação, layouts responsivos e um sistema de componentes escalável fazem parte do mesmo produto.',
            },
          },
        ],
      },
    ],
  },

  {
    key: 'mobile-app',
    label: {
      en: 'Mobile App',
      pt: 'Mobile App',
    },
    projects: [
      {
        slug: 'noma',
        year: 2026,
        title: 'Noma',
        summary: {
          en: 'A mobile experience for discovering and booking curated food and culinary experiences.',
          pt: 'Uma experiência mobile para descobrir e reservar experiências gastronômicas selecionadas.',
        },

        tags: [
          'UX/UI',
          'Product Design',
          'React Native',
          'Expo',
          'TypeScript',
        ],
        blocks: [
          {
            type: 'paragraph',
            text: {
              en: 'Noma is a fictional mobile product created as a portfolio project. The platform is focused on discovering and booking food experiences such as wine and coffee tastings, chef dinners, regional cuisine, cooking workshops and other curated experiences.',
              pt: 'Noma é um produto mobile fictício criado como projeto de portfólio. A plataforma é focada na descoberta e reserva de experiências gastronômicas, como degustações de vinho e café, jantares com chefs, gastronomia regional, workshops de culinária e outras experiências selecionadas.',
            },
          },
          {
            type: 'image',
            image: {
              src: '/projects/temp.jpg',
              alt: {
                en: 'Noma mobile app',
                pt: 'Aplicativo mobile Noma',
              },
            },
          },
          {
            type: 'heading',
            text: {
              en: 'More than a prototype',
              pt: 'Mais do que um protótipo',
            },
          },
          {
            type: 'paragraph',
            text: {
              en: 'The goal is not to build a commercially complete application, but to demonstrate the ability to take a digital product from concept to frontend. The project covers product definition, UX, UI, design system and implementation, resulting in a functional experience rather than just a collection of static screens.',
              pt: 'O objetivo não é construir uma aplicação comercialmente completa, mas demonstrar a capacidade de levar um produto digital do conceito ao frontend. O projeto envolve definição do produto, UX, UI, design system e implementação, resultando em uma experiência funcional em vez de apenas uma coleção de telas estáticas.',
            },
          },
          {
            type: 'heading',
            text: {
              en: 'The experience',
              pt: 'A experiência',
            },
          },
          {
            type: 'paragraph',
            text: {
              en: 'The MVP covers around ten screens, including onboarding, home, discovery, search, experience details, date and time selection, number of participants, booking summary, confirmation, favorites and profile. Key interactions such as search, filters, favorites, scheduling and price calculation are powered by simulated data and local persistence.',
              pt: 'O MVP contempla cerca de dez telas, incluindo onboarding, home, descoberta, busca, detalhes da experiência, seleção de data e horário, quantidade de participantes, resumo da reserva, confirmação, favoritos e perfil. Interações importantes como busca, filtros, favoritos, agendamento e cálculo de valores utilizam dados simulados e persistência local.',
            },
          },
          {
            type: 'heading',
            text: {
              en: 'Built to evolve',
              pt: 'Pensado para evoluir',
            },
          },
          {
            type: 'paragraph',
            text: {
              en: 'The architecture is intentionally designed so that the simulated data can later be replaced by a real API without requiring a complete rebuild of the interface. This makes Noma a practical exploration of UX/UI, frontend architecture and mobile development, while leaving the door open for a future backend implementation.',
              pt: 'A arquitetura foi pensada para que os dados simulados possam posteriormente ser substituídos por uma API real sem exigir uma reconstrução completa da interface. Assim, o Noma funciona como uma exploração prática de UX/UI, arquitetura frontend e desenvolvimento mobile, deixando o caminho aberto para uma futura implementação de backend.',
            },
          },
        ],
      },
    ],
  },
];


export function findProject(slug: string) {
  for (const category of categories) {
    const project = category.projects.find((p) => p.slug === slug);
    if (project) return { project, category };
  }

  return null;
}

export function allProjectSlugs() {
  return categories.flatMap((c) => c.projects.map((p) => p.slug));
}