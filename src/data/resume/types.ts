export interface ResumeData {
  lang: "fr" | "en";
  meta: {
    title: string;
  };
  ui: {
    exportPdf: string;
    back: string;
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    location: string;
    portfolio: string;
    linkedin: string;
  };
  skills: {
    title: string;
    categories: {
      label: string;
      items: string[];
    }[];
  };
  languages: {
    title: string;
    items: {
      name: string;
      level: string;
    }[];
  };
  education: {
    title: string;
    items: {
      degree: string;
      school: string;
      period: string;
    }[];
  };
  header: {
    name: string;
    role: string;
    summary: string;
  };
  experience: {
    title: string;
    items: {
      role: string;
      company: string;
      period: string;
      description: string;
      achievements: string[];
      stack: string;
    }[];
  };
}
