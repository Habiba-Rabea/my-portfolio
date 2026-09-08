export const profile = {
  name: "Habiba Rabea",
  fullName: "Habiba Rabea Elshrbiny Elshaer",
  title: "Full-Stack Web Developer",
  stack: ".NET & React",
  usp: "I engineer scalable, enterprise-grade web applications using .NET and React.",
  location: "Damietta, Egypt",
  email: "habibarabea205@gmail.com",
  phone: "+20 1036133959",
  linkedin: "https://linkedin.com/in/habiba-rabea",
  github: "https://github.com/Habiba-Rabea",
  photo: "/habiba.png",
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

export const services = [
  {
    id: '01',
    name: 'Full-Stack Web Development',
    description:
      'End-to-end web applications where an ASP.NET Core Web API back-end and a React.js front-end are engineered to work as one cohesive product.',
    delivers: [
      'ASP.NET Core Web API + React.js integration',
      'Clean, maintainable architecture',
      'Responsive, production-ready interfaces',
    ],
  },
  {
    id: '02',
    name: 'Back-End & API Engineering',
    description:
      'Robust, secure server-side services built on ASP.NET Core with well-structured RESTful APIs designed to scale as your product grows.',
    delivers: [
      'RESTful API design & implementation',
      'JWT authentication & role-based access control',
      'Repository pattern & clean code structure',
    ],
  },
  {
    id: '03',
    name: 'Database Design & Data Access',
    description:
      'Reliable data layers with SQL Server schemas modelled around your domain and accessed through Entity Framework Core and LINQ.',
    delivers: [
      'SQL Server schema design',
      'Entity Framework Core ORM & LINQ queries',
      'Structured, query-efficient data access',
    ],
  },
  {
    id: '04',
    name: 'Responsive Front-End Development',
    description:
      'Modern, component-driven React interfaces with thoughtful state management that stay fast and consistent across every screen size.',
    delivers: [
      'React.js component architecture',
      'State & props management',
      'Responsive layouts with HTML5/CSS3 & Bootstrap',
    ],
  },
]

export const skillGroups = [
  {
    label: 'Back-End',
    items: [
      'C#',
      'ASP.NET Core',
      'RESTful APIs',
      'Entity Framework Core',
      'LINQ',
      'OOP',
      'MVC',
      'SQL Server',
    ],
  },
  {
    label: 'Front-End',
    items: [
      'React.js',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'React Router',
      'Vite',
    ],
  },
  {
    label: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'JWT Auth', 'Repository Pattern'],
  },
  {
    label: 'Languages',
    items: ['Arabic — Native', 'English — Good'],
  },
]

export const experience = [
  {
    role: '.NET & React Web Development Specialist Trainee',
    org: 'DEPI — Digital Egypt Pioneers Initiative',
    period: '06/2026 – 12/2026',
    certificateUrl: '/DEPI.pdf',
    points: [
      'Developing scalable back-end microservices and Web APIs using ASP.NET Core and Entity Framework Core.',
      'Designing secure user authentication mechanisms, ORM data access layers, and database schemas in SQL Server.',
      'Integrating back-end services with responsive front-end interfaces built using React.js.',
    ],
  },
  {
    role: 'React Front-End Development Intern',
    org: 'Gig Skills Boost Internship — Nile University',
    period: '07/2026 – 10/2026',
    certificateUrl: '/Gig_Skill_Boost.pdf',
    points: [
      'Building dynamic and responsive user interfaces using React.js, Bootstrap, and modern web standards (HTML5/CSS3).',
      'Applying core React concepts, component architecture, state management, and props for modular UI development.',
      'Using Git and GitHub for source control, repository management, and collaborative development.',
    ],
  },
  {
    role: 'Web Development Intern',
    org: 'Sprints x Microsoft Summer Camp',
    period: '07/2025 – 08/2025',
    certificateUrl: '/Sprints.pdf', // ملف الشهادة الموجود في مجلد public
    points: [
      'Built responsive web interfaces and core Web development fundementals during the summer training program.',
      'Applied modern UI development principles, component architecture, and clean code practices.',
    ],
  },
  {
    role: 'Front-End Web Development Training',
    org: 'IEEE Damietta Student Branch',
    period: '05/2025 – 09/2025',
    certificateUrl: '/IEEE_Certificate.pdf',
    points: [
      'Mastered modern UI workflows using HTML5, CSS3, JavaScript, and responsive layout design practices.',
    ],
  },
]

export const projects = [
  {
    id: "exclusive-ecommerce",
    title: "Exclusive E-Commerce Platform",
    description: "A full-featured single page e-commerce web application built with React, Context API, and client-side routing based on Figma UI/UX design.",
    tags: ["React", "JavaScript", "Tailwind CSS", "Context API", "Figma"],
    githubUrl: "https://github.com/Habiba-Rabea/Exclusive_ecommerce",
    // تم إزالة liveUrl ليختفي زر Live Demo تلقائياً
  },
  {
    id: "depi-fullstack",
    title: "DEPI Full-Stack E-Commerce System",
    description: "A modern full-stack web application engineered with ASP.NET Core Web API back-end, SQL Server architecture, and React front-end client interface.",
    tags: ["ASP.NET Core", "C#", "React", "SQL Server", "REST API"],
    githubUrl: "https://github.com/Habiba-Rabea",
  },
  {
    id: "responsive-portfolio",
    title: "Responsive Personal Portfolio",
    description: "A high-performance dark-themed developer portfolio crafted with Next.js, Tailwind CSS, TypeScript, and smooth interactive components.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Habiba-Rabea/Portfolio_Responsive_Version",
  },
];
export const education = {
  degree: 'B.Sc. in Computer Science & Artificial Intelligence',
  school: 'Damietta University',
  specialization: 'Specialization: Information Technology',
  period: '09/2023 – 07/2027',
  gpa: '3.51 / 4.00',
  rank: 'Ranked 5th in Department',
}

export const achievements = [
  {
    title: 'Ranked 5th in Department',
    detail: 'Top academic standing among Computer Science & AI students at Damietta University.',
  },
  {
    title: 'GPA 3.51 / 4.00',
    detail: 'Maintained a strong cumulative GPA throughout the Bachelor program.',
  },
  {
    title: 'DEPI Specialist Track',
    detail: 'Selected for the Digital Egypt Pioneers Initiative .NET & React specialization.',
  },
]
