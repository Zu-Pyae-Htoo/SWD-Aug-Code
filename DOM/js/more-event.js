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

        // boxA.addEventListener("click",() => {
        //     console.log("boxA");
        // })

        // boxB.addEventListener("click",() => {
        //     console.log("boxB");
        // })

        // boxC.addEventListener("click",() => {
        //     console.log("boxC");
        // })
        // btn.addEventListener("click",() => {
        //     console.log("click btn");
        // })

//No-3
   //Event Capture
    //=============
      // event bubbling ရဲ့ ပြောင်းပြန်


    //   boxA.addEventListener("click",() => {
    //     console.log("boxA");
    // },true)

    // boxB.addEventListener("click",() => {
    //     console.log("boxB");
    // },true)
    
    // boxC.addEventListener("click",() => {
        //     console.log("boxC");
        // })

    // btn.addEventListener("click",() => {
        //     console.log("click btn");
        // })

//No-4
 //event.stoppropagation()
 //=======================
        // event စဖြစ်တဲ့ element ကနေ သူ့ရဲ့ parent and child တွေဆီ လက်ဆင့်မကမ်းချင်ဘူးဆို stoppropagation ကိုသုံး
        // bubbling and capturing ကို မဖြစ်စေခင်ဘူးဆို stoppropagation

        // boxA.addEventListener("click",(event) => {
        //     event.stopPropagation();
        //     console.log("boxA");
        // })

        // boxB.addEventListener("click",(event) => {
        //     event.stopPropagation();
        //     console.log("boxB");
        // })

        // boxC.addEventListener("click",() => {
        //     console.log("boxC");
        // })
        // btn.addEventListener("click",(event) => {
        //     event.stopPropagation();
        //     console.log("click btn");
        // })

//No-5
 //Multiple Event listen
 //=====================
        const inputText = document.querySelector("#inputText");
        const listGroup = document.querySelector("#listGroup");
        const lists = document.querySelectorAll(".list-item");

         // list ထဲက element တခုချင်းစီကို forEach နဲ့ loop ပတ်ထုတ်ပြီး တကြောင်းတည်းနဲ့ addeventlisten လုပ်တယ်။ တခုချင်းစီလိုက်ပြီး addEvent လုပ်စရာမလိုတော့ဘူး

        // console.log(lists);

   
      
        // inputText.addEventListener("keyup",(event)=>{
        //     if(event.key === "Enter"){
        //        const li = document.createElement("li");
        //        li.className = "list-item hover:bg-slate-400 mb-2";
        //        li.innerText = inputText.value;
        //        listGroup.append(li);
        //        inputText.value = null;

        //     }
        // })

        // lists.forEach(el => {
        //         console.log(el);
        //     el.addEventListener("click",()=>{
        //         console.log(el.innerText);
        // })
        // })
        
        // listGroup.addEventListener("click",(event) => {
        //     // console.log("u click");
        //     console.log(event.target.innerText);
        // })