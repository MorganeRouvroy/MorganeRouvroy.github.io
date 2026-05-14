export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Posts", href: "/posts" },
  { label: "Resume", href: "/resume" },
  { label: "GitHub", href: "https://github.com/mrouvroy-floe" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/morgane-rouvroy/" },
];

export const focusAreas = [
  "Analytical databases",
  "Query planning",
  "Metadata interoperability",
  "Lakehouse architecture",
  "Systems engineering",
];


export const expertise = [
  {
    title: "Database Systems",
    items: [
      "Query optimization",
      "SQL planning",
      "Execution planning",
      "Analytical engines",
    ],
  },
  {
    title: "Metadata Infrastructure",
    items: [
      "Metadata federation",
      "Catalog interoperability",
      "Planner-friendly metadata",
      "Lakehouse architecture",
    ],
  },
  {
    title: "Systems Programming",
    items: ["C++", "Java", "Rust", "Compiler concepts"],
  },
];

export const personalSide = [
  "Photography",
  "Travel",
  "Fencing",
  "Sketching",
];

export const topSkills = [
  "SQL",
  "Database Systems",
  "Query Optimization",
  "Performance Tuning",
];

export const resumeProfile =
  "Senior Software Engineer focused on analytical databases, query planning, optimization, and metadata interoperability. I like solving systems problems where performance depends on understanding internals, not just interfaces.";

export const resumeLanguages = [
  { name: "French", level: "Native" },
  { name: "English", level: "Professional (C1)" },
  { name: "Spanish", level: "Professional (C1)" },
];

export const resumeInterests = [
  "Photography",
  "Travel",
  "Fencing",
  "Video games",
];

export type ResumeRole = {
  role: string;
  period: string;
  details: string[];
  employmentType?: string;
  location?: string;
  links?: { label: string; href: string }[];
  skills?: string[];
};

export type ResumeCompany = {
  company: string;
  companyPeriod: string;
  companyMeta: string;
  roles: ResumeRole[];
};

export const resumeExperience: ResumeCompany[] = [
  {
    company: "Floe",
    companyPeriod: "Jan 2026 - Present",
    companyMeta: "Grenoble, Auvergne-Rhone-Alpes, France · On-site",
    roles: [
      {
        role: "Senior Software Engineer",
        employmentType: "Permanent",
        period: "Jan 2026 - Present",
        details: [
          "Working on interoperability between data catalogs and metadata systems for analytical lakehouse architectures.",
          "Focused on metadata federation, planner-friendly metadata, and cross-catalog integration.",
          "Designing and implementing architecture that makes metadata easier to consume by analytical engines and query planners.",
        ],
        links: [
          {
            label: "Introducing Floecat: A Catalog of Catalogs for the Modern Lakehouse",
            href: "https://floedb.ai/blog/introducing-floecat-a-catalog-of-catalogs-for-the-modern-lakehouse",
          },
        ],
        skills: ["Database Systems", "Query Optimization"],
      },
    ],
  },
  {
    company: "Yellowbrick Data",
    companyPeriod: "Sep 2019 - Feb 2026",
    companyMeta: "Permanent · On-site",
    roles: [
      {
        role: "Technical Lead & Software Engineer, Query Planning and Optimization",
        period: "Jan 2022 - Feb 2026",
        location: "Grenoble, Auvergne-Rhone-Alpes, France",
        details: [
          "Led and contributed to query planning and optimization work for Yellowbrick's analytical database engine.",
          "Focused on SQL optimization, execution planning, and optimizer improvements such as join elimination.",
          "Worked on rule design and planner behavior analysis for complex analytical workloads.",
          "Contributed to making optimization decisions more robust across workload classes, not only query microbenchmarks.",
        ],
        skills: ["Query Optimization", "Performance Tuning", "SQL", "Database Systems"],
      },
      {
        role: "Software Engineer, Query Planning and Optimization",
        period: "Sep 2019 - Jan 2022",
        location: "London, United Kingdom",
        details: [
          "Worked on the query planner and optimizer of Yellowbrick's analytical database engine.",
          "Contributed to SQL optimization and execution planning improvements, including optimizer techniques such as join elimination.",
          "Debugged planner behavior when runtime execution diverged from expected cost assumptions.",
          "Improved plan quality for join-heavy analytical workloads.",
        ],
        skills: ["Query Optimization", "Performance Tuning", "SQL", "Database Systems"],
      },
    ],
  },
  {
    company: "Dassault Systemes",
    companyPeriod: "Mar 2019 - Aug 2019",
    companyMeta: "Internship · Velizy-Villacoublay, France · On-site",
    roles: [
      {
        role: "Software Engineering Intern",
        period: "Mar 2019 - Aug 2019",
        details: [
          "Intern in the Virtual Human team, working on realistic hand positioning and object grasping in virtual environments.",
          "Designed and implemented a smart hand posturing engine combining analytic and machine-learning approaches.",
          "Worked on methods including an analytic decision-tree algorithm and deep-learning neural networks.",
        ],
        skills: ["Machine Learning"],
      },
    ],
  },
  {
    company: "Arm",
    companyPeriod: "Jun 2018 - Aug 2018",
    companyMeta: "Internship · Cambridge",
    roles: [
      {
        role: "Intern Software Engineer",
        period: "Jun 2018 - Aug 2018",
        details: [
          "Intern Software Engineer in the Machine Learning Group, working on ArmNN: a high-performance neural network inference framework for Arm hardware.",
          "Contributed to ArmNN 18.08 and designed/prototyped ONNX parser components in C++.",
          "Worked on production-oriented implementation tasks while dealing with release constraints and runtime compatibility.",
        ],
        skills: ["Machine Learning", "C++", "ONNX"],
      },
    ],
  },
];

export const resumeEducation = [
  {
    degree: "MSc, Computer Science and Applied Mathematics",
    school: "National School of Computer Science and Applied Mathematics of Grenoble (ENSIMAG)",
    period: "2016-2019",
    notes:
      "Mathematical modeling, vision, graphics and simulation. Activities and societies: Arts Society. Specialization in image, virtual reality, and multimedia.",
  },
];

export const resumeProjectsHighlight = [
  {
    title: "2018 Arm Intern Innovation Challenge",
    period: "Jul 2018",
    details:
      "Winning submission for Arm's 2018 Intern Innovation Challenge (2-week team challenge, 5 interns per team, in partnership with UNICEF). We built a JavaFX + PostgreSQL application to help identify schools in Colombia most in need of infrastructure and disaster-prevention planning, including map-based views of nearby hospitals, radius-based school/health-facility queries, and regional coverage indicators.",
  },
];

export const resumeVolunteering = [
  {
    role: "Design Team Leader",
    org: "ENSIMAG Arts Society",
    period: "2017-2018",
  },
  {
    role: "Volunteer and Communication Manager",
    org: "Solida'Rire Project (Senegal School Construction)",
    period: "2016-2017",
  },
];
