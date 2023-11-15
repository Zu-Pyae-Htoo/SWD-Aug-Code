/*
document.head
document.body
document.title
*/

/*
No-3
 Create Element
 =================
    const createH1 = document.createElement("h1");
    createH1.innerText ="Hello";
    createH1.classList.add("text-5xl","text-blue-600")
    console.log(createH1);

    document.body.append(createH1);

    const createPara = document.createElement("p");
    createPara.innerText = "I'm from Mudon";
    createPara.classList.add("text-lg","text-green-600")

    document.body.append(createPara)
*/

/*
N0-4
 Create new attribute
 =====================

    const link = document.createElement("a");
    link.href = "https://www.google.com";
    link.innerText = "google";
    link.target = "_blank";
    document.body.append(link);

    Web Api ထဲက html Image element ရဲ့ constructor ကိုသုံးပြီး img elementကို handleလုပ် 
    ==================
    Note** => height ကို control လုပ်မရ width ပဲရ
    
    const img = document.createElement("img");
    img.src = "./assets/images/love.gif";
    img.width = "100";
    document.body.append(img);

    const img = new Image(200);
    img.src = "./assets/images/love.gif";
    document.body.append(img)
*/

/*
No-5
 ul>li create
 ============
   
    const ul = document.createElement("ul");

    const li1 = document.createElement("li");
    li1.innerText = "apple"

    const li2 = document.createElement("li");
    li2.innerText = "Orange";

    ul.append(li1)
    ul.append(li2)

    document.body.append(ul)

    const ul = document.createElement("ul");
    const createLi = (text) => {
        const li = document.createElement("li");
        li.innerText = text;
        return li;
    }
    ul.append(createLi("apple"));
    ul.append(createLi("orange"));
    ul.append(createLi("mango"));
    document.body.append(ul)

*/

/*
No-6
 TextNode 
 ========
  node => html ele & text & comments

    const text = document.createTextNode("OK NA SA");
    document.body.append(text);

 Fragment() Node
 ===============
    အခြား nodeတွေ elementတွေကို fragment()ထဲ appendလုပ်လို့ရ။ frag က အခြား node/element တွေကို holdလုပ်ပေးတယ်။

    const frg = document.createDocumentFragment();
    frg.append(createH1);
    frg.append(createPara)
    frg.append(ul);
    frg.append(link);
    document.body.append(frg)

*/

/*
No-7
 Befor(), After()
 ================
    document.body.append(ul);
    ul.before(createH1);
    ul.before(createPara);
    ul.after(createH1)
*/


