//Creo un objeto js que toma las propiedades de un elemento html
class LatestCard extends HTMLElement {
//Metodo estatico que hace que hace que pertenezca a el objeto creado
    static get observedAttributes(){
//Atributos que quiero tener u observar y que el return me los de
        return ['img', 'category' , 'title', 'time'];
    }
//Aquí es donde inicializas propiedades y configuraciones para el objeto.
    constructor(){
//Asegura que la clase que hereda (poder usarlos) de HTMLElement se inicie bien antes de ejecutar - programacion orientada a objetos
        super();
//Encapsular y agregar al DOM (estructura html que se ve en la pagina)
        this.attachShadow({mode: 'open'}); 

    }
//Ciclo de los componenetes personalizados 
    connectedCallback(){
//Define como se va a ver el componente
        this.render();
    }
//Cuando los las propiedades de los atributos cambian
    attributeChangedCallback(propName, oldValue, newValue){
//Verifica si realmente cambio el valor
        if(oldValue !== newValue){
//Actualiza la propiedad con el nuevo valor
            this[propName] = newValue;
//Renderiza cuando el componente cambia
            this.render();
        }
    }
//Define o renderiza el contenido que se mostrara en el html
    render(){
//Establece el contenido del componente dentro del shadow dom para que no este directamente en el DOM pero si se muestre
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/latest-card/latest-card.css">
        
        <section class="latesd-card">
        
                <img class="latesdimg" src="${this.img}" alt="">
                <div class="texts"> 
                    <p class="latesd-title">${this.category}</p>
                    <h2 class="latesd-year">${this.title}</h2>
                    <p class="latesd-time">${this.time}</p>
                </div>
            
        </section>
        `;
    }
}

//Exporta el componente "latest-card" para que pueda ser usado como etiqueta html
customElements.define('latest-card', LatestCard);
//Exporta la clase LatestCard para usarla en otros archivos
export default LatestCard;
