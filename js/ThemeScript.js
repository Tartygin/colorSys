const btn = document.querySelector(".btnToggle");

const theme = document.querySelector(".themeLink")

btn.addEventListener('click', function () {
    if (theme.getAttribute("href") == "css/LightTheme.css") {
        theme.href = "css/DarkTheme.css"
        btn.src = "img/Night.svg"
    }
    else {
        theme.href = "css/LightTheme.css"
        btn.src = "img/Light.svg"
    }
});



const chevron = document.querySelector(".chevron");

chevron.addEventListener('click', function () {
    if (chevron.getAttribute("src") == "img/chevron-up.svg") {
        chevron.src = "img/chevron-down.svg"
    }
    else {
        chevron.src = "img/chevron-up.svg"
    }
});