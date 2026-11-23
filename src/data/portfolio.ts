export const profile = {
  name: "Abdulmanaf Aliu",
  role: "Frontend Developer | Data Science & Machine Learning",
  headline: "I build digital products and data-driven solutions that solve real-world problems.",
  intro:
    "I am a software developer with experience building modern web applications and a growing specialization in data science, statistical modelling, and machine learning.",
  intro2:
    "My work sits at the intersection of frontend engineering, data analytics, and applied machine learning combining technical problem-solving with analytical thinking to build useful, scalable solutions.",
  location: "Accra, Ghana",
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const focus = {
  title: "Building at the intersection of software and data",
  description:
    "My focus is on developing practical software engineering skills while exploring how data and machine learning can solve real-world problems.",
  areas: [
    { title: "Frontend", text: "Web applications and user experiences" },
    { title: "Data", text: "Analytics, statistics and insights" },
    { title: "ML & AI", text: "Predictive modelling and intelligent systems" },
  ],
  list: [
    "Modern frontend application development",
    "Data analytics and business intelligence",
    "Statistical analysis and predictive modelling",
    "Machine learning and model evaluation",
    "AI-powered applications and intelligent systems",
  ],
};

export type Project = {
  category: string;
  title: string;
  description: string;
  stack: string[];
};

export const projects: Project[] = [
  {
    category: "Frontend Engineering",
    title: "Healthcare Management Systems",
    description:
      "Contributed to healthcare administration applications, building interfaces, improving component architecture and migrating UI components from Flowbite to ShadCN.",
    stack: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI"],
  },
  {
    category: "Data Analytics",
    title: "Cocoa Production by Region",
    description:
      "An interactive Power BI dashboard exploring cocoa production across regions in Ghana, transforming agricultural data into meaningful insights.",
    stack: ["Power BI", "Data Cleaning", "Data Visualization"],
  },
  {
    category: "Machine Learning",
    title: "Credit Card Fraud Detection",
    description:
      "Developed classification models to identify potentially fraudulent transactions, exploring class imbalance, SMOTE, model tuning and evaluation.",
    stack: ["Python", "Pandas", "Scikit-learn", "Random Forest", "XGBoost"],
  },
  // {
  //   category: "Applied Machine Learning",
  //   title: "Stock Volatility Prediction API",
  //   description:
  //     "Developed a backend service exploring financial time-series volatility modelling using GARCH and exposing predictions through FastAPI.",
  //   stack: ["Python", "GARCH", "FastAPI", "SQLite", "Alpha Vantage"],
  // },
  {
    category: "Software Engineering & Experimentation",
    title: "A/B Testing Application",
    description:
      "Building an experimentation platform to compare different user experiences, track interactions and analyse conversion behaviour.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Clerk"],
  },
];

export type Experience = {
  role: string;
  org?: string;
  place?: string;
  period: string;
  points: string[];
  intro?: string;
};

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    org: "ClearMed",
    place: "Accra, Ghana",
    period: "August 2025 – Present",
    intro:
      "Contributing to the development and improvement of healthcare management applications.",
    points: [
      "Building responsive and reusable interfaces using React and TypeScript.",
      "Migrating existing UI components from Flowbite to ShadCN UI.",
      "Working with API integrations and application data.",
      "Improving component architecture and user experience across healthcare workflows.",
    ],
  },
  {
    role: "Frontend Developer / National Service",
    org: "Amalitech",
    place: "Accra, Ghana",
    period: "2024 – 2025",
    intro: "Contributed to frontend development and content management projects.",
    points: [
      "Developed modern web interfaces using React and Next.js.",
      "Worked with Storyblok as a headless CMS.",
      "Built responsive components and supported frontend application development.",
    ],
  },
  {
    role: "Frontend Developer and product owner",
    org: "Global Hackathon Participant, Storyblok x Code & Coffee Hackathon 2025",
    place: "Accra, Ghana",
    period: "October 2025",
    intro:
      "Participated in a month-long global virtual hackathon hosted by Storyblok in collaboration with Code & Coffee.",
    points: [
      "Developed a software project using Storyblok as a headless CMS.",
      "Applied modern frontend development technologies to build and deliver a functional application.",
      "Explored content management workflows, CMS integrations and modern web development practices.",
    ],
  },
  {
    role: "Independent Data Science & Machine Learning Projects",
    period: "2025 – Present",
    intro:
      "Developing practical projects involving statistical analysis, data visualization, predictive modelling and machine learning.",
    points: [
      "Exploring classification and regression models.",
      "Building data analytics dashboards.",
      "Applying statistical techniques to real-world datasets.",
      "Experimenting with machine learning deployment and APIs.",
    ],
  },
];

export const expertise = [
  {
    title: "Frontend Engineering",
    items:
      "HTML5, CSS3, JavaScript, TypeScript, React, Next.js, Tailwind CSS, ShadCN UI, Storyblok, responsive design and component architecture.",
  },
  {
    title: "Data Science & Analytics",
    items:
      "Python, SQL, Excel, Power Query, Power BI, DAX, Pandas, NumPy, Exploratory Data Analysis, statistical analysis and data visualization.",
  },
  {
    title: "Machine Learning",
    items:
      "Scikit-learn, TensorFlow, PyTorch, regression, classification, Random Forest, XGBoost, feature engineering, PCA, SMOTE and model evaluation.",
  },
  {
    title: "Backend & Data Infrastructure",
    items:
      "FastAPI, PostgreSQL, Supabase, Prisma, REST APIs, Git and GitHub, storyblok",
  },
];

export const growing = {
  title: "Areas of growing interest",
  items:
    "Artificial Intelligence, Large Language Models, AI-powered applications, machine learning engineering, model deployment and intelligent automation.",
};

export const about = {
  title: "About me",
  paragraphs: [
    "I am a software developer with an academic background in Mathematical Science, specializing in Statistics and Computer Science.",
    "My professional journey began in frontend development, where I developed an interest in building modern, interactive and user-friendly applications.",
    "Over time, my curiosity about data, statistics and intelligent systems led me into Data Science and Machine Learning.",
    "Today, I am continuously expanding my knowledge across software engineering, data analytics, statistical modelling and applied machine learning.",
    "I enjoy solving problems, understanding how systems work and transforming technical ideas into practical solutions.",
  ],
  belief:
    "I believe the future of technology lies in bringing software engineering, data and artificial intelligence together.",
};

export const contact = {
  title: "Let's build something meaningful.",
  text: "I am interested in opportunities involving frontend engineering, data analytics, data science, machine learning and AI. I am always open to learning, collaborating and contributing to projects that solve meaningful problems.",
  email: "abdulmanafaliu414@gmail.com",
  linkedin: "https://www.linkedin.com/in/aliu-abdul-manaf-41675527a/",
  github: "https://github.com/abmanaf",
};
