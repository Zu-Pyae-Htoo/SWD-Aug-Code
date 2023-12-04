import { searchInput } from "./selectors"

export const searchBtnHandler = () => {
    // inputBtn.focus();
    searchInput.classList.toggle("opacity-0");
    searchInput.classList.toggle("pointer-events-none");
    
}