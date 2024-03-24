const about = {
  resume:{
    title:"Summary",
    resume:"Developer with focus on web and mobile development. Experience and practice in full-stack development, using Python on the backend for creating REST APIs, and utilizing React, React Native, and Expo for the frontend. Also leveraging GitHub Actions for pipeline development, knowledge of infrastructure on GCP, and Docker for service delivery, along with SQL Server and MySQL databases."
  },
  abilities:{
    title:"Skills",
    hardskill:{
      title:"Hard Skills",
      abilities:[
        "Development of REST APIs",
        "Automation development",
        "Mobile development",
        "Web development",
        "Pipeline development (CI/CD)",
        "GCP knowledge",
        "API manipulation and usage",
        "Portuguese (Native)",
        "English (Fluent)",
        "Spanish (Intermediate)",
        "Mandarin (Basic)"
      ]
    },
    softskill:{
      title:"Soft Skills",
      abilities:[
        "Communication",
        "Interpersonal skills",
        "Teamwork",
        "Problem-solving",
        "Creativity"
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
          time:"April 2021 - May 2022",
          description:{
            title:"Description",
            ativities:[
              "Development of REST APIs",
              "Mobile development",
              "CCTV management and maintenance",
              "Access control management and maintenance"
            ]
          },
          team:"Physical Security",
          company:"Stone Co."
        },
        {
          title:"Analista Junior - Segurança da informação",
          time:"May 2022 - Present",
          description:
          {
            title:"Description",
            ativities:[
              "Development of REST APIs",
              "Web development",
              "Mobile development",
              "Pipeline development (CI/CD)",
              "CCTV management and maintenance",
              "Access control management and maintenance"
            ]
          },
          team:"Physical Security",
          company:"Stone Co."
        },
      ]
    },
    personal:{
      title:"Personal Experiences",
      intership:{
        title:"Study Abroad Program to China",
        descrption:"I spent a brief period in the country during my high school exchange program to learn about the language and Chinese culture, which expanded both my personal and professional knowledge."
      }
    }
  },
  school:{
    academic:{
      title:"School",
      high:{
        title:"Colegio Estadual Matematico Joaquim Gomes de Souza Intercultural Brasil - China",
        time:"2017 - 2019"
      },
      graduation:{
        title:"Bachelor of Technology in Systems Analysis and Development.",
        time:"2024 - 2025"
      }
    },
    certificate:{
      title:"Certifications",
      button:"View certificate",
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
          title:"Certifications ISO",
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
          title:"Others",
          cursos:[
            {
              title:"Software security with OWASP",
              url:"https://cursos.alura.com.br/user/luiz-samuel/degree-owasp-43209/certificate"
            },
            {
              title:"RPA with UiPath: Practical Course - Learn from Scratch",
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
    title:"Form",
    name:{
      title:"Full name",
      placeholder:"Fill in the field with your full name"
    },
    email:{
      title:"Email",
      placeholder:"exemplo@exemplo.com.br"
    },
    message:{
      title:"Message",
      placeholder:"Type your message to the developer"
    },
    status:{
      erro:"Blank field!"
    }
  },
  submit:{
    title:"Send email",
    status_ok:"Email sent successfully!",
    status_not_ok:"Error sending email"
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
            title:"Automations",
            projects:[
              {
                title:"Auto-reporting-Email",
                description:"I have developed a robust automation solution that allows users to receive detailed reports about their emails directly on their mobile devices via Telegram. This full-stack application reads user emails and categorizes them into two distinct categories: Spam and Not Spam. The integration with Telegram enables users to receive instant notifications, keeping them informed about their inbox even while on the go.",
                github:"https://github.com/LuizGabrielSS/auto-email-relatorio",
              }
            ]
          },
          {
            title:"API rest",
            projects:[
              {
                title:"How to create a REST API",
                description:"This comprehensive guide is an invitation to explore and master the creation of REST APIs using Python and Flask. Whether you are new to this world or seeking to enhance your skills, this resource is essential for you. Let's delve deep into the concept of repository, which is fundamental for web application development.",
                github:"https://github.com/LuizGabrielSS/Como_criar_uma_APIREST",
              },
              {
                title:"Secure REST API",
                description:"This comprehensive guide is an invitation to explore and master the creation of secure REST APIs using Python, as well as to learn how to implement an additional layer of security to protect your web applications. If you wish to deeply understand how to ensure the security of your APIs and safeguard your users' data, this resource is essential for you.",
                github:"https://github.com/LuizGabrielSS/API-SEGURA",
              },
              {
                title:"REST API rest with pipeline",
                description:"This comprehensive guide is a journey towards mastering REST API development and implementing continuous integration pipelines using GitHub Actions. Whether you are a beginner or an experienced developer seeking enhancement, this resource is essential for your skillset arsenal.",
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
            description:"I developed a project using the Pokédex API in conjunction with ReactJS, combining my passion for the Pokémon universe with my knowledge of front-end development. Through this integration, I was able to explore and learn about data manipulation and component rendering, resulting in an interactive and engaging application for Pokémon enthusiasts.",
            github:"https://github.com/LuizGabrielSS/pokedex",
            site:"https://luizgabrielss.github.io/pokedex/"
          },
          {
            title:"Movies",
            description:"I completed a project employing an external API to access movie information and perform data analysis, all using ReactJS. This approach allowed me to deepen my understanding of API integration and data manipulation, resulting in a dynamic and informative application for movie lovers.",
            github:"https://github.com/LuizGabrielSS/movies-web",
            site:"https://luizgabrielss.github.io/movies-web/"
          },
          {
            title:"Recipes",
            description:"My project utilizes an external API to fetch a variety of recipes and creative dish suggestions, all implemented with ReactJS. This integration allowed me to explore dynamic data searching and presentation, resulting in a platform that inspires culinary enthusiasts with new ideas and recipe possibilities.",
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
            description:"I developed a project with the purpose of exploring the use of external APIs, specifically utilizing the ZIP code API in the React Native/Expo environment. This initiative allowed me to deepen my understanding of API integration in mobile applications, providing a practical and enriching experience in front-end development for mobile devices.",
            github:"https://github.com/LuizGabrielSS/Expo-CEP",
            site:""
          },
          {
            title:"Agitae",
            description:"I have developed a more elaborate project inspired by the concept of an app similar to iFood, but focused on the universe of parties and events. This project involved the implementation of advanced functionalities, from searching and selecting food and beverage suppliers to integrating payment systems and scheduling services. I used modern technologies such as React Native or Flutter to develop an intuitive and responsive interface, providing a smooth and satisfying user experience during the planning of festive events.",
            github:"https://github.com/LuizGabrielSS/Agitae2.0",
            site:""
          }
        ]
      }
    ]
  },
  site:"See website",
  github:"See repository"
}

export default {
    translations: { 
      header: {
        title: 'Portfolio'
      },
      pages:{
        home:"Home",
        about:"About",
        contact:"Contact",
        project:"Projects"
      },
      about:about,
      contact:contact,
      project:project
    }
}

