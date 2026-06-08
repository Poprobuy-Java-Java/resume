const portfolio = {
  skills: [
    "Linux",
    "Bash",
    "Docker",
    "Git",
    "Moodle",
    "HTML/CSS",
    "JavaScript",
    "Research",
    "Technical writing"
  ],

projects: [
  {
    type: "Курс",
    title: "Практический курс по Linux",
    description: "Учебный курс для начинающих студентов: от базовой работы в терминале до Bash-скриптов и диагностики Linux-сервера.",
    metrics: ["40+ глав", "практические задания", "Bash"],
    stack: ["Linux", "Bash", "CLI"]
  },
  {
    type: "Разработка",
    title: "Кастомная тема Moodle",
    description: "Разработка визуальной структуры страниц Moodle: layout, Mustache-шаблоны, SCSS, оформление главной страницы, авторизации и каталога курсов.",
    metrics: ["UI", "адаптация", "Moodle"],
    stack: ["PHP", "Mustache", "SCSS"]
  },
  {
    type: "Курс",
    title: "Docker и контейнеризация",
    description: "Учебные материалы о контейнерах, окружении приложений, виртуализации, архитектуре контейнера и практическом применении Docker.",
    metrics: ["Docker", "контейнеры", "практика"],
    stack: ["Docker", "Linux", "DevOps"]
  }
],

  experience: [
  {
    period: "2024 — настоящее время",
    title: "Разработка образовательных программ",
    description: "Проектирование учебных курсов, практических заданий, интерактивных материалов и методических блоков по IT и информационной безопасности."
  },
  {
    period: "2024 — настоящее время",
    title: "Практические лаборатории и учебные стенды",
    description: "Подготовка практико-ориентированных сценариев, лабораторных работ и учебных сред для освоения технических инструментов."
  },
  {
    period: "2025 — настоящее время",
    title: "Исследовательская и аналитическая работа",
    description: "Подготовка аналитических материалов, исследовательских текстов, обзоров, визуализаций и структурированных выводов."
  }
],

  publications: [
    {
      source: "Habr",
      title: "Название публикации",
      link: "#"
    },
    {
      source: "Research",
      title: "Аналитический материал",
      link: "#"
    }
  ]
};

const skillsGrid = document.querySelector("#skillsGrid");
const projectsGrid = document.querySelector("#projectsGrid");
const publicationsList = document.querySelector("#publicationsList");
const experienceList = document.querySelector("#experienceList");

skillsGrid.innerHTML = portfolio.skills
  .map(skill => `<article class="skill-card">${skill}</article>`)
  .join("");

projectsGrid.innerHTML = portfolio.projects
  .map(project => `
    <article class="project-card">
      <span class="project-type">${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>

      <div class="project-metrics">
        ${project.metrics.map(metric => `<span>${metric}</span>`).join("")}
      </div>

      <div class="project-stack">
        ${project.stack.map(item => `<small>${item}</small>`).join("")}
      </div>
    </article>
  `)
  .join("");

publicationsList.innerHTML = portfolio.publications
  .map(publication => `
    <a class="publication-item" href="${publication.link}" target="_blank">
      <span>${publication.source}</span>
      <strong>${publication.title}</strong>
      <em>Читать →</em>
    </a>
  `)
  .join("");

  experienceList.innerHTML = portfolio.experience
  .map(item => `
    <article class="experience-item">
      <span>${item.period}</span>
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </article>
  `)
  .join("");