// Day-52
//  No-1
//   removeEventListener
//   ===================
        // const heading = document.querySelector("#heading");
        // const clearEvent = document.querySelector("#clear-event");

        // const show = () => {
        //     console.log("click");
        // }

        // heading.addEventListener("click",show);
        // clearEvent.addEventListener("click",() => {
        //     heading.removeEventListener("click",show)
        // })

 // No-2
    // EventBubbling
    // ==============
    //concept
    //event စဖြစ်တဲ့ ကောင်နဲ့ သူရဲ့ parent ဖြစ်နေတဲ့ element တွေကိုပါ event က သက်ရောက်မှုရှိတယ်

        const boxA = document.querySelector("#boxA");
        const boxB = document.querySelector("#boxB");
        const boxC= document.querySelector("#boxC");
        const btn = document.querySelector("#btn");

        boxA.addEventListener("click",() => {
            console.log("boxA");
        })

        boxB.addEventListener("click",() => {
            console.log("boxB");
        })

        boxC.addEventListener("click",() => {
            console.log("boxC");
        })
        btn.addEventListener("click",() => {
            console.log("click btn");
        })