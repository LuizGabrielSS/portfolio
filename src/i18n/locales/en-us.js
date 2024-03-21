export const about = {
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
  }
}

export default {
    translations: { 
      header: {
        title: 'Portfolio'
      },
      pages:{
        home:"Home",
        about:"Sobre"
      },
      about:about
    }
}

