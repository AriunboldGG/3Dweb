import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    tpu,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ictgroup,
    khanbank,
    monpay,
    ramen,
    uvs,
    baganuur,
    flutter,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Wordpress Developer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Flutter Developer",
      icon: backend,
    },
    {
      title: "Solution Architect",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Student",
      company_name: "Tomsk Polytechnic University",
      icon: tpu,
      iconBg: "#383E56",
      date: "Oct 2016 - July 2021",
      points: [
        "I completed my bachelor's degree in 2021 at Tomsk Polytechnic University in software engineering.",
        
      ],
    },
    {
      title: "Wordpress Developer",
      company_name: "ICT Group",
      icon: ictgroup,
      iconBg: "#383E56",
      date: "July 2021 - July 2022",
      points: [
        "Arriving home, I got a job in the ICT group. This was my first official professional job.",
        "After I got a job, I started working as a WordPress developer in PHP.",
        "I have made more than 15 websites using WordPress.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "ICT Group",
      icon: ictgroup,
      iconBg: "#383E56",
      date: "December 2021 - June 2022",
      points: [
        "I started learning JS from the first year. At work I made 5+ websites using JS",
      ],
    },
    {
      title: "Flutter Developer",
      company_name: "Tesla",
      icon: ictgroup,
      iconBg: "#E6DEDD",
      date: "December 2022 - June 2023",
      points: [
        "Started working as a mobile developer in December 2022",
        "Worked in two large projects. One of them was Digital - Province",
      ],
    },
    // {
    //   title: "Business Analyst",
    //   company_name: "ICT Group",
    //   icon: ictgroup,
    //   iconBg: "#E6DEDD",
    //   date: "May 2023 - May 2023",
    //   points: [
    //     "Started working as a mobile developer in December 2023",
    //     "Worked in two large projects. One of them was Digital - Province",
    //   ],
    // },
    {
      title: "Solution Architect",
      company_name: "Khan Bank",
      icon: khanbank,
      iconBg: "#383E56",
      date: "July 2023 - Present",
      points: [
        "From July 2023, I started working as a solution architect at Khanbank, which is the largest bank in Mongolia",
        "I work on different technologies and determine the easiest, correct way for coding, applications, systems to work successfully without risks and problems",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Monpay Web",
      description:
        "A web platform that allows users to pay from the web version and manage an online wallet account from various payments, providing a convenient and efficient solution for payment needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: monpay,
      source_code_link: "https://monpay.mn/",
    },
    {
      name: "Багануур дүүрэг веб сайт",
      description:
        "Багануур дүүргийн талаарх мэдээллэх веб-сайт. Монгол-Англи-Монгол бичиг хосолсон веб-сайт.",
      tags: [
        {
          name: "php",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "uikit",
          color: "pink-text-gradient",
        },
      ],
      image: baganuur,
      source_code_link: "https://bnd.ub.gov.mn/",
    },
    {
      name: "Digital Uvs Application",
      description:
        "Дижитал Увс аппликейшн нь олон төрлийн үйлчилгээг агуулсан цогц платформ бөгөөд дараах үйлчилгээнүүдийг агуулна.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: uvs,
      source_code_link: "https://play.google.com/store/apps/details?id=com.ict.digital_province_uvs&hl=en&gl=US",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  