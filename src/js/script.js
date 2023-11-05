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

});
