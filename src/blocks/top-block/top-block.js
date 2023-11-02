import Swiper from "swiper";
import { Pagination} from 'swiper/modules';

import ready from "../../js/utils/documentReady.js";

ready(() => {
    const topBlock = document.querySelector(".top-block");

    if(topBlock){
        let swiper = new Swiper(`.top-block .swiper`, {
            modules: [Pagination],
            slidesPerView: 1,
            pagination: {
                el: `.top-block__pagination`,
                clickable: true,
              },
        });
    }
});
