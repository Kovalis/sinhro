import Swiper from "swiper";
import ready from "../../js/utils/documentReady.js";

ready(() => {
    const bestMoments = document.querySelector(".best-moments");

    if(bestMoments){
        let swiper = new Swiper(`.best-moments .swiper`, {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 14,
            breakpoints: {
                768: {
                    spaceBetween: 20,
                }
              }
        });
    }

    const videoSlide = document.querySelectorAll(".js-play-video");

    if(videoSlide){
        videoSlide.forEach((item)=>{
            item.addEventListener("mouseover", ()=>{
                const videoItem = item.closest(".best-moments__slide").querySelector("iframe");
                item.classList.add("best-moments__wrap-img--hide");
                videoItem.src += "&autoplay=1";
            })
        })
    }
});
