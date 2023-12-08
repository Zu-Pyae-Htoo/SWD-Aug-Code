import Typed from "typed.js";
import "./style.css";
import AOS from "aos";
import WOW from "wow.js";
import Glide from "@glidejs/glide";
import { Chart } from "chart.js/auto";
import "./node_modules/waypoints/lib/noframework.waypoints";

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

new Glide(".glide", {
  type: "carousel",
  focusAt: "center",
  startAt: 2,
  perView: 3,

  animationTimingFunc: "ease-in-out",
}).mount();

const myChart = document.querySelector("#myChart");
const chart = new Chart(myChart, {
  type: "line",
  data: {
    labels: ["mudon", "mlm", "ygn", "mdy", "tgy", "kalaw"],
    datasets: [
      { label: "2021 citizens", data: [12, 19, 3, 5, 2, 3], borderWidth: 1 },
      { label: "2022 citizens", data: [12, 10, 7, 5, 2, 1], borderWidth: 1 },
      { label: "2023 citizens", data: [18, 15, 3, 9, 13, 6], borderWidth: 1 },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const myTest = document.querySelector("#myTest");
const adObj = document.querySelector("#adObj");
const nextSection = document.querySelector("#nextSection");

const wayPoint = new Waypoint({
  element: myTest,
  handler(direction) {
    if (direction == "down") {
      adObj.classList.remove("translate-x-full");
    } else {
      adObj.classList.add("translate-x-full");
    }
  },
  offset: "50%",
});

const nextSectionWayPoint = new Waypoint({
  element: nextSection,
  offset: 20,
  handler(direction) {
    if (direction == "down") {
      adObj.classList.add("translate-x-full");
    }
  },
});
