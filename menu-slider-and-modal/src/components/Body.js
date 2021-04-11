export default class Body{
    constructor({$target}){
        this.container = document.createElement("article");
        this.container.className = "container";
        $target.appendChild(this.container);
        this.render();
    }
    render(){
        const h2_1 = document.createElement("h2");
        h2_1.innerText = "What is this landing page about?";
        this.container.appendChild(h2_1);

        const p1_1 = document.createElement("p");
        p1_1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iureaccusamus ab consectetur eos provident ipsa est perferendis architecto.Provident, quaerat asperiores. Quo esse minus repellat sapiente, impedit obcaecati necessitatibus.";
        this.container.appendChild(p1_1);
        
        const p1_2 = document.createElement("p");
        p1_2.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio officia ipsa. Cum dignissimos possimus et non provident facilis saepe!";
        this.container.appendChild(p1_2);
        //

        const h2_2 = document.createElement("h2");
        h2_2.innerText = "Tell Me More";
        this.container.appendChild(h2_2);

        const p2_1 = document.createElement("p");
        p2_1.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eaque delectus explicabo qui reprehenderit? Aspernatur ad similique minima accusamus maiores accusantium libero autem iusto reiciendis ullam impedit esse quibusdam, deleniti laudantium rerum beatae, deserunt nemo neque, obcaecati exercitationem sit. Earum.";
        this.container.appendChild(p2_1);
        //

        const h3_2 = document.createElement("h2");
        h3_2.innerText = "Benefits";
        this.container.appendChild(h3_2);

        const ul = document.createElement("ul");
        const li1 = document.createElement("li");
        li1.innerText = "Lifetime Access";
        ul.appendChild(li1);
        const li2 = document.createElement("li");
        li2.innerText = "30 Day Money Back";
        ul.appendChild(li2);
        const li3 = document.createElement("li");
        li3.innerText = "Tailored Customer Support";
        ul.appendChild(li3);
        this.container.appendChild(ul);
        //

        const p3_1 = document.createElement("p");
        p3_1.innerText = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quam nostrum, fugiat, itaque natus officia laborum dolorum id accusantium culpa architecto tenetur fuga? Consequatur provident rerum eius ratione dolor officiis doloremque minima optio dignissimos doloribus odio debitis vero cumque itaque excepturi a neque, expedita nulla earum accusamus repellat adipisci veritatis quam. Ipsum fugiat iusto pariatur consectetur quas libero dolor dolores dolorem, nostrum ducimus doloremque placeat accusamus iste, culpa quaerat consequatur?";
        this.container.appendChild(p3_1);
        //

    }
}