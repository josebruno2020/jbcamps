import { CareerCompanyProps } from "../../components/CareerCompany/CareerCompanyProps";
import { LangDataInterface } from "../../lang/LangData";

export const LangData: LangDataInterface<CareerCompanyProps[]> = {
  'en-US': [
    {
      title: "Ligue Telecom",
      link: 'https://www.ligue.net/',
      start: "April (2022)",
      finish: "still moment",
      skilss: [
        "I work in the Customer Service system, bringing constant improvements with new features, both in the Backend and Frontend.",
        "We work with distributed architecture, with kafka and Google Cloud. I know how to use it, although I didn't configure it.",
        "We work with NodeJS and VueJS. PG Relational Database and SQL Server."
      ],
      align: "left",
    },
    {
      title: "Trade Technology",
      link: 'https://tradetechnology.com.br/',
      start: "Sep (2021)",
      finish: "April (2022)",
      skilss: [
        "I worked on improvements and maintenance both in internal systems of the company and in systems for external customers.",
        "I worked on building the Backend of a predictive system that the company launched, with DDD and Laravel and unit tests.",
        "We use it in PHP Backend (Laravel), NodeJS (Express) and Frontend React."
      ],
      align: "right",
    },
    {
      title: "Bitzen Tecnologia",
      link: 'https://bitzen.tech/pt-br/',
      start: "Mar (2021)",
      finish: "Sep (2021)",
      skilss: [
        "I worked in the support and maintenance of a Credit loan system, with Backend in PHP (Laravel) and MYSQL Database.",
        "I worked on rebuilding and refactoring the backend of an Academy application, launching V2 of the API, in PHP (Laravel).",
        "I worked on the development of features in applications, which used Ionic with Angular."
      ],
      align: "left",
    },
    {
      title: "Freelancer",
      start: "Mar (2020)",
      finish: "still momento (when is possible) ",
      skilss: [
        "I usually develop applications from scratch and working on both Frontend and Backend, according to the client's needs. When necessary, I analyze the requirements before starting the development of the project.",
        "I use technologies like PHP (Laravel), NodeJS, VueJS and MYSQL database",
      ],
      align: "right",
    },
  ],
  'pt-BR': [
    {
      title: "Ligue Telecom",
      link: 'https://www.ligue.net/',
      start: "Abril (2022)",
      finish: "até o momento",
      skilss: [
        "Atuo no sistema de Atendimento ao Cliente, trazendo constantes melhorias com novas funcionalidades, tanto no Backend quanto no Frontend.",
        "Trabalhamos com arquitetura distribuída, com kafka e Google Cloud. Sei utilizar, apesar de não ter feito a configuração.",
        "Trabalhamos com NodeJS e VueJS. Banco de dados Relacional PG e SQL Server."
      ],
      align: "left",
    },
    {
      title: "Trade Technology",
      link: 'https://tradetechnology.com.br/',
      start: "Set (2021)",
      finish: "Abril (2022)",
      skilss: [
        "Trabalhei em melhorias e manutenção tanto em sistemas internos da empresa quanto em sistemas para clientes externos.",
        "Trabalhei na construção do Backend de um sistema preditivo que a empresa lançou, com DDD e Laravel e testes unitários.",
        "Utizamos no Backend PHP (Laravel), NodeJS (Express) e no Frontend React."
      ],
      align: "right",
    },
    {
      title: "Bitzen Tecnologia",
      link: 'https://bitzen.tech/pt-br/',
      start: "Mar (2021)",
      finish: "Set (2021)",
      skilss: [
        "Trabalhei no suporte e manutenção de um sistema de empréstimo de Crédito, com Backend em PHP (Laravel) e Banco de Dados MYSQL.",
        "Trabalhei na reconstrução e refatoração do backend de um aplicativo de Academia, lançando a V2 da API, em PHP (Laravel).",
        "Trabalhei no desenvolvimento de funcionalidades em aplicativos, que usavam Ionic com Angular."
      ],
      align: "left",
    },
    {
      title: "Freelancer",
      start: "Mar (2020)",
      finish: "Até o momento (quando possível) ",
      skilss: [
        "Normalmente desenvolvo aplicações do zero e atuando tanto no Frontend quanto no Backend, conforme a necessidade do cliente. Quando necessário faço a análise dos requisitos antes de começar o desenvolvimento do projeto.",
        "Utilizo tecnologias como PHP (Laravel), NodeJS, VueJS e banco de dados MYSQL",
      ],
      align: "right",
    },
  ]
}
