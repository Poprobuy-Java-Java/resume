const portfolio = {
  skills: [
    "Linux",
    "Bash",
    "VMware",
    "PostgreSQL",
    "SQL",
    "Git",
    "Wireshark",
    "Cisco Packet Tracer",
    "Figma",
    "Tilda",
    "Adobe Photoshop",
    "HTML",
    "CSS",
    "JavaScript",
    "Moodle",
    "Kanban",
    "Jira",
    "ИБ"
  ],

 education: [
  {
    period: "2026 — 2028",
    degree: "Магистратура",
    place: "ФГАОУ ВО «РГГУ",
    program: "Прикладная информатика / Управление данными и знаниями в компьютерных сетях"
  },
    {
    period: "2021 — 2026",
    degree: "Онлайн-курсы",
    place: "PortSwigger, HTML Academy, GeekBrains, Stepick",
    program: "«Тестирование ПО», «SQL injection», «Веб-разработка», «Поколение Python» и др.",
  },
  {
    period: "2019 — 2023",
    degree: "Бакалавриат",
    place: "ФГАОУ ВО «РГГУ»",
    program: "Информационная безопасность / Комплексная защита объектов информатизации"
  }
], 
  
projects: [
  {
    type: "Практика",
    title: "SQL расследование",
    description: "Разработал кейс для продуктового хакатона, в котором участникам предстояло расследовать инцидент ИБ. Цепочка цифровых следов, подозрительные события и только один виновный. Один?",
    link: "pages/crimesql.html"

  },
  {
    type: "Разработка",
    title: "Кастомизация LMS",
    description: "Разработка визуальной структуры страниц Moodle: layout, Mustache-шаблоны, SCSS, оформление главной страницы, авторизации и каталога курсов.",
    link: "projects/linux.html"

  },
  {
    type: "Практика",
    title: "Подземелья и команды",
    description: "Учебные материалы о контейнерах, окружении приложений, виртуализации, архитектуре контейнера и практическом применении Docker.",
    link: "projects/linux.html"

  }
],

experience: [
  {
    company: "АО \"НПО \"ЭШЕЛОН\"",
    period: "13.04.2023 — 07.08.2023",
    role: "Специалист департамента сертификации и тестирования",
    responsibilities: [
      "Проведение код ревью исходных файлов и сборки продукта.",
      "Подготовка документация и отчетов по итогам тестирования.",
      "РУчастие в разработке Моделей угроз."
    ],
    achievements: [
      "Освоил методики анализа уязвимостей и НДВ.",
      "Получил практический опыт подготовки сертификационной документации.",
      "Работал с нормативной базой и процессами сертификации."
    ]
  },
  {
    company: "ООО \"КРОССТЕХ СОЛЮШНС ГРУПП\"",
    period: "2023 — настоящее время",
    role: "Старший специалист группы внешнего обучения и сертификации",
        responsibilities: [
      "Проектирование образовательных программ и практических заданий по IT и информационной безопасности.",
      "Разработка технических курсов, HTML-материалов, инструкций и визуальных схем.",
      "Подготовка учебных стендов, сценариев лабораторных работ и материалов для студентов.",
      "Участие в развитии образовательных проектов, мероприятий и исследовательских материалов."
    ],
    achievements: [
      "Спроектировал и внедрил ролевую модель на LMS-платформе, переработал интерфейс и верстку курсов, что привело к росту активной аудутории и возможности выйти на внешний рынок",
      "Спроектировал и реализовал образовательную программу полного цикла для научно-исследовательского центра на базе института: базовый модуль по ключевым IT-навыкам и трех специализированных траекторий подготовки - QA, Аудит ИБ, Инженер внедрения.",
      "Внедрил CTF продуктового хакатона для MVP-решений компании: повышение вовлечённости студентов учебного центра в 3 раза, выявление нескольких критические дефектов продукта, увеличение тестового покрытия.",
      "Пункт??"
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
      source: "МЭИ",
      title: "Лекция по информационной безопасности",
      link: "https://mpei.ru/news/Pages/newsItem.aspx?newsID=4908"
    },
    {
      source: "IT Москва",
      title: "Практика и стажировки в компании",
      link: "https://vk.com/wall-172223119_7615"
    },

  ]
};

const skillsGrid = document.querySelector("#skillsGrid");
const projectsGrid = document.querySelector("#projectsGrid");
const publicationsList = document.querySelector("#publicationsList");
const experienceList = document.querySelector("#experienceList");
const educationTimeline = document.querySelector("#educationTimeline");

skillsGrid.innerHTML = portfolio.skills
  .map(skill => `<article class="skill-card">${skill}</article>`)
  .join("");

projectsGrid.innerHTML = portfolio.projects
  .map(project => `
    <article class="project-card">
      <span class="project-type">${project.type}</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      
      <a class="project-link" href="${project.link}">
         Подробнее →
      </a>
   

    </article>
  `)
  .join("");


educationTimeline.innerHTML = portfolio.education
  .map(item => `
    <article class="education-item">
      <div class="education-marker"></div>

      <div class="education-card">
        <span class="education-period">${item.period}</span>
        <h3>${item.degree}</h3>
        <p class="education-place">${item.place}</p>
        <p class="education-program">${item.program}</p>
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

          </div>
        </div>

        <span class="experience-arrow">↓</span>
      </summary>

      <div class="experience-details">
       <div class="experience-section">
  <strong>Обязанности</strong>
  <ul>
    ${item.responsibilities.map(detail => `<li>${detail}</li>`).join("")}
  </ul>
</div>

<div class="experience-section">
  <strong>Достижения</strong>
  <ul>
    ${item.achievements.map(detail => `<li>${detail}</li>`).join("")}
  </ul>
</div>
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
// конец паралакса

// выстрел
document.querySelectorAll(".skill-card").forEach(card => {
  card.addEventListener("click", event => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const shot = document.createElement("span");
    shot.className = "shot-mark";
    shot.style.left = `${x}px`;
    shot.style.top = `${y}px`;

    card.appendChild(shot);

    card.classList.remove("is-shot");
    void card.offsetWidth;
    card.classList.add("is-shot");

    setTimeout(() => {
      shot.remove();
      card.classList.remove("is-shot");
    }, 500);
  });
});