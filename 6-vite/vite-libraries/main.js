import Typed from "typed.js";
import "./style.css";
import AOS from "aos";
import WOW from "wow.js";
import Glide from '@glidejs/glide'

const typeUi = document.querySelector("#typeUi");
const options = {
  strings: [
    "Companies <span class='text-primary-700'>.</span>",
    "House <span class='text-primary-700'>.</span>",
    "Organizations <span class='text-primary-700'>.</span>",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
  contentType: "html",
};
const type = new Typed(typeUi, options);

AOS.init();

const wow = new WOW({
  boxClass: "wow",
  animateClass: "animate__animated",
  mobile: true,
});

wow.init();



new Glide('.glide', {
  type: 'carousel',
  focusAt : 'center' ,
  startAt: 2,
  perView: 3,
  gap : 20,
}).mount()
