import ready from "../js/utils/documentReady.js";

ready(()=>{
    //spoiler
    const spoilerBtn = document.querySelectorAll(".spoiler-wrap__title");

    if(spoilerBtn){
        spoilerBtn.forEach((item)=>{
            item.addEventListener("click", ()=>{
                item.closest(".spoiler-wrap").classList.toggle("spoiler-wrap--active");
            });
        });
    }

    // mobile menu
    const menuTrigger = document.querySelectorAll(".js-menu-btn");
    menuTrigger.forEach((item)=>{
        item.addEventListener("click", (event) =>{
            event.preventDefault();
            const navMenu = item.closest(".header").querySelector(".nav");
            navMenu.classList.toggle("nav--active");
        });
    })

});
