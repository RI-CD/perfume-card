'use strict'
const share=document.querySelector(".share-btn");
const linkss=document.querySelector(".share");
console.log("hey");
share.addEventListener("click",()=>{
linkss.classList.toggle("hidden");
console.log("clicked");
})