const features = document.getElementById("arrow-f");

function toggleDropdF() {
    const dropdF = document.getElementById("dropdown-f");
    dropdF.classList.toggle("active");
}

features.addEventListener("click", toggleDropdF);


const company = document.getElementById("arrow-c");

function toggleDropdC() {
    const dropdC = document.getElementById("dropdown-c");
    dropdC.classList.toggle("active");
}

company.addEventListener("click", toggleDropdC);



/*
const sidebar = document.getElementById("sidebar");

function toggleNav() {
    const navL = document.getElementById("navL");
    navL.classList.toggle("active");
    const navR = document.getElementById("navR");
    navR.classList.toggle("active");
}

sidebar.addEventListener("click", toggleNav);
*/
