import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import Section from "./components/Section/Section.js";

export default class App{
    constructor($target){
        const header = new Header({$target});
        header.setState({headerId:"home"});

        const aboutSection = new Section({$target});
        aboutSection.setState({
            sectionId:"about",
            h2Txt:"about ",
            spanTxt:"us",
        });

        const servicesSection = new Section({$target});
        servicesSection.setState({
            sectionId:"services",
            h2Txt:"our ",
            spanTxt:"services",
        });
        
        const toursSection = new Section({$target});
        toursSection.setState({
            sectionId:"tours",
            h2Txt:"featured ",
            spanTxt:"tours",
        });

        const footer = new Footer({$target});
    }
};