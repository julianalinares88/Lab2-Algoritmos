class BannerBar extends HTMLElement {
    static get observedAttributes(){
        return ['text1', 'text2', 'text3', 'text4', 'text5', 'iconface', 'iconx', 'iconinsta', 'icontwich', 'icontik'];
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
        <link rel="stylesheet" href="./src/components/banner-bar/banner-bar.css">
        <section class="banner-bar">
            <div class="elements">
                <div class="banner-bar-texts">
                    <p>${this.text1}</p>
                    <p>${this.text2}</p>
                    <p>${this.text3}</p>
                    <p>${this.text4}</p>
                    <p>${this.text5}</p>
                </div>
                <div class="banner-bar-img">
                    <img class="imgin"src="${this.iconface}" alt="">
                    <img class="imgin"src="${this.iconx}" alt="">
                    <img class="imgin"src="${this.iconinsta}" alt="">
                    <img class="imgin"src="${this.icontwich}" alt="">
                    <img class="imgin"src="${this.icontik}" alt="">

                </div>
            </div>
            
        </section>
        `;
    }
}

customElements.define('banner-bar', BannerBar);
export default BannerBar;
