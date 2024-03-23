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
        title:"SUPERIOR DE TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS",
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


