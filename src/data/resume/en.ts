import type { ResumeData } from "./types";

export const resumeEn: ResumeData = {
  lang: "en",
  meta: {
    title: "Resume - Simon Haïoun-Viet",
  },
  ui: {
    exportPdf: "Export to PDF",
    back: "Back",
  },
  contact: {
    title: "Contact",
    email: "simon.haiounviet@pm.me",
    phone: "+33 6 88 67 33 92",
    location: "Montpellier, France",
    portfolio: "simon-hv.dev",
    linkedin: "simonhaiounviet",
  },
  skills: {
    title: "Skills",
    categories: [
      {
        label: "Frontend",
        items: ["React", "TypeScript", "Next.js", "Angular", "Redux"],
      },
      {
        label: "Backend",
        items: ["Node.js", "Express", "Fastify", "GraphQL", "PostgreSQL"],
      },
      { label: "Infra", items: ["AWS", "GCP", "Terraform", "Docker", "CI/CD"] },
      {
        label: "AI",
        items: ["LLM/RAG", "Embeddings", "pgvector", "Mastra", "AI SDK"],
      },
    ],
  },
  languages: {
    title: "Languages",
    items: [
      { name: "French", level: "Native" },
      { name: "English", level: "Professional" },
    ],
  },
  education: {
    title: "Education",
    items: [
      {
        degree: "Computer Science Engineer",
        school: "Polytech Montpellier",
        period: "2012 - 2015",
      },
      {
        degree: "Technical Degree in CS",
        school: "IUT Montpellier",
        period: "2010 - 2012",
      },
    ],
  },
  header: {
    name: "Simon Haïoun-Viet",
    role: "Product Engineer · Senior Frontend Developer",
    summary:
      "10 years of experience in web development. Frontend specialist, versatile across the full stack.",
  },
  experience: {
    title: "Experience",
    items: [
      {
        role: "Product Engineer",
        company: "Crew",
        period: "Mar 2025 - Present",
        description:
          "<strong>YC-backed startup (S21)</strong>, early stage. CRM for recruitment agencies.<br />Versatile: frontend, backend, infrastructure, AI, user research.",
        achievements: [
          "Sole frontend dev on the team, in charge of all UI (Next.js 15) and product research",
          "Built AI features: RAG pipeline (pgvector), notetaker with auto-summaries, CRM enrichment (Mastra)",
          "Node.js/Fastify API from scratch, terraformed GCP infra, Datadog observability",
        ],
        stack:
          "Next.js, React, TypeScript, Node.js, Fastify, PostgreSQL, pgvector",
      },
      {
        role: "Frontend Developer",
        company: "Welcome to the Jungle",
        period: "Jun 2023 - Mar 2025",
        description:
          "Leading job board in France, <strong>2M+ visitors/month</strong>.",
        achievements: [
          "Redesigned homepage and job listing page (most viewed pages)",
          "Contributed to Welcome UI, the open-source design system",
        ],
        stack: "React, TypeScript, Node.js, GraphQL, AWS, Docker",
      },
      {
        role: "Frontend Developer → Tech Lead",
        company: "Hawk",
        period: "Feb 2017 - May 2023",
        description:
          "DSP (programmatic advertising), <strong>6 years</strong> including 2 as Tech Lead.",
        achievements: [
          "Led AngularJS to Angular 2+ migration",
          "Built React app for ad creative generation",
          "Developed Node.js APIs, AWS/Terraform infrastructure",
          "Technical mentoring, code review, testing practices",
        ],
        stack: "Angular, React, TypeScript, Redux, RxJS, Node.js, AWS",
      },
      {
        role: "Web Developer",
        company: "CGI",
        period: "Feb 2015 - Feb 2017",
        description: "Consulting for <strong>major French companies</strong>.",
        achievements: [
          "EDF customer portal, SNCF Réseau intranet, French Notaries website",
        ],
        stack: "AngularJS, Java, PHP, Symfony, Adobe AEM",
      },
    ],
  },
};
