class ComicCard extends HTMLElement {
    static get observedAttributes(){
        return ['title', 'imgcomic' , 'year'];
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
        <link rel="stylesheet" href="./src/components/comic-card/comic-card.css">
        <section class="comic-card">
                <img class="comicimg" src="${this.imgcomic}" alt="">
                <p class="comic-title">${this.title}</p>
                <p class="comic-year">${this.year}</p>
            
        </section>
        `;
    }
}

customElements.define('comic-card', ComicCard);
export default ComicCard;
