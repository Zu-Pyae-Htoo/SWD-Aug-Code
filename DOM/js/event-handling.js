
/*
Day-51 Nov17/2023
No-1
    const btn = document.querySelector("#btn");
    console.dir(btn);

    const btnHandler = () => {
        console.log("I'm run");
    }

 Eventhandler Property
 ======================
    btn.onclick = run(); <= invoke လုပ်ပြီးသားဖြစ်မှာမို့မသုံး method မထည့်
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

    // const input = document.querySelector("#input");
    // input.addEventListener("focus",() => {
    //     console.log("focus");
    // })

    // input.addEventListener("blur",() => {
    //     console.log("blur");
    // })

    // input.addEventListener("change",() => {
    //     console.log("change");
    // })

    // input.addEventListener("keyup",() => {
    //     console.log("key up");
    // })

    // input.addEventListener("keydown",() => {
    //     console.log("key down ");
    // })

// No.2
  //Select and files ==> change
  //==================

    const nation = document.querySelector('#nation');

    // nation.addEventListener("change",() => {
    //     console.log(nation.value);
    // })

    // input.addEventListener("change",() => {
    //     console.log(input.files[0]);
    // })

// No.11
  //form submit
  // ===========

    const textInput = document.querySelector("#text-input");
    const colorInput = document.querySelector("#color-input");
    const fontSize = document.querySelector("#font-size-range");
    const fontFamily = document.querySelector("#font-family");
    const output = document.querySelector(".output");
    const fontWeight = document.querySelector("#font-weight");

    // textInput.addEventListener("keyup",() => {
    //     output.innerText = textInput.value;
    //     console.log("hello");
    // })

    // colorInput.addEventListener("change",() => {
    //     output.style.color = colorInput.value;
    // })

    // fontSize.addEventListener('change',() => {
    //     output.style.fontSize = fontSize.value + 'px';
    // })

    // fontFamily.addEventListener("change",() => {
    //     output.style.fontFamily = fontFamily.value
    // })

    // fontWeight.addEventListener("change",() => {
    //     output.style.fontWeight = fontWeight.value;
    // })

    // const controller = document.querySelector("#controller");
    // controller.addEventListener("submit",(event) => {
    //     event.preventDefault();
    //     console.log("submit"); 
    //     console.log(textInput.value);
    //     console.log(colorInput.value);
    //     console.log(fontSize.value);
    //     console.log(fontFamily.value);
    //     console.log(fontWeight.value);
    // })

// No-3
  //Form submit prevent default
  // ==========================

        // const link = document.querySelector("#link").addEventListener("click",(event) => {
        //     event.preventDefault();
        // })

// No-4
  //Window scroll
  // ===============

        // window.addEventListener("scroll",() => {
        //     console.log('scroll');
        // }) 

        // window.addEventListener("scroll",(event) => {
        //     console.log(event);
        //     console.log(window.scrollY);
        // })

//No-4
    //window load
    //=============
    // window မှာ အကုန် loading ဆွဲပြီးမှ load event ကကောင်ကို ပြတယ်
        
    // window.addEventListener("load",() => {
    //         console.log(1);
    //     })
    //     console.log(2);
    //     console.log(3);

//No-5
//  event
// =======
        // document.addEventListener("mousemove",(event) => {
        //     console.clear();
        //     console.log(event);
        // })

        // document.addEventListener("click",(event) => {
        //     // console.log(event);
        //     console.log(event.target);
        // })

        textInput.addEventListener("keyup",(event) => {
            console.log(event);
            console.log(event.target.value);
            // console.log(event.key);
        });

        colorInput.addEventListener("change",(event) => {
            console.log(event.target.value);
            
        })