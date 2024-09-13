class ComicSection extends HTMLElement {
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
        const comicData = [
            {
                id: 1,
                title: 'Avengers: Twilight (2024) #6' ,
                imgcomic: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/80/664ca7c08ed71/portrait_uncanny.jpg' , 
                year: '2024' ,
            },
            {
                id: 2,
                title: 'Ultimate Spider-Man (2024) #5' ,
                imgcomic: 'https://cdn.marvel.com/u/prod/marvel/i/mg/f/70/664b9dad6c3ea/portrait_uncanny.jpg' , 
                year: '2024' ,
            },
            {
                id: 3,
                title: 'Midnight Sons: Blood Hunt (2024) #1' ,
                imgcomic: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/80/664b9dee18d01/portrait_uncanny.jpg' , 
                year: '2024' ,
            },
            {
                id: 4,
                title: 'Black Panther: Blood Hunt (2024) #1' ,
                imgcomic: 'https://cdn.marvel.com/u/prod/marvel/i/mg/c/d0/664b9def1c84b/portrait_uncanny.jpg' , 
                year: '2024' ,
            },
            {
                id: 5,
                title: 'Spider-Boy (2023) #7' ,
                imgcomic: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/30/664b9dcc4a503/portrait_uncanny.jpg' , 
                year: '2024' ,
            },
            {
                id: 6,
                title: 'Spider-Punk: Arms Reaced (2024) #4' ,
                imgcomic: 'https://cdn.marvel.com/u/prod/marvel/i/mg/9/40/664b9dcb42c24/portrait_uncanny.jpg' ,
                year: '2024' ,
            }

        ];

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/comic-card/comic-section.css">
        ${comicData.map(comic => 
            `<comic-card
            imgcomic="${comic.imgcomic}"
            title="${comic.title}"
            year="${comic.year}"
            ></comic-card>`
        ).join('')}
        `;
    }
}

customElements.define('comic-section', ComicSection);
export default ComicSection;
