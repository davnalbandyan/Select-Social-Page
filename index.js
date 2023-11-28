"use strict"

const selectField = document.getElementById("selectField");
const list = document.getElementById("list");
const options = document.querySelectorAll(".options");
const selectText = document.getElementById("selectText")
const arrow = document.getElementById("arrow")




selectField.addEventListener("click", () => {
    list.classList.toggle("hide");
    arrow.classList.toggle("rotate")
  
})


options.forEach(item => {
    item.addEventListener("click", () => {
     selectText.textContent = item.textContent;
     list.classList.toggle("hide");
     arrow.classList.toggle("rotate")
    })
   
    
})

