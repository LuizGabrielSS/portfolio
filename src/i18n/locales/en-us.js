const routes = {
    "contact":"Contact",
    "project":"Projects",
    "exp":"Experience",
    "school":"Education",
}

const home = {
    "about": {
        "title": "About Me",
        "me": {
            "author": "L. Gabriel",
            "text": "I believe that everything I am depends a lot on my surroundings and what better way to get to know me than through the eyes of those around me"
        },
        "them": [
            {
                "author": "Gabriele, Tourismologist",
                "text": "It is an honor to follow his developments and believe in his evolution as an individual, friend, and professional",
                "icon": "turismologa"
            },
            {
                "author": "Matheus, Journalist",
                "text": "Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon": "jornalista"
            },
            {
                "author": "Adriana, ACS",
                "text": "Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon": "ACS"
            },
            {
                "author": "Davi, TR",
                "text": "Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon": "Radiologista"
            },
            {
                "author": "Ezequiel, Actuary",
                "text": "He has great focus on his projects and tasks, as well as being determined and persistent",
                "icon": "atuario"
            },
            {
                "author": "Louise, Philosopher",
                "text": "Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon": "filosofa"
            },
            {
                "author": "Roberto, Developer",
                "text": "Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon": "Dev"
            },
            {
                "author": "Gustavo, Developer",
                "text": "Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon": "Dev"
            },
            {
                "author": "Alisson, Developer",
                "text": "Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon": "Dev"
            },
            {
                "author": "Alessandro, Tech Lead",
                "text": "Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon": "Tech Lead"
            },
            {
                "author": "Pedro, Tech Lead",
                "text": "Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon": "Tech Lead"
            }
        ]
    }
}

const contact = {
    "submit": {
        "status_ok": "Email sent successfully",
        "status_not_ok": "Error trying to send the message, please try again later",
        "button":"Send email"
    },
    "form": {
        "status": {
            "erro": "The field was not filled in correctly"
        },
        "email":{
            "placeholder":"email@email.com",
            "title":"Email"
        },
        "name":{
            "placeholder":"Full name",
            "title":"Full name"
        },
        "message":{
            "placeholder":"Message that you want to send",
            "title":"Message"
        }
    }
}

const exp = {
    "content":[
        {
            "title":"Helpdesk",
            "year":"2021",
            "month":"June",
            "icon":"helper",
            "year_end":"2022",
            "month_end":"June",
            "description":"As a helpdesk, I had the incredible opportunity to start getting to know the world of technology in practice and thus being able to understand what the real flow for the development of new technologies was and also learning how to create secure solutions",
            "company":"Stone Co.",
            "team":"Physical Security",
            "technologies":["python","Mssql","Mysql","GCP"],
            "picture":"https://conteudos.xpi.com.br/wp-content/uploads/2024/05/stoneco-600.png"
        },
        {
            "title":"Junior Information Security Analyst",
            "year":"2022",
            "month":"June",
            "icon":"analyst",
            "year_end":"2024",
            "month_end":"May",
            "description":"As a security analyst, I had the opportunity to start creating my own solutions for the problems we had using technologies such as react and python to create new systems to facilitate our daily lives in a secure way",
            "company":"Stone Co.",
            "team":"Physical Security",
            "technologies":["python","Mssql","Mysql","GCP","Javascript","React","React Native","Node js","Docker"],
            "picture":"https://conteudos.xpi.com.br/wp-content/uploads/2024/05/stoneco-600.png",
        },
        {
            "title":"Junior Developer",
            "year":"2024",
            "month":"May",
            "icon":"dev",
            "year_end":"Currently",
            "month_end":"-",
            "description":"As a developer at CIA, I have the daily opportunity to create tools and automations that make the day-to-day of other employees in my company even more practical and faster, so they have more time to focus on analytical activities",
            "company":"Stone Co.",
            "team":"CIA (Center for Intelligence and Automation)",
            "technologies":["python","Mssql","Mysql","GCP","Javascript","React","React Native","Node js","Docker","Big query"],
            "picture":"https://conteudos.xpi.com.br/wp-content/uploads/2024/05/stoneco-600.png",
        }
    ]
}

const Translation = {
    translations: {
        "home":home,
        "contact":contact,
        "routes":routes,
        "exp":exp
    }
}

export default Translation