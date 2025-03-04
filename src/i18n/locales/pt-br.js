const routes = {
    "contact":"Contato",
    "project":"Projetos",
    "exp":"Experiencia",
    "school":"Formação",
}

const home = {
    "about":{
        "title":"Sobre mim",
        "me":{
            "author":"L. Gabriel",
            "text":"Acredito que tudo que sou depende muito do meu entorno e que maneira melhor do que me conhecer então do que pelos olhos daqueles ao meu redor"
        },
        "them":[
            {
                "author":"Gabriele, Turismologa",
                "text":"É uma honra acompanhar os desdobramentos e a creditar na evolução dele como individuo, amigo e profissional",
                "icon":"turismologa"
            },
            {
                "author":"Matheus, Jornalista",
                "text":"Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon":"jornalista"
            },
            {
                "author":"Adriana, ACS",
                "text":"Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon":"ACS"
            },
            {
                "author":"Davi, TR",
                "text":"Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon":"Radiologista"
            },
            {
                "author":"Ezequiel, Atuário",
                "text":"Tem um otimo foco em seus projetos e tarefas, alem de ser determinado e persistente",
                "icon":"atuario"
            },
            {
                "author":"Louise, Filosofa",
                "text":"Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon":"filosofa"
            },
            {
                "author":"Roberto, Desenvolvedor",
                "text":"Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon":"Dev"
            },
            {
                "author":"Gustavo, Desenvolvedor",
                "text":"Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon":"Dev"
            },
            {
                "author":"Alisson, Desenvolvedor",
                "text":"Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon":"Dev"
            },
            {
                "author":"Alessandro, Tech Lead",
                "text":"Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon":"Tech Lead"
            },
            {
                "author":"Pedro, Tech Lead",
                "text":"Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon":"Tech Lead"
            }
        ]
    }
    }

const contact = {
    "submit":{
        "status_ok":"Email enviado com sucesso",
        "status_not_ok":"Erro ao tentar enviar a mensagem, por favor tente novamente mais tarde",
        "button":"Enviar email"
    },
    "form":{
        "status":{
            "erro":"O campo não foi preenchido devidamente"
        },
        "email":{
            "placeholder":"email@email.com",
            "title":"Email"
        },
        "name":{
            "placeholder":"Nome completo",
            "title":"Nome completo"
        },
        "message":{
            "placeholder":"Mensagem que deseja enviar",
            "title":"Mensagem"
        }
    }
}

const exp = {
    "content":[
        {
            "title":"Helpdesk",
            "year":"2021",
            "month":"Junho",
            "icon":"helper",
            "year_end":"2022",
            "month_end":"Junho",
            "description":"Como helpdesk tive a incrivel oportunidade de começar a conhecer o mundo da tecnologia na pratica e assim podendo entender como era o real fluxo para o desenvolvimento de novas tecnologias e tambem aprendendo como criar soluções seguras",
            "company":"Stone Co.",
            "team":"Segurança Fisica",
            "technologies":["python","Mssql","Mysql","GCP"],
            "picture":"https://conteudos.xpi.com.br/wp-content/uploads/2024/05/stoneco-600.png"
        },
        {
            "title":"Analista Junior Segurança da informação",
            "year":"2022",
            "month":"Junho",
            "icon":"analyst",
            "year_end":"2024",
            "month_end":"Maio",
            "description":"Como analista de segurança tive a oportunidade de começar a criar minhas proprias soluções para os problemas que tinhamos utilizando de tecnologias como react e python para a criação de novos sistemas para facilitar e nosso dia a dia de forma segura",
            "company":"Stone Co.",
            "team":"Segurança Fisica",
            "technologies":["python","Mssql","Mysql","GCP","Javascript","React","React Native","Node js","Docker"],
            "picture":"https://conteudos.xpi.com.br/wp-content/uploads/2024/05/stoneco-600.png"
        },
        {
            "title":"Desenvolvedor junior",
            "year":"2024",
            "month":"Maio",
            "icon":"dev",
            "year_end":"Atualmente",
            "month_end":"-",
            "description":"Como desenvolvedor na CIA tenho diariamente a oportunidade de criar ferramentas e automações que tornem o dia a dia de outros colaboradores da minha empresa ainda mais pratico e mais rapido, para que eles tenham mais tempo para focar em atividades analiticas",
            "company":"Stone Co.",
            "team":"CIA(Centro de Inteligencia e Automação)",
            "technologies":["python","Mssql","Mysql","GCP","Javascript","React","React Native","Node js","Docker","Big query"],
            "picture":"https://conteudos.xpi.com.br/wp-content/uploads/2024/05/stoneco-600.png"
        },
    ]
}

const school = {
    "formation":[
        {
            "name":'Analise e desenvolvimento de sistema - Unicesumar',
            "description":'Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!',
            "tags":['Universidade','Graduação'],
            "date":'2026, Jan',
            'image':'/formation/unicesumar.jpg'
        },
        {
            "name":'Analise e desenvolvimento de sistema - Unicesumars',
            "description":'Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!',
            "tags":['Universidade','Graduação'],
            "date":'2026, Jan',
            'image':'/formation/unicesumar.jpg'
        },
    ]
}

const Translation = {
    translations: {
        "home":home,
        "contact":contact,
        "routes":routes,
        "exp":exp,
        "school":school
    }
}

export default Translation