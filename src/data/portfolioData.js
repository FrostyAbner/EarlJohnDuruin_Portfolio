
// ── NAVIGATION SECTIONS ──────────────────────────────────────
export const SECTIONS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "certification",
  "contact",
];

// ── EXPERIENCE ────────────────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "QA Tester / Web Developer",
    company: "Qtech Business Solutions Inc.",
    period: "Jan 2026 – April 2026",
    type: "OJT Experience",
    desc: "Conducted comprehensive testing of web applications to identify and report bugs, ensuring high-quality releases. Collaborated with developers to reproduce issues and verify fixes, contributing to a smoother development process.",
    tags: ["ASP.NET", "C#", "SQL", "Visual Studio Code", "HTML", "CSS", "JavaScript"],
  },
  {
    role: "Web Developer on DMDentalNet",
    company: "STI College Lucena",
    period: "2025 – 2026",
    type: "Thesis Capstone",
    desc: "Designed and developed a responsive web application for Dental Clinic, enhancing patient management and appointment scheduling. Implemented features such as user authentication, appointment booking, and patient records management, resulting in improved operational efficiency for the clinic.",
    tags: ["PHP", "SQL", "Visual Studio Code", "HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

// ── SKILLS ───────────────────────────────────────────────────
export const SKILLS = [
  {
    icon: "🌐",
    name: "HTML, CSS & JavaScript",
    desc: "Responsive, interactive, and accessible web interfaces with clean, maintainable code.",
  },
  {
    icon: "🗄️",
    name: "SQL",
    desc: "Efficient queries, schema design, and managing relational databases.",
  },
  {
    icon: "⚙️",
    name: "C#",
    desc: "Desktop and backend applications using the .NET ecosystem.",
  },
  {
    icon: "☕",
    name: "Java",
    desc: "Object-oriented programming, data structures, and application development.",
  },
  {
    icon: "🛠️",
    name: "React",
    desc: "Building dynamic, component-based user interfaces for web applications.",
  },
  {
    icon: "🎨",
    name: "Tailwind CSS",
    desc: "Utility-first CSS framework for rapid UI development and responsive design.",
  },
  {
    icon: "🐘",
    name: "PHP",
    desc: "Server-side scripting for dynamic web applications and database interactions.",
  },
];

// ── PROJECTS ─────────────────────────────────────────────────
export const PROJECTS = [
  {
    title: "Kidquest",
    desc: "A responsive, web-based educational platform for children that features interactive learning modules and games.",
    tags: ["React", "CSS", "JavaScript", "PHP", "Tailwind CSS"],
    link: "https://kidquest.rf.gd/",
  },
  {
    title: "PerFragrances",
    desc: "A responsive, web-based e-commerce platform for a fragrance retailer that features different brands and fragrances.",
    tags: ["PHP", "CSS", "JavaScript", "phpMYAdmin"],
    link: "https://perfragrances.rf.gd/",
  },
];

// ── EDUCATION ────────────────────────────────────────────────
export const EDUCATION = [
  {
    degree: "BS Information Technology",
    school: "STI College Lucena",
    period: "2022 – 2026",
  },
  {
    degree: "Computer Systems Servicing",
    school: "Gumaca National High School",
    period: "2020 – 2022",
  },
];


// ── CERTIFICATIONS ───────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    name: "Oracle Academy Java Fundamentals",
    desc: "Core Java concepts and object-oriented programming fundamentals.",
    img: `${import.meta.env.BASE_URL}images/Java_Fundamentals.jpg`,
  },
  {
    name: "LPI Linux Systems Administration",
    desc: "Installing, configuring, and maintaining Linux systems professionally.",
    img: `${import.meta.env.BASE_URL}images/System_Administration.jpg`,
  },
];

// ── ABOUT INFO CARDS ─────────────────────────────────────────
export const INFO_CARDS = [
  { label: "Birthday", value: "May 21, 2004" },
  { label: "City",     value: "Atimonan, Quezon PH" },
  { label: "Age",      value: "21" },
  { label: "Phone",    value: "+63 938 165 7398" },
  {
    label: "Email",
    value: "earljohnlaurenfranciaduruin@gmail.com",
    isEmail: true,
    span: true,
  },
];

// ── CONTACT CHIPS ────────────────────────────────────────────
export const CONTACT_CHIPS = [
  {
    icon: "✉",
    label: "Email",
    value: "earljohnlaurenfranciaduruin@gmail.com",
    href: "mailto:earljohnlaurenfranciaduruin@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+63 938 165 7398",
    href: null,
  },
  {
    icon: "📍",
    label: "Location",
    value: "Atimonan, Quezon, Philippines",
    href: null,
  },
];

// ── SOCIAL LINKS ─────────────────────────────────────────────
export const SOCIALS = [
  {
    label: "FB",
    title: "Facebook",
    href: "https://www.facebook.com/earl.john.duruin",
    img: null,
  },
  {
    label: "IG",
    title: "Instagram",
    href: "https://www.instagram.com/edjieey/",
    img: null,
  },
  {
    label: "LI",
    title: "LinkedIn",
    href: "linkedin.com/in/earl-john-lauren-duruin-37574a408",
    img: null,
  },
  {
    label: "✉",
    title: "Email",
    href: "mailto:earljohnlaurenfranciaduruin@gmail.com",
    img: null,
  },
];
