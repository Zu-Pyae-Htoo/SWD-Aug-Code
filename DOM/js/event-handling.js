
/*
No-9
    const btn = document.querySelector("#btn");
    console.dir(btn);

    const btnHandler = () => {
        console.log("I'm run");
    }

 Eventhandler Property
 ======================
    btn.onclick = run(); <= invoke လုပ်ပြီးသားဖြစ်မှာမို့မသုံး
    btn.onclick = run;

 Eventhandler Method
 ====================
    btn.addEventListener('click',btnHandler)

*/

// const heading = document.querySelector("#heading");
// heading.addEventListener("click",() => {
//     console.log("u click");
// })

// heading.addEventListener("mouseenter",() => {
//     console.log("mouse enter");
    
// })

// heading.addEventListener("mouseout",() => {
//     console.log("mouse out");
// })

// heading.addEventListener("mousemove",() => {
//     console.log("mouse move");
// })

const input = document.querySelector("#input");
// input.addEventListener("focus",() => {
//     console.log("focus");
// })

// input.addEventListener("blur",() => {
//     console.log("blur");
// })

// input.addEventListener("change",() => {
//     console.log("change");
// })

input.addEventListener("keyup",() => {
    console.log("key up");
})

// input.addEventListener("keydown",() => {
//     console.log("key down ");
// })
