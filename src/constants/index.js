export const profile = {
  name: "Athul M K",
  role: "Python Full Stack Developer",
  tagline:
    "I design and ship scalable web platforms: Django and React on the surface, PostgreSQL, AWS and Nginx underneath.",
  location: "United Arab Emirates",
  phone: "+971 565867669",
  email: "athulmkdevcse2022@gmail.com",
  linkedin: "https://linkedin.com/in/athulmk1",
  github: "https://github.com/macn1",
  resume: "/Athulmk-Resume.pdf",
};

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const stats = [
  { value: "2+", label: "Years of experience" },
  { value: "10+", label: "Production apps shipped" },
  { value: "6+", label: "Industries served" },
  { value: "AWS", label: "Deployed end to end" },
];

export const summary = [
  "Full Stack Developer with 2+ years of experience designing, developing and maintaining scalable web applications using Python, Django and React.",
  "I work across the whole stack: backend optimization, REST API development, database design and modern frontend engineering. I also run my own deployments on AWS with Docker and Nginx.",
  "I like integrating complex systems (billing, bookings, real-time chat, role-based dashboards) into products that improve operational efficiency and feel good to use.",
];

export const services = [
  {
    title: "Full Stack Engineering",
    description:
      "End-to-end web applications with Django and React, from data model to polished interface.",
    icon: "layers",
  },
  {
    title: "API & Backend",
    description:
      "REST APIs with Django REST Framework, JWT auth, role-based access control and optimized PostgreSQL queries.",
    icon: "server",
  },
  {
    title: "Modern Frontend",
    description:
      "Responsive, reusable component architectures with React, Next.js, Tailwind CSS and Material UI.",
    icon: "layout",
  },
  {
    title: "Cloud & Deployment",
    description:
      "Production hosting on AWS EC2 and S3 with Docker and Nginx, including domain and server configuration.",
    icon: "cloud",
  },
];

export const experiences = [
  {
    company: "Stackerbee Technologies",
    role: "Python Full Stack Developer",
    period: "Feb 2025 – Sept 2026",
    summary:
      "Built and shipped four full stack products across fitness, hospitality, automotive and logistics, owning features from database design through to production deployment.",
    projects: [
      {
        name: "BIOGATE: Gym Management SaaS Platform",
        stack: ["Django", "React.js", "PostgreSQL", "JWT"],
        points: [
          "Developed a multi-tenant architecture supporting white-label deployments",
          "Implemented membership management, class scheduling and subscription billing",
          "Designed RESTful APIs with JWT authentication and role-based access control",
          "Utilized PostgreSQL for efficient data storage and retrieval",
        ],
      },
      {
        name: "AJP Hospitality: Guest Service Automation Platform",
        stack: ["Django", "React.js", "Tailwind CSS", "PostgreSQL"],
        points: [
          "Implemented modules for room booking, chauffeur service, medical assistance and food & beverage management with seamless workflow integration",
          "Built a responsive, customizable frontend with React.js and Tailwind CSS",
          "Used PostgreSQL with optimized queries for reliable storage and high performance",
          "Designed role-based access control with separate dashboards for admin, staff and guests",
        ],
      },
      {
        name: "AJP Automotive: Service & Vehicle Management Platform",
        stack: ["React (Vite)", "Django REST Framework", "PostgreSQL", "Tailwind CSS"],
        points: [
          "Developed a full stack platform with React.js (Vite), Django REST Framework and PostgreSQL",
          "Implemented vehicle listings, service management, customer inquiries and appointment scheduling",
          "Added authentication and role-based access control for admin and staff management",
          "Improved performance through reusable React components and optimized API handling",
          "Managed deployment, domain configuration and production server setup for live hosting",
        ],
      },
      {
        name: "Warehouse Management System (WMS)",
        stack: ["React.js", "Component architecture"],
        points: [
          "Engineered a complete WMS with a component-based architecture that maximizes reusability",
          "Applied performance-focused bundle optimization",
          "Delivered full inventory lifecycle management features",
        ],
      },
    ],
  },
  {
    company: "Vedha Info-Systems",
    role: "Junior Python Developer",
    period: "Aug 2024 – Dec 2024",
    summary:
      "Joined as a junior developer and quickly moved into delivering production Django applications alongside cross-functional teams.",
    points: [
      "Collaborated with cross-functional teams to design, develop and deploy high-quality Django applications and RESTful APIs, following industry best practices for data protection",
      "Developed and deployed 3+ production-ready web applications with Django REST Framework, PostgreSQL design and optimization, and responsive React.js and Material UI frontends",
      "Implemented core features including user authentication, payment gateways and real-time updates",
    ],
    stack: ["Django REST Framework", "PostgreSQL", "React.js", "Material UI"],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    items: ["Python", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: "layout",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend",
    icon: "server",
    items: ["Django", "Django REST Framework", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    icon: "database",
    items: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    items: ["Docker", "AWS (EC2, S3)", "Nginx"],
  },
  {
    title: "Web Technologies",
    icon: "globe",
    items: ["REST APIs", "WebSockets", "JWT Authentication"],
  },
  {
    title: "AI Tools",
    icon: "spark",
    items: ["Claude AI", "Antigravity", "v0.dev", "AI Integration APIs"],
  },
  {
    title: "Version Control",
    icon: "branch",
    items: ["Git", "GitHub"],
  },
];

export const projects = [
  {
    name: "BIOGATE",
    category: "Gym Management SaaS",
    year: "Stackerbee Technologies",
    description:
      "A multi-tenant SaaS platform that lets gyms run memberships, class schedules and billing under their own brand.",
    highlights: [
      "Multi-tenant architecture supporting white-label deployments",
      "Membership management, class scheduling and subscription billing",
      "JWT authentication with role-based access control",
    ],
    stack: ["Django", "React.js", "PostgreSQL", "JWT"],
    accent: ["#6d5efc", "#22d3ee"],
  },
  {
    name: "AJP Hospitality",
    category: "Hospitality & Guest Service Automation",
    year: "Stackerbee Technologies",
    description:
      "A guest service platform that connects room booking, chauffeur, medical assistance and food & beverage into a single workflow.",
    highlights: [
      "Room booking, chauffeur, medical assistance and F&B modules",
      "Separate dashboards for admin, staff and guests",
      "Razorpay payments and optimized PostgreSQL queries",
    ],
    stack: ["Django", "React.js", "Tailwind CSS", "PostgreSQL", "Docker"],
    accent: ["#f59e0b", "#ef4444"],
  },
  {
    name: "AJP Automotive",
    category: "Automotive Service & Vehicle Management",
    year: "Stackerbee Technologies",
    description:
      "A full stack platform for dealerships and service centers covering vehicle listings, service jobs, inquiries and appointments.",
    highlights: [
      "Vehicle listings, service management and appointment scheduling",
      "Role-based access for admin and staff",
      "Handled domain setup and production server deployment",
    ],
    stack: ["React (Vite)", "Django REST Framework", "PostgreSQL", "Tailwind CSS"],
    accent: ["#06b6d4", "#3b82f6"],
  },
  {
    name: "Warehouse Management System",
    category: "Inventory & Logistics",
    year: "Stackerbee Technologies",
    description:
      "A complete WMS frontend built around reusable components and a lean, optimized bundle.",
    highlights: [
      "Component-based architecture for maximum reusability",
      "Performance-focused bundle optimization",
      "Full inventory lifecycle management",
    ],
    stack: ["React.js", "Vite"],
    accent: ["#10b981", "#84cc16"],
  },
  {
    name: "Topline Integrated Services",
    category: "Business Solutions Platform",
    year: "Independent project",
    description:
      "A corporate services website with an SEO-optimized Next.js frontend and a Django backend that powers all dynamic content.",
    highlights: [
      "Next.js frontend tuned for SEO and fast client-side navigation",
      "Admin dashboards for services, blogs and media content",
      "Deployed on AWS EC2 behind Nginx",
    ],
    stack: ["Next.js", "Django", "Tailwind CSS", "PostgreSQL", "AWS EC2", "Nginx"],
    accent: ["#8b5cf6", "#ec4899"],
  },
  {
    name: "Al-Dar Car Rental",
    category: "Rental Operations Platform",
    year: "Independent project",
    description:
      "A web platform to manage car inventory, bookings, expenses and income, with analytics for the business owner.",
    highlights: [
      "Admin dashboard for cars, expenses, income and analytics",
      "Secure JWT authentication and authorization for admins and staff",
      "AWS EC2 deployment with Nginx load balancing",
    ],
    stack: ["Django", "JWT", "AWS EC2", "Nginx"],
    accent: ["#f97316", "#facc15"],
  },
  {
    name: "Pixel-Hub",
    category: "E-learning Platform",
    year: "Independent project",
    description:
      "A digital media e-learning platform where creators submit courses and learners study, pay and chat in real time.",
    highlights: [
      "Stripe payment processing",
      "Real-time chat using WebSockets",
      "Deployed on AWS EC2 with tuned Nginx configuration",
    ],
    stack: ["Django", "React.js", "PostgreSQL", "Stripe", "WebSockets", "AWS EC2"],
    accent: ["#a855f7", "#38bdf8"],
  },
];

export const education = [
  {
    title: "Bachelor of Technology (BTech), Computer Science and Engineering",
    institution: "APJ Abdul Kalam Technological University",
    period: "2015 – 2019",
    result: "CGPA 6.23",
    mark: "B",
  },
  {
    title: "Higher Secondary Education, Computer Science",
    institution: "JNMGHSS Vadakara",
    period: "2013 – 2015",
    result: "87.75%",
    mark: "H",
  },
];
