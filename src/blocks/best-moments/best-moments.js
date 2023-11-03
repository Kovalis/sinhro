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
});
