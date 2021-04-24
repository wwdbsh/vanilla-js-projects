export default class List{
    constructor({$target}){
        this.container = document.createElement("div");
        $target.appendChild(this.container);

        const list = document.createElement("ul");
        this.container.appendChild(list);

        const item1 = document.createElement("li");
        list.appendChild(item1);
        
        const item2 = document.createElement("li");
        list.appendChild(item2);
        
        const item3 = document.createElement("li");
        list.appendChild(item3);
        
        const item4 = document.createElement("li");
        list.appendChild(item4);
        const a = document.createElement("li");
        list.appendChild(a);
        
        const b = document.createElement("li");
        list.appendChild(b);
        
        const c = document.createElement("li");
        list.appendChild(c);
        
        const d = document.createElement("li");
        list.appendChild(d);
        const e = document.createElement("li");
        list.appendChild(e);
        
        const f = document.createElement("li");
        list.appendChild(f);
        
        const g = document.createElement("li");
        list.appendChild(g);
        
        const h = document.createElement("li");
        list.appendChild(h);
        const i = document.createElement("li");
        list.appendChild(i);
        
        const j = document.createElement("li");
        list.appendChild(j);
        
        const k = document.createElement("li");
        list.appendChild(k);
        
        const l = document.createElement("li");
        list.appendChild(l);
        const sd = document.createElement("li");
        list.appendChild(sd);
        const vv = document.createElement("li");
        list.appendChild(vv);
        const ee = document.createElement("li");
        list.appendChild(ee);
    }
    setState(props){
        this.container.className = props.className;
        this.container.id = props.className;
    }
}