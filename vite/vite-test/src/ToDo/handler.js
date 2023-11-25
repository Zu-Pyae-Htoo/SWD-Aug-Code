import { listUI } from "./function.js";
import { inputText, listGroup } from "./selector.js";

export const addBtnHandler = (event) => {
  listGroup.append(listUI(inputText.value));
  inputText.value = null;
};

export const enterHandler = (event) => {
    if(event.key == "Enter"){
        listGroup.append(listUI(inputText.value));
        inputText.value = null;
    }
}