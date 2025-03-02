import AutoStoriesIcon from '@mui/icons-material/AutoStories';


const routes = {
    "contact":"Contato"
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

const Translation = {
    translations: {
        "home":home,
        "contact":contact,
        "routes":routes
    }
}

export default Translation