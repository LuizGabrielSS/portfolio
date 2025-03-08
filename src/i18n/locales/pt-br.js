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
    "search": {
        "label":"Pesquisar",
        "placeholder":"Digite sua pesquisa aqui"
    },
    "filter": {
        "label":"Filtro"
    },
    "formation":[
        {
            "name":'Analise e desenvolvimento de sistema',
            "institution":"Unicesumar",
            "description":'Formação voltada para a criação e analise de projetos de novos sistemas e softwares, com foco em segurança e performance',
            "tags":['Universidade','Graduação'],
            "date":'2026, Jan',
            'image':'/formation/unicesumar.jpg'
        },
        {
            "name":'UI Design para Devs',
            "institution":"Alura",
            "description":'Construa interfaces atraentes com fundamentos do Design',
            "tags":['UI','Design'],
            "date":'2025, Fev',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Criando automações com visão computacional',
            "institution":"Botcity",
            "description":'Desenvolvimento de RPAs com o uso de visão computacional para aplicações desktop',
            "tags":['Python','Botcity','RPA'],
            "date":'2024, Out',
            'image':'/formation/botcity.jpg'
        },
        {
            "name":'Desenvolvimento de automações em Python com BotCity',
            "institution":"Botcity",
            "description":'Desenvolvimento de automações com o uso da lib botcity',
            "tags":['Python','Botcity','RPA'],
            "date":'2024, Out',
            'image':'/formation/botcity.jpg'
        },
        {
            "name":'Orquestração de python RPA',
            "institution":"Botcity",
            "description":'Orquestrando RPAs com o uso da plataforma botcity',
            "tags":['Python','Botcity','RPA'],
            "date":'2024, Out',
            'image':'/formation/botcity.jpg'
        },
        {
            "name":'Segurança com python RPA',
            "institution":"Botcity",
            "description":'Segurança das RPAs com o uso da plataforma botcity',
            "tags":['Python','Botcity','RPA'],
            "date":'2024, Out',
            'image':'/formation/botcity.jpg'
        },
        {
            "name":'Google Looker Studio',
            "institution":"Alura",
            "description":'Domine uma das mais populares ferramentas de Business Intelligence do mercado e aprenda a construir dashboards interativos usando Google Looker Studio.',
            "tags":['Looker','GCP','Data Analysis'],
            "date":'2024, Ago',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Avançando em Data Science com python',
            "institution":"Alura",
            "description":'Desenvolvendo de forma melhor e mais pratica a analise de dados com python',
            "tags":['Python','Data Analysis','Data Science'],
            "date":'2024, Jul',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'BigQuery',
            "institution":"Alura",
            "description":'Domine o banco de dados da nuvem Google',
            "tags":['GCP','Data Analysis','BigQuery'],
            "date":'2024, Jun',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Otimização com python',
            "institution":"Alura",
            "description":'Otimização de analise de dados com o uso de python',
            "tags":['Python','Data Analysis'],
            "date":'2024, Jun',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Python para data science',
            "institution":"Alura",
            "description":'Aprenda Python com foco em Data Science!',
            "tags":['Python','Data Analysis','Data Science'],
            "date":'2024, Jun',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Começando com flask: Framework web de python',
            "institution":"Alura",
            "description":'Crie aplicações web em Python usando Flask',
            "tags":['Python','Flask','API'],
            "date":'2024, Mar',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'RPA com UiPath: Curso Prático - Aprenda do Zero',
            "institution":"Alura",
            "description":'Desenvolvimento de RPA com o uso da plataforma UiPath',
            "tags":['UiPath','RPA'],
            "date":'2024, Mar',
            'image':'/formation/uipath.jpg'
        },
        {
            "name":'Segurança de software com OWASP',
            "institution":"Alura",
            "description":'Aprenda a lidar com o Top 10 dos maiores riscos de segurança em uma aplicação web e conheça o padrão de verificação de segurança de aplicações.',
            "tags":['Segurança','OWASP'],
            "date":'2024, Fev',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'ISO 31000:2018 – RISK MANAGEMENT (FOUNDATION)',
            "institution":"Standars and Best pratice",
            "description":'A ISO 31000:2018 é uma norma internacional que fornece diretrizes para a gestão de riscos em organizações, visando melhorar a tomada de decisões e alcançar objetivos.',
            "tags":['Segurança','ISO'],
            "date":'2024, Jan',
            'image':'/formation/sbp.jpg'
        },
        {
            "name":'ISO/IEC 20000:2018 – FUNDAÇÃO DE SISTEMAS DE GERENCIAMENTO DE SERVIÇOS DE TI (ITSMS)',
            "institution":"Standars and Best pratice",
            "description":'A ISO/IEC 20000:2018 estabelece requisitos para um sistema de gestão de serviços de TI, focando na entrega eficaz e eficiente de serviços com qualidade.',
            "tags":['Segurança','ISO'],
            "date":'2024, Jan',
            'image':'/formation/sbp.jpg'
        },
        {
            "name":'ISO/IEC 27001:2022 INFORMATION SKILLFRONT SECURITY ASSOCIATE',
            "institution":"SkillFront",
            "description":'A ISO/IEC 27001:2022 define os requisitos para um sistema de gestão de segurança da informação, visando proteger dados e garantir a confidencialidade, integridade e disponibilidade das informações.',
            "tags":['Segurança','ISO'],
            "date":'2023, Nov',
            'image':'/formation/skillfront.jpg'
        },
        {
            "name":'Gerencie estados em React com Redux',
            "institution":"Alura",
            "description":'Escale o gerenciamento de estados em React com diferentes soluções',
            "tags":['React','Redux','web','Javascript'],
            "date":'2023, Nov',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Desenvolva aplicações web com javascript',
            "institution":"Alura",
            "description":'Domine uma das linguagens de programação mais usadas no mercado e desenvolva um projeto com HTML, CSS e JavaScript do zero.',
            "tags":['web','Javascript'],
            "date":'2023, Mar',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Desenvolva seu primeiro app com React Native',
            "institution":"Alura",
            "description":'Aprenda os primeiros passos do React Native e crie aplicativos para Android e iOS simultaneamente',
            "tags":['React','React native','mobile','Javascript'],
            "date":'2022, Ago',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'React JS',
            "institution":"Alura",
            "description":'Crie aplicações web modernas com React!',
            "tags":['React','web','Javascript'],
            "date":'2022, Mai',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Front end',
            "institution":"Alura",
            "description":'Do zero a uma carreira de sucesso no mercado web, com HTML, CSS, JavaScript!',
            "tags":['web','Javascript','HTML','CSS'],
            "date":'2022, Abr',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Django',
            "institution":"Alura",
            "description":'Criando sites e experiências na web com Python',
            "tags":['web','Python','HTML','CSS'],
            "date":'2022, Jan',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Aprenda a programar em python com orientação a objetos',
            "institution":"Alura",
            "description":'Aprenda a linguagem, mergulhando no paradigma da orientação a objetos',
            "tags":['Python'],
            "date":'2022, Jan',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Iniciante em programação',
            "institution":"Alura",
            "description":'O caminho das pedras para entrar no universo da programação e começar com a criação de sites utilizando as linguagens populares CSS, HTML e JavaScript.',
            "tags":['starter'],
            "date":'2022, Jan',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Aprenda a programar em Javascript com foco no back-end',
            "institution":"Alura",
            "description":'Aprenda a usar JavaScript fora do navegador',
            "tags":['starter'],
            "date":'2022, Jan',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'HTML e CSS',
            "institution":"Alura",
            "description":'Crie páginas incríveis com as tecnologias da Web',
            "tags":['web','HTML','CSS'],
            "date":'2022, Jan',
            'image':'/formation/alura.jpg'
        },
        {
            "name":'Desenvolva aplicações Web Acessíveis',
            "institution":"Alura",
            "description":'Melhore à experiência dos usuários com boas práticas de Acessibilidade em Front-End',
            "tags":['web','acessibilidade'],
            "date":'2021, Out',
            'image':'/formation/alura.jpg'
        },
    ]
}

const projects = {
    "search": {
        "label":"Pesquisar",
        "placeholder":"Digite sua pesquisa aqui"
    },
    "data":[
        {
            "name":"Agitae",
            "description":"Um projeto antigo de como criar um possivel aplicativo para contratar festas de forma mais pratica",
            "language":"Javascript",
            "tech":["react-native","expo"],
            "github":"https://github.com/LuizGabrielSS/Agitae2.0",
            "type":"mobile",
            "image":"/projects/agitae.jpeg",
            "url":null
        },
        {
            "name":"Expo-CEP",
            "description":"Um projeto simples apenas para praticar o uso de APIs no react native e tambem para testar o uso de APIs gratuitas para CEP",
            "language":"Javascript",
            "tech":["react-native","axios","expo"],
            "github":"https://github.com/LuizGabrielSS/Expo-CEP",
            "type":"mobile",
            "image":"/projects/expo_cep.jpeg",
            "url":null
        },
        {
            "name":"Receitas Web",
            "description":"Um dos projetos que todo dev em algum momento cria, uma pokedex, um jeito simples de praticar uma nova linguagem para frontend e tambem as suas possibilidades",
            "language":"Javascript",
            "tech":["react","axios"],
            "github":"https://github.com/LuizGabrielSS/pokedex",
            "type":"frontend",
            "url":"https://luizgabrielss.github.io/pokedex/",
            "image":"/projects/pokedex.jpeg"
        },
        {
            "name":"Receitas Web",
            "description":"Um projeto que com o uso de API consegue criar uma pagina web onde o usuario pode colocar os ingredientes que tem em sua geladeira e irá mostrar para ele as possiveis receitas e seus detalhes que faltam",
            "language":"Javascript",
            "tech":["react","axios"],
            "github":"https://github.com/LuizGabrielSS/receitas-web",
            "type":"frontend",
            "url":"https://luizgabrielss.github.io/receitas-web/",
            "image":"/projects/receitas.jpeg"
        },
        {
            "name":"Movies Web",
            "description":"Um projeto simples utilizando uma API para obter informações de filmes e criar uma pagina web para obter informações e classificações de filmes",
            "language":"Javascript",
            "tech":["react","axios"],
            "github":"https://github.com/LuizGabrielSS/movies-web",
            "type":"frontend",
            "url":"https://luizgabrielss.github.io/movies-web/",
            "image":"/projects/movies.jpeg"
        },
        {
            "name":"Lazy Dev",
            "description":"Uma coleção de projetos pessoais para tornar a vida dos devs mais praticas, com pequenos projetos com codigos como um leitor de email",
            "language":"python",
            "tech":["hugging face","translate"],
            "github":"https://github.com/LuizGabrielSS/lazy-dev",
            "type":"backend",
            "image":"/projects/lazy.jpeg",
            "url":null
        },
    ]
}

const Translation = {
    translations: {
        "home":home,
        "contact":contact,
        "routes":routes,
        "exp":exp,
        "school":school,
        "projects":projects
    }
}

export default Translation