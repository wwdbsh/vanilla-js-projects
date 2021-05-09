 export default class ConnectModal{
     constructor({$target}){
         this.container = document.createElement("div");
         this.container.className = "modal-container show";
         this.container.id = "connect-modal-container";
         $target.appendChild(this.container);

         const modal = document.createElement("div");
         modal.className = "modal";
         this.container.appendChild(modal);

         const input = document.createElement("input");
         input.className = "connect-input";
         input.id = "connect-input";
         input.placeholder = "Enter your name...";
         modal.appendChild(input);

         const btn = document.createElement("div");
         btn.className = "btn";
         btn.id = "connect-btn";
         btn.innerText = "connect";
         modal.appendChild(btn);
     }
 }