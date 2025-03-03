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

const Translation = {
    translations: {
        "home":home,
        "contact":contact,
        "routes":routes
    }
}

export default Translation