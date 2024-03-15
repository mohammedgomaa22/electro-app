import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import styles bundle
import 'swiper/css/bundle';


var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


// ********** Sidebar Toggler **********
const sidebar = document.querySelector("aside");

const sidebarToggler = () => {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("toggler-aside")) {
            sidebar.classList.toggle("open-aside");
        };
    });
};
sidebarToggler();
// ***************************************************


// ********** subMenuToggler **********
const elements = document.querySelectorAll(".subMenu");

const subMenuToggler = () => {
    elements.forEach((ele) => {
        ele.addEventListener("click", () => {
            ele.classList.toggle("open-menu");
        })
    })
    
};
subMenuToggler();
// ***************************************************
