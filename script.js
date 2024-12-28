document.addEventListener("DOMContentLoaded", () => {
    const courses = document.querySelectorAll(".course");
    const lessonDetail = document.getElementById("lesson-detail");
    const lessonTitle = document.getElementById("lesson-title");
    const lessonContent = document.getElementById("lesson-content");
    const completeLesson = document.getElementById("completeLesson");

    let currentLesson = 0;

    const lessons = [
        {
            title: "Урок 1: Основи англійської",
            content: "<p>Цей урок присвячений базовим словам англійської мови.</p><p>Слова: Apple, Banana, Cherry.</p>",
        },
        {
            title: "Урок 2: Слова",
            content: "<p>Давайте повторимо важливі слова.</p><p>Слова: Dog, Cat, Bird.</p>",
        },
        {
            title: "HTML Урок 1: Основи",
            content: "<p>Вивчаємо основи HTML. Тег <code>&lt;html&gt;</code>...</p>",
        },
    ];

    courses.forEach((course, index) => {
        course.addEventListener("click", () => {
            if (!course.classList.contains("locked")) {
                currentLesson = index;
                openLesson(index);
            }
        });
    });

    function openLesson(index) {
        const lesson = lessons[index];
        lessonTitle.textContent = lesson.title;
        lessonContent.innerHTML = lesson.content;
        lessonDetail.classList.remove("hidden");
    }

    completeLesson.addEventListener("click", () => {
        if (currentLesson < courses.length - 1) {
            courses[currentLesson + 1].classList.remove("locked");
        }
        lessonDetail.classList.add("hidden");
    });

    document.getElementById("changeProfile").addEventListener("click", () => {
        const username = prompt("Введіть нове ім'я користувача:");
        if (username) {
            document.getElementById("username").textContent = username;
        }
    });
});
const lessons = [
    {
        title: "Урок 1: Основи англійської",
        content: "<p>Цей урок присвячений базовим словам англійської мови.</p><p>Слова: Apple, Banana, Cherry.</p>",
    },
    {
        title: "Урок 2: Слова",
        content: "<p>Давайте повторимо важливі слова.</p><p>Слова: Dog, Cat, Bird.</p>",
    },
    {
        title: "HTML Урок 1: Основи",
        content: "<p>Вивчаємо основи HTML. Тег <code>&lt;html&gt;</code>...</p>",
    },
];
