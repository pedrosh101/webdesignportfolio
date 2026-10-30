import type { Category } from "./types";

export const categories: Category[] = [
  {
    key: "websites",
    label: "Websites",
    projects: [
      {
        slug: "descubra-istambul",
        year: 2026,
        inProgress: true,
        link: "https://descubraistambul.netlify.app/",
        title: "Descubra Istambul",
        summary: {
          en: "A multilingual website for a Brazilian licensed tour guide in Türkiye, combining editorial visual identity with immersive interactions.",
          pt: "Um site multilíngue para uma guia brasileira licenciada na Turquia, combinando identidade visual editorial e interações imersivas.",
        },
        tags: ["UX/UI", "Next.js", "TypeScript", "next-intl", "Front-end"],
        blocks: [
          {
            type: "paragraph",
            text: {
              en: "Descubra Istambul is a website created for Mariana Humayta, a Brazilian tour guide licensed by the Turkish Ministry of Culture and Tourism. The project aimed to establish a distinctive digital presence that could communicate her expertise, introduce visitors to her work, and reach an international audience.",
              pt: "O Descubra Istambul é um site desenvolvido para Mariana Humayta, guia brasileira licenciada pelo Ministério da Cultura e Turismo da Turquia. O projeto buscou estabelecer uma presença digital própria, capaz de comunicar sua experiência, apresentar seu trabalho e alcançar um público internacional.",
            },
          },
          {
            type: "imageGrid",
            images: [
              {
                src: "/projects/descubra/c.webp",
                alt: {
                  en: "Descubra Istambul visual identity and color palette",
                  pt: "Identidade visual e paleta de cores do Descubra Istambul",
                },
              },
              {
                src: "/projects/descubra/b.webp",
                alt: {
                  en: "Descubra Istambul website layout and typography",
                  pt: "Layout e tipografia do site Descubra Istambul",
                },
              },
            ],
          },

          {
            type: "heading",
            text: {
              en: "An identity rooted in storytelling",
              pt: "Uma identidade que parte da história",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "Mariana did not have a clearly established visual identity for her online presence. Rather than creating a visual language from scratch without context, I looked to her published book for inspiration. Its aged-paper tones informed the website’s warm, timeless palette, while red accents referenced the colors of the Turkish flag. The result connects her existing work to a new digital experience.",
              pt: "Mariana ainda não tinha uma identidade visual bem definida para sua presença online. Em vez de criar uma linguagem visual sem partir de um contexto, busquei inspiração no livro que ela já havia publicado. Os tons que remetem a papéis envelhecidos orientaram uma paleta acolhedora e atemporal, enquanto os acentos vermelhos fazem referência às cores da bandeira turca. Assim, o site conecta seu trabalho existente a uma nova experiência digital.",
            },
          },
          {
            type: "image",
            image: {
              src: "/projects/descubra/a.jpg",
              alt: {
                en: "Descubra Istambul website homepage",
                pt: "Página inicial do site Descubra Istambul",
              },
            },
          },
          {
            type: "quote",
            text: {
              en: "Basic sketches created in Figma, mainly to serve as a starting point.",
              pt: "Esboços básicos criados no Figma, mais para ter um ponto de partida.",
            },
          },
          {
            type: "heading",
            text: {
              en: "Designed for an international audience",
              pt: "Pensado para um público internacional",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "Multilingual support was an important part of the project from the beginning. We discussed the possibility of expanding the website beyond Portuguese, including Italian, which raised questions about how to structure the domain and language experience. I implemented the site using Next.js and next-intl, creating a multilingual experience that supports four languages and makes the content accessible to a broader international audience.",
              pt: "O suporte a múltiplos idiomas foi uma parte importante do projeto desde o início. Conversamos sobre a possibilidade de expandir o site para além do português, incluindo o italiano, o que trouxe questões sobre como estruturar o domínio e a experiência de navegação. Implementei o site com Next.js e next-intl, criando uma experiência multilíngue que funciona em quatro idiomas e amplia o alcance do conteúdo para um público internacional.",
            },
          },
          {
            type: "quote",
            text: {
              en: "Expanding the website to four languages became an opportunity to make the experience accessible to a broader international audience.",
              pt: "Ampliar o site para quatro idiomas foi uma oportunidade de tornar a experiência acessível a um público internacional mais amplo.",
            },
          },
          {
            type: "heading",
            text: {
              en: "A more personal visual experience",
              pt: "Uma experiência visual mais pessoal",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "To make the website feel more authentic and personal, I suggested using photographs and videos Mariana already had on her phone. This approach brought a more organic quality to the content, helping the website feel connected to her own experiences rather than relying entirely on generic travel imagery.",
              pt: "Para tornar o site mais autêntico e pessoal, sugeri aproveitar fotografias e vídeos que Mariana já tinha no próprio celular. Essa abordagem trouxe um caráter mais orgânico ao conteúdo, aproximando a experiência digital de suas vivências e evitando depender exclusivamente de imagens genéricas de viagem.",
            },
          },

          {
            type: "heading",
            text: {
              en: "Bringing movement into the experience",
              pt: "Movimento como parte da experiência",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "Mariana also wanted a more contemporary browsing experience. I introduced smooth scrolling and parallax effects on images, adding depth and movement without losing sight of the content. These interactions bring a more immersive quality to the website while reinforcing its editorial visual direction.",
              pt: "Mariana também buscava uma experiência de navegação mais contemporânea. Implementei scroll suave e efeitos de parallax nas imagens, adicionando profundidade e movimento sem tirar o foco do conteúdo. Essas interações tornam a navegação mais imersiva e reforçam a direção visual editorial do site.",
            },
          },
        ],
      },

      {
        slug: "ato",
        year: 2026,
        inProgress: true,
        link: "https://ato-artivista.netlify.app/",
        title: "ATO",
        summary: {
          en: "A digital platform for an artivist organization, bringing together its mission, artistic archive and social impact projects.",
          pt: "Uma plataforma digital para uma organização artivista, reunindo sua missão, acervo artístico e projetos de impacto social.",
        },
        tags: [
          "UX/UI",
          "Figma",
          "Next.js",
          "TypeScript",
          "Front-end",
          "Adobe Illustrator",
        ],
        blocks: [
          {
            type: "paragraph",
            text: {
              en: "ATO is a website being developed for Marina Marchetti and ATO, an organization founded in May 2023 that uses art as a tool for social transformation. The platform brings together the organization’s mission, artistic initiatives and a growing archive of artworks, creating a central digital space to communicate its work and reach a wider audience.",
              pt: "O ATO é um site em desenvolvimento para Marina Marchetti e a organização ATO, fundada em maio de 2023 com a proposta de utilizar a arte como ferramenta de transformação social. A plataforma reúne a missão da organização, suas iniciativas artísticas e um acervo de obras em expansão, criando um espaço digital central para comunicar seu trabalho e alcançar um público mais amplo.",
            },
          },
          {
            type: "image",
            image: {
              src: "/projects/ato/0.png",
              alt: {
                en: "ATO website homepage",
                pt: "Página inicial do site ATO",
              },
            },
          },

          {
            type: "heading",
            text: {
              en: "Building an identity for ATO",
              pt: "Construindo uma identidade para o ATO",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "Although the individual projects presented on social media have their own visual identities, ATO itself did not yet have a clearly established visual language for the platform. My role was to develop a visual direction specifically for the website, creating a cohesive identity that could coexist with the diversity of the projects while maintaining a connection with ATO’s social media presence, @ato.artivista.",
              pt: "Embora os projetos apresentados nas redes sociais possuam suas próprias identidades visuais, a ATO ainda não tinha uma linguagem visual claramente estabelecida para a plataforma. Meu papel foi desenvolver uma direção visual própria para o site, criando uma identidade coerente que pudesse conviver com a diversidade dos projetos e, ao mesmo tempo, manter uma conexão com a presença da organização nas redes sociais, @ato.artivista.",
            },
          },
          {
            type: "image",
            image: {
              src: "/projects/ato/1.png",
              alt: {
                en: "Vunje project page on the ATO website",
                pt: "Página do projeto Vunje no site ATO",
              },
            },
          },
          {
            type: "heading",
            text: {
              en: "The symbol as a navigation experience",
              pt: "O símbolo como experiência de navegação",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "For the homepage, the brief called for a strong, minimal use of ATO’s existing symbol. I turned this requirement into an interactive navigation element, with each of the symbol’s arcs leading to a different page of the website. To achieve this, I vectorized the rings in Adobe Illustrator and integrated the resulting artwork into the project, translating the original symbol into a functional part of the interface.",
              pt: "Para a página inicial, a proposta era utilizar o símbolo existente do ATO de forma marcante e mínima. Transformei essa diretriz em um elemento de navegação interativo, no qual cada um dos arcos do símbolo leva a uma página diferente do site. Para viabilizar essa solução, vetorizei os anéis no Adobe Illustrator e integrei o resultado ao projeto, transformando o símbolo original em uma parte funcional da interface.",
            },
          },
          {
            type: "heading",
            text: {
              en: "An evolving artistic archive",
              pt: "Um acervo artístico em construção",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "One of the platform’s central features is its archive of artworks. Because the collection depends on a growing spreadsheet of artwork information, development has progressed gradually as new content is organized and added. This ongoing process makes the project an exercise in building a digital platform that can accommodate an expanding collection while keeping its presentation structured and accessible.",
              pt: "Um dos elementos centrais da plataforma é o acervo de obras. Como a coleção depende de uma planilha em constante atualização, o desenvolvimento avança gradualmente, à medida que novas informações são organizadas e adicionadas. Esse processo contínuo torna o projeto um exercício de construção de uma plataforma digital capaz de acomodar uma coleção em expansão, mantendo sua apresentação organizada e acessível.",
            },
          },

          {
            type: "imageGrid",
            images: [
              {
                src: "/projects/ato/3.png",
                alt: {
                  en: "ATO website visual direction",
                  pt: "Direção visual do site ATO",
                },
              },
              {
                src: "/projects/ato/4.png",
                alt: {
                  en: "ATO website layout and content presentation",
                  pt: "Layout e apresentação de conteúdo do site ATO",
                },
              },
            ],
          },
          {
            type: "quote",
            text: {
              en: "fig. 1: Spreadsheet containing all information // fig. 2: Works already on the website",
              pt: "fig.1: Planilha com todas as informações // fig.2: Obras já no site",
            },
          },

          {
            type: "heading",
            text: {
              en: "Vunje",
              pt: "Vunje",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "The website also features a dedicated page for Vunje, a project developed in Alto da Conquista, in Ilhéus, Bahia. Vunje offers capoeira, Afro-Brazilian dance, percussion, cinema and visual arts to 50 children and adolescents. Through artistic learning, community and cultural expression, the initiative seeks to broaden their life opportunities and strengthen their cultural identity. Including Vunje on the platform gives the project its own space within ATO’s broader narrative of art and social transformation.",
              pt: "O site também conta com uma página dedicada ao Vunje, projeto desenvolvido no bairro Alto da Conquista, em Ilhéus (BA). A iniciativa oferece capoeira, dança afro, percussão, cinema e artes plásticas para 50 crianças e adolescentes. Por meio do aprendizado artístico, da convivência e da expressão cultural, o projeto busca ampliar suas perspectivas de vida e fortalecer sua identidade cultural. A presença do Vunje na plataforma dá visibilidade à iniciativa dentro da atuação mais ampla do ATO em arte e transformação social.",
            },
          },
          {
            type: "image",
            image: {
              src: "/projects/ato/2.png",
              alt: {
                en: "ATO website homepage",
                pt: "Página inicial do site ATO",
              },
            },
          },

          {
            type: "heading",
            text: {
              en: "A platform built over time",
              pt: "Uma plataforma construída ao longo do tempo",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "The development of ATO is intentionally gradual, following the pace at which the organization’s content and artwork records become available. Rather than treating the website as a static showcase, the project is an ongoing digital platform that brings together institutional communication, artistic documentation and social initiatives. The goal is to create a consistent foundation that can grow alongside the organization and its work.",
              pt: "O desenvolvimento da ATO acontece de forma gradual, acompanhando o ritmo em que os conteúdos da organização e os registros das obras ficam disponíveis. Em vez de tratar o site como uma vitrine estática, o projeto funciona como uma plataforma digital em evolução, reunindo comunicação institucional, documentação artística e iniciativas sociais. A proposta é construir uma base consistente que possa crescer junto com a organização e seu trabalho.",
            },
          },
        ],
      },
      {
        slug: "masca",
        year: 2023,
        title: {
          en: "Estúdio Masca",
          pt: "Estúdio Masca",
        },
        summary: {
          en: "A digital presence for an architecture studio focused on creating authentic spaces connected to their surroundings.",
          pt: "Uma presença digital para um estúdio de arquitetura focado em criar espaços autênticos e conectados ao seu entorno.",
        },

        tags: ["UX/UI", "Figma", "Next.js", "Front-end"],
        link: "https://estudiomasca.com/",
        blocks: [
          {
            type: "paragraph",
            text: {
              en: "Estúdio Masca is an architecture studio founded by architect Paula Mascarenhas in Curvelo, Minas Gerais. The studio works across Brazil, creating and transforming spaces with a strong focus on authenticity, quality and the relationship between architecture and its surroundings. It was one of the first websites I built through direct dialogue and partnership with the client.",
              pt: "O Estúdio Masca é um escritório de arquitetura fundado pela arquiteta Paula Mascarenhas, em Curvelo, Minas Gerais. O estúdio atua em diferentes regiões do Brasil, criando e transformando espaços com forte foco em autenticidade, qualidade e na relação entre arquitetura e seu entorno. Foi um dos primeiros websites que construí em diálogo e parceria direta com a cliente.",
            },
          },
          {
            type: "image",
            image: {
              src: "/projects/masca/1.png",
              alt: {
                en: "Estúdio Masca website",
                pt: "Site do Estúdio Masca",
              },
            },
          },
          {
            type: "heading",
            text: {
              en: "The Challenge",
              pt: "O desafio",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "The website needed to communicate the studio’s architectural approach while giving enough space to the projects themselves. The goal was to create a visual experience that felt editorial and sophisticated without making navigation unnecessarily complex.",
              pt: "O site precisava comunicar a abordagem do estúdio sem tirar o protagonismo dos próprios projetos. A proposta foi criar uma experiência visual com uma linguagem mais editorial e sofisticada, mas sem tornar a navegação desnecessariamente complexa.",
            },
          },
          {
            type: "imageGrid",
            images: [
              {
                src: "/projects/masca/2.webp",
                alt: {
                  en: "Projeto 2 screenshot 1",
                  pt: "Captura de tela 1 do Projeto 2",
                },
              },
              {
                src: "/projects/masca/3.webp",
                alt: {
                  en: "Projeto 2 screenshot 2",
                  pt: "Captura de tela 2 do Projeto 2",
                },
              },
            ],
          },
          {
            type: "heading",
            text: {
              en: "My approach",
              pt: "Minha abordagem",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "I developed the entire layout in Figma (although I no longer have the project), working with visual hierarchy, layouts, typography and presentation of the architectural projects. After defining the design, I translated the interface into Next.js, building the responsive frontend and turning the visual concept into a functional website.",
              pt: "Desenvolvi todo o layout no Figma (embora não disponha mais do projeto), trabalhando hierarquia visual, layouts, tipografia e apresentação dos projetos arquitetônicos. Depois de definir o design, passei o projeto para Next.js, construindo o frontend responsivo e transformando o conceito visual em um site funcional.",
            },
          },
        ],
      },
    ],
  },

  {
    key: "saas",
    label: {
      en: "SaaS & Dashboards",
      pt: "SaaS & Dashboards",
    },
    projects: [
      {
        slug: "kipia",
        year: 2026,
        title: "Kipia",
        link: "https://kipiametrics.netlify.app/",

        summary: {
          en: "B2B analytics platform designed to help small businesses understand their financial and operational performance.",
          pt: "Plataforma de analytics B2B desenvolvida para ajudar pequenas empresas a entender melhor seu desempenho financeiro e operacional.",
        },

        tags: ["UX/UI", "Product Design", "Next.js", "TypeScript", "Dashboard"],
        blocks: [
          {
            type: "paragraph",
            text: {
              en: "Kipia is a B2B analytics platform concept designed around a simple idea: business data should help people make decisions, not just fill dashboards. The project, developed in a very informal manner, with its first commit in 2024, explores how financial and operational information can be organized into a clear, useful, and scalable experience.",
              pt: "Kipia é um conceito de plataforma de analytics B2B criado a partir de uma ideia simples: dados de negócio devem ajudar na tomada de decisões, e não apenas preencher dashboards. O projeto, que foi desenvolido de maneira bem casual tendo seu primeiro commit em 2024, explora como informações financeiras e operacionais podem ser organizadas em uma experiência clara, útil e escalável.",
            },
          },
          {
            type: "imageGrid",
            images: [
              {
                src: "/projects/kipia/1.png",
                alt: {
                  en: "Projeto 2 screenshot 1",
                  pt: "Captura de tela 1 do Projeto 2",
                },
              },
              {
                src: "/projects/kipia/2.png",
                alt: {
                  en: "Projeto 2 screenshot 2",
                  pt: "Captura de tela 2 do Projeto 2",
                },
              },
            ],
          },
          {
            type: "quote",
            text: {
              en: "fig.1: Logo // fig.2: Sketch in Figma",
              pt: "fig.1: Logo // fig.2: Sketch no Figma",
            },
          },
          {
            type: "heading",
            text: {
              en: "The Challenge",
              pt: "O desafio",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "The challenge was to design a dashboard that could present a large amount of business information without overwhelming the user. Instead of simply displaying numbers and charts, the interface needed to create hierarchy, provide context and make the most relevant information easy to understand at a glance.",
              pt: "O desafio foi criar um dashboard capaz de apresentar uma grande quantidade de informações de negócio sem sobrecarregar o usuário. Em vez de simplesmente exibir números e gráficos, a interface precisava criar hierarquia, fornecer contexto e tornar as informações mais importantes fáceis de compreender rapidamente.",
            },
          },
          {
            type: "heading",
            text: {
              en: "My approach",
              pt: "Minha abordagem",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "I approached the project as a product rather than just a visual dashboard. The interface is organized around key business questions such as revenue, customer growth, subscriptions, expenses and churn. Filters, data visualization and contextual information are designed to work together, helping users move from a high-level overview into more detailed information.",
              pt: "Abordei o projeto como um produto, e não apenas como um dashboard visual. A interface é organizada em torno de questões importantes do negócio, como receita, crescimento de clientes, assinaturas, despesas e churn. Filtros, visualização de dados e informações contextuais trabalham juntos para permitir que o usuário saia de uma visão geral e avance para informações mais detalhadas.",
            },
          },
          {
            type: "image",
            image: {
              src: "/projects/kipia/3.png",
              alt: {
                en: "Kipia analytics dashboard",
                pt: "Dashboard de analytics do Kipia",
              },
            },
          },
          {
            type: "heading",
            text: {
              en: "Designed for a real product",
              pt: "Pensado para um produto real",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "Although the current version uses fictional data, the project is being structured with a future backend in mind. The frontend is designed to consume data through a service layer, making it possible to replace the mock data with a real API later without rebuilding the interface from scratch.",
              pt: "Embora a versão atual utilize dados fictícios, o projeto está sendo estruturado pensando em um backend futuro. O frontend é organizado para consumir dados através de uma camada de serviços, permitindo substituir os dados simulados por uma API real posteriormente sem precisar reconstruir a interface.",
            },
          },
          {
            type: "heading",
            text: {
              en: "From data to decisions",
              pt: "De dados a decisões",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "Kipia is an opportunity to explore the intersection between UX/UI and frontend development: information architecture, data visualization, interaction design, responsive layouts and a scalable component system all come together in the same product.",
              pt: "O Kipia é uma oportunidade para explorar a interseção entre UX/UI e desenvolvimento frontend: arquitetura da informação, visualização de dados, design de interação, layouts responsivos e um sistema de componentes escalável fazem parte do mesmo produto.",
            },
          },
        ],
      },
    ],
  },

  {
    key: "ecommerce",
    label: {
      en: "E-commerce",
      pt: "E-commerce",
    },
    projects: [],
  },

  {
    key: "mobile-app",
    label: {
      en: "Mobile App",
      pt: "Mobile App",
    },
    projects: [
      {
        slug: "noma",
        year: 2026,
        title: "Noma",
        link: "https://nomacuisine.netlify.app/",
        summary: {
          en: "A mobile experience for discovering and booking curated food and culinary experiences.",
          pt: "Uma experiência mobile para descobrir e reservar experiências gastronômicas selecionadas.",
        },

        tags: ["UX/UI", "Product Design", "React Native", "Expo", "TypeScript"],
        blocks: [
          {
            type: "paragraph",
            text: {
              en: "Noma is a fictional mobile product created as a portfolio project. The platform is focused on discovering and booking food experiences such as wine and coffee tastings, chef dinners, regional cuisine, cooking workshops and other curated experiences.",
              pt: "Noma é um produto mobile fictício criado como projeto de portfólio. A plataforma é focada na descoberta e reserva de experiências gastronômicas, como degustações de vinho e café, jantares com chefs, gastronomia regional, workshops de culinária e outras experiências selecionadas.",
            },
          },
          {
            type: "image",
            image: {
              src: "/projects/noma/1.png",
              alt: {
                en: "Noma mobile app",
                pt: "Aplicativo mobile Noma",
              },
            },
          },
          {
            type: "heading",
            text: {
              en: "More than a prototype",
              pt: "Mais do que um protótipo",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "The goal is not to build a commercially complete application, but to demonstrate the ability to take a digital product from concept to frontend. The project covers product definition, UX, UI, design system and implementation, resulting in a functional experience rather than just a collection of static screens.",
              pt: "O objetivo não é construir uma aplicação comercialmente completa, mas demonstrar a capacidade de levar um produto digital do conceito ao frontend. O projeto envolve definição do produto, UX, UI, design system e implementação, resultando em uma experiência funcional em vez de apenas uma coleção de telas estáticas.",
            },
          },
          {
            type: "heading",
            text: {
              en: "The experience",
              pt: "A experiência",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "The MVP covers around ten screens, including onboarding, home, discovery, search, experience details, date and time selection, number of participants, booking summary, confirmation, favorites and profile. Key interactions such as search, filters, favorites, scheduling and price calculation are powered by simulated data and local persistence.",
              pt: "O MVP contempla cerca de dez telas, incluindo onboarding, home, descoberta, busca, detalhes da experiência, seleção de data e horário, quantidade de participantes, resumo da reserva, confirmação, favoritos e perfil. Interações importantes como busca, filtros, favoritos, agendamento e cálculo de valores utilizam dados simulados e persistência local.",
            },
          },
          {
            type: "image",
            image: {
              src: "/projects/noma/2.png",
              alt: {
                en: "Noma mobile app",
                pt: "Aplicativo mobile Noma",
              },
            },
          },
          {
            type: "heading",
            text: {
              en: "Built to evolve",
              pt: "Pensado para evoluir",
            },
          },
          {
            type: "paragraph",
            text: {
              en: "The architecture is intentionally designed so that the simulated data can later be replaced by a real API without requiring a complete rebuild of the interface. This makes Noma a practical exploration of UX/UI, frontend architecture and mobile development, while leaving the door open for a future backend implementation.",
              pt: "A arquitetura foi pensada para que os dados simulados possam posteriormente ser substituídos por uma API real sem exigir uma reconstrução completa da interface. Assim, o Noma funciona como uma exploração prática de UX/UI, arquitetura frontend e desenvolvimento mobile, deixando o caminho aberto para uma futura implementação de backend.",
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
