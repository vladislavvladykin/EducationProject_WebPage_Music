import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss'

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.slider-teacher', {
    slidesPerView: 2,
    spaceBetween: 15,
    navigation: {
        nextEl: ".course-control__next",
        prevEl: ".course-control__prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      459: {
        slidesPerView: 2,
        spaceBetween: 15, 
      },
      460: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
});

var acc = document.getElementsByClassName("accordion__btn");
var i;

// Accordion
for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var panel = this.nextElementSibling;
   if (panel.style.maxHeight) {
     panel.style.maxHeight = null;
   } else {
     panel.style.maxHeight = panel.scrollHeight + "px";
   }
 });
}