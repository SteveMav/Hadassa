type Article = {
  title: string;
  publisher: string;
  format: "Essay" | "Criticism" | "Interview" | "Field notes";
  dateTime: string;
  displayDate: string;
  summary: string;
  url: string;
  credit?: string;
};

type Experience = {
  dates: string;
  role: string;
  organization: string;
  description: string;
};

export const profile = {
  firstName: "Hadassa",
  lastName: "Serrano",
  role: "Fashion writer & columnist",
  intro: "I write about the people who make fashion, the cultures it carries and the systems that shape it.",
  biography: "Seattle-based fashion writer, columnist at Afrique Noire, contributing writer at QEditorial and editor of",
  education: "High school diploma in literature and philosophy, Lycée Madame Sévigné · 2022–2023",
  languages: "French and Lingala (fluent) · English (advanced)",
};

const journalTitleLead = "The Human Side";
const journalTitleEmphasis = "of Fashion";

export const journal = {
  title: `${journalTitleLead} ${journalTitleEmphasis}`,
  titleLead: journalTitleLead,
  titleEmphasis: journalTitleEmphasis,
  description: "Hadassa’s independent publication brings together profiles, industry criticism, event coverage and written interviews.",
  url: "https://thehumansideoffashion.substack.com/",
};

export const articles: readonly Article[] = [
  {
    title: "The Hands That Built Fashion",
    publisher: "Afrique Noire",
    format: "Essay",
    dateTime: "2026-07-23",
    displayDate: "Jul 23, 2026",
    summary: "On craft as a way to pass down knowledge, sustain communities and keep cultural memory alive.",
    url: "https://afriquenoirmagazine.com/blogs/fashion-style/the-hands-that-built-fashion",
  },
  {
    title: "The Problem with Recognizing Szilveszter Makó",
    publisher: journal.title,
    format: "Criticism",
    dateTime: "2026-11-01",
    displayDate: "Nov 1, 2026",
    summary: "What gets lost when a photographer’s visual language is understood through comparisons with other artists?",
    url: "https://thehumansideoffashion.substack.com/p/the-problem-with-recognizing-szilveszter",
  },
  {
    title: "Sevaria: The Kenyan Fashion brand by Jamie Kimani",
    publisher: journal.title,
    format: "Interview",
    dateTime: "2026-06-08",
    displayDate: "Jun 8, 2026",
    summary: "A conversation with Jamie Kimani about building an independent label in Kenya and making fashion with limited resources.",
    url: "https://thehumansideoffashion.substack.com/p/sevaria-the-kenyan-fashion-brand",
  },
  {
    title: "How Fashion Magazines Became Advertising Platforms",
    publisher: "QEditorial",
    format: "Criticism",
    dateTime: "2026-07-18",
    displayDate: "Jul 18, 2026",
    summary: "A look at what happens to fashion criticism when magazines depend on the brands they cover.",
    url: "https://qeditorial.com/2026/07/18/the-lost-art-of-fashion-media/",
  },
  {
    title: "First Thursday Art Walk: Seattle’s Edition",
    publisher: journal.title,
    format: "Field notes",
    dateTime: "2026-08-13",
    displayDate: "Aug 13, 2026",
    summary: "A walk through Seattle’s galleries, told through the people, art and clothes encountered along the way.",
    url: "https://thehumansideoffashion.substack.com/p/first-thursday-art-walk-seattles",
  },
  {
    title: "African Fashion: Who Is Documenting Our Creations and Preserving Archives",
    publisher: "Afrique Noire",
    format: "Interview",
    dateTime: "2026-09-12",
    displayDate: "Sep 12, 2026",
    summary: "A conversation about who preserves African fashion history and what it takes to build lasting archives.",
    url: "https://afriquenoirmagazine.com/blogs/fashion-style/african-fashion-who-is-documenting-our-creations-and-preserving-archives",
    credit: "In conversation with MaryCinthya / Fashion Nut",
  },
];

export const experiences: readonly Experience[] = [
  {
    dates: "2026",
    role: "Communications Lead · Volunteer",
    organization: "FIFA World Cup 2026",
    description: "Coordinated media activities and a team of press members, creators and influencers during the tournament.",
  },
  {
    dates: "2024–2025",
    role: "Online Personal Assistant",
    organization: "Small business · Remote",
    description: "Managed scheduling, inboxes and day-to-day requests, keeping track of appointments and follow-ups.",
  },
  {
    dates: "2022–2023",
    role: "Front Desk Receptionist",
    organization: "United Nations · Democratic Republic of the Congo",
    description: "Welcomed visitors, answered inquiries and helped coordinate meetings and appointments.",
  },
];

export const contact = {
  location: "Seattle, WA",
  email: "hadassafashionmodel@gmail.com",
  instagramUrl: "https://www.instagram.com/_fashionenthusiast/",
};
