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

const school = {
    "search": {
        "label":"Search",
        "placeholder":"Type your search here"
    },
    "filter": {
        "label":"Filter"
    },
    "formation":[
        {
            "name": "System Analysis and Development",
            "institution": "Unicesumar",
            "description": "Training focused on the creation and analysis of new system and software projects, with an emphasis on security and performance",
            "tags": ["University", "Undergraduate"],
            "date": "Jan, 2026",
            "image": "/formation/unicesumar.jpg"
        },
        {
            "name": "UI Design for Devs",
            "institution": "Alura",
            "description": "Build attractive interfaces with design fundamentals",
            "tags": ["UI", "Design"],
            "date": "Feb, 2025",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Creating Automations with Computer Vision",
            "institution": "Botcity",
            "description": "Development of RPAs using computer vision for desktop applications",
            "tags": ["Python", "Botcity", "RPA"],
            "date": "Oct, 2024",
            "image": "/formation/botcity.jpg"
        },
        {
            "name": "Automation Development in Python with BotCity",
            "institution": "Botcity",
            "description": "Development of automations using the BotCity library",
            "tags": ["Python", "Botcity", "RPA"],
            "date": "Oct, 2024",
            "image": "/formation/botcity.jpg"
        },
        {
            "name": "Python RPA Orchestration",
            "institution": "Botcity",
            "description": "Orchestrating RPAs using the BotCity platform",
            "tags": ["Python", "Botcity", "RPA"],
            "date": "Oct, 2024",
            "image": "/formation/botcity.jpg"
        },
        {
            "name": "Security with Python RPA",
            "institution": "Botcity",
            "description": "Security of RPAs using the BotCity platform",
            "tags": ["Python", "Botcity", "RPA"],
            "date": "Oct, 2024",
            "image": "/formation/botcity.jpg"
        },
        {
            "name": "Google Looker Studio",
            "institution": "Alura",
            "description": "Master one of the most popular Business Intelligence tools on the market and learn how to build interactive dashboards using Google Looker Studio.",
            "tags": ["Looker", "GCP", "Data Analysis"],
            "date": "Aug, 2024",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Advancing in Data Science with Python",
            "institution": "Alura",
            "description": "Improving and making data analysis with Python better and more practical",
            "tags": ["Python", "Data Analysis", "Data Science"],
            "date": "Jul, 2024",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "BigQuery",
            "institution": "Alura",
            "description": "Master Google Cloud's database",
            "tags": ["GCP", "Data Analysis", "BigQuery"],
            "date": "Jun, 2024",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Optimization with Python",
            "institution": "Alura",
            "description": "Optimizing data analysis using Python",
            "tags": ["Python", "Data Analysis"],
            "date": "Jun, 2024",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Python for Data Science",
            "institution": "Alura",
            "description": "Learn Python with a focus on Data Science!",
            "tags": ["Python", "Data Analysis", "Data Science"],
            "date": "Jun, 2024",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Getting Started with Flask: Python Web Framework",
            "institution": "Alura",
            "description": "Create web applications in Python using Flask",
            "tags": ["Python", "Flask", "API"],
            "date": "Mar, 2024",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "RPA with UiPath: Practical Course - Learn from Scratch",
            "institution": "Alura",
            "description": "Develop RPA using the UiPath platform",
            "tags": ["UiPath", "RPA"],
            "date": "Mar, 2024",
            "image": "/formation/uipath.jpg"
        },
        {
            "name": "Software Security with OWASP",
            "institution": "Alura",
            "description": "Learn how to handle the Top 10 security risks in a web application and understand the application security verification standard.",
            "tags": ["Security", "OWASP"],
            "date": "Feb, 2024",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "ISO 31000:2018 – RISK MANAGEMENT (FOUNDATION)",
            "institution": "Standards and Best Practice",
            "description": "ISO 31000:2018 is an international standard that provides guidelines for risk management in organizations, aiming to improve decision-making and achieve objectives.",
            "tags": ["Security", "ISO"],
            "date": "Jan, 2024",
            "image": "/formation/sbp.jpg"
        },
        {
            "name": "ISO/IEC 20000:2018 – FOUNDATION OF IT SERVICE MANAGEMENT SYSTEMS (ITSMS)",
            "institution": "Standards and Best Practice",
            "description": "ISO/IEC 20000:2018 establishes requirements for an IT service management system, focusing on the effective and efficient delivery of services with quality.",
            "tags": ["Security", "ISO"],
            "date": "Jan, 2024",
            "image": "/formation/sbp.jpg"
        },
        {
            "name": "ISO/IEC 27001:2022 INFORMATION SKILLFRONT SECURITY ASSOCIATE",
            "institution": "SkillFront",
            "description": "ISO/IEC 27001:2022 defines the requirements for an information security management system, aiming to protect data and ensure the confidentiality, integrity, and availability of information.",
            "tags": ["Security", "ISO"],
            "date": "Nov, 2023",
            "image": "/formation/skillfront.jpg"
        },
        {
            "name": "Manage States in React with Redux",
            "institution": "Alura",
            "description": "Scale state management in React with different solutions",
            "tags": ["React", "Redux", "Web", "JavaScript"],
            "date": "Nov, 2023",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Develop Web Applications with JavaScript",
            "institution": "Alura",
            "description": "Master one of the most widely used programming languages in the market and develop a project with HTML, CSS, and JavaScript from scratch.",
            "tags": ["Web", "JavaScript"],
            "date": "Mar, 2023",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Develop Your First App with React Native",
            "institution": "Alura",
            "description": "Learn the first steps of React Native and create apps for both Android and iOS simultaneously",
            "tags": ["React", "React Native", "Mobile", "JavaScript"],
            "date": "Aug, 2022",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "React JS",
            "institution": "Alura",
            "description": "Create modern web applications with React!",
            "tags": ["React", "Web", "JavaScript"],
            "date": "May, 2022",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Front End",
            "institution": "Alura",
            "description": "From scratch to a successful career in the web market, with HTML, CSS, and JavaScript!",
            "tags": ["Web", "JavaScript", "HTML", "CSS"],
            "date": "Apr, 2022",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Django",
            "institution": "Alura",
            "description": "Creating websites and web experiences with Python",
            "tags": ["Web", "Python", "HTML", "CSS"],
            "date": "Jan, 2022",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Learn Python Programming with Object-Oriented Programming",
            "institution": "Alura",
            "description": "Learn the language by diving into the object-oriented programming paradigm",
            "tags": ["Python"],
            "date": "Jan, 2022",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Beginner in Programming",
            "institution": "Alura",
            "description": "The path to entering the world of programming and starting with website creation using popular languages such as CSS, HTML, and JavaScript.",
            "tags": ["starter"],
            "date": "Jan, 2022",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Learn JavaScript Programming with a Focus on Back-End",
            "institution": "Alura",
            "description": "Learn how to use JavaScript outside the browser",
            "tags": ["starter"],
            "date": "Jan, 2022",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "HTML and CSS",
            "institution": "Alura",
            "description": "Create amazing pages with web technologies",
            "tags": ["Web", "HTML", "CSS"],
            "date": "Jan, 2022",
            "image": "/formation/alura.jpg"
        },
        {
            "name": "Develop Accessible Web Applications",
            "institution": "Alura",
            "description": "Improve the user experience with best practices for Accessibility in Front-End",
            "tags": ["Web", "Accessibility"],
            "date": "Oct, 2021",
            "image": "/formation/alura.jpg"
        }
    ]
}

const projects = {
    "search": {
        "label":"Search",
        "placeholder":"Type your search here"
    },
    "data":[
        {
            "name": "Agitae",
            "description": "An old project on how to create a possible app to hire parties in a more practical way",
            "language": "Javascript",
            "tech": ["react-native", "expo"],
            "github": "https://github.com/LuizGabrielSS/Agitae2.0",
            "type": "mobile",
            "image": "projects/agitae.jpeg",
            "url":null
        },
        {
            "name": "Expo-CEP",
            "description": "A simple project just to practice using APIs in React Native and also to test the use of free APIs for postal codes (CEP)",
            "language": "Javascript",
            "tech": ["react-native", "axios", "expo"],
            "github": "https://github.com/LuizGabrielSS/Expo-CEP",
            "type": "mobile",
            "image": "projects/expo_cep.jpeg",
            "url":null
        },
        {
            "name": "Web Recipes",
            "description": "One of the projects every developer creates at some point, a Pokedex, a simple way to practice a new language for frontend and its possibilities",
            "language": "Javascript",
            "tech": ["react", "axios"],
            "github": "https://github.com/LuizGabrielSS/pokedex",
            "type": "frontend",
            "url": "https://luizgabrielss.github.io/pokedex/",
            "image": "projects/pokedex.jpeg"
        },
        {
            "name": "Web Recipes",
            "description": "A project that, using an API, creates a web page where the user can input the ingredients they have in their fridge and it will show possible recipes and details that are missing",
            "language": "Javascript",
            "tech": ["react", "axios"],
            "github": "https://github.com/LuizGabrielSS/receitas-web",
            "type": "frontend",
            "url": "https://luizgabrielss.github.io/receitas-web/",
            "image": "projects/receitas.jpeg"
        },
        {
            "name": "Movies Web",
            "description": "A simple project using an API to get movie information and create a web page to get movie details and ratings",
            "language": "Javascript",
            "tech": ["react", "axios"],
            "github": "https://github.com/LuizGabrielSS/movies-web",
            "type": "frontend",
            "url": "https://luizgabrielss.github.io/movies-web/",
            "image": "projects/movies.jpeg"
        },
        {
            "name": "Lazy Dev",
            "description": "A collection of personal projects to make developers' lives easier, with small projects such as an email reader",
            "language": "python",
            "tech": ["hugging face", "translate"],
            "github": "https://github.com/LuizGabrielSS/lazy-dev",
            "type": "backend",
            "image": "projects/lazy.jpeg",
            "url":null
        }
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