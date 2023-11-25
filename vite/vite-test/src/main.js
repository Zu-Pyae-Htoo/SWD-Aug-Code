import "./index.css";
import { addBtnHandler,enterHandler } from "./ToDo/handler.js";
import { addBtn, inputText } from "./ToDo/selector.js";

addBtn.addEventListener("click",addBtnHandler);
inputText.addEventListener("keyup",enterHandler)