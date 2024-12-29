const menuButton=document.querySelectorAll(".menu-button");
const screenOverlay=document.querySelector(".screen-overlay");
const themeButton=document.querySelector(".theme-button i");


// Initialize dark mode based on localStrorage 
if(localStorage.getItem("darkMode")==="enabled"){
    document.body.classList.add("dark-mode"); 
    themeButton.classList.replace("uil-moon", "uil-sun");
}

// Toggle dark mode when theme button is clicked 
themeButton.addEventListener("click", ()=>{
    const isDarkMode=document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
    themeButton.classList.toggle("uil-sun",isDarkMode);
    themeButton.classList.toggle("uil-moon", !isDarkMode);

});


// Toggle sidebar visibiliy when menu buttons are clinked
menuButton.forEach(button=>{
    button.addEventListener("click", ()=>{
        document.body.classList.toggle("sidebar-hidden");
    });
});


// Toggle sidebar visibiliy when menu buttons are clinked
screenOverlay.addEventListener("click", ()=>{
    document.body.classList.toggle("sidebar-hidden");
});

// Show sidebar on large screen by default 
if(window.innerWidth>=768){
    document.body.classList.remove("sidebar-hidden");
}