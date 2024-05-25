var changeLanguage = document.querySelector(".check");

        if (localStorage.getItem("selectedLanguage") === "en") {
            changeLanguage.checked = true;
            if (window.location.pathname !== "/en/index.html") {
                window.location.href = "en/index.html";
            }
        } else {
            changeLanguage.checked = false;
            if (window.location.pathname !== "/index.html") {
                window.location.href = "index.html";
            }
        }

        changeLanguage.addEventListener("click", language);

        function language() {
            if (changeLanguage.checked) {
                localStorage.setItem("selectedLanguage", "en");
                window.location.href = "en/index.html";
            } else {
                localStorage.setItem("selectedLanguage", "default");
                window.location.href = "index.html";
            }
        }
