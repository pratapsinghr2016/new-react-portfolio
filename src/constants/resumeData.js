import p1 from "../components/assets/p1.png";
import p2 from "../components/assets/p2.png";
import p3 from "../components/assets/p3.png";
import p4 from "../components/assets/p4.png";
import p5 from "../components/assets/p5.png";
import p6 from "../components/assets/p6.png";
import p7 from "../components/assets/p7.png";
import p8 from "../components/assets/p8.png";

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
      title: "DashClicks",
      startDate: "2024",
      description: `This project is a unique fusion of a digital marketing agency and a software company, where the team has been delivering exceptional digital marketing services to small and medium-sized businesses (SMBs) for over a decade.`,
      images: [p1],
      url: "https://www.dashclicks.com",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "ReactJS",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "ExpressJS",
        },
      ],
    },
    {
      title: "Restoration & Housing",
      startDate: "2023",
      description: `RH is an innovative e-commerce platform specializing in furniture and home decor for both B2B and B2C markets. With a diverse range of high-quality products, it caters to the unique needs of businesses and individual customers alike. RH combines style and functionality, offering an exceptional selection of furnishings and decorative items that enhance any space.`,
      images: [p2],
      url: "https://rh.com/us/en/",
      technologies: [
        {
          class: "devicon-react-original",
          name: "React",
        },
        {
          class: "devicon-javascript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-javascript-plain",
          name: "GraphQL",
        },
      ],
    },
    {
      title: "Teleport AirAsia",
      startDate: "2021",
      description: `Teleport is Southeast Asia’s premier logistics provider, boasting the region’s largest air logistics network. They offer customizable, next-day delivery solutions from first to last mile, handling everything from large cargo to small parcels. Teleport serves businesses of all sizes, eCommerce marketplaces, and forwarders, ensuring efficient and reliable logistics across Southeast Asia. With Teleport, logistics becomes seamless.`,
      images: [p3],
      url: "https://www.home.teleport.asia/",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "ReactJS",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "Java",
        },
      ],
    },
    {
      title: "DaMensch",
      startDate: "2020",
      description: `At DaMENSCH, technology plays a pivotal role in transforming men’s fashion through innovative software, web, and mobile applications. The design lab harnesses these tools to enhance product development and streamline processes, ensuring a seamless customer experience. This tech-driven approach not only enriches the shopping journey but also supports sustainability initiatives, positioning DaMENSCH at the forefront of the industry.`,
      images: [p4],
      url: "https://www.damensch.com/",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "ReactJS",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "NestJS",
        },
      ],
    },
    {
      title: "Fundamento",
      startDate: "2020",
      description: `Fundamento is an enterprise-focused contact center automation solution powered by AI, designed to help companies achieve outstanding business outcomes. It effectively reduces average handle time (AHT), lowers ramp-up time, and cuts costs, ensuring efficient operations and enhanced customer satisfaction.`,
      images: [p5],
      url: "https://www.fundamento.ai/",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "ReactJS",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "NodeJS",
        },
      ],
    },
    {
      title: "ANZ Bank",
      startDate: "2019",
      description: `ANZ, with a heritage spanning over 180 years, leverages technology to shape a thriving world for people and communities. Focused on fostering a balanced, sustainable economy, ANZ employs cutting-edge digital solutions to enhance banking experiences. With over 50,000 employees and global headquarters in Melbourne, ANZ ranks among the top four banks in Australia and is the largest banking group in New Zealand and the Pacific, as well as being among the top 50 banks worldwide.`,
      images: [p6],
      url: "https://www.anz.com.au/personal/",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "ReactJS",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "NodeJS",
        },
      ],
    },
    {
      title: "Clinsights",
      startDate: "2019",
      description: `Clinsights is a mobile-ready analytics application suite designed for healthcare providers, driving clinical insights for imaging and clinical engineering groups through AI/ML on machine data. It helps increase machine uptime, asset utilization, patient throughput, revenues, and operational efficiency. As a pioneer in the 'Internet of Medical Things,' Glassbeam advances the vision of Smart Hospitals, integrating data from various machines and software to transform operational dynamics.`,
      images: [p7],
      url: "https://play.google.com/store/apps/details?id=com.glassbeam.clinsights&hl=en_IN",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "React Native",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "NodeJS",
        },
      ],
    },
    {
      title: "MyPeegu",
      startDate: "2015",
      description: `MyPeegu is the world's first child behavior tracking tool, dedicated to fostering positive behavior through an activity-based approach to behavior modification. By integrating technology and psychological concepts, MyPeegu maps children's behavior and provides comprehensive reports to track intervention progress. Recognizing the vital roles of parents and teachers, MyPeegu emphasizes their involvement in the growth process. With a team of over 50 employees across Bangalore, Pune, Mysore, and Ahmednagar, the organization has positively impacted the lives of more than 4,000 children in Karnataka and Maharashtra. Their vision is firmly rooted in research, focusing on the intersection of child behavior and technology.`,
      images: [p8],
      url: "http://www.mypeegu.com/home.php",
      technologies: [
        {
          class: "devicon-angularjs-plain",
          name: "OpenSource",
        },
        {
          class: "devicon-typescript-plain",
          name: "TypeScript",
        },
        {
          class: "devicon-csharp-plain",
          name: "ReactJS",
        },
      ],
    },
  ],
  experience: [
    {
      company: "DashClicks",
      title: "Tech Lead",
      years: "07.0223 - present",
      mainTech: ["React 17/18/19"],
      technologies: [
        "HTML5",
        "CSS3",
        "SASS",
        "MUI",
        "StyledComponent",
        "JavaScript",
        "TypeScript",
        "Express",
        "JEST",
        "React Testing Library",
        "Cypress",
        "Redux",
        "Redux-Saga",
        "Redux-Toolkit",
        "Cypress",
        "Storybook",
        "Figma",
        "Zeplin",
        "AWS",
      ],
    },
    {
      company: "ValueLabs",
      title: "Senior Software Engineer",
      years: "11.2022 - 07.2023",
      mainTech: ["React 18"],
      technologies: [
        "ReactJS",
        "MUI",
        "ReactTV",
        "TypeScript",
        "Redux-RTK",
        "HTML5",
        "CSS3",
        "SAAS",
        "Java",
        "ElectronJS",
      ],
    },
    {
      company: "DaMensch",
      title: "Senior Software Engineer",
      years: "01.2022 - 11.2022",
      mainTech: ["NextJS"],
      technologies: [
        "NextJS",
        "StyledComponent",
        "TypeScript",
        "JavaScript",
        "Storyblok",
        "Strapi",
        "GraphQL",
        "WordPress",
        "Stripe",
        "Webhook",
        "Docker",
        "Kubernetes",
        "Helm",
        "Jest",
        "Cypress",
      ],
    },
    {
      company: "Fundamento",
      title: "Senior Software Engineer",
      years: "07.2021 - 01.2022",
      mainTech: ["NextJS", "ReactJS", "NestJS"],
      technologies: [
        "ReactJS",
        "NextJS",
        "NestJS",
        "WebHook",
        "JWT",
        "Auth0",
        "Node.js",
        "GraphQL",
        "Apollo",
        "TypeORM",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "Helm",
      ],
    },
    {
      company: "Avish Websoft",
      title: "Software Engineer",
      years: "01.2018 - 07.2021",
      mainTech: ["ReactJS", "ExpressJS", "OpenSource"],
      technologies: [
        "RxJS",
        "Node.js",
        "PHP",
        "JavaScript",
        "Typescript",
        "ReactJS",
        "Redux",
        "ExpressJS",
        "MongoDB",
        "Docker",
        "Headless CMS",
        "Strapi",
        "SASS",
        "Material-UI",
        "Bootstrap",
        "Jest",
        "Enzyme",
        "AntDesign",
        "LESS",
        "Webpack",
        "Babel",
        "Heroku",
        "Netlify",
        "AWS",
      ],
    },
  ],
};
