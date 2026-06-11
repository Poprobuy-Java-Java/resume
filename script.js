const portfolio = {
  skills: [
    "Linux",
    "Bash",
    "Docker",
    "Git",
    "Moodle",
    "HTML/CSS",
    "JavaScript",
    "PostgreSQL",
    "Kanban",
    "Cool_guy",
    "Ye"
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
    company: "АО \"НПО \"ЭШЕЛОН\"",
    period: "13.04.2023 — 07.08.2023",
    role: "Стажёр / специалист по тестированию",
    short: "Статическое тестирование по методикам АУ и НДВ, подготовка документации и отчётов.",
    details: [
      "Проведение статического анализа и проверки документации в соответствии с заданной методикой.",
      "Подготовка отчётных материалов по результатам тестирования.",
      "Работа с требованиями, замечаниями и структурой технической документации."
    ]
  },
  {
    company: "ООО \"КРОССТЕХ СОЛЮШНС ГРУПП\"",
    period: "2024 — настоящее время",
    role: "Специалист по образовательным программам / IT-материалам",
    short: "Разработка практико-ориентированных сценариев, лабораторных работ и учебных сред.",
    details: [
      "Проектирование образовательных программ и практических заданий по IT и информационной безопасности.",
      "Разработка технических курсов, HTML-материалов, инструкций и визуальных схем.",
      "Подготовка учебных стендов, сценариев лабораторных работ и материалов для студентов.",
      "Участие в развитии образовательных проектов, мероприятий и исследовательских материалов."
    ]
  }
],

  publications: [
    {
      source: "Habr",
      title: "Подземелья и Команды: как сегодня проводят экзамены в IT",
      link: "https://habr.com/ru/companies/ctsg/articles/1005594/"
    },
    {
      source: "МИРЭА",
      title: "Рекрутинговый мастер-класс",
      link: "https://www.mirea.ru/news/kompaniya-crosstech-solutions-group-i-institut-informatsionnykh-tekhnologiy-proveli-rekrutingovyy-ma/?ysclid=mq6zd0n3kr625827039"
    },
    {
      source: "МИРЭА",
      title: "Мастер-класс по автоматизированному тестированию",
      link: "https://www.mirea.ru/news/kompaniya-crosstech-solutions-group-provela-master-klass-po-avtomatizirovannomu-testirovaniyu-v-inst/"
    },
     {
      source: "РГГУ",
      title: "Профориентационный мастер-класс",
      link: "https://www.rsuh.ru/news/institut-informatsionnykh-nauk-i-tekhnologiy-bezopasnosti/itogi-proforientatsionnogo-master-klassa-po-osnovam-avtomatizirovannogo-testirovaniya-podveli-v-rggu/?ysclid=mq6zb17jxl582067053"
    },
    {
      source: "VK",
      title: "Сотрудничество IT Москва",
      link: "https://vk.com/wall-172223119_7615"
    },

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
    <details class="experience-item">
      <summary>
        <div class="experience-main">
          <span class="experience-period">${item.period}</span>

          <div>
            <h3>${item.company}</h3>
            <p class="experience-role">${item.role}</p>
            <p class="experience-short">${item.short}</p>
          </div>
        </div>

        <span class="experience-arrow">↓</span>
      </summary>

      <div class="experience-details">
        <strong>Обязанности и результаты</strong>

        <ul>
          ${item.details.map(detail => `<li>${detail}</li>`).join("")}
        </ul>
      </div>
    </details>
  `)
  .join("");


  document.querySelectorAll(".experience-item").forEach(item => {
  const summary = item.querySelector("summary");
  const content = item.querySelector(".experience-details");

  summary.addEventListener("click", event => {
    event.preventDefault();

    if (item.classList.contains("is-open")) {
      content.style.maxHeight = content.scrollHeight + "px";

      requestAnimationFrame(() => {
        content.style.maxHeight = "0px";
      });

      item.classList.remove("is-open");

      setTimeout(() => {
        item.removeAttribute("open");
      }, 320);
    } else {
      item.setAttribute("open", "");
      item.classList.add("is-open");

      content.style.maxHeight = "0px";

      requestAnimationFrame(() => {
        content.style.maxHeight = content.scrollHeight + "px";
      });
    }
  });
});

// Слайдер

const aboutTrack = document.querySelector("#aboutSliderTrack");
const aboutPrev = document.querySelector("#aboutPrev");
const aboutNext = document.querySelector("#aboutNext");
const aboutDots = document.querySelector("#aboutDots");

let aboutSlideIndex = 0;

if (aboutTrack && aboutPrev && aboutNext && aboutDots) {
  const aboutSlides = Array.from(aboutTrack.querySelectorAll(".about-slide"));

  aboutDots.innerHTML = aboutSlides
    .map((_, index) => `
      <button
        class="about-dot ${index === 0 ? "is-active" : ""}"
        type="button"
        aria-label="Слайд ${index + 1}"
        data-index="${index}">
      </button>
    `)
    .join("");

  const dots = Array.from(aboutDots.querySelectorAll(".about-dot"));

  function updateAboutSlider() {
    aboutTrack.style.transform = `translateX(-${aboutSlideIndex * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === aboutSlideIndex);
    });
  }

  aboutNext.addEventListener("click", () => {
    aboutSlideIndex = (aboutSlideIndex + 1) % aboutSlides.length;
    updateAboutSlider();
  });

  aboutPrev.addEventListener("click", () => {
    aboutSlideIndex = aboutSlideIndex === 0
      ? aboutSlides.length - 1
      : aboutSlideIndex - 1;

    updateAboutSlider();
  });

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      aboutSlideIndex = Number(dot.dataset.index);
      updateAboutSlider();
    });
  });
}


// paralax
const revealElements = document.querySelectorAll(
  ".hero, .about-me, .stats, .section, .footer"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach(element => {
  revealObserver.observe(element);
});

const parallaxElements = document.querySelectorAll(
  ".hero-card, .project-card"
);

parallaxElements.forEach(element => {
  element.classList.add("parallax-soft");

  element.addEventListener("mousemove", event => {
    const rect = element.getBoundingClientRect();

    const x = (event.clientX - rect.left - rect.width / 2) / 70;
    const y = (event.clientY - rect.top - rect.height / 2) / 70;

    element.style.transform = `translate(${x}px, ${y}px)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "translate(0, 0)";
  });
});