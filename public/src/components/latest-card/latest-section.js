class LatestSection extends HTMLElement {
    static get observedAttributes(){
        return ['img', 'category' , 'title', 'time'];
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
        const latestData = [
            {
                id: 1,
                title: 'Kitty Pryde & Emma Frost´s Complicated Relationship, Explained' ,
                img: 'https://cdn.marvel.com/content/1x/emma_kitty_card.jpg' , 
                category: 'COMICS' ,
                time: '2 Hours ago'
            },
            {
                id: 2,
                title: 'A Sneak Peek Into ´Hulk Not Smash,´ Marvel´s New Mindfulness Book' ,
                img: 'https://cdn.marvel.com/content/1x/hulknotsmash_card.jpg' , 
                category: 'CULTURE & LIFESTYLE' ,
                time: '5 Hours ago'
            },
            {
                id: 3,
                title: 'X-Men: Lockheed´s greastest Hits' ,
                img: 'https://cdn.marvel.com/content/1x/lovable_lockheed_1_cover_card.jpg' , 
                category: 'COMICS' ,
                time: '5 Hours ago'
            },
            {
                id: 4,
                title: 'A Sneak Peek Into ´Hulk Not Smash,´ Marvel´s New Mindfulness Book' ,
                img: 'https://cdn.marvel.com/content/1x/iron_man_card.jpg' , 
                category: 'COMICS' ,
                time: '7 Hours ago'
            },
            {
                id: 5,
                title: 'Scarlet Witch´s Scariest Stories' ,
                img: 'https://cdn.marvel.com/content/1x/avengers_united_46_card.jpg' , 
                category: 'COMICS' ,
                time: '1 Day ago'
            },


        ];

        this.shadowRoot.innerHTML = `
        ${latestData.map(latest => 
            `<latest-card
            
                img="${latest.img}"
                category="${latest.category}"
                title="${latest.title}"
                time="${latest.time}"
            
                
            ></latest-card>
            `
        ).join('')}
        `;
    }
}

customElements.define('latest-section', LatestSection);
export default LatestSection;
