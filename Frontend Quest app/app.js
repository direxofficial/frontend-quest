// всё внутри DOMContentLoaded, чтобы не было проблем с порядком загрузки
window.addEventListener("DOMContentLoaded", () => { 
  // =============================
  // 1. КУРСЫ ДЛЯ ТРЕКОВ
  // =============================
  // --- JavaScript ---
  const COURSE_JS = [
    {
      id: "js_mod1",
      title: "JS Мир 1. Основы",
      description: "Самый старт: переменные, типы, базовый синтаксис.",
      lessons: [
        {
          id: "js_m1_l1",
          title: "Что такое JS",
          xp: 8,
          difficulty: "easy",
          text: "JavaScript добавляет интерактивность и логику в веб-приложения. Чаще всего выполняется в браузере.",
          code: `// Простейший JS-код
console.log("Привет, JavaScript!");`,
          quiz: {
            question: "Где чаще всего выполняется JS в веб-разработке?",
            options: [
              "В браузере пользователя",
              "В Photoshop",
              "Только на сервере",
              "Нигде"
            ],
            correctIndex: 0
          }
        },
        {
          id: "js_m1_l2",
          title: "Переменные let и const",
          xp: 10,
          difficulty: "easy",
          text: "Переменные — контейнеры для данных. let для изменяемых значений, const для констант.",
          code: `let score = 0;
const pi = 3.14;

score = 10;
// pi = 4; // так делать нельзя`,
          quiz: {
            question: "Как объявить изменяемую переменную?",
            options: [
              "const x = 1;",
              "let x = 1;",
              "var const x = 1;",
              "x = 1;"
            ],
            correctIndex: 1
          }
        },
        {
          id: "js_m1_l3",
          title: "Типы данных",
          xp: 10,
          difficulty: "easy",
          text: "Самые частые типы: number, string, boolean. typeof помогает узнать тип.",
          code: `console.log(typeof 42);      // "number"
console.log(typeof "42");    // "string"
console.log(typeof true);    // "boolean"`,
          quiz: {
            question: "Что вернёт typeof \"hello\"?",
            options: ["string", "hello", "text", "word"],
            correctIndex: 0
          }
        },
        {
          id: "js_m1_l4",
          title: "Строки и шаблоны",
          xp: 12,
          difficulty: "normal",
          text: "Шаблонные строки на обратных кавычках позволяют подставлять переменные через ${}.",
          code: `const name = "Alex";
const age = 20;

const msg = \`Имя: \${name}, возраст: \${age}\`;
console.log(msg);`,
          quiz: {
            question: "Какие кавычки нужны для шаблонных строк?",
            options: [
              "Одинарные ' '",
              "Двойные \" \"",
              "Обратные ` `",
              "Любые"
            ],
            correctIndex: 2
          }
        }
      ]
    },
    {
      id: "js_mod2",
      title: "JS Мир 2. Логика и циклы",
      description: "Условия, циклы и массивы.",
      lessons: [
        {
          id: "js_m2_l1",
          title: "if / else",
          xp: 10,
          difficulty: "easy",
          text: "if выполняет блок, если условие true. else — если false.",
          code: `const age = 16;

if (age >= 18) {
  console.log("Взрослый");
} else {
  console.log("Не взрослый");
}`,
          quiz: {
            question: "Если age = 16, что выведет код?",
            options: ["Взрослый", "Не взрослый", "Ничего", "Ошибка"],
            correctIndex: 1
          }
        },
        {
          id: "js_m2_l2",
          title: "Логические операторы",
          xp: 10,
          difficulty: "normal",
          text: "&& — логическое И, || — ИЛИ, ! — НЕ.",
          code: `const hasTicket = true;
const isAdult = false;

if (hasTicket && isAdult) {
  console.log("Можно войти");
} else {
  console.log("Нельзя");
}`,
          quiz: {
            question: "Какой оператор означает ЛОГИЧЕСКОЕ И?",
            options: ["&&", "||", "!", "&"],
            correctIndex: 0
          }
        },
        {
          id: "js_m2_l3",
          title: "Массивы",
          xp: 12,
          difficulty: "normal",
          text: "Массив — упорядоченный список значений. Индексация с 0.",
          code: `const scores = [10, 20, 30];
console.log(scores[0]);        // 10
console.log(scores.length);    // 3`,
          quiz: {
            question: "Как получить первый элемент массива arr?",
            options: ["arr[0]", "arr[1]", "first(arr)", "arr.first"],
            correctIndex: 0
          }
        },
        {
          id: "js_m2_l4",
          title: "Цикл for",
          xp: 12,
          difficulty: "normal",
          text: "for удобен для обхода массива по индексам.",
          code: `const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}`,
          quiz: {
            question: "За что отвечает i++ в цикле for?",
            options: [
              "Уменьшает i",
              "Увеличивает i на 1",
              "Удаляет i",
              "Ничего"
            ],
            correctIndex: 1
          }
        }
      ]
    },
    {
      id: "js_mod3",
      title: "JS Мир 3. DOM и async",
      description: "Работа с DOM, события и немного асинхронности.",
      lessons: [
        {
          id: "js_m3_l1",
          title: "Что такое DOM",
          xp: 12,
          difficulty: "normal",
          text: "DOM — объектное представление HTML. Через него JS меняет страницу.",
          code: `console.log(document.title);`,
          quiz: {
            question: "DOM — это…",
            options: [
              "CSS-файл",
              "Объектное представление HTML",
              "База данных",
              "Сервер"
            ],
            correctIndex: 1
          }
        },
        {
          id: "js_m3_l2",
          title: "Поиск элементов",
          xp: 12,
          difficulty: "normal",
          text: "getElementById и querySelector — основные способы найти элемент.",
          code: `const title = document.getElementById("title");
const btn = document.querySelector(".btn");`,
          quiz: {
            question: "Как получить элемент по id='title'?",
            options: [
              "document.get('title')",
              "document.getElementById('title')",
              "document.query('title')",
              "getElement('title')"
            ],
            correctIndex: 1
          }
        },
        {
          id: "js_m3_l3",
          title: "События click",
          xp: 14,
          difficulty: "hard",
          text: "addEventListener позволяет реагировать на действия пользователя.",
          code: `const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("Клик!");
});`,
          quiz: {
            question: "Как добавить обработчик клика?",
            options: [
              "btn.onClick()",
              "btn.addEventListener('click', fn)",
              "btn.click(fn)",
              "btn.listen('click')"
            ],
            correctIndex: 1
          }
        },
        {
          id: "js_m3_l4",
          title: "setTimeout и fetch (идея)",
          xp: 14,
          difficulty: "hard",
          text: "setTimeout запускает код с задержкой, fetch — делает сетевой запрос.",
          code: `setTimeout(() => {
  console.log("Прошла секунда");
}, 1000);

// базовый пример fetch:
fetch("https://example.com")
  .then(res => res.text())
  .then(text => console.log(text));`,
          quiz: {
            question: "Что делает setTimeout?",
            options: [
              "Запускает функцию сразу",
              "Запускает функцию один раз с задержкой",
              "Останавливает код",
              "Удаляет переменные"
            ],
            correctIndex: 1
          }
        }
      ]
    }
  ];

  // --- HTML ---
  const COURSE_HTML = [
    {
      id: "html_mod1",
      title: "HTML Мир 1. Каркас страницы",
      description: "Основа: теги, структура, текст и ссылки.",
      lessons: [
        {
          id: "html_m1_l1",
          title: "Что такое HTML",
          xp: 8,
          difficulty: "easy",
          text: "HTML описывает структуру веб-страницы. Теги окружают контент и задают смысл.",
          code: `<!DOCTYPE html>
<html>
  <head>
    <title>Мой сайт</title>
  </head>
  <body>
    <h1>Заголовок</h1>
    <p>Текст.</p>
  </body>
</html>`,
          quiz: {
            question: "За что отвечает HTML?",
            options: [
              "За стили сайта",
              "За структуру и разметку",
              "За логику приложения",
              "За базу данных"
            ],
            correctIndex: 1
          }
        },
        {
          id: "html_m1_l2",
          title: "Заголовки и параграфы",
          xp: 10,
          difficulty: "easy",
          text: "Заголовки h1–h6 и абзацы p — основа текстового контента.",
          code: `<h1>Главный заголовок</h1>
<h2>Подзаголовок</h2>
<p>Обычный текст абзаца.</p>`,
          quiz: {
            question: "Какой тег используется для абзаца?",
            options: ["<h1>", "<p>", "<div>", "<span>"],
            correctIndex: 1
          }
        },
        {
          id: "html_m1_l3",
          title: "Ссылки",
          xp: 10,
          difficulty: "normal",
          text: "Ссылки создаются тегом a с атрибутом href.",
          code: `<a href="https://example.com">Перейти</a>`,
          quiz: {
            question: "Какой атрибут задаёт адрес ссылки?",
            options: ["src", "href", "link", "url"],
            correctIndex: 1
          }
        },
        {
          id: "html_m1_l4",
          title: "Списки",
          xp: 12,
          difficulty: "normal",
          text: "Маркированный список — ul + li, нумерованный — ol + li.",
          code: `<ul>
  <li>Пункт 1</li>
  <li>Пункт 2</li>
</ul>`,
          quiz: {
            question: "Какой тег создаёт маркированный список?",
            options: ["<ol>", "<ul>", "<li>", "<list>"],
            correctIndex: 1
          }
        }
      ]
    }
  ];

  // --- CSS ---
  const COURSE_CSS = [
    {
      id: "css_mod1",
      title: "CSS Мир 1. Стилизация",
      description: "Цвета, шрифты, отступы и базовая верстка.",
      lessons: [
        {
          id: "css_m1_l1",
          title: "Что такое CSS",
          xp: 8,
          difficulty: "easy",
          text: "CSS описывает внешний вид HTML: цвета, шрифты, размеры и расположение.",
          code: `h1 {
  color: #22c55e;
}`,
          quiz: {
            question: "За что отвечает CSS?",
            options: [
              "За структуру",
              "За данные",
              "За стили и внешний вид",
              "За базу данных"
            ],
            correctIndex: 2
          }
        },
        {
          id: "css_m1_l2",
          title: "Подключение CSS",
          xp: 10,
          difficulty: "easy",
          text: "Обычно стили подключаются через тег link в head.",
          code: `<link rel="stylesheet" href="styles.css" />`,
          quiz: {
            question: "Какой тег используется для подключения внешнего CSS?",
            options: ["<style>", "<css>", "<link>", "<script>"],
            correctIndex: 2
          }
        },
        {
          id: "css_m1_l3",
          title: "Селекторы",
          xp: 12,
          difficulty: "normal",
          text: "Селекторы выбирают элементы: по тегу, классу, id и т.д.",
          code: `p { color: white; }
.title { font-weight: bold; }
#main { padding: 16px; }`,
          quiz: {
            question: "Как выбрать элемент с id=\"main\"?",
            options: ["main {}", ".main {}", "#main {}", "id(main) {}"],
            correctIndex: 2
          }
        },
        {
          id: "css_m1_l4",
          title: "Отступы и границы",
          xp: 12,
          difficulty: "normal",
          text: "margin — внешний отступ, padding — внутренний, border — рамка.",
          code: `.card {
  margin: 16px;
  padding: 12px;
  border: 1px solid #1f2937;
}`,
          quiz: {
            question: "За что отвечает padding?",
            options: [
              "Внешние отступы",
              "Внутренние отступы",
              "Цвет текста",
              "Шрифт"
            ],
            correctIndex: 1
          }
        }
      ]
    }
  ];

  // =============================
  // 2. ТРЕКИ
  // =============================

  const TRACKS = {
    js: {
      id: "js",
      title: "JavaScript",
      color: "#22c55e",
      course: COURSE_JS
    },
    html: {
      id: "html",
      title: "HTML",
      color: "#3b82f6",
      course: COURSE_HTML
    },
    css: {
      id: "css",
      title: "CSS",
      color: "#eab308",
      course: COURSE_CSS
    }
  };

  // =============================
  // 3. ХРАНИЛКА
  // =============================

  const STORAGE_KEY = "frontendQuestLessons_v1";
  const PRACTICE_PROGRESS_KEY = "frontendQuestPractice_v1";
  const META_STORAGE_KEY = "frontendQuestMeta_v1";

  // =============================
  // 4. ПРАКТИКУМ (JS)
  // =============================

  const PRACTICE_TASKS = [
    {
      id: "p1",
      title: "Сумма двух чисел (easy)",
      tag: "basic",
      difficulty: "easy",
      xp: 8,
      description:
        "Выведи в консоль сумму чисел 2 и 3. Ожидаемый вывод: 5",
      starterCode: `// выведи в консоль 5
console.log(/* тут твой код */);`,
      expectedOutput: "5"
    },
    {
      id: "p2",
      title: "Удвоение числа (normal)",
      tag: "basic",
      difficulty: "normal",
      xp: 10,
      description:
        "Напиши функцию double(n), которая возвращает удвоенное значение n. Затем выведи double(7). Ожидаемый вывод: 14",
      starterCode: `function double(n) {
  // верни удвоенное значение
}

console.log(double(7));`,
      expectedOutput: "14"
    },
    {
      id: "p3",
      title: "Цикл 1..5 (hard)",
      tag: "loops",
      difficulty: "hard",
      xp: 12,
      description:
        "Выведи числа от 1 до 5, каждое с новой строки. Ожидаемый вывод: 1..5 по строкам.",
      starterCode: `// выведи числа 1..5 по одному в каждой строке
for (let i = 1; i <= 5; i++) {
  // твой console.log здесь
}`,
      expectedOutput: "1\n2\n3\n4\n5"
    },
    {
      id: "p4",
      title: "Сумма массива (arrays)",
      tag: "arrays",
      difficulty: "normal",
      xp: 10,
      description:
        "Создай массив [1,2,3,4] и выведи сумму всех элементов. Ожидаемый вывод: 10",
      starterCode: `const arr = [1, 2, 3, 4];
// посчитай сумму всех элементов
// выведи сумму в консоль`,
      expectedOutput: "10"
    },
    {
      id: "p5",
      title: "Фильтр чётных (arrays)",
      tag: "arrays",
      difficulty: "normal",
      xp: 12,
      description:
        "Выведи только чётные числа из [1,2,3,4,5], каждое в новой строке. Ожидаемый вывод: 2 и 4 по строкам.",
      starterCode: `const numbers = [1, 2, 3, 4, 5];
// выведи только чётные числа
// каждое в отдельной строке через console.log`,
      expectedOutput: "2\n4"
    },
    {
      id: "p6",
      title: "DOM: изменить текст",
      tag: "dom",
      difficulty: "normal",
      xp: 12,
      description:
        "В DOM-песочнице есть <div id=\"js-practice-box\">пусто</div>. Измени текст на 'OK' и выведи в консоль box.textContent.",
      starterCode: `const box = document.getElementById("js-practice-box");
// измени текст внутри box на 'OK'
// затем выведи в консоль box.textContent`,
      expectedOutput: "OK"
    },
    {
      id: "p7",
      title: "localStorage: сохранить имя",
      tag: "storage",
      difficulty: "normal",
      xp: 12,
      description:
        "Сохрани в localStorage под ключом 'jsq_name' строку 'Alex' и выведи результат чтения.",
      starterCode: `// сохрани значение 'Alex' по ключу 'jsq_name'
// затем прочитай его и выведи в консоль
`,
      expectedOutput: "Alex",
      clearLocalStorageKeys: ["jsq_name"]
    },
    {
      id: "p8",
      title: "fetch + async/await",
      tag: "async",
      difficulty: "hard",
      xp: 16,
      description:
        "Напиши async-функцию loadTodo, которая делает запрос через fetch. В конце выведи 'done'. Для автопроверки достаточно, чтобы вывод был 'done'.",
      starterCode: `async function loadTodo() {
  // сделай запрос через fetch
  // дождись ответа и распарси JSON
  // затем выведи в консоль 'done'
}

loadTodo();`,
      expectedOutput: "done"
    }
  ];

  // =============================
  // 5. ЗАГРУЗКА / СОХРАНЕНИЕ
  // =============================

  function loadCompletedLessons() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { js: {}, html: {}, css: {} };
      const parsed = JSON.parse(raw);
      if (!parsed.js && !parsed.html && !parsed.css) {
        return { js: parsed || {}, html: {}, css: {} };
      }
      return {
        js: parsed.js || {},
        html: parsed.html || {},
        css: parsed.css || {}
      };
    } catch {
      return { js: {}, html: {}, css: {} };
    }
  }

  function saveCompletedLessons() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(state.completedLessons)
      );
    } catch {}
  }

  function loadPracticeCompleted() {
    try {
      const raw = localStorage.getItem(PRACTICE_PROGRESS_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
      return {};
    }
  }

  function savePracticeCompleted() {
    try {
      localStorage.setItem(
        PRACTICE_PROGRESS_KEY,
        JSON.stringify(state.practiceCompleted)
      );
    } catch {}
  }

  function loadMeta() {
    try {
      const raw = localStorage.getItem(META_STORAGE_KEY);
      if (!raw) {
        return {
          streak: 0,
          lastDay: null,
          profileName: "",
          dailyGoal: 50,
          hearts: 5,
          maxHearts: 5,
          heartsLastReset: null,
          achievements: {}
        };
      }
      const parsed = JSON.parse(raw) || {};
      return {
  streak: typeof parsed.streak === "number" ? parsed.streak : 0,
  lastDay: parsed.lastDay || null,
  profileName: parsed.profileName || "",
  dailyGoal:
    typeof parsed.dailyGoal === "number" ? parsed.dailyGoal : 50,
  hearts: typeof parsed.hearts === "number" ? parsed.hearts : 5,
  maxHearts:
    typeof parsed.maxHearts === "number" ? parsed.maxHearts : 5,
  heartsLastReset: parsed.heartsLastReset || null,
  achievements: parsed.achievements || {},
  theme: parsed.theme || "dark"
};
    } catch {
      return {
  streak: 0,
  lastDay: null,
  profileName: "",
  dailyGoal: 50,
  hearts: 5,
  maxHearts: 5,
  heartsLastReset: null,
  achievements: {},
  theme: "dark"
};

    }
}

function applyTheme() {
  const theme = meta.theme || "dark";
  document.body.classList.remove("theme-dark", "theme-light");
  document.body.classList.add(theme === "light" ? "theme-light" : "theme-dark");

  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.textContent = theme === "light" ? "☀" : "☾";
  }
}

function toggleTheme() {
  meta.theme = meta.theme === "light" ? "dark" : "light";
  saveMeta();
  applyTheme();
}


  function saveMeta() {
    try {
      localStorage.setItem(META_STORAGE_KEY, JSON.stringify(meta));
    } catch {}
  }

  // =============================
  // 6. СОСТОЯНИЕ
  // =============================

  const state = {
    activeTrackId: "js",
    activeModuleId: COURSE_JS[0]?.id ?? null,
    activeLessonId: null,
    completedLessons: loadCompletedLessons(),
    practiceCompleted: loadPracticeCompleted(),
    activeView: "course",
   activePracticeTaskId:
  PRACTICE_TASKS && PRACTICE_TASKS.length > 0
    ? PRACTICE_TASKS[0].id
    : null,
    practiceCode: {},
    practiceAttempts: {},
    libraryQuery: "",
    libraryLevelFilter: "all"
  };

  let meta = loadMeta();
 

  function ensureHeartsFresh() {
    const today = new Date().toISOString().slice(0, 10);
    if (meta.heartsLastReset !== today) {
      meta.hearts = meta.maxHearts || 5;
      meta.heartsLastReset = today;
      saveMeta();
    }
  }
  ensureHeartsFresh();

  function updateStreak() {
    const now = new Date();
    const todayStr = now.toISOString().slice(0, 10);

    if (!meta.lastDay) {
      meta.streak = 1;
      meta.lastDay = todayStr;
      saveMeta();
      checkAchievements();
      return;
    }
    if (meta.lastDay === todayStr) return;

    const last = new Date(meta.lastDay + "T00:00:00");
    const diffMs = now - last;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      meta.streak = (meta.streak || 0) + 1;
    } else {
      meta.streak = 1;
    }
    meta.lastDay = todayStr;
    saveMeta();
    checkAchievements();
  }

  function getStreak() {
    return meta.streak || 0;
  }

  // =============================
  // 7. HELPERS КУРСА / ТРЕКОВ
  // =============================

  function getCurrentTrack() {
    return TRACKS[state.activeTrackId] || TRACKS.js;
  }

  function getCurrentCourse() {
    return getCurrentTrack().course;
  }

  function getAllLessons(trackId) {
    const track = TRACKS[trackId] || TRACKS.js;
    const lessons = [];
    track.course.forEach((m) => {
      m.lessons.forEach((l) => lessons.push(l));
    });
    return lessons;
  }

  function getProgressPercent(trackId = state.activeTrackId) {
    const all = getAllLessons(trackId);
    const total = all.length;
    if (!total) return 0;
    const completedMap = state.completedLessons[trackId] || {};
    const completed = all.filter((l) => !!completedMap[l.id]).length;
    return Math.round((completed / total) * 100);
  }

  function findLessonContext(lessonId, trackId = state.activeTrackId) {
    const track = TRACKS[trackId] || TRACKS.js;
    const course = track.course;
    for (let mi = 0; mi < course.length; mi++) {
      const mod = course[mi];
      for (let li = 0; li < mod.lessons.length; li++) {
        const lesson = mod.lessons[li];
        if (lesson.id === lessonId) {
          return { lesson, moduleIndex: mi, lessonIndex: li };
        }
      }
    }
    return null;
  }

  function getLessonDifficulty(lesson, moduleIndex) {
    if (lesson.difficulty) return lesson.difficulty;
    if (moduleIndex === 0) return "easy";
    if (moduleIndex === 1) return "normal";
    return "hard";
  }

  function getDifficultyLabel(diff) {
    if (diff === "easy") return "Лёгкий";
    if (diff === "hard") return "Сложный";
    return "Средний";
  }

  // =============================
  // 8. DOM-ССЫЛКИ
  // =============================

  const moduleListEl = document.getElementById("moduleList");
  const lessonListEl = document.getElementById("lessonList");
  const lessonDetailEl = document.getElementById("lessonDetail");
  const progressBarEl = document.getElementById("progressBar");
  const progressLabelEl = document.getElementById("progressLabel");
  const certificateBtnEl = document.getElementById("certificateBtn");
  const certificateTrackNameEl =
    document.getElementById("certificateTrackName");

  const courseViewEl = document.getElementById("courseView");
  const practiceViewEl = document.getElementById("practiceView");
  const statsViewEl = document.getElementById("statsView");
  const profileViewEl = document.getElementById("profileView");
  const bottomNavEl = document.getElementById("bottomNav");

  const trackSwitcherEl = document.getElementById("trackSwitcher");
  const trackSwitcherHighlightEl = document.getElementById(
    "trackSwitcherHighlight"
  );

  const practiceTaskListEl = document.getElementById("practiceTaskList");
  const practiceTaskTitleEl = document.getElementById("practiceTaskTitle");
  const practiceTaskDescEl = document.getElementById("practiceTaskDesc");
  const practiceHeartsEl = document.getElementById("practiceHearts");
  const practiceCodeEl = document.getElementById("practiceCode");
  const practiceOutputEl = document.getElementById("practiceOutput");
  const practiceRunBtnEl = document.getElementById("practiceRunBtn");
  const practiceCheckBtnEl = document.getElementById("practiceCheckBtn");
  const practiceDomSandboxEl = document.getElementById("practiceDomSandbox");

  const statsContainerEl = document.getElementById("statsContainer");

  const certificateOverlayEl = document.getElementById("certificateOverlay");
  const certificateNameEl = document.getElementById("certificateName");
  const certificateDateEl = document.getElementById("certificateDate");
  const certificateBtnCloseEl = document.getElementById(
    "certificateCloseBtn"
  );
  const certificateShareHintBtnEl = document.getElementById(
    "certificateShareHintBtn"
  );

  const profileNameInputEl = document.getElementById("profileNameInput");
  const profileSubLineEl = document.getElementById("profileSubLine");
  const profileAvatarEl = document.getElementById("profileAvatar");
  const profileGoalInputEl = document.getElementById("profileGoalInput");
  const profileGoalValueEl = document.getElementById("profileGoalValue");
  const profileLessonsSummaryEl = document.getElementById(
    "profileLessonsSummary"
  );
  const profilePracticeSummaryEl = document.getElementById(
    "profilePracticeSummary"
  );
  const profileTotalXpEl = document.getElementById("profileTotalXp");
  const profileSkillJsEl = document.getElementById("profileSkillJs");
  const profileSkillHtmlEl = document.getElementById("profileSkillHtml");
  const profileSkillCssEl = document.getElementById("profileSkillCss");
  const profileAchievementsEl =
    document.getElementById("profileAchievements");
  const profileStreakEl = document.getElementById("profileStreak");
  const profileTodayStatusEl = document.getElementById(
    "profileTodayStatus"
  );

  const inspireBtnEl = document.getElementById("inspireBtn");
  const inspirePanelEl = document.getElementById("inspirePanel");
  const inspireCloseBtnEl = document.getElementById("inspireCloseBtn");

  // =============================
  // 9. РЕНДЕР ВСЕГО
  // =============================

 function renderAll() {
  renderTrackSwitcher();
  renderModules();
  renderLessons();
  renderProgress();
  renderActiveLesson();
  renderPractice();
  renderStats();
  renderProfile();
  renderLibrary();
  renderView();
}

  function renderTrackSwitcher() {
    const buttons = trackSwitcherEl.querySelectorAll(".track-switcher-btn");
    buttons.forEach((btn, index) => {
      const trackId = btn.getAttribute("data-track");
      const isActive = trackId === state.activeTrackId;
      btn.classList.toggle("active", isActive);
      if (isActive && trackSwitcherHighlightEl) {
        trackSwitcherHighlightEl.style.transform =
          "translateX(" + index * 100 + "%)";
      }
    });
  }

  function renderModules() {
    moduleListEl.innerHTML = "";
    const course = getCurrentCourse();
    course.forEach((mod) => {
      const chip = document.createElement("button");
      chip.className =
        "module-chip" + (mod.id === state.activeModuleId ? " active" : "");
      chip.textContent = mod.title;
      chip.onclick = () => {
        state.activeModuleId = mod.id;
        state.activeLessonId = null;
        renderAll();
      };
      moduleListEl.appendChild(chip);
    });
  }

  function renderLessons() {
    lessonListEl.innerHTML = "";
    const course = getCurrentCourse();
    const activeModule = course.find((m) => m.id === state.activeModuleId);
    if (!activeModule) return;

    const moduleIndex = course.indexOf(activeModule);
    const completedMap = state.completedLessons[state.activeTrackId] || {};

    activeModule.lessons.forEach((lesson, index) => {
      const completed = !!completedMap[lesson.id];
      const difficulty = getLessonDifficulty(lesson, moduleIndex);

      const card = document.createElement("div");
      card.className = "lesson-card" + (completed ? " completed" : "");

      const title = document.createElement("div");
      title.className = "lesson-title";
      title.textContent = `Lv ${index + 1}. ${lesson.title}`;

      const meta = document.createElement("div");
      meta.className = "lesson-meta";

      const diffSpan = document.createElement("span");
      diffSpan.className = "difficulty-badge difficulty-" + difficulty;
      diffSpan.textContent = getDifficultyLabel(difficulty);

      const xpSpan = document.createElement("span");
      xpSpan.textContent = (lesson.xp || 0) + " XP";

      const statusSpan = document.createElement("span");
      statusSpan.textContent = completed ? "✅" : "⬜";

      meta.appendChild(diffSpan);
      meta.appendChild(xpSpan);
      meta.appendChild(statusSpan);

      const btn = document.createElement("button");
      btn.className =
        "lesson-start-btn" + (index === 0 || completed ? " primary" : "");
      btn.textContent = completed ? "Повторить" : "Начать";
      btn.onclick = () => {
        state.activeLessonId = lesson.id;
        renderActiveLesson();
      };

      card.appendChild(title);
      card.appendChild(meta);
      card.appendChild(btn);
      lessonListEl.appendChild(card);
    });
  }

  function renderProgress() {
    const percent = getProgressPercent();
    progressBarEl.style.width = percent + "%";
    const trackTitle = getCurrentTrack().title;
    progressLabelEl.textContent = `${trackTitle}: ${percent}%`;
    certificateBtnEl.disabled = percent !== 100;
  }

  function markLessonCompleted(lesson) {
    const trackId = state.activeTrackId;
    const map = state.completedLessons[trackId] || {};
    if (!map[lesson.id]) {
      map[lesson.id] = true;
      state.completedLessons[trackId] = map;
      saveCompletedLessons();
      updateStreak();
      checkAchievements();
    }
    renderLessons();
    renderProgress();
    renderStats();
    renderProfile();
  }

  function renderActiveLesson() {
    lessonDetailEl.innerHTML = "";

    if (!state.activeLessonId) {
      const title = document.createElement("h2");
      title.textContent = "Выбери урок";

      const p = document.createElement("p");
      p.className = "lesson-description";
      p.textContent =
        "Начни с первого модуля активного трека. Уроки, прогресс и сертификат идут отдельно для JS, HTML и CSS.";

      lessonDetailEl.appendChild(title);
      lessonDetailEl.appendChild(p);
      return;
    }

    const ctx = findLessonContext(state.activeLessonId);
    if (!ctx) {
      const p = document.createElement("p");
      p.textContent = "Не удалось найти урок.";
      lessonDetailEl.appendChild(p);
      return;
    }

    const { lesson, moduleIndex } = ctx;
    const difficulty = getLessonDifficulty(lesson, moduleIndex);
    const completedMap = state.completedLessons[state.activeTrackId] || {};
    const completed = !!completedMap[lesson.id];

    const headerRow = document.createElement("div");
    headerRow.className = "lesson-header-row";

    const h2 = document.createElement("h2");
    h2.textContent = lesson.title;

    const diffBadge = document.createElement("span");
    diffBadge.className = "difficulty-badge difficulty-" + difficulty;
    diffBadge.textContent = getDifficultyLabel(difficulty);

    headerRow.appendChild(h2);
    headerRow.appendChild(diffBadge);

    const desc = document.createElement("p");
    desc.className = "lesson-description";
    desc.textContent = lesson.text;

    const codeBlock = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = lesson.code;
    codeBlock.appendChild(code);

    const quizBlock = document.createElement("div");
    quizBlock.className = "quiz-block";

    const qTitle = document.createElement("div");
    qTitle.className = "quiz-question";
    qTitle.textContent = "Тест: " + lesson.quiz.question;

    const optionsWrap = document.createElement("div");
    optionsWrap.className = "quiz-options";

    lesson.quiz.options.forEach((opt, idx) => {
      const label = document.createElement("label");
      label.className = "quiz-option-label";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "quiz_" + lesson.id;
      input.value = idx;

      label.appendChild(input);
      const span = document.createElement("span");
      span.textContent = opt;
      label.appendChild(span);
      optionsWrap.appendChild(label);
    });

    const quizFooter = document.createElement("div");
    quizFooter.className = "quiz-footer";

    const status = document.createElement("div");
    status.className = "status-text";
    status.textContent = completed
      ? "Урок пройден ✅"
      : "Выбери вариант ответа";

    const btnCheck = document.createElement("button");
    btnCheck.className = "btn";
    btnCheck.textContent = completed ? "Проверить ещё раз" : "Проверить";

    btnCheck.onclick = () => {
      const selected = Array.from(
        lessonDetailEl.querySelectorAll(
          'input[name="quiz_' + lesson.id + '"]'
        )
      ).find((i) => i.checked);

      if (!selected) {
        status.textContent = "Сначала выбери вариант ответа.";
        status.className = "status-text err";
        return;
      }

      const idx = Number(selected.value);
      if (idx === lesson.quiz.correctIndex) {
        status.textContent = "Верно! Урок отмечен как завершён.";
        status.className = "status-text ok";
        markLessonCompleted(lesson);
      } else {
        status.textContent = "Неверно. Попробуй ещё раз.";
        status.className = "status-text err";
      }
    };

    quizFooter.appendChild(status);
    quizFooter.appendChild(btnCheck);

    quizBlock.appendChild(qTitle);
    quizBlock.appendChild(optionsWrap);
    quizBlock.appendChild(quizFooter);

    lessonDetailEl.appendChild(headerRow);
    lessonDetailEl.appendChild(desc);
    lessonDetailEl.appendChild(codeBlock);
    lessonDetailEl.appendChild(quizBlock);
  }

  // =============================
  // 10. ПРАКТИКУМ
  // =============================

  function resetPracticeDomSandbox() {
    if (!practiceDomSandboxEl) return;
    practiceDomSandboxEl.innerHTML = '<div id="js-practice-box">пусто</div>';
    practiceDomSandboxEl.style.display = "block";
  }

  function resetPracticeEnvironment(task) {
    resetPracticeDomSandbox();
    if (task && Array.isArray(task.clearLocalStorageKeys)) {
      task.clearLocalStorageKeys.forEach((key) => {
        try {
          localStorage.removeItem(key);
        } catch {}
      });
    }
  }

  function getActivePracticeTask() {
    return PRACTICE_TASKS.find((t) => t.id === state.activePracticeTaskId);
  }

  function getPracticeCodeForTask(task) {
    if (!task) return "";
    return state.practiceCode[task.id] ?? task.starterCode;
  }

  function renderPracticeTaskList() {
    practiceTaskListEl.innerHTML = "";
    PRACTICE_TASKS.forEach((task) => {
      const completed = !!state.practiceCompleted[task.id];

      let classes = "practice-task-chip";
      if (task.id === state.activePracticeTaskId) classes += " active";
      if (completed) classes += " completed";

      const chip = document.createElement("button");
      chip.className = classes;

      const title = document.createElement("div");
      title.textContent = (completed ? "✅ " : "") + task.title;

      const diff = document.createElement("div");
      diff.className =
        "difficulty-badge difficulty-" + (task.difficulty || "normal");
      diff.textContent = getDifficultyLabel(task.difficulty || "normal");

      const footer = document.createElement("div");
      footer.style.fontSize = "10px";
      footer.style.opacity = "0.8";
      footer.textContent =
        (task.xp || 0) + " XP" + (completed ? " · выполнено" : "");

      chip.appendChild(title);
      chip.appendChild(diff);
      chip.appendChild(footer);

      chip.onclick = () => {
        state.activePracticeTaskId = task.id;
        renderPracticeEditor();
        renderPracticeTaskList();
      };

      practiceTaskListEl.appendChild(chip);
    });
  }

  function renderPracticeEditor() {
    const task = getActivePracticeTask();
    if (!task) {
      practiceTaskTitleEl.textContent = "Практикум JS";
      practiceTaskDescEl.textContent =
        "Пока нет задач. Можно добавить новые в массив PRACTICE_TASKS.";
      practiceCodeEl.value = "";
      practiceOutputEl.textContent = "";
      return;
    }

    practiceTaskTitleEl.textContent = task.title;
    practiceTaskDescEl.textContent = task.description;
    practiceCodeEl.value = getPracticeCodeForTask(task);
    practiceOutputEl.textContent = "Результат выполнения появится здесь.";
  }

  function renderHearts() {
    if (!practiceHeartsEl) return;
    const max = meta.maxHearts || 5;
    const cur = meta.hearts ?? max;
    const full = "♥".repeat(Math.max(0, Math.min(cur, max)));
    const empty = "♡".repeat(Math.max(0, max - cur));
    practiceHeartsEl.textContent = full + empty;
  }

  function renderPractice() {
    renderPracticeTaskList();
    renderPracticeEditor();
    renderHearts();
  }

  practiceCodeEl.addEventListener("input", () => {
    const task = getActivePracticeTask();
    if (!task) return;
    state.practiceCode[task.id] = practiceCodeEl.value;
  });

  function markPracticeCompleted(task) {
    if (!state.practiceCompleted[task.id]) {
      state.practiceCompleted[task.id] = true;
      savePracticeCompleted();
      updateStreak();
      checkAchievements();
    }
    renderPracticeTaskList();
    renderStats();
    renderProfile();
  }

  function runPractice(checkExpected) {
    const task = getActivePracticeTask();
    if (!task) return;

    if (checkExpected) {
      ensureHeartsFresh();
      if ((meta.hearts ?? 0) <= 0) {
        practiceOutputEl.textContent =
          "Сердечки закончились. Подожди новый день или сосредоточься на теории. 😉";
        renderHearts();
        return;
      }
    }

    resetPracticeEnvironment(task);

    const code = practiceCodeEl.value || "";
    let logs = [];
    const originalConsoleLog = console.log;

    console.log = (...args) => {
      const msg = args.map((a) => String(a)).join(" ");
      logs.push(msg);
    };

    let error = null;

    try {
      const fn = new Function(code);
      fn();
    } catch (e) {
      error = e;
    } finally {
      console.log = originalConsoleLog;
    }

    if (error) {
      practiceOutputEl.textContent = "Ошибка: " + error.message;
      return;
    }

    const outputText =
      logs.length > 0 ? logs.join("\n") : "(console.log ничего не вывел)";

    if (checkExpected && task.expectedOutput != null) {
      const expectedNormalized = task.expectedOutput.trim();
      const gotNormalized = outputText.trim();

      if (expectedNormalized === gotNormalized) {
        practiceOutputEl.textContent =
          outputText + "\n\n✅ Результат совпадает с ожидаемым!";
        markPracticeCompleted(task);
      } else {
        ensureHeartsFresh();
       // берём текущее значение, если это число,
// иначе используем maxHearts или 5 по умолчанию
var currentHearts =
  typeof meta.hearts === "number"
    ? meta.hearts
    : (meta.maxHearts || 6);

meta.hearts = Math.max(0, currentHearts - 1);
        saveMeta();
        renderHearts();

        if (meta.hearts <= 0) {
          practiceOutputEl.textContent =
            outputText +
            "\n\n❌ Ответ неверный, и сердечки закончились. Вернись позже или потренируйся в теории.";
        } else {
          practiceOutputEl.textContent =
            outputText +
            "\n\n⚠️ Ответ неверный. Ожидалось:\n" +
            task.expectedOutput +
            `\n\nОсталось сердечек: ${meta.hearts}`;
        }
      }
    } else if (checkExpected && task.expectedOutput == null) {
      practiceOutputEl.textContent =
        outputText +
        "\n\nℹ️ Для этой задачи автопроверка не настроена. Сравни результат с описанием.";
    } else {
      practiceOutputEl.textContent = outputText;
    }
  }

  practiceRunBtnEl.addEventListener("click", () => runPractice(false));
  practiceCheckBtnEl.addEventListener("click", () => runPractice(true));

  // =============================
  // 11. СТАТИСТИКА + АЧИВКИ
  // =============================

  function computeTrackStats(trackId) {
    const all = getAllLessons(trackId);
    const total = all.length;
    const completedMap = state.completedLessons[trackId] || {};
    let completed = 0;
    let lessonsXP = 0;

    all.forEach((lesson) => {
      if (completedMap[lesson.id]) {
        completed++;
        lessonsXP += lesson.xp || 0;
      }
    });

    return {
      lessonTotal: total,
      lessonCompleted: completed,
      lessonsXP
    };
  }

  function computePracticeStats() {
    let practiceTotal = PRACTICE_TASKS.length;
    let practiceDone = 0;
    let practiceXP = 0;

    PRACTICE_TASKS.forEach((task) => {
      if (state.practiceCompleted[task.id]) {
        practiceDone++;
        practiceXP += task.xp || 0;
      }
    });

    return { practiceTotal, practiceDone, practiceXP };
  }

  function jsSkillFromXp(xp) {
    if (xp < 100) return "Новичок";
    if (xp < 250) return "Ученик";
    if (xp < 500) return "Практик";
    if (xp < 800) return "Продвинутый";
    return "Мастер";
  }

  const ACHIEVEMENT_DEFS = [
    {
      id: "a_js_course_complete",
      title: "JS 100%",
      description: "Заверши все уроки JavaScript."
    },
    {
      id: "a_practice_all",
      title: "Практик JS",
      description: "Выполни все задачи практикума."
    },
    {
      id: "a_arrays_master",
      title: "Мастер массивов",
      description: "Закрой все задачи практикума по массивам."
    },
    {
      id: "a_dom_3days",
      title: "DOM-серия",
      description: "3 дня подряд заниматься и закрыть DOM-задачу."
    }
  ];

  function checkAchievements() {
    const metaAch = meta.achievements || {};

    const jsStats = computeTrackStats("js");
    const practiceStats = computePracticeStats();

    let arraysDone = 0;
    let domDone = 0;
    PRACTICE_TASKS.forEach((t) => {
      if (state.practiceCompleted[t.id]) {
        if (t.tag === "arrays") arraysDone++;
        if (t.tag === "dom") domDone++;
      }
    });

    const percentJs = jsStats.lessonTotal
      ? Math.round(
          (jsStats.lessonCompleted / jsStats.lessonTotal) * 100
        )
      : 0;

    const today = new Date().toISOString().slice(0, 10);

    function unlock(id) {
      if (!metaAch[id]) {
        metaAch[id] = { unlockedAt: today };
        meta.achievements = metaAch;
        saveMeta();
        const def = ACHIEVEMENT_DEFS.find((a) => a.id === id);
        if (def) alert("Ачивка получена: " + def.title);
      }
    }

    if (percentJs === 100 && jsStats.lessonTotal > 0) {
      unlock("a_js_course_complete");
    }

    if (
      practiceStats.practiceDone === practiceStats.practiceTotal &&
      practiceStats.practiceTotal > 0
    ) {
      unlock("a_practice_all");
    }

    const totalArraysTasks = PRACTICE_TASKS.filter(
      (t) => t.tag === "arrays"
    ).length;
    if (arraysDone === totalArraysTasks && totalArraysTasks > 0) {
      unlock("a_arrays_master");
    }

    if (domDone > 0 && getStreak() >= 3) {
      unlock("a_dom_3days");
    }
  }

  // =============================
  // БИБЛИОТЕКА
  // =============================
const LIBRARY_SECTIONS = [
  // ================= JS =================
  {
    track: "js", level: "beginner",  title: "JavaScript — база",
    items: [
      {
        term: "Переменные",
        body: "let — изменяемые значения; const — константы (нельзя переопределить ссылку); var — старый способ, обычно не нужен."
      },
      {
        term: "Типы данных",
        body: "Примитивы: number, string, boolean, null, undefined, symbol, bigint. Ссылочные: object (включая массивы, функции, Date и т.д.)."
      },
      {
        term: "Преобразование типов",
        body: "String(x) → строка, Number(x) → число, Boolean(x) → булево. == делает неявное преобразование, === сравнивает без приведения типов."
      },
      {
        term: "Шаблонные строки",
        body: "Используют обратные кавычки: `...`. Подстановка значений через ${expr}. Удобны для многострочного текста и форматирования."
      }
    ]
  },
  {
    track: "js", level: "beginner", 
    title: "JavaScript — управление потоком",
    items: [
      {
        term: "Условия",
        body: "if (условие) { ... } else if (...) { ... } else { ... }. Условие приводится к булеву (truthy/falsy)."
      },
      {
        term: "Логические операторы",
        body: "&& — И, || — ИЛИ, ! — НЕ. Часто используются для коротких проверок: isLoggedIn && showProfile()."
      },
      {
        term: "Циклы",
        body: "for, while, do...while. Для массивов удобнее использовать for...of, forEach, map, filter и т.д."
      },
      {
        term: "Тернарный оператор",
        body: "условие ? значениеЕслиTrue : значениеЕслиFalse. Удобен для простых ветвлений внутри выражений."
      }
    ]
  },
  {
    track: "js", level: "intermediate", 
    title: "JavaScript — функции, массивы, объекты",
    items: [
      {
        term: "Функции",
        body: "function name(a, b) { return a + b; } и стрелочные функции: const fn = (a, b) => a + b;. Функции — объекты, можно передавать и возвращать."
      },
      {
        term: "Массивы",
        body: "Частые методы: push/pop, shift/unshift, indexOf, includes, map, filter, reduce, find, some, every, slice, splice."
      },
      {
        term: "Объекты",
        body: "Пары ключ–значение: const user = { name: 'Alex', age: 20 }. Доступ через user.name или user['name']."
      },
      {
        term: "Деструктуризация",
        body: "Позволяет вытаскивать значения: const {name, age} = user; const [first, second] = arr;"
      }
    ]
  },
  {
    track: "js", level: "intermediate", 
    title: "JavaScript — DOM и события",
    items: [
      {
        term: "DOM",
        body: "Объектное представление HTML-страницы. Через document можно искать и менять элементы."
      },
      {
        term: "Поиск элементов",
        body: "getElementById('id'), querySelector('.class'), querySelectorAll('selector'). Часто достаточно querySelector."
      },
      {
        term: "Изменение содержимого",
        body: "element.textContent — текст; element.innerHTML — HTML; element.classList.add/remove/toggle — классы."
      },
      {
        term: "События",
        body: "element.addEventListener('click', handler). Частые события: click, input, submit, change, keydown."
      }
    ]
  },
  {
    track: "js", level: "advanced",  
    title: "JavaScript — async/await",
    items: [
      {
        term: "Promise",
        body: "Объект, представляющий асинхронный результат. Состояния: pending, fulfilled, rejected."
      },
      {
        term: "fetch",
        body: "fetch(url).then(res => res.json()).then(data => ...). Используется для HTTP-запросов."
      },
      {
        term: "async/await",
        body: "Ключевое слово async перед функцией, внутри можно писать await promise; Код выглядит синхронным, но выполняется асинхронно."
      },
      {
        term: "Обработка ошибок",
        body: "try { ... } catch (e) { ... } finally { ... }. В async-функциях удобно ловить ошибки вокруг await."
      }
    ]
  },

  // ================= HTML =================
  {
    track: "html", level: "beginner", 
    title: "HTML — структура документа",
    items: [
      {
        term: "Каркас",
        body: "<!DOCTYPE html> сообщает браузеру тип документа. Внутри <html> находятся <head> (метаданные) и <body> (контент)."
      },
      {
        term: "<head>",
        body: "Содержит <title>, <meta>, <link>, <script> и другие теги, которые не отображаются напрямую, но влияют на страницу."
      },
      {
        term: "<body>",
        body: "Всё, что пользователь видит: текст, картинки, кнопки, формы и т.д."
      },
      {
        term: "Кодировка",
        body: "<meta charset=\"UTF-8\" /> — стандарт для корректного отображения большинства языков."
      }
    ]
  },
  {
    track: "html", level: "beginner",  
    title: "HTML — текст, ссылки, изображения",
    items: [
      {
        term: "Заголовки",
        body: "Теги h1–h6. h1 — основной заголовок страницы (обычно один), h2–h6 — подзаголовки."
      },
      {
        term: "Абзацы и переносы",
        body: "<p>Абзац текста</p>. Для ручного переноса строки — <br />, но злоупотреблять не стоит."
      },
      {
        term: "Ссылки",
        body: "<a href=\"https://example.com\">Текст ссылки</a>. Атрибут target=\"_blank\" открывает в новой вкладке."
      },
      {
        term: "Изображения",
        body: "<img src=\"image.png\" alt=\"Описание\" />. Атрибут alt обязателен: он нужен для доступности и SEO."
      }
    ]
  },
  {
    track: "html", level: "intermediate",  
    title: "HTML — списки, таблицы, формы",
    items: [
      {
        term: "Списки",
        body: "ul + li — маркированный список; ol + li — нумерованный. li — элемент списка."
      },
      {
        term: "Таблицы",
        body: "<table>, <tr> — строка, <th> — заголовок столбца, <td> — ячейка. Сейчас используются реже, в основном для табличных данных."
      },
      {
        term: "Формы",
        body: "<form>, внутри input, textarea, select, button. Атрибут action задаёт адрес, method — способ (GET/POST)."
      },
      {
        term: "Типы input",
        body: "text, password, email, number, checkbox, radio, date, file и др. Правильный type помогает валидации и UX."
      }
    ]
  },
  {
    track: "html", level: "intermediate",  
    title: "HTML — семантика",
    items: [
      {
        term: "Семантические блоки",
        body: "<header>, <nav>, <main>, <section>, <article>, <aside>, <footer>. Помогают структуре и доступности."
      },
      {
        term: "div и span",
        body: "div — блочный универсальный контейнер; span — строчный. Не несут семантики, используются для группировки и стилизации."
      },
      {
        term: "Атрибут id и class",
        body: "id — уникальный идентификатор элемента на странице; class — может повторяться и использоваться для стилей/JS."
      },
      {
        term: "ARIA-атрибуты",
        body: "Используются для улучшения доступности (screen reader). Примеры: role, aria-label, aria-hidden."
      }
    ]
  },

  // ================= CSS =================
  {
    track: "css", level: "beginner",
    title: "CSS — основа",
    items: [
      {
        term: "Подключение CSS",
        body: "В <head>: <link rel=\"stylesheet\" href=\"styles.css\" />. Внутренние стили — в теге <style>."
      },
      {
        term: "Селекторы",
        body: "По тегу: p {}; по классу: .btn {}; по id: #main {}. Комбинированные: nav a, .card > h2 и т.д."
      },
      {
        term: "Каскад и специфичность",
        body: "Важно, какие стили переопределяют другие: inline > id > class > тег. Поздние правила при равной специфичности важнее."
      },
      {
        term: "Наследование",
        body: "Не все свойства наследуются. Например, font-family и color — да; margin и padding — нет."
      }
    ]
  },
  {
    track: "css", level: "intermediate", 
    title: "CSS — бокс-модель и расположение",
    items: [
      {
        term: "Бокс-модель",
        body: "Элемент = content + padding + border + margin. Свойство box-sizing: border-box облегчает расчёт размеров."
      },
      {
        term: "Отображение",
        body: "display: block, inline, inline-block, flex, grid, none. От него зависит, как элемент ведёт себя в потоке."
      },
      {
        term: "Flexbox",
        body: "display:flex; justify-content (по основной оси), align-items (по поперечной), flex-direction (row/column), gap."
      },
      {
        term: "Position",
        body: "static (по умолчанию), relative, absolute, fixed, sticky. Позволяют смещать элементы и делать фиксированные панели."
      }
    ]
  },
  {
    track: "css",  level: "advanced", 
    title: "CSS — цвет, текст, адаптив",
    items: [
      {
        term: "Цвета",
        body: "Форматы: #rrggbb, rgb(), rgba(), hsl(). Для прозрачности удобен rgba или hsla."
      },
      {
        term: "Шрифты",
        body: "font-family, font-size, font-weight, line-height, letter-spacing. Для веб-шрифтов используют @font-face или сервисы (Google Fonts)."
      },
      {
        term: "Media queries",
        body: "@media (max-width: 768px) { ... } — адаптив для мобилок. Часто используют mobile-first подход."
      },
      {
        term: "Переходы и анимации",
        body: "transition: свойство время; для сложных эффектов — @keyframes и animation."
      }
    ]
  }
];



  function renderStats() {
    statsContainerEl.innerHTML = "";

    const activeTrack = getCurrentTrack();
    const activeStats = computeTrackStats(state.activeTrackId);
    const practiceStats = computePracticeStats();
    const jsStats = computeTrackStats("js");
    const htmlStats = computeTrackStats("html");
    const cssStats = computeTrackStats("css");

    const totalXP =
      jsStats.lessonsXP +
      practiceStats.practiceXP +
      htmlStats.lessonsXP +
      cssStats.lessonsXP;
    
    const libraryContainerEl = document.getElementById("libraryContainer");

    const librarySearchEl = document.getElementById("librarySearch");
const libraryLevelButtons = document.querySelectorAll(".library-level-btn");

if (librarySearchEl) {
  librarySearchEl.addEventListener("input", () => {
    state.libraryQuery = librarySearchEl.value.toLowerCase();
    renderLibrary();
  });
}

if (libraryLevelButtons && libraryLevelButtons.length) {
  libraryLevelButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const level = btn.getAttribute("data-level") || "all";
      state.libraryLevelFilter = level;

      libraryLevelButtons.forEach((b) =>
        b.classList.toggle("active", b === btn)
      );

      renderLibrary();
    });
  });
}

function renderLibrary() {
  if (!libraryContainerEl) return;
  libraryContainerEl.innerHTML = "";

  const query = (state.libraryQuery || "").trim().toLowerCase();
  const levelFilter = state.libraryLevelFilter || "all";
  const activeTrackId = state.activeTrackId;

  // фильтруем + сортируем (активный трек — сверху)
  let sections = LIBRARY_SECTIONS.filter((section) => {
    if (levelFilter !== "all" && section.level !== levelFilter) {
      return false;
    }
    return true;
  });

  sections.sort((a, b) => {
    const aIsActive = a.track === activeTrackId;
    const bIsActive = b.track === activeTrackId;
    if (aIsActive && !bIsActive) return -1;
    if (!aIsActive && bIsActive) return 1;
    return 0; // внутри группы порядок оставляем
  });

  let totalRenderedSections = 0;

  sections.forEach((section) => {
    // поиск: если есть запрос, фильтруем items внутри секции
    let items = section.items || [];

    if (query) {
      items = items.filter((item) => {
        const t = (item.term || "").toLowerCase();
        const b = (item.body || "").toLowerCase();
        return t.includes(query) || b.includes(query);
      });
      if (items.length === 0) {
        return; // эту секцию не показываем
      }
    }

    totalRenderedSections++;

    const card = document.createElement("div");
    card.className = "module-stats library-card";

    const header = document.createElement("div");
    header.className = "library-card-header";

    const title = document.createElement("div");
    title.className = "library-card-title";
    title.textContent = section.title;

    const badges = document.createElement("div");
    badges.className = "library-badges";

    const trackBadge = document.createElement("span");
    trackBadge.className =
      "library-track-badge " + (section.track || "");
    trackBadge.textContent = (section.track || "").toUpperCase();

    const levelBadge = document.createElement("span");
    levelBadge.className =
      "library-level-badge " + (section.level || "beginner");
    if (section.level === "advanced") {
      levelBadge.textContent = "Advanced";
    } else if (section.level === "intermediate") {
      levelBadge.textContent = "Intermediate";
    } else {
      levelBadge.textContent = "Beginner";
    }

    badges.appendChild(trackBadge);
    badges.appendChild(levelBadge);

    header.appendChild(title);
    header.appendChild(badges);
    card.appendChild(header);

    items.forEach((item) => {
      const term = document.createElement("div");
      term.style.fontSize = "11px";
      term.style.fontWeight = "600";
      term.textContent = item.term;
      card.appendChild(term);

      const body = document.createElement("div");
      body.style.fontSize = "11px";
      body.style.color = "#9ca3af";
      body.style.marginBottom = "4px";
      body.textContent = item.body;
      card.appendChild(body);
    });

    libraryContainerEl.appendChild(card);
  });

  if (totalRenderedSections === 0) {
    const empty = document.createElement("div");
    empty.className = "module-stats";
    empty.style.fontSize = "11px";
    empty.textContent =
      "По запросу ничего не найдено. Попробуй другой термин или уровень.";
    libraryContainerEl.appendChild(empty);
  }
}



    
    const percentActive = activeStats.lessonTotal
      ? Math.round(
          (activeStats.lessonCompleted / activeStats.lessonTotal) * 100
        )
      : 0;

    const statGrid = document.createElement("div");
    statGrid.className = "stat-grid";

    const cardLessons = document.createElement("div");
    cardLessons.className = "stat-card";
    cardLessons.innerHTML =
      `<div class="stat-label">Уроки (${activeTrack.title})</div>` +
      `<div class="stat-value">${activeStats.lessonCompleted}/${activeStats.lessonTotal}</div>`;

    const cardPractice = document.createElement("div");
    cardPractice.className = "stat-card";
    cardPractice.innerHTML =
      '<div class="stat-label">Практикум (JS)</div>' +
      `<div class="stat-value">${practiceStats.practiceDone}/${practiceStats.practiceTotal}</div>`;

    const cardXP = document.createElement("div");
    cardXP.className = "stat-card";
    cardXP.innerHTML =
      '<div class="stat-label">Всего XP</div>' +
      `<div class="stat-value">${totalXP}</div>`;

    const cardPercent = document.createElement("div");
    cardPercent.className = "stat-card";
    cardPercent.innerHTML =
      `<div class="stat-label">Курс (${activeTrack.title})</div>` +
      `<div class="stat-value">${percentActive}%</div>`;

    const cardStreak = document.createElement("div");
    cardStreak.className = "stat-card";
    cardStreak.innerHTML =
      '<div class="stat-label">Серия дней</div>' +
      `<div class="stat-value">${getStreak()}</div>`;

    statGrid.appendChild(cardLessons);
    statGrid.appendChild(cardPractice);
    statGrid.appendChild(cardXP);
    statGrid.appendChild(cardPercent);
    statGrid.appendChild(cardStreak);

    statsContainerEl.appendChild(statGrid);

    const modulesBlock = document.createElement("div");
    modulesBlock.className = "module-stats";

    const modulesTitle = document.createElement("div");
    modulesTitle.textContent = "Прогресс по трекам";
    modulesTitle.style.fontWeight = "600";
    modulesTitle.style.fontSize = "12px";
    modulesBlock.appendChild(modulesTitle);

    ["js", "html", "css"].forEach((id) => {
      const track = TRACKS[id];
      const s = computeTrackStats(id);

      const row = document.createElement("div");
      row.className = "module-stat-row";

      const left = document.createElement("span");
      left.textContent = track.title;

      const right = document.createElement("span");
      right.textContent = `${s.lessonCompleted}/${s.lessonTotal}`;

      row.appendChild(left);
      row.appendChild(right);
      modulesBlock.appendChild(row);
    });

    const practiceRow = document.createElement("div");
    practiceRow.className = "module-stat-row";

    const practiceLeft = document.createElement("span");
    practiceLeft.textContent = "Практикум JS";

    const practiceRight = document.createElement("span");
    practiceRight.textContent = `${practiceStats.practiceDone}/${practiceStats.practiceTotal}`;

    practiceRow.appendChild(practiceLeft);
    practiceRow.appendChild(practiceRight);
    modulesBlock.appendChild(practiceRow);

    statsContainerEl.appendChild(modulesBlock);

    const achMap = meta.achievements || {};
    const achCount = Object.keys(achMap).length;

    const achBlock = document.createElement("div");
    achBlock.className = "module-stats";

    const achTitle = document.createElement("div");
    achTitle.textContent = "Ачивки";
    achTitle.style.fontWeight = "600";
    achTitle.style.fontSize = "12px";
    achBlock.appendChild(achTitle);

    const achRow = document.createElement("div");
    achRow.className = "module-stat-row";
    achRow.innerHTML =
      "<span>Открытые ачивки</span><span>" + achCount + "</span>";
    achBlock.appendChild(achRow);

    statsContainerEl.appendChild(achBlock);
  }

  // =============================
  // 12. ПРОФИЛЬ
  // =============================

  function getTodayIsoDate() {
    return new Date().toISOString().slice(0, 10);
  }

  function avatarFromName(name) {
    const trimmed = (name || "").trim();
    if (!trimmed) return "?";
    return trimmed[0].toUpperCase();
  }

  function renderProfile() {
    const activeStats = computeTrackStats(state.activeTrackId);
    const practiceStats = computePracticeStats();
    const jsStats = computeTrackStats("js");
    const htmlStats = computeTrackStats("html");
    const cssStats = computeTrackStats("css");

    const xpJs = jsStats.lessonsXP + practiceStats.practiceXP;
    const xpHtml = htmlStats.lessonsXP;
    const xpCss = cssStats.lessonsXP;
    const totalXP = xpJs + xpHtml + xpCss;

    profileNameInputEl.value = meta.profileName || "";
    profileAvatarEl.textContent = avatarFromName(meta.profileName);

    profileSubLineEl.textContent =
      activeStats.lessonTotal === 0
        ? "Новичок во Frontend Quest"
        : `Текущий трек: ${getCurrentTrack().title}, уроков: ${activeStats.lessonCompleted}/${activeStats.lessonTotal}`;

    profileLessonsSummaryEl.textContent = `${activeStats.lessonCompleted}/${activeStats.lessonTotal}`;
    profilePracticeSummaryEl.textContent = `${practiceStats.practiceDone}/${practiceStats.practiceTotal}`;
    profileTotalXpEl.textContent = totalXP;

    profileSkillJsEl.textContent = jsSkillFromXp(xpJs);
    profileSkillHtmlEl.textContent = jsSkillFromXp(xpHtml);
    profileSkillCssEl.textContent = jsSkillFromXp(xpCss);

    const achMap = meta.achievements || {};
    const achCount = Object.keys(achMap).length;
    profileAchievementsEl.textContent = achCount;

    profileStreakEl.textContent = getStreak();

    const today = getTodayIsoDate();
    if (meta.lastDay === today) {
      profileTodayStatusEl.textContent = "сегодня уже занимался";
    } else {
      profileTodayStatusEl.textContent = "ещё не занимался сегодня";
    }

    const goal = meta.dailyGoal || 50;
    profileGoalInputEl.value = goal;
    profileGoalValueEl.textContent = goal + " XP/день";
  }

  if (profileNameInputEl) {
    profileNameInputEl.addEventListener("input", () => {
      meta.profileName = profileNameInputEl.value || "";
      saveMeta();
      renderProfile();
    });
  }

  if (profileGoalInputEl) {
    profileGoalInputEl.addEventListener("input", () => {
      const val = Number(profileGoalInputEl.value) || 50;
      meta.dailyGoal = val;
      saveMeta();
      profileGoalValueEl.textContent = val + " XP/день";
    });
  }

  // =============================
  // 13. ПЕРЕКЛЮЧЕНИЕ ВИДОВ И ТРЕКОВ
  // =============================

  const libraryViewEl = document.getElementById("libraryView");

function renderView() {
  const view = state.activeView;

  courseViewEl.classList.toggle("view-hidden", view !== "course");
  practiceViewEl.classList.toggle("view-hidden", view !== "practice");
  statsViewEl.classList.toggle("view-hidden", view !== "stats");
  libraryViewEl.classList.toggle("view-hidden", view !== "library");
  profileViewEl.classList.toggle("view-hidden", view !== "profile");

  const buttons = bottomNavEl.querySelectorAll(".bottom-nav-btn");
  buttons.forEach((btn) => {
    const target = btn.getAttribute("data-view");
    btn.classList.toggle("active", target === view);
  });
}


  

  bottomNavEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".bottom-nav-btn");
    if (!btn) return;
    const view = btn.getAttribute("data-view");
    if (!view) return;
    state.activeView = view;
    renderView();
  });

  function setActiveTrack(trackId) {
    if (!TRACKS[trackId]) return;
    state.activeTrackId = trackId;
    const course = TRACKS[trackId].course;
    state.activeModuleId = course[0]?.id ?? null;
    state.activeLessonId = null;
    renderAll();
  }

  trackSwitcherEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".track-switcher-btn");
    if (!btn) return;
    const trackId = btn.getAttribute("data-track");
    setActiveTrack(trackId);
  });

  // =============================
  // 14. СЕРТИФИКАТ
  // =============================

  function openCertificate() {
    const percent = getProgressPercent();
    if (percent < 100) return;
    const now = new Date();
    const track = getCurrentTrack();
    certificateTrackNameEl.textContent = track.title;
    certificateDateEl.textContent =
      "Дата завершения: " +
      now.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    certificateOverlayEl.style.display = "flex";
  }

  function closeCertificate() {
    certificateOverlayEl.style.display = "none";
  }

  certificateBtnEl.addEventListener("click", openCertificate);
  certificateBtnCloseEl.addEventListener("click", closeCertificate);
  certificateShareHintBtnEl.addEventListener("click", () => {
    alert("Сделай скриншот сертификата и сохрани его как картинку.");
  });

  certificateOverlayEl.addEventListener("click", (e) => {
    if (e.target === certificateOverlayEl) closeCertificate();
  });


  // =============================
  // 15. ВДОХНОВЕНИЕ
  // =============================

  function setInspireOpen(isOpen) {
    if (!inspirePanelEl) return;
    inspirePanelEl.classList.toggle("open", isOpen);
  }

  inspireBtnEl.addEventListener("click", () => {
    const open = !inspirePanelEl.classList.contains("open");
    setInspireOpen(open);
  });

  inspireCloseBtnEl.addEventListener("click", () => {
    setInspireOpen(false);
  });

  // =============================
  // 16. СТАРТ
  // =============================

  const themeToggleEl = document.getElementById("themeToggle");
if (themeToggleEl) {
  themeToggleEl.addEventListener("click", toggleTheme);
}


// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("./service-worker.js")
//       .then((reg) => {
//         console.log("SW registered", reg);
//       })
//       .catch((err) => {
//         console.log("SW registration failed:", err);
//       });
//   });

//   // Когда активируется новый SW → перезагружаем страницу один раз
//   let refreshing = false;
//   navigator.serviceWorker.addEventListener("controllerchange", () => {
//     if (refreshing) return;
//     refreshing = true;
//     window.location.reload();
//   });
// }



function hideSplash() {
  const splash = document.getElementById("appSplash");
  if (!splash) return;
  // небольшая задержка для красоты
  setTimeout(() => {
    splash.classList.add("splash-hidden");
    // через секунду вообще удалим из DOM
    setTimeout(() => splash.remove(), 600);
  }, 500); // полсекунды после готовности приложения
}

applyTheme();
renderAll();
hideSplash();
});

