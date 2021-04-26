export default class List{
    constructor({$target}){
        this.container = document.createElement("div");
        $target.appendChild(this.container);

        const list = document.createElement("ul");
        this.container.appendChild(list);

        const item1 = document.createElement("li");
        item1.innerText = "This is my momentum todo list helloooooodddddddddddd";
        list.appendChild(item1);
        
        const item2 = document.createElement("li");
        item2.innerText = "a";
        list.appendChild(item2);
        
        const item3 = document.createElement("li");
        item3.innerText = "b";
        list.appendChild(item3);
        
        const item4 = document.createElement("li");
        item4.innerText = "c";
        list.appendChild(item4);
        const a = document.createElement("li");
        a.innerText = "b";
        list.appendChild(a);
        
        const b = document.createElement("li");
        b.innerText = "b";
        list.appendChild(b);
        
        const c = document.createElement("li");
        c.innerText = "b";
        list.appendChild(c);
        
        const d = document.createElement("li");
        d.innerText = "b";
        list.appendChild(d);
        const e = document.createElement("li");
        e.innerText = "b";
        list.appendChild(e);
        
        const f = document.createElement("li");
        f.innerText = "b";
        list.appendChild(f);
        
        const g = document.createElement("li");
        g.innerText = "b";
        list.appendChild(g);
        
        const h = document.createElement("li");
        h.innerText = "b";
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
        this.container.id = props.id;
    }
}