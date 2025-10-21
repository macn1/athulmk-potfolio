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
  shopify,
  threejs,
  runInStyle,
  trinity,
  netflix,
  dressCustomizer,
  clearSki,
  chitChat,
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
    title: "Full-Stack Developer",
    icon: web,
    description:
      "Building full-stack applications using Python, Django, FastAPI, and React.",
  },
  {
    title: "Backend Developer",
    icon: backend,
    description:
      "Expertise in Python (Django, FastAPI) and Node.js (Express) for creating robust APIs.",
  },
  {
    title: "Frontend Developer",
    icon: mobile,
    description:
      "Developing dynamic and responsive interfaces with React.js and Next.js.",
  },
  {
    title: "DevOps & Cloud Deployment",
    icon: creator,
    description:
      "Managing deployments and cloud infrastructure using AWS, Docker, and Nginx for scalability and reliability.",
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
    name: "TypeScript",
    icon: typescript,
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
    name: "MongoDB",
    icon: mongodb,
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
  // {
  //   title: "Internship",
  //   company_name: "Brototype",
  //   icon: starbucks,
  //   iconBg: "#E6DEDD",
  //   date: "October 2022 - Present",
  //   points: [],
  // },
  {
    title: "Python Full Stack Developer",
    company_name: "Stackerbee Technologies",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [],
  },
  {
    title: "Python Developer (intern)",
    company_name: "Veda Infosystem",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Dec 2024",
    points: [],
  },
];

const education = [
  // {
  //   title: "Internship",
  //   company_name: "Brototype",
  //   icon: starbucks,
  //   iconBg: "#E6DEDD",
  //   date: "October 2022 - Present",
  //   points: [],
  // },
  {
    title: "Btech In Computer Science",
    company_name: "APJ Abdul Kalam Technological University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2015 - 2019",
    points: [],
  },
  {
    title: "Higher-Secondary in Computer Science",
    company_name: "JNMGHSS",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "2013 - 2015",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Manav Bv",
    designation: "Data analyst",
    company: "Ace",
    image: "https://media.licdn.com/dms/image/C5603AQEZ9QFYMX2t3w/profile-displayphoto-shrink_400_400/0/1653404994245?e=1702512000&v=beta&t=6tZCl_Hb0KKlMsWBqjBnPV1-gHbf4P8kB8nr-bgRLKo",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Sudhin Devan",
    designation: "CEO",
    company: "Desvu",
    image: "https://media.licdn.com/dms/image/D5603AQHrfEaIAkgS2Q/profile-displayphoto-shrink_800_800/0/1679645001956?e=2147483647&v=beta&t=VC2s_L58xVp3BfpnCmO-QeZVox5xrnnxeLGw4yeoc4Q",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Rinshid Kp",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://media.licdn.com/dms/image/D5603AQG2vFNl7EqBew/profile-displayphoto-shrink_800_800/0/1668671458709?e=2147483647&v=beta&t=c2ZOg519eyWxeRCmGrQoAUEt5xvl0y7-Krfw-Zc0EzY",
  },
];

const projects = [
  {
    name: "TIME ZEN",
    description:
      "Timezen is an E-commerce website meticulously crafted with Python Django as the backbone of server-side operations, while PostgreSQL ensures robust and secure data storage. Our platform offers a seamless and enriching shopping experience, coupled with advanced features to elevate your online watch-buying journey.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "AJAX",
        color: "pink-text-gradient",
      },
      {
        name: "java script",
        color: "blue-text-gradient",
      },
      {
        name: "Twilio",
        color: "green-text-gradient",
      },
      {
        name: "RazorPay",
        color: "pink-text-gradient",
      },
      
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "EC2-Instance",
        color: "green-text-gradient",
      },
      {
        name: "nginx",
        color: "green-text-gradient",
      },
    ],
    image: trinity,
    source_code_link: "/",
    live_link: "/",
    features: [
      "Email verification",
      "Cart  for saving preffered iteam",
      "Wish  for saving preffered iteams",
      "Wallet",
      "Refferal Programs",
      "Secure Razorpay payment gateway Integration",
      "Razorpay Refund & wallet Refund",
    ],
  },
  {
    name: "Pixel Hub",
    description:
      " e-learning platform project for digital media course.This platform, powered by React and Python Django facilitates a smooth and engaging learning experience for users. It offers a user-friendly interface with features like course submission and admin approval allowing content creators to share their expertise while ensuring high-quality course offerings",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "RestApi",
        color: "blue-text-gradient",
      },
      {
        name: "SweetAlert ",
        color: "pink-text-gradient",
      },
      
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Postgres",
        color: "pink-text-gradient",
      },
      
     {
        name: "Stripe",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Chanels",
        color: "green-text-gradient",
      },
      {
        name: "Vercel",
        color: "pink-text-gradient",
      },
      {
        name: "Route53",
        color: "pink-text-gradient",
      },
    ],
    image: runInStyle,
    source_code_link: "/",
    live_link: "/",
    features: [
      "email verification",
      "Real time notification",
      "chat with users and vendor",
      "Secure Stripe payment gateway Integration",
      "Animations",
      "Change Password and reset password",
      "Mobile responsive"
     
      
    ],
  },
  
 
 
  {
    name: "Netflix clone",
    description:
      "This is a post login Netflix clone. a React-based mini-project developed for learning purposes. In this exciting project, I've utilized data from the tmdb database to showcase a collection of movies. Explore the world of cinema right from this clone and enjoy the movie trailers of your favorite films!",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Axios ",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "React YouTube",
        color: "blue-text-gradient",
      },
      {
        name: "DOM",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "/",
    live_link: "/",
    features: [
      "Used advaced CSS for styling",
      "Used TMDB API for movie datas",
      "Mobile responsive",
    ],
  },


  {
    name: "Quiz Mater",
    description:
      "Quiz Master is a web application designed to provide an engaging and interactive quiz-taking experience. It leverages the power of Django and React.js to create a robust and feature-rich platform. Here are some of the key features and functionalities of your project:",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "Axios ",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
      
      
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: chitChat,
    source_code_link: "/",
    live_link: "/",
    features: [
      "Used Tailwind CSS for styling",
      "Email verification",
      "Mobile responsive",
      "Each quiz question is equipped with a timer"
    ],
  },

















];

export { services, technologies, experiences, education,testimonials, projects };
