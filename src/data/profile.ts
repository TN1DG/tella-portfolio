// TypeScript interfaces for profile data
export interface Profile {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
}

export interface Skills {
  businessAnalysis: string[];
  soft: string[];
  technical: string[];
  systemsTools: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: number | string;
  status?: 'completed' | 'ongoing';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  duration: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  goals: string[];
  liveLink?: string;
  githubLink?: string;
  features?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  grade: string;
  year: number;
  location?: string;
}

export interface Award {
  title: string;
  issuer: string;
  year: number;
  description?: string;
}

// Profile data
export const profile: Profile = {
  name: "Tobi Tella-Ndanusa",
  location: "London, UK", // Update with actual location from CV
  email: "tobi.tella@example.com", // Update with actual email from CV
  phone: "+44 XXX XXX XXXX", // Update with actual phone from CV
  linkedin: "https://linkedin.com/in/tobi-tella-ndanusa", // Update with actual LinkedIn from CV
};

export const summary = `
[Please replace this with the exact summary/profile section from your CV]
Experienced IT professional with expertise in project management, business analysis, and full-stack development...
`;

export const skills: Skills = {
  businessAnalysis: [
    // Add items from CV - Business Analysis section
    "Requirements Gathering",
    "Process Improvement",
    "Stakeholder Management",
    "Documentation",
  ],
  soft: [
    // Add items from CV - Soft Skills section
    "Leadership",
    "Communication",
    "Problem Solving",
    "Team Collaboration",
  ],
  technical: [
    // Add items from CV - Technical Skills section
    "React.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "HTML/CSS",
  ],
  systemsTools: [
    // Add items from CV - Systems & Tools section
    "Microsoft Office Suite",
    "Project Management Tools",
    "Database Management",
    "Version Control (Git)",
  ],
};

export const certifications: Certification[] = [
  {
    name: "React.js Complete Course",
    issuer: "Udemy",
    year: 2023,
    status: "completed",
  },
  {
    name: "[Certification Name]", // Update with actual Aptech certification name
    issuer: "Aptech",
    year: 2024,
    status: "completed",
  },
  {
    name: "Fortinet Certification", // Update with specific Fortinet certification name
    issuer: "Fortinet",
    year: "ongoing",
    status: "ongoing",
  },
  {
    name: "Microsoft Office Specialist (MOS)",
    issuer: "Microsoft",
    year: 2024, // Update with actual year
    status: "completed",
  },
];

export const experience: Experience[] = [
  {
    company: "Biandaro Estates",
    role: "IT Project Manager",
    period: "Apr 2022 – Present",
    duration: "2+ years",
    responsibilities: [
      "[Bullet point 1 from CV - copy exact wording]",
      "[Bullet point 2 from CV - copy exact wording]",
      "[Bullet point 3 from CV - copy exact wording]",
    ],
    technologies: ["Project Management", "IT Infrastructure", "Team Leadership"],
  },
  {
    company: "Oxfam",
    role: "Sales & IT Support Assistant",
    period: "Aug 2024 – Oct 2024",
    duration: "3 months",
    responsibilities: [
      "[Bullet point 1 from CV - copy exact wording]",
      "[Bullet point 2 from CV - copy exact wording]",
    ],
    technologies: ["Customer Service", "IT Support", "Sales"],
  },
  {
    company: "Non-Profit Organization", // Update with actual organization name
    role: "IT Assistant",
    period: "Nov 2023 – May 2024",
    duration: "7 months",
    responsibilities: [
      "[Bullet point 1 from CV - copy exact wording]",
      "[Bullet point 2 from CV - copy exact wording]",
    ],
    technologies: ["IT Support", "System Administration", "Help Desk"],
  },
];

export const projects: Project[] = [
  {
    name: "YTG Portfolio Platform",
    description: "[Brief description from CV - copy exact wording]",
    stack: [
      "React.js",
      "TypeScript", 
      "Next.js",
      "Tailwind CSS",
      // Add other technologies from CV
    ],
    goals: [
      "[Goal 1 from CV]",
      "[Goal 2 from CV]",
      "[Goal 3 from CV]",
    ],
    features: [
      "Portfolio Management System",
      "User Authentication",
      "Responsive Design",
    ],
  },
  {
    name: "Sushiman Landing Page",
    description: "[Brief description from CV]",
    stack: [
      "HTML5",
      "CSS3", 
      "JavaScript",
      // Add other technologies used
    ],
    goals: [
      "Modern Restaurant Website",
      "Responsive Design",
      "User-Friendly Interface",
    ],
    liveLink: "https://sushiman-landing-page.vercel.app", // Update with actual link
    githubLink: "https://github.com/yourusername/sushiman-landing", // Update if available
  },
];

export const education: Education[] = [
  {
    institution: "Middlesex University",
    degree: "BSc Computer Science", // Update with actual degree name
    grade: "First Class Honours",
    year: 2025,
    location: "London, UK",
  },
  {
    institution: "Aptech Computer Education",
    degree: "Diploma in Software Engineering", // Update with actual program name
    grade: "Distinction",
    year: 2024,
    location: "Lagos, Nigeria", // Update with actual location
  },
];

export const awards: Award[] = [
  {
    title: "[Award 1 title from CV]",
    issuer: "[Issuer name]",
    year: 2024, // Update with actual year
    description: "[Brief description if available]",
  },
  {
    title: "[Award 2 title from CV]",
    issuer: "[Issuer name]", 
    year: 2024, // Update with actual year
    description: "[Brief description if available]",
  },
  {
    title: "[Award 3 title from CV]",
    issuer: "[Issuer name]",
    year: 2023, // Update with actual year
    description: "[Brief description if available]",
  },
  {
    title: "[Award 4 title from CV]",
    issuer: "[Issuer name]",
    year: 2023, // Update with actual year
    description: "[Brief description if available]",
  },
];

// Export all data as a single object for easy importing
export const portfolioData = {
  profile,
  summary,
  skills,
  certifications,
  experience,
  projects,
  education,
  awards,
};
