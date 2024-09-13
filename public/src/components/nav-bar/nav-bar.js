class Header extends HTMLElement {
    static get observedAttributes() {
        return ['imgiz', 'text', 'text2', 'imgcentro', 'imgder', 'text3', 'text4', 'imglup', 'imgdisney'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        //importante para que cambie las propiedades del componenete
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

    render() {
        this.shadowRoot.innerHTML = ` 
        <link rel="stylesheet" href="./src/components/nav-bar/nav-bar.css">
       <nav> 
       <div class="header-partone">
                   <div class="card-sing-log">
                <img class="imgin"src="${this.imgiz}" alt="">
                <p>${this.text} | ${this.text2}</p>
            </div>
            
                <img class="img-header-marvel"src="${this.imgcentro}" alt="" >
            
            <div class="card-suscribe">
                <img class="imgu" src="${this.imgder}" alt="">
                <div class="text-suscribe">
                <p class="text3">${this.text3}</p>
                <p>${this.text4}</p>
                </div>
                <div class="div-img-lupa">
                <img class="img-lupa" src="${this.imglup}" alt=""></div>
            </div>
        </div>
        
        <div class="header-parttwo">
            <a href="">NEWS</a>
            <a href="">COMICS</a>
            <a href="">CHARACTERS</a>
            <a href="">MOVIES</a>
            <a href="">TV SHOWS</a>
            <a href="">GAMES</a>
            <a href="">VIDEOS</a>
            <a href="">MORE</a>
        </div>
        <div class="header-partthree">
            <div class="info-disneyplus">
                <p> STREAM X-MEN ´97 EXCLUSIVE ON</p>
                <img class="disney-logo" src="${this.imgdisney}" alt="">
            </div>
        </div>
        </nav>
            
        `;
        //Aqui se define la estructura del html y no se vuelve a poner en el indexabuelo.js
    }
}

customElements.define('nav-bar', Header);
export default Header;
