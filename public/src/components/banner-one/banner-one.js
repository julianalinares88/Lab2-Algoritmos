class BannerOne extends HTMLElement {
    static get observedAttributes(){
        return ['title', 'text', 'buttonone', 'buttontwo'];
    }
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName, oldValue, newValue){
        if(oldValue !== newValue){
            this[propName] = newValue;
            this.render();
        }
    }
    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/banner-one/banner-one.css">
        <section class="banner-one">
            <div class="text-and-buttons">
                <div class="text-banner">
                    <h1 class="title-banner">${this.title}</h1>
                    <p>${this.text}</p>
                </div>
                <div class="buttons">
                    <a class="container-but">
                        <span class="button">${this.buttonone}</span>
                    </a>
                    <a class="container-but">
                        <span class="button">${this.buttontwo}</span>
                    </a>
                </div>
            </div>
            
             <img class="imgfondo" src="https://cdn.marvel.com/content/1x/85years_com_mas_dsk_01.jpg" alt="">
            
        </section>
        `;
    }
}

customElements.define('banner-one', BannerOne);
export default BannerOne;
