import Container from "./components/Container.js";
import Header from "./components/Header.js";
import Spinner from "./components/Spinner.js";
import Time from "./components/TimeBox/Time.js";

export default class App{
    constructor($target){
        const year = new Container({$target});
        year.setState({
            id:"year",
            className:"year",
            children:null
        });

        const title = new Header({$target});
        title.setState({title:"New Year Countdown"});

        const countdownBox = new Container({$target});
        countdownBox.setState({
            id:"countdown",
            className:"countdown",
            children:[
                "days",
                "hours",
                "minutes",
                "seconds",
            ].map(unit => new Time({unit}))
        });

        const spinner = new Spinner({$target});
        spinner.setState({
            src:"./img/spinner.gif",
            alt:"Loading...",
            id:"loading",
            className:"loading"
        });
    }
}