var changeLanguage = document.querySelector(".check");
changeLanguage.addEventListener("click", language);

function language() {
    let id = changeLanguage.checked;
    if (id == true) {
        location.href = "index.html"; // Ruta relativa a la página principal
    } else {
        location.href = "en/index.html"; // Ruta relativa a la página en inglés
    }
}
