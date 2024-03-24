const about = {
  resume:{
    title:"Resumo",
    resume:"Desenvolvedor com foco em desenvolvimento web e mobile.Experiencia e pratica em desenvolvimento fullstack, com o uso de python no backend na criação de APIrest e com o uso de React, React native e expo para o frontend.Utilizando tambem github actions para o desenvolvimento de pipeline, conhecimento de infraestrutura no GCP e Dockers para entrega de serviços e banco de dados sql server e mysql."
  },
  abilities:{
    title:"Habilidades",
    hardskill:{
      title:"Hard Skills",
      abilities:[
        "Desenvovimento de APIs rest",
        "Desenvolvimento de automações",
        "Desenvolvimento mobile",
        "Desenvolvimento web",
        "Desenvolvimento de Pipeline(CI/CD)",
        "Conhecimento em GCP",
        "Manipulação e uso de APIs",
        "Portugues(Nativo)",
        "Inglês(Fluente)",
        "Espanhol(Intermediario)",
        "Mandarim(basico)"
      ]
    },
    softskill:{
      title:"Soft Skills",
      abilities:[
        "Comunicação",
        "Relacionamento interpessoal",
        "Trabalho em equipe",
        "Resolução de problemas",
        "Criatividade"
      ]
    }
  },
  experience:{
    title:"Experiencias",
    profissional:{
      title:"Experiencias profissionais",
      jobs:[
        {
          title:"Jovem aprendiz - Helpdesk",
          time:"Abril de 2021 - Maio de 2022",
          description:{
            title:"Descrição",
            ativities:[
              "Desenvolvimento de APIs rest",
              "Desenvolvimento mobile",
              "Gestão e manutenção de CFTV",
              "Gestão e manutenção de controle de acesso"
            ]
          },
          team:"Segurança Física",
          company:"Stone Co."
        },
        {
          title:"Analista Junior - Segurança da informação",
          time:"Maio de 2022 - Atualmente",
          description:
          {
            title:"Descrição",
            ativities:[
              "Desenvolvimento de APIs rest",
              "Desenvolvimento web",
              "Desenvolvimento mobile",
              "Desenvolvimento de Pipeline(CI/CD)",
              "Gestão e manutenção de CFTV",
              "Gestão e manutenção de controle de acesso"
            ]
          },
          team:"Segurança Física",
          company:"Stone Co."
        },
      ]
    },
    personal:{
      title:"Experiencias pessoais",
      intership:{
        title:"Intercambio para a china",
        descrption:"Estive no país por breve periodo durante o meu intercambio no ensino medio para aprender sobre a lingua e a cultura chinesa, o que expandiu tanto meu conhecimento pessoal, quanto o meu conhecimento profissional"
      }
    }
  },
  school:{
    academic:{
      title:"Escolar",
      high:{
        title:"Colegio Estadual Matematico Joaquim Gomes de Souza Intercultural Brasil - China",
        time:"2017 - 2019"
      },
      graduation:{
        title:"Superior de Tecnologia em Análise e Desenvolvimento de Sistemas",
        time:"2024 - 2025"
      }
    },
    certificate:{
      title:"Certificações",
      button:"Ver certificado",
      cursos:[
        {
          title:"Python",
          cursos:[
            {
              title:"Django",
              url:"https://cursos.alura.com.br/user/luiz-samuel/degree-django-v224766-224766/certificate",
            },
            {
              title:"Começando com Flask: framework web de Python",
              url:"https://cursos.alura.com.br/degree/certificate/d4ca8fe7-e50e-45df-8450-607d5623771f"
            },
          ]
        },
        {
          title:"Javascript",
          cursos:[
            {
              title:"React JS",
              url:"https://cursos.alura.com.br/user/luiz-samuel/degree-react-js-123128/certificate"
            },
            {
              title:"Gerencie estados em React com Redux",
              url:"https://cursos.alura.com.br/user/luiz-samuel/degree-react-gestao-estados-495634/certificate"
            },
            {
              title:"Desenvolva seu primeiro app com React Native",
              url:"https://cursos.alura.com.br/user/luiz-samuel/degree-react-native-v419498-419498/certificate"
            }
          ]
        },
        {
          title:"Certificações ISO",
          cursos:[
            {
              title:"ISO - 31000:2018",
              url:"https://certification-portal.sandbp.net/certificate-verification-page/1336A34D2-3223A87-312AA88/"
            },
            {
              title:"ISO - 20000:2018",
              url:"https://certification-portal.sandbp.net/certificate-verification-page/13369BEDD-3304768-312AA88/"
            },
            {
              title:"ISO - 27001:2022",
              url:"https://www.skillfront.com/certifications/SkillFront-SFE0164912932f04-49389931703773.pdf"
            },
          ],
        },
        {
          title:"Outros",
          cursos:[
            {
              title:"Segurança de software com OWASP",
              url:"https://cursos.alura.com.br/user/luiz-samuel/degree-owasp-43209/certificate"
            },
            {
              title:"RPA com UiPath: Curso Prático - Aprenda do Zero",
              url:"https://www.udemy.com/certificate/UC-001719a4-782f-4d90-9545-0dd63007eb99/"
            },
            {
              title:"Alura",
              url:"https://cursos.alura.com.br/user/luiz-samuel/fullCertificate/4a4d908f4ecced3732170c26d3b92516"
            }
          ]
        }
      ],
    }
  }
}

const contact = {
  form:{
    title:"Formulario",
    name:{
      title:"Nome completo",
      placeholder:"Preencha o campo com o seu nome completo"
    },
    email:{
      title:"Email",
      placeholder:"exemplo@exemplo.com.br"
    },
    message:{
      title:"Mensagem",
      placeholder:"Digite a sua mensagem ao desenvolvedor"
    },
    status:{
      erro:"Campo em branco!"
    }
  },
  submit:{
    title:"Enviar email",
    status_ok:"Email enviado com sucesso!",
    status_not_ok:"Erro no envio do email"
  }
}

const project = {
  backend:{
    title:"Backend",
    languages:[
      {
        title:"Python",
        categorias:[
          {
            title:"Automações",
            projects:[
              {
                title:"Auto-Relatorio-Email",
                description:"Desenvolvi uma solução de automação robusta que permite aos usuários receberem relatórios detalhados sobre seus e-mails diretamente em seus dispositivos móveis via Telegram. Esta aplicação fullstack lê os e-mails do usuário e os classifica em duas categorias distintas: Spam e Não Spam. A integração com o Telegram permite que os usuários recebam notificações instantâneas, mantendo-os informados sobre sua caixa de entrada, mesmo em trânsito.",
                github:"https://github.com/LuizGabrielSS/auto-email-relatorio",
              }
            ]
          },
          {
            title:"API rest",
            projects:[
              {
                title:"Como criar uma API rest",
                description:"Este guia abrangente é um convite para explorar e dominar a criação de APIs REST utilizando Python e Flask. Se você é novo nesse mundo ou deseja aprimorar suas habilidades, este recurso é essencial para você. Vamos mergulhar fundo no conceito de repositório, fundamental para o desenvolvimento de aplicações web.",
                github:"https://github.com/LuizGabrielSS/Como_criar_uma_APIREST",
              },
              {
                title:"API rest segura",
                description:"Este guia abrangente é um convite para explorar e dominar a criação de APIs REST seguras utilizando Python, além de aprender a implementar uma camada adicional de segurança para proteger suas aplicações web. Se você deseja entender profundamente como garantir a segurança de suas APIs e proteger os dados de seus usuários, este recurso é essencial para você.",
                github:"https://github.com/LuizGabrielSS/API-SEGURA",
              },
              {
                title:"API rest com pipeline",
                description:"Este guia abrangente é uma jornada rumo ao domínio do desenvolvimento de APIs REST e à implementação de pipelines de integração contínua utilizando GitHub Actions. Seja você um iniciante ou um desenvolvedor experiente em busca de aprimoramento, este recurso é essencial para o seu arsenal de habilidades.",
                github:"https://github.com/LuizGabrielSS/pipeline-init",
              },
            ]
          }
        ]
      }
    ]
  },
  frontend:{
    title:"Frontend",
    languages:[
      {
        title:"React JS",
        projects:[
          {
            title:"Pokedex",
            description:"Desenvolvi um projeto utilizando a API da Pokédex em conjunto com ReactJS, combinando minha paixão pelo universo Pokémon com meu conhecimento em desenvolvimento front-end. Através dessa integração, pude explorar e aprender sobre manipulação de dados e renderização de componentes, resultando em uma aplicação interativa e envolvente para os entusiastas de Pokémon",
            github:"https://github.com/LuizGabrielSS/pokedex",
            site:"https://luizgabrielss.github.io/pokedex/"
          },
          {
            title:"Movies",
            description:"Concluí um projeto empregando uma API externa para acessar informações de filmes e realizar análises de dados, tudo isso utilizando ReactJS. Essa abordagem me permitiu aprofundar minha compreensão sobre integração de APIs e manipulação de dados, resultando em uma aplicação dinâmica e informativa para os amantes do cinema.",
            github:"https://github.com/LuizGabrielSS/movies-web",
            site:"https://luizgabrielss.github.io/movies-web/"
          },
          {
            title:"Receitas",
            description:"Meu projeto utiliza uma API externa para buscar uma variedade de receitas e sugestões criativas de pratos, tudo isso implementado com ReactJS. Essa integração permitiu-me explorar a busca e apresentação de dados dinâmicos, resultando em uma plataforma que inspira os amantes da culinária com novas ideias e possibilidades de receitas.",
            github:"https://github.com/LuizGabrielSS/receitas-web",
            site:"https://luizgabrielss.github.io/receitas-web/"
          },
        ],
      },
      {
        title:"React native/Expo",
        projects:[
          {
            title:"Expo-CEP",
            description:"Desenvolvi um projeto com o propósito de explorar o uso de APIs externas, utilizando especificamente a API de CEP no ambiente React Native/Expo. Esta iniciativa permitiu-me aprofundar minha compreensão sobre integração de APIs em aplicativos móveis, proporcionando uma experiência prática e enriquecedora no desenvolvimento com tecnologias front-end para dispositivos móveis",
            github:"https://github.com/LuizGabrielSS/Expo-CEP",
            site:""
          },
          {
            title:"Agitae",
            description:"Elaborei um projeto mais elaborado inspirado na concepção de um aplicativo semelhante ao iFood, porém direcionado para o universo das festas e eventos. Este projeto envolveu a implementação de funcionalidades avançadas, desde a busca e seleção de fornecedores de alimentos e bebidas até a integração de sistemas de pagamento e agendamento de serviços. Utilizei tecnologias modernas, como React Native ou Flutter, para desenvolver uma interface intuitiva e responsiva, proporcionando uma experiência de usuário fluida e satisfatória durante o planejamento de eventos festivos.",
            github:"https://github.com/LuizGabrielSS/Agitae2.0",
            site:""
          }
        ]
      }
    ]
  },
  site:"Ver site",
  github:"Ver repositorio"
}

export default {
    translations: {
      header: {
        title: 'Portfólio'
      },
      pages:{
        home:"Home",
        about:"Sobre",
        contact:"Contato",
        project:"Projetos"
      },
      about:about,
      contact:contact,
      project:project
    }
  }


