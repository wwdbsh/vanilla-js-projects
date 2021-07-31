export default class Section{
    constructor({$target}){
        this.container = document.createElement("div");
        $target.appendChild(this.container);

        this.sectionTitle = document.createElement("div");
        this.sectionItems = document.createElement("div");
        
        this.container.appendChild(this.sectionTitle);
        this.container.appendChild(this.sectionItems);
    }
    setState(props){
        this.container.id = props.sectionId;
        this.container.className = props.sectionClassName;

        this.sectionTitle.innerHTML = props.sectionTitleInnerHTML;
        
        for(let i in props.items){
            this.sectionItems.appendChild(props.items[i].container);
        }
    }
}