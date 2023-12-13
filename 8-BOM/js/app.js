window.addEventListener("resize", () => {
  console.clear();
  console.log("inner Width", innerWidth);
  console.log("inner height", innerHeight);
  console.log("outer width", outerWidth);
  console.log("outer height", outerHeight);
});

addEventListener("scroll", () => {
  console.clear();
  // console.log(scrollY);
  // console.log(document.querySelector("p").getBoundingClientRect().height);
  // console.log(window.getComputedStyle(document.querySelector("p")).height);

  // const el = document.querySelector("p");
  // const computedStyle = getComputedStyle(el);
  // const elHeight = parseInt(computedStyle.height);
  // if(scrollY>elHeight*0.7){
  //     console.log("Thanks for reading!");
  // }

  //    const elHeight = window.getComputedStyle(document.querySelector("p")).height;
  //    if(scrollY > parseInt(elHeight)*0.7){
  //     console.log("thanks");
  //    }
});

addEventListener("offline", () => {
  console.log("You're offline");
});

addEventListener("online", () => {
  console.log("You're online");
});

// const run = () => {
//   //   console.log("Start running");
//   console.clear();
//   console.log(new Date());
// };
// =========================
// setTimeout(run,5000)
// const timer = setTimeout(run,5000)
// document.querySelector("#btn").addEventListener("click",() => {
//     clearTimeout(timer);
//     console.log("clear time out");
// })

// ========================
// setInterval(run, 1000);

// =====================
// clock

const clock = document.querySelector("#clock");
// clock.innerText = new Date()

const run2 = () => {
  const date = new Date();
  clock.innerText = date.toLocaleTimeString();
};

// setInterval(run2,1000)
