import Swiper from "swiper";
import ready from "../../js/utils/documentReady.js";

ready(() => {
    const bestPlayers = document.querySelector(".best-players");

    if(bestPlayers){
        let swiper = new Swiper(`.best-players .swiper`, {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 20,
        });
    }
});
