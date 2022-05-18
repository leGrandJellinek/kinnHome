class Nav  {
    constructor({element}){
        this.el = document.querySelector(element);
        this.el.style = `width: 100%;
                         position: fixed;
                         z-index: 999;`;
    }
}

let nav = new Nav({
    element: '.header__nav',
});


