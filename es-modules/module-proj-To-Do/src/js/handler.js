import { listUI } from "./function.js"
import { inputText, listGroup } from "./selector.js"

export const addBtnHandler = () => {
    listGroup.append(listUI(inputText.value));
    inputText.value = null;
}