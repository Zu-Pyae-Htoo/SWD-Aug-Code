const output = document.querySelector("#output");
const addBtn = document.querySelector("#addBtn");
const inputText = document.querySelector("#inputText");

const task = [];

const listUi = (text) => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.innerText = "del";
  btn.classList.add("del");
  li.append(btn);
  const textNode = document.createTextNode(text);
  li.append(textNode);
  return li;
};

(() => {
  const todo = localStorage.getItem("todo");
  if (todo) {
    JSON.parse(todo).forEach((el) => {
      output.append(listUi(el));
      task.push(el);
    });
  }
})();

addBtn.addEventListener("click", () => {
  task.push(inputText.value);
  localStorage.setItem("todo", JSON.stringify(task));
  output.append(listUi(inputText.value));
  inputText.value = null;
});

output.addEventListener("click", (event) => {
  if (event.target.classList.contains("del")) {
    event.target.closest("li").remove();
    localStorage.setItem("todo", output.innerHTML);
  }
});

// const fruits = {
//   a: "apple",
//   b: "orange",
//   c: "mango",
// };

// console.log(fruits);

// const fruitJson = JSON.stringify(fruits);
// console.log(fruitJson);
// const storedFruit = localStorage.setItem("my_fruit", fruitJson);
// const getJson = localStorage.getItem("my_fruit");
// console.log(JSON.parse(getJson));

// const fruitObj = JSON.parse(json);
// console.log(fruitObj);
