import initialRender from "./core/initial-render";
import { listeners } from "./core/listeners";
import observers from "./core/observers";

class Shop{
    init(){
        console.log('shopping app started');
        initialRender();
        observers();
        listeners();
    }

}

export default Shop;