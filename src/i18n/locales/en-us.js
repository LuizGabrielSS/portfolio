const routes = {
    "contact":"Contact"
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
                "text": "It is an honor to witness his developments and believe in his evolution as an individual, friend, and professional",
                "icon": "turismologa"
            },
            {
                "author": "Matheus, Journalist",
                "text": "Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon": "jornalista"
            },
            {
                "author": "Ezequiel, Accountant Scientist",
                "text": "He has great focus on his projects and tasks, as well as being determined and persistent",
                "icon": "contador"
            },
            {
                "author": "Louise, Philosopher",
                "text": "Lorem ipsum dolor sit amet. Vel galisum cumque et accusantium unde in autem distinctio. Nam quas quasi et dolorum omnis id molestias laborum aut facilis recusandae!",
                "icon": "filosofia"
            },
        ]
    }
}

const contact = {
    "submit": {
        "status_ok": "Email sent successfully",
        "status_not_ok": "Error trying to send the message, please try again later"
    },
    "form": {
        "status": {
            "erro": "The field was not filled in correctly"
        },
        "name": {
            "placeholder": "Fill in the field with your full name",
            "title": "Full name"
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