// data/portfolio.ts

export const personalInfo = {
  name: "Shruti Suryakant Gijbile",
  role: "Aspiring Software Developer | AI Enthusiast | Information Technology Student",
  location: "Mumbai, India",
  about: "I am an Information Technology student passionate about software development, artificial intelligence, web development, and data-driven problem solving. I enjoy building practical projects that solve real-world problems and continuously improving my technical skills through hands-on development.",
  email: "shrutigijbile19@gmail.com", // Replace with your actual email
  linkedin: "https://www.linkedin.com/in/shruti-gijbile-12a00a376/", // Replace with your link
  github: "https://github.com/S-Gijbile-19", // Replace with your link
  resume: "/resume.pdf" // Place your resume.pdf in the public folder
};

export const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend & Database",
    skills: ["Python", "FastAPI", "SQL", "SQLite"]
  },
  {
    title: "AI & Data",
    skills: ["Machine Learning", "Generative AI", "Prompt Engineering", "Data Analysis"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Vercel"]
  }
];

export const projects = [
  {
    title: "CareerPilot AI",
    description: "AI-powered placement preparation platform featuring ATS resume analysis, skill gap identification, interview simulation, placement exam generation, and career guidance.",
    tags: ["Next.js", "FastAPI", "Generative AI", "Tailwind CSS"],
    github: "https://github.com/S-Gijbile-19/CareerPilot-AI",
    demo: "https://career-pilot-piys2m51y-s-gijbile-19s-projects.vercel.app"
  },
  {
    title: "ResumePilot",
    description: "Resume and CV builder with ATS score checking, resume optimization suggestions, template switching, and PDF export functionality.",
    tags: ["React", "TypeScript", "Tailwind CSS", "PDF Engine"],
    github: "https://github.com/S-Gijbile-19/Resume-Builder",
    demo: "https://resume-builder-blond-two.vercel.app/"
  },
  {
    title: "Smart Hostel Issue Tracker",
    description: "Issue management system with lost-and-found tracking, priority handling, analytics dashboard, and hostel-specific categorization.",
    tags: ["Next.js", "SQL", "Tailwind CSS", "Charts.js"],
    github: "https://github.com/S-Gijbile-19/smart-hostel-issue-tracker",
    demo: "https://smart-hostel-issue-tracker.streamlit.app"
  }
];

export const education = [
  {
    degree: "B.E in Information Technology",
    institution: "Atharva College of Engineering",
    location: "Mumbai, India",
    duration: "2023 - 2027", // Adjust your timeline
    details: "Focusing on Software Engineering, Database Management Systems, and Artificial Intelligence."
  }
];

export const achievements = [
  {
    title: "Top 50 in Internal SIH",
    description: "Developed an innovative technical solution under time constraints at a internal Smart India Hackathon."
  },
  {
    title: "Top 20 in HackerThon",
    description: "Developed a Smart Safety solution at Ashoka University Hackathon."
  }
];