const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");

const quotes = [
    "Важливо не те, ким ти народився, а те, ким ти вирішив стати.",
    "Дружба, сміливість і вибір допомагають героям подолати небезпеку.",
    "Навіть у темні моменти варто шукати світло і не здаватися."
];

if (quoteBtn && quoteText) {
    quoteBtn.addEventListener("click", function() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteText.textContent = randomQuote;
    });
}

const recommendBtn = document.getElementById("recommendBtn");
const recommendBlock = document.getElementById("recommendBlock");

if (recommendBtn && recommendBlock) {
    recommendBtn.addEventListener("click", function() {
        recommendBlock.classList.toggle("hidden");
        if (recommendBlock.classList.contains("hidden")) {
            recommendBtn.textContent = "Показати рекомендацію";
        } else {
            recommendBtn.textContent = "Сховати рекомендацію";
        }
    });
}

const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("favoriteBookTheme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

function updateThemeButton() {
    if (!themeBtn) return;

    if (document.body.classList.contains("dark-theme")) {
        themeBtn.textContent = "Світла тема";
    } else {
        themeBtn.textContent = "Темна тема";
    }
}

updateThemeButton();

if (themeBtn) {
    themeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("favoriteBookTheme", "dark");
        } else {
            localStorage.setItem("favoriteBookTheme", "light");
        }

        updateThemeButton();
    });
}
