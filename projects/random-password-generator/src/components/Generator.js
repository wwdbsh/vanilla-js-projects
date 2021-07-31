import DisplayPanel from "./DisplayPanel.js";
import GenerateButton from "./GenerateButton.js";
import LenghController from "./LengthController.js";
import Section from "./Section.js";
import SettingController from "./SettingController.js";

export default class Generator{
    constructor({$target}){
        this.container = document.createElement("div");
        $target.appendChild(this.container);

        const title = document.createElement("h2");
        title.id = "title";
        title.innerText = "Password Generator";
        this.container.appendChild(title);

        const innerBox = document.createElement("div");
        innerBox.className = "inner-box";
        this.container.appendChild(innerBox);

        const displayPanel = new DisplayPanel({$target:innerBox});

        const lengthSection = new Section({$target:innerBox});
        lengthSection.setState({
            sectionId:"length-section",
            sectionClassName:"length-section",
            sectionTitleInnerHTML:`
                <span class="section-title">LENGTH: </span>
                <span id="length-value"></span>
            `,
            items:[new LenghController()]
        });


        const settingControllers = [
            new SettingController(),
            new SettingController(),
            new SettingController(),
            new SettingController(),
        ];
        const settingSection = new Section({$target:innerBox});
        settingSection.setState({
            sectionId:"setting-section",
            sectionClassName:"setting-section",
            sectionTitleInnerHTML:`
                <span class="section-title">SETTINGS</span>
            `,
            items:settingControllers,
        });

        const genBtn = new GenerateButton({$target:this.container});
    }
    setState(props){
        this.container.id = props.id;
        this.container.className = props.className;
    }
}