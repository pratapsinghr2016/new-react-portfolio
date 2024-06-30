export default {
  basic_info: {
    description_header: "Hi",
    description: `🌟 With 6 years in IT and 5 years in Software full-stack development, I'm proficient in React, Node.js, and Java. I've built scalable solutions, incorporating server-side rendering, pagination, and infinite scroll. 🚀 I implement TDD using JEST and RTL, enhancing code quality with SonarQube. My design systems utilize styled-components, Tailwind CSS, Material UI, and Ant Design, with Figma and Zeplin handovers. 🎨 I developed dashboards, including AirAsia's booking app, and optimize SEO using Lighthouse and Google Analytics. 📈 My e-commerce apps achieve high performance with image optimization. 🛒 In Agile environments, I plan SPRINTs and lead retrospectives. I've introduced micro-frontends with Module Federation and monorepo architectures, developed private libraries, and reduced development time by 50%. 🛠️ Additionally, I've crafted hybrid architectures with React, Next.js, and Redux, enhancing application performance and UX. 💡`,
    section_name: {
      about: "About me",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
    },
  },
  projects: [
    {
      title: "Animal Shelter",
      startDate: "2020",
      description:
        "The most expanded application I had opportunity to work with. I've learned many technologies and my code was reviewed by awesome curator. Application handles all adoption processess and allows to store all evidence on adopting animals from animal shelter.",
      images: [
        "images/portfolio/animal-shelter/p1.jpg",
        "images/portfolio/animal-shelter/p2.jpg",
      ],
      url: "",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "C#",
        },
      ],
    },
    {
      title: "Photography",
      startDate: "2018",
      description:
        "Personal project for study subject. I was responsible for testing photography application that optimizes images with popular algorithms used by graphic editors like Pixlr or Adobe Photoshop. I've earned A grade :)",
      images: [
        "images/portfolio/photography/p1.jpg",
        "images/portfolio/photography/p2.jpg",
      ],
      url: "https://github.com",
      technologies: [
        {
          class: "devicon-react-original",
          name: "React",
        },
        {
          class: "devicon-javascript-plain",
          name: "JavaScript",
        },
      ],
    },
    {
      title: "3D Object Viewer",
      startDate: "2015",
      description:
        "One of the first apps I was working on my internship. I had to develop front-end implementation for app that shows 3D models of known buildings. This was also my first project in Angular framework. I've learned a lot!",
      images: [
        "images/portfolio/adventure/p1.jpg",
        "images/portfolio/adventure/p2.jpg",
      ],
      url: "https://github.com",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "Angular",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "C#",
        },
      ],
    },
  ],
  experience: [
    {
      company: "DefOpenSource",
      title: "Front-End Developer",
      years: "10.2019 - present",
      mainTech: ["Angular 8/9/10"],
      technologies: [
        "REST API",
        "RxJS",
        "JavaScript",
        "Bootstrap",
        "MDBootstrap",
        "EF Core",
        ".NET Core",
        "SignalR",
        "Angular Material",
      ],
    },
    {
      company: "Serros Solutions",
      title: "Intern",
      years: "01.2018 - 09.2019",
      mainTech: ["Angular 7/8"],
      technologies: ["RxJS", "Django", "PHP", "JavaScript", "DHTMLX Gantt"],
    },
  ],
};
