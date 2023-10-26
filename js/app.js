var changeLanguage = document.querySelector(".check");
changeLanguage.addEventListener("click", language);

function language(){
    let id=changeLanguage.checked;
    if(id==true){
        location.href="/index.html";
    }else{
        location.href="en/index.html";
        
    }
}