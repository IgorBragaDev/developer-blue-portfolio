import {
  RiGraduationCapFill,
  RiCalendarFill,
  RiMailFill,
  RiPhoneFill,
  RiHomeFill,
  RiUserFill,
} from "react-icons/ri";

export const infoData = [
  {
    icon: <RiUserFill size={20} />,
    text: "Igor Braga",
  },
  {
    icon: <RiMailFill size={20} />,
    text: "igorbragafarias@gmail.com",
  },
  {
    icon: <RiGraduationCapFill size={20} />,
    text: "Desenvolvedor full stack",
  },
  {
    icon: <RiHomeFill size={20} />,
    text: "Nova Iguaçu, Rio de Janeiro, Brasil",
  },
];

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        school: "INFNET",
        qualification: "Engenharia de Software",
        years: "jun de 2024 - Até o momento",
      },
      {
        school: "Kenzie Academy Brasil",
        qualification: "Desenvolvedor full stack",
        years: "jun de 2023 - jun de 2024",
      },
      {
        school: "Universidade Veiga de Almeida ",
        qualification: "Engenharia Mecânica",
        years: "jun de 2017 - jun de 2023",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Desenvolvedor Frelancer",
        role: "Desenvolvedor Full-Stack",
        years: "jun 2024 - o momento",
      },
      {
        company: "Kenzie Academy Brasil",
        role: "Monitor Back-End ",
        years: "nov de 2023 - jun de 2024",
      },
      {
        company: "Kenzie Academy Brasil",
        role: "Monitor de Ensino ",
        years: "jun de 2023 - nov de 2023",
      },
    ],
  },
];

export const skillsData = [
  {
    title: "skills",
    data: [
      {
        icons: ["HTML", "CSS", "Styled Components", "TailwindCSS"],
      },
      {
        icons: ["JavaScript", "TypeScript", "React", "NextJs"],
      },
      {
        icons: ["NodeJS", "NestJS", "Express", "PrismaJs"],
      },
      {
        icons: ["Jest", "Django", "Git", "Figma"],
      },
      {
        icons: ["MongoDB", "PostgreSQL", "", ""],
      },
      {
        icons: ["Docker", "SQlite", "", ""],
      },
      {
        icons: ["Sass", "Vtex"],
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "Windows",
      },
      {
        imgPath: "Linux",
      },
      {
        imgPath: "Vscode",
      },
      {
        imgPath: "Insomnia",
      },
      {
        imgPath: "Jira",
      },
      {
        imgPath: "Notion",
      },
      {
        imgPath: "Trello",
      },
    ],
  },
];
