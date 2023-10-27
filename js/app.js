var changeLanguage = document.querySelector(".check");
changeLanguage.addEventListener("click", language);

// Al cargar la página, verifica si el usuario ha seleccionado un idioma previamente
if (localStorage.getItem("selectedLanguage") === "en") {
    changeLanguage.checked = true;
}

function language() {
    let id = changeLanguage.checked;
    if (id === true) {
        // Usuario seleccionó cambiar a idioma predeterminado
        localStorage.setItem("selectedLanguage", "default");
        location.href = "index.html"; // Ruta relativa a la página principal
    } else {
        // Usuario seleccionó cambiar al idioma en inglés
        localStorage.setItem("selectedLanguage", "en");
        location.href = "en/index.html"; // Ruta relativa a la página en inglés
    }
}
