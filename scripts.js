const dropdF = document.querySelector(".dropdown-f"),
arrow = dropdF.querySelector("arrow"),
options = dropdF.querySelectorAll(".options li"),
features = dropdF.querySelector("features");

arrow.addEventListener("click", () => dropdF.classList.toggle("active"));

options.forEach(option =>{
    option.addEventListener("click", () =>{
        let selectedOption = option.querySelector(".option-text").innerText;
        console.log(selectedOption)
        
    })
    
})