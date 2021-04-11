export default class Modal{
    constructor({$target}) {
        this.container = document.createElement("section");
        this.container.className = "modal-container";
        this.container.id = "modal-container";
        this.data = null;
        this.modal = null;
        this.catImg = null;
        this.modalTitle = null;
        this.area = null;
        this.personality = null;
        this.physic = null;
        $target.appendChild(this.container);
        this.render();
    }
    setState(nextData){
        this.data = nextData;
        this.catImg.src = this.data.url;
        this.modalTitle.innerText = this.data.breeds[0].name;
        this.area.innerText = this.data.breeds[0].origin;
        this.personality.innerText = this.data.breeds[0].temperament;;
        const weight = this.data.breeds[0].weight;
        this.physic.innerText = `${weight.imperial} (imperial) / ${weight.metric} (metric)`;
        this.container.classList.add("show");
    }
    render(){
        this.modal = document.createElement("section");
        this.modal.className = "modal";
        this.modal.id = "modal";
        this.container.appendChild(this.modal);

        //
        const modalHeader = document.createElement("section");
        modalHeader.className = "modal-header";
        this.modal.appendChild(modalHeader);

        this.modalTitle = document.createElement("h2");
        this.modalTitle.className = "modal-title";

        const closeBtn = document.createElement("button");
        closeBtn.className = "close-btn";
        closeBtn.id = "close-btn";
        closeBtn.innerHTML = "x";

        modalHeader.appendChild(this.modalTitle);
        modalHeader.appendChild(closeBtn);

        //
        this.catImg = document.createElement("img");
        this.catImg.className = "modal-image";
        this.catImg.id = "modal-image";
        this.modal.appendChild(this.catImg);

        //
        const infoContainer = document.createElement("section");
        infoContainer.className = "info-container";
        this.modal.appendChild(infoContainer);

        this.area = document.createElement("article");
        this.area.className = "area";
        this.area.id = "area";
        
        this.personality = document.createElement("article");
        this.personality.className = "personality";
        this.personality.id = "personality";
        
        this.physic = document.createElement("article");
        this.physic.className = "physic";
        this.physic.id = "physic";

        infoContainer.appendChild(this.area);
        infoContainer.appendChild(this.personality);
        infoContainer.appendChild(this.physic);

        // events
        closeBtn.addEventListener("click", () => {
            this.container.classList.remove("show");
        });
        window.addEventListener("click", e => {
            if(e.target === this.container){
                this.container.classList.remove("show");
            }
        });
        window.addEventListener("keyup", e => {
            if(e.key === "Escape"){
                this.container.classList.remove("show");
            }
        });
    }
}