


function DomElement(selector, height, width, fontSize, bg) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.fontSize = fontSize;
    this.bg = bg;


    this.addDom = function () {
        if (selector[0] == '.') {
            let div = document.createElement('div');
            div.className = selector;
            div.textContent = "Booooooy";
            console.log(div);
            document.body.append(div);

            div.style.cssText = `
            height: ${this.height}px;
            width: ${this.width};
            background-color:${this.bg}px;
            font-size:${this.fontSize}px;
            `;

        } else if (selector[0] == '#') {

            let p = document.createElement('p');
            p.id = selector;
            p.textContent = "Booooooy";
            console.log(p);
            document.body.append(p);

            p.style.cssText = `
            height: ${this.height}px;
            width: ${this.width};
            background-color:${this.bg}px;
            font-size:${this.fontSize}px;
            `;

        } else console.log('это хз')

    };
};


let boris = new DomElement('.cooool', 200, 400, 27, 'grey');


boris.addDom()


