import VideoSection from "./components/VideoSection.js";

export default class App{
    constructor($target){
        const videoSection = new VideoSection({$target});
    }
}