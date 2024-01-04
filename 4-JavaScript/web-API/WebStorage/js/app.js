const output = document.querySelector("#output");
const addBtn = document.querySelector("#addBtn");
const inputText = document.querySelector("#inputText");

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = inputText.value;
  output.append(li);
  localStorage.setItem(Date.now(),inputText.value)
  inputText.value = null;
});
