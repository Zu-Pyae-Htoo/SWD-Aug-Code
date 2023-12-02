import initialRender from "./core/initial-render";
import { listeners } from "./core/listeners";

class Shop{
    init(){
        console.log('shopping app started');
        initialRender();
        listeners();
    }

}

export default Shop;