const output = document.querySelector("#output");
const addBtn = document.querySelector("#addBtn");
const inputText = document.querySelector("#inputText");

(() => {
  const todo = localStorage.getItem("todo");
  if (todo) {
    output.innerHTML = todo;
  }
})();

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.innerText = "del";
  btn.classList.add("del");
  li.append(btn);
  const text = document.createTextNode(inputText.value);
  li.append(text);
  output.append(li);
  localStorage.setItem("todo", output.innerHTML);
  inputText.value = null;
});

output.addEventListener("click", (event) => {
  if (event.target.classList.contains("del")) {
    event.target.closest("li").remove();
    localStorage.setItem("todo", output.innerHTML);
  }
});
