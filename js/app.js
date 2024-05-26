var changeLanguage = document.querySelector(".check");
changeLanguage.addEventListener("click", language);

if (localStorage.getItem("selectedLanguage") === "en-index") {
    changeLanguage.checked = true;
}

function language() {
    let id = changeLanguage.checked;
    if (id === true) {
        
        localStorage.setItem("selectedLanguage", "default");
        location.href = "index.html"; 
    } else {
       
        localStorage.setItem("selectedLanguage", "en");
        location.href = "en-index.html"; 
    }
}
