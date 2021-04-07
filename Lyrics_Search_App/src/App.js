import Header from "./components/Header.js";
import Result from "./components/Result.js";
import More from "./components/More.js";
import { setDomInstances } from "./script.js";

export default class App{
    constructor($target){
        const header = new Header({$target});
        const result = new Result({$target});
        const more = new More({$target});
        setDomInstances();
    }
}