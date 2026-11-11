import type { ResumeData } from "./types";

export const resumeFr: ResumeData = {
  lang: "fr",
  meta: {
    title: "CV - Simon Haïoun-Viet",
  },
  ui: {
    exportPdf: "Exporter en PDF",
    back: "Retour",
  },
  contact: {
    title: "Contact",
    email: "simon.haiounviet@pm.me",
    phone: "06 88 67 33 92",
    location: "Montpellier, France",
    portfolio: "simon-hv.dev",
    linkedin: "simonhaiounviet",
  },
  skills: {
    title: "Compétences",
    categories: [
      {
        label: "Frontend",
        items: ["React", "TypeScript", "Next.js", "Angular", "Redux"],
      },
      {
        label: "Backend",
        items: ["Node.js", "Fastify", "Express", "GraphQL", "PostgreSQL"],
      },
      { label: "Infra", items: ["AWS", "GCP", "Terraform", "Docker", "CI/CD"] },
      {
        label: "IA",
        items: ["LLM/RAG", "Agents IA", "pgvector", "Mastra", "AI SDK"],
      },
    ],
  },
  languages: {
    title: "Langues",
    items: [
      { name: "Français", level: "Natif" },
      { name: "Anglais", level: "Professionnel" },
    ],
  },
  education: {
    title: "Formation",
    items: [
      {
        degree: "Ingénieur Informatique",
        school: "Polytech Montpellier",
        period: "2012 - 2015",
      },
      {
        degree: "DUT Informatique",
        school: "IUT Montpellier",
        period: "2010 - 2012",
      },
    ],
  },
  header: {
    name: "Simon Haïoun-Viet",
    role: "Senior Fullstack Developer · Product Engineer",
    summary:
      "10 ans de développement web, principalement en TypeScript, React et Node.js. Actuellement chez Crew (YC S21), où je travaille sur toute la stack, y compris sur le développement de features IA.",
  },
  experience: {
    title: "Expérience",
    items: [
      {
        role: "Product Engineer",
        company: "Crew",
        period: "Mars 2025 - Présent",
        description:
          "Startup <strong>YC-backed (S21)</strong>, early stage. CRM pour agences de recrutement.",
        achievements: [
          "Features de bout en bout : recherche utilisateur, UI (Next.js 15), API, mise en production",
          "Features IA : RAG pipeline (pgvector), notetaker avec résumés automatiques, agents d'enrichissement CRM (Mastra)",
          "API Node.js/Fastify from scratch, infra GCP avec Terraform, observabilité Datadog",
        ],
        stack:
          "Next.js, React, TypeScript, Node.js, Fastify, PostgreSQL, pgvector",
      },
      {
        role: "Frontend Developer",
        company: "Welcome to the Jungle",
        period: "Juin 2023 - Mars 2025",
        description:
          "Job board leader en France, <strong>2M+ visiteurs/mois</strong>.",
        achievements: [
          "Refonte de la homepage et de la page offre d'emploi (pages les plus vues)",
          "Contribution à Welcome UI, le design system open-source",
        ],
        stack: "React, TypeScript, Node.js, GraphQL, AWS, Docker",
      },
      {
        role: "Frontend Developer → Tech Lead",
        company: "Hawk",
        period: "Fév. 2017 - Mai 2023",
        description:
          "DSP (publicité programmatique), <strong>6 ans</strong> dont 2 en tant que Tech Lead.",
        achievements: [
          "Pilotage de la migration AngularJS vers Angular 2+",
          "Application React pour création de créatives publicitaires",
          "APIs Node.js, infrastructure AWS/Terraform",
          "Mentoring, code reviews, pratiques de test",
        ],
        stack: "Angular, React, TypeScript, Redux, RxJS, Node.js, AWS",
      },
      {
        role: "Fullstack Developer",
        company: "CGI",
        period: "Fév. 2015 - Fév. 2017",
        description:
          "Consulting pour <strong>grands comptes français</strong>.",
        achievements: [
          "Portail client EDF, intranet SNCF Réseau, site Notaires de France",
        ],
        stack: "AngularJS, Java, PHP, Symfony, Adobe AEM",
      },
    ],
  },
};
