export type ContentLink = {
  label: string;
  href: string;
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  role: string;
  period: string;
  isAcademic?: boolean;
  summary: string;
  image: string;
  imageAlt: string;
  tags: string[];
  highlight?: boolean;
  legacyMarkdownPath?: string;
  details: string[];
  constraints: string[];
  architecture: string[];
  outcomes: string[];
  links?: ContentLink[];
};

export type WritingNote = {
  slug: string;
  title: string;
  status: "Outline" | "Drafting" | "Published";
  teaser: string;
  sections: { heading: string; points: string[] }[];
};

export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "building-interoperability-rust-quarkus-c",
    title: "Building with Rust Inside an Existing Stack",
    role: "Engineering Culture · Systems Architecture",
    period: "FloeDB",
    image: "/covers/rust-quarkus-c-cover.svg",
    imageAlt: "Metadata interoperability architecture and cross-system integration",
    highlight: true,
    legacyMarkdownPath:
      "/projects/posts/2026-building-interoperability-rust-quarkus-c.md",
    summary:
      "Written during the very early days of Floe, this post reflects on how technical decisions emerge through constraints, discussion, and experimentation.",
    tags: ["Engineering Culture", "Systems Architecture", "Floe"],
    details: [],
    constraints: [
      "Different stack layers have different constraints around deployment and integration.",
      "Cross-language boundaries require careful interface design and ownership clarity.",
    ],
    architecture: [
      "Architecture decisions were driven by interoperability, not just component performance.",
      "Planner-friendly metadata access shaped the core integration strategy.",
    ],
    outcomes: [
      "A cohesive interoperability direction across heterogeneous systems.",
      "Better operational and architectural understanding of multi-language infrastructure.",
    ],
    links: [
      {
        label: "Read the full article at FloeDB",
        href: "https://floedb.ai/blog/rust-quarkus-c",
      },
    ],
  },
  {
    slug: "join-elimination-analytical-query-planners",
    title: "Join Elimination in Analytical Query Planners",
    role: "Database Systems · Query Optimization · SQL",
    period: "Yellowbrick Data",
    image: "/covers/yb-join-elimination-cover.svg",
    imageAlt: "Query planner tree and optimizer workflow illustration",
    highlight: true,
    summary:
      "Join elimination removes joins that don't contribute to query results. Doing it safely requires checking constraints, nullability, and cardinality. In distributed systems, the payoff can be an entire shuffle stage removed.",
    tags: ["Database Systems", "Query Optimization", "SQL", "Yellowbrick"],
    legacyMarkdownPath:
      "/projects/posts/2026-join-elimination-analytical-query-planners.md",
    details: [],
    constraints: [],
    architecture: [],
    outcomes: [],
    links: [
      {
        label: "Read the full article at Yellowbrick Engineering",
        href: "https://yellowbrick.com/blog/yellowbrick-engineering/join-elimination/",
      },
    ],
  },
  {
    slug: "to-number-database-internals",
    title: "The Devil Is in the to_number Details",
    role: "Database Internals · SQL",
    period: "Yellowbrick Data",
    image: "/covers/yb-to-number-cover.svg",
    imageAlt: "Database expression and function evaluation style diagram",
    highlight: true,
    legacyMarkdownPath: "/projects/posts/2026-to-number-database-internals.md",
    summary:
      "One of the recurring surprises in database engineering is how much complexity hides behind functions that initially look trivial.",
    tags: ["Database Systems", "SQL", "SQL Compatibility", "Yellowbrick"],
    details: [],
    constraints: [],
    architecture: [],
    outcomes: [],
    links: [
      {
        label: "Read the full article at Yellowbrick Engineering",
        href: "https://yellowbrick.com/blog/yellowbrick-engineering/stories-from-the-field-the-devil-is-in-the-to_number-details/",
      },
    ],
  },
  {
    slug: "toubab-dialaw-2017",
    title: "Toubab Dialaw, 2017",
    role: "Community Projects · Education · Senegal",
    period: "Solida'rire",
    image: "/covers/toubab-dialaw-cover.png",
    imageAlt: "Classroom building site in Toubab Dialaw, Senegal",
    legacyMarkdownPath: "/projects/posts/2026-toubab-dialaw.md",
    summary:
      "A student-run solidarity project in Senegal: fundraising, building classrooms, and learning how long-term projects are really carried forward.",
    tags: ["Personal", "Senegal", "Education", "Community Projects"],
    details: [],
    constraints: [],
    architecture: [],
    outcomes: [],
    links: [
      {
        label: "Project presentation — Echosciences Grenoble",
        href: "https://www.echosciences-grenoble.fr/projets/projet-toubab-dialaw-2017-construction-de-deux-salles-de-classe-au-senegal",
      },
    ],
  },
  {
    slug: "armnn-onnx",
    title: "ArmNN / ONNX",
    role: "Machine Learning · C++ · ONNX Parser",
    period: "ARM · Summer 2018",
    image: "/covers/armnn-logo.png",
    imageAlt: "Inference runtime and parser flow visual",
    legacyMarkdownPath: "/projects/armnn/2018-06-armnn-onnx.md",
    summary:
      "As a summer intern in Arm's Machine Learning team, I spent 3 months working on ArmNN's 18.08 release and on designing, prototyping and producing an ONNX parser in C++.",
    tags: ["Machine Learning", "C++", "ONNX", "Inference"],
    details: [],
    constraints: [],
    architecture: [],
    outcomes: [],
    links: [
      {
        label: "Internship report",
        href: "/img/Internship_report.pdf",
      },
      {
        label: "ArmNN",
        href: "https://github.com/ARM-software/armnn",
      },
      {
        label: "ONNX",
        href: "https://onnx.ai/",
      },
    ],
  },
  {
    slug: "deca-compiler",
    title: "Deca Compiler",
    role: "Code Generation and Compiler Pipeline",
    period: "ENSIMAG",
    isAcademic: true,
    image: "/projects/GL/GL.png",
    imageAlt: "Deca compiler project visual",
    legacyMarkdownPath: "/projects/GL/2018-01-GL.md",
    summary:
      "Compiler implementation work reinforcing optimization pipeline thinking, low-level systems concerns, and testing rigor.",
    tags: ["Compiler", "Java", "Code Generation", "Systems"],
    details: [
      "Implemented core code generation from annotated AST to assembly.",
      "Worked on stack/register management and error handling mechanics.",
      "Integrated class and method support while preserving compiler invariants.",
      "Delivered with strong review and testing practices across the pipeline.",
    ],
    constraints: [
      "Pipeline stages must maintain strict invariants between analyses and code generation.",
      "Resource management in generated code affects correctness and runtime behavior.",
      "Language features add semantic complexity that propagates to backend decisions.",
    ],
    architecture: [
      "Separation between lexical/syntactic analysis, semantic validation, and code generation.",
      "Backend structures for register and stack allocation decisions.",
      "Extensive validation strategy to protect compiler stage contracts.",
    ],
    outcomes: [
      "Working compiler pipeline from source to assembly output.",
      "Improved practical understanding of optimization and backend tradeoffs.",
      "Reusable mental model for planner/optimizer design in database systems.",
    ],
  },
  {
    slug: "arm-intern-innovation-challenge",
    title: "2018 Arm Intern Innovation Challenge",
    role: "Data Visualization · SQL",
    period: "ARM · Summer 2018",
    image: "/img/heatmap.gif",
    imageAlt: "Arm innovation challenge coverage analysis heatmap",
    legacyMarkdownPath: "/projects/arm/2018-08-20-ArmChallenge.md",
    summary:
      "During my summer internship at Arm this summer, I had the opportunity to participate in the Intern Innovation Challenge, a competition between Arm interns worldwide.",
    tags: ["Java", "PostgreSQL", "SQL", "Data Visualization"],
    details: [],
    constraints: [],
    architecture: [],
    outcomes: [],
    links: [
      {
        label: "Full project can be seen on Github",
        href: "https://github.com/MorganeRouvroy/ARMChallenge",
      },
    ],
  },
  {
    slug: "blobwar-ai",
    title: "Blobwar AI",
    role: "AI · Search Optimization · Rust",
    period: "ENSIMAG",
    isAcademic: true,
    image: "/projects/blobwar/blobwar.jpg",
    imageAlt: "Blobwar game board screenshot",
    legacyMarkdownPath: "/projects/blobwar/2018-04-11-blobwarAI.md",
    summary:
      "Rust implementation of adversarial search with practical optimizations for quality under depth constraints.",
    tags: ["Rust", "AI", "Search", "Algorithms"],
    details: [
      "Implemented Negamax alpha-beta pruning.",
      "Added killer heuristic, transposition tables, and move ordering.",
      "Iteratively tuned behavior against tournament constraints.",
    ],
    constraints: [
      "Search depth is bounded by time and branching factor.",
      "Move ordering strongly affects effective pruning efficiency.",
      "Evaluation quality must stay useful under tight compute budgets.",
    ],
    architecture: [
      "Negamax search core with alpha-beta pruning.",
      "Optimization extensions layered around ordering and state reuse.",
      "Tournament-driven iterative refinement loop.",
    ],
    outcomes: [
      "High-quality tournament performance with a practical algorithmic stack.",
      "Deeper experience in optimization tradeoffs under hard constraints.",
    ],
  },
  {
    slug: "surface-simplification",
    title: "Surface Simplification",
    role: "3D Graphics · C++ · Optimization",
    period: "ENSIMAG",
    isAcademic: true,
    image: "/projects/MS/MS.PNG",
    imageAlt: "Surface simplification project visual",
    legacyMarkdownPath: "/projects/MS/2019-01-edgeCollapse.md",
    summary:
      "C++ implementation and comparison of mesh simplification strategies (QEM and Melax) with visual tooling.",
    tags: ["3D", "C++", "OpenGL4", "Geometry"],
    details: [
      "Implemented simplification methods and visualized edge collapse behavior.",
      "Worked on method comparison, GUI support, and result inspection.",
    ],
    constraints: [],
    architecture: [],
    outcomes: [],
  },
  {
    slug: "dinosaur-3d",
    title: "3D Dinosaur Scene",
    role: "3D Graphics · Python · OpenGL4",
    period: "ENSIMAG",
    isAcademic: true,
    image: "/projects/dino/dino_demo_cover.jpg",
    imageAlt: "3D dinosaur scene cover image",
    legacyMarkdownPath: "/projects/dino/2018-05-3D-dinosaur.md",
    summary:
      "3D engine assignment covering rendering, animation, interaction, and visual effects in a prehistoric scene.",
    tags: ["3D", "Python", "OpenGL4", "Rendering"],
    details: [
      "Implemented rendering effects including fog, water, and lighting.",
      "Built interaction systems with character controls and camera behavior.",
    ],
    constraints: [],
    architecture: [],
    outcomes: [],
  },
  {
    slug: "multi-agent-simulation",
    title: "Multi-Agent Simulation",
    role: "AI · Simulation · Java",
    period: "ENSIMAG",
    isAcademic: true,
    image: "/projects/boids/boids.png",
    imageAlt: "Boids simulation screenshot",
    legacyMarkdownPath: "/projects/boids/2017-11-boids.md",
    summary:
      "Java simulation platform for cellular automata and boids with species-specific behaviors.",
    tags: ["Java", "AI", "Simulation", "Algorithms"],
    details: [
      "Implemented behavior rules and event-driven simulation updates.",
      "Worked on architecture for multiple simulation systems.",
    ],
    constraints: [],
    architecture: [],
    outcomes: [],
  },
  {
    slug: "gui-library",
    title: "GUI Library for Programmers",
    role: "C · Graphics · UI",
    period: "ENSIMAG",
    isAcademic: true,
    image: "/projects/GUI/GUI.PNG",
    imageAlt: "GUI library project screenshot",
    legacyMarkdownPath: "/projects/GUI/2017-05-GUI.md",
    summary:
      "C project building a programmable GUI library with primitives, event handling, and geometry management.",
    tags: ["C", "Graphics", "UI", "Systems"],
    details: [
      "Implemented geometry manager, event manager, and rendering primitives.",
      "Worked on interaction routing and picking-surface approach.",
    ],
    constraints: [],
    architecture: [],
    outcomes: [],
  },
  {
    slug: "escuelita-de-los-llanos",
    title: "Escuelita de los Llanos",
    role: "Community Projects · Education · Venezuela",
    period: "Personal",
    image: "/covers/escuelita-llanos.jpg",
    imageAlt: "Escuelita de los Llanos school grounds and community space",
    legacyMarkdownPath: "/projects/posts/2026-escuelita-de-los-llanos.md",
    summary:
      "A childhood memory from Venezuela: fundraising for a rural education project, and what I still carry from a school exchange with students from Los Llanos.",
    tags: ["Personal", "Venezuela", "Education", "Community Projects"],
    details: [],
    constraints: [],
    architecture: [],
    outcomes: [],
    links: [
      {
        label: "Escuelita de los Llanos",
        href: "https://cfcaracas.org/vie-de-letablissement/escuelita-de-los-llanos/",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projectCaseStudies.find((project) => project.slug === slug);
}
