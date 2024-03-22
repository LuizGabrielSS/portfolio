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

export default {
    translations: {
      header: {
        title: 'Portfólio'
      },
      pages:{
        home:"Home",
        about:"Sobre",
        contact:"Contato"
      },
      about:about,
      contact:contact
    }
  }


