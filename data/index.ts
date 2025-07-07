export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#Projects" },
  { name: "Experience", link: "#Experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an online course teaching app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Bank web application",
    des: "This is a modern react.js landing page stylized with Tailwind.",
    img: "/bank.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://bank-web-app-demo.netlify.app/",
  },
  {
    id: 2,
    title: "restaurant web application",
    des: "This one is a react.js landing page making great use of CSS.",
    img: "/Cook.png",
    iconLists: ["/re.svg", "/ts.svg"],
    link: "https://iceinker.github.io/restaurant-web/",
  },
  {
    id: 3,
    title: "Aalternative portfolio",
    des: "an Aalternative look at a more minimalistic and to the point portfolio",
    img: "/sps.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://startup-pitching-site.vercel.app/",
  },
  {
    id: 4,
    title: "Course sharing React-native app",
    des: "here is a react native mobile app utilizing expo, appwrite and nativewind. (Still in development)",
    img: "/Gorgo.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/iceinker/Gorgo",
  },
];

export const Experience = [
  {
    quote:
      "Developed multiple responsive web applications in React.js, HTML, CSS, and typeScript, ensuring high-performance, user-friendly interfaces; collaborated with clients for custom solutions, implemented best practices for responsive design, cross-browser compatibility, and SEO, utilizing GitHub for version control, and conducted rigorous testing and debugging for optimal functionality and compatibility.",
    name: "Full-Stack Developer",
    title: "Freelance",
  },
  {
    quote:
      "Designed and developed a personal portfolio website with React.js, HTML, CSS, and typeScript; created small web applications and landing pages for skill improvement; continuously learned and applied new skills to personal projects, emphasizing growth; experimented with React, Tailwind CSS, and modern tools to follow industry trends.",
    name: "Web Developer",
    title: " Self-Initiated Projects",
  },
  {
    quote:
      "Developed multiple responsive web applications in React.js, HTML, CSS, and typeScript, ensuring high-performance, user-friendly interfaces; collaborated with clients for custom solutions, implemented best practices for responsive design, cross-browser compatibility, and SEO, utilizing GitHub for version control, and conducted rigorous testing and debugging for optimal functionality and compatibility.",
    name: "Front End Developer",
    title: "Freelance",
  },
  {
    quote:
      "Designed and developed a personal portfolio website with React.js, HTML, CSS, and typeScript; created small web applications and landing pages for skill improvement; continuously learned and applied new skills to personal projects, emphasizing growth; experimented with React, Tailwind CSS, and modern tools to follow industry trends.",
    name: "Web Developer",
    title: " Self-Initiated Projects",
  }
];

export const Certificates = [
  {
    id: 2,
    title: "Responsive Web Design",
    desc: "Creating flexible layouts that adapt seamlessly to various screen sizes and devices, enhancing user experience across all platforms.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Front End Development Libraries",
    desc: "Tools and frameworks that help build dynamic, interactive, and responsive web applications efficiently, improving development speed and code maintainability.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Legacy JavaScript Algorithms and Data Structures",
    desc: "Classic JavaScript techniques for solving problems and organizing data, foundational for understanding modern programming and enhancing algorithmic efficiency.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 1,
    title: "Self-Taught Developer",
    desc: `Online Learning Platforms: freeCodeCamp, Codecademy, Coursera, Udemy; Books and Resources: "Eloquent JavaScript," "You Don't Know JS" series, MDN Web Docs; Community Engagement: Active in developer communities like Stack Overflow and GitHub; Workshops and Meetups: Attended various online/local workshops and meetups to stay updated with industry trends and network with professionals.`,
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  }
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href:"https://github.com/iceinker"
  },
  {
    id: 3,
    img: "/link.svg",
    href:"http://linkedin.com/in/mohamed-al-taher"
  },
];
