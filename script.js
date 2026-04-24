"use strict";

// color-changing-mode
const toggle = document.getElementById("color-mode");

toggle.addEventListener("click", (e) => {
    e.preventDefault();
    
    document.body.classList.toggle("dark-mode");
});