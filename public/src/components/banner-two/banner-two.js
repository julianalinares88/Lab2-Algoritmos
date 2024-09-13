class BannerTwo extends HTMLElement {
    static get observedAttributes(){
        return ['iconunlimited', 'text1', 'title', 'text2', 'buttonline', 'imgfondo'];
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
        <link rel="stylesheet" href="./src/components/banner-two/banner-two.css">
        <section class="banner-two">
            <div class="part1">
                <img class="icon" src="${this.iconunlimited}" alt="">
                <p>${this.text1}</p>
                <h1>${this.title}</h1>
                <p>${this.text2}</p>
                <a class="container-but">
                    <span class="button">${this.buttonline}</span>
                </a>
            </div>
            <div class="imgbanner">
                <div class="polygon"></div>
                <img class="imgfondo" src="${this.imgfondo}" alt="">
            </div>
            

            
            
        </section>
        `;
    }
}

customElements.define('banner-two', BannerTwo);
export default BannerTwo;
