var changeLanguage = document.querySelector(".check");
changeLanguage.addEventListener("click", language);

if (localStorage.getItem("selectedLanguage") === "en") {
    changeLanguage.checked = true;
}

changeLanguage.addEventListener("change", language);
    
    function language() {
        
        var isChecked = changeLanguage.checked;
        
        
        if (isChecked) {
            localStorage.setItem("selectedLanguage", "default");
            location.href = "index.html"; 
        } else {
            localStorage.setItem("selectedLanguage", "en");
            location.href = "en-index.html"; 
    }
}
