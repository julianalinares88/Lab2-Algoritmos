import * as components from './components/indexPadre.js';
//Crear una clase nueva etiqueta de html 
class ContainerWeb extends HTMLElement {
//Aquí es donde inicializas propiedades y configuraciones para el objeto.
    constructor() {
//Asegura que la clase que hereda (poder usarlos) de HTMLElement se inicie bien antes de ejecutar - programacion orientada a objetos
        super(); //Usar elementos y metodos del html
        this.attachShadow({ mode: 'open' }); //Encapsular y agregar al DOM (estructura html que se ve en la pagina)
    }

    //Ejecutar lo que se le indique
    connectedCallback() {
//Define como se va a ver (renderizar) el componente
        this.render();
    }
//Define o renderiza el contenido que se mostrara en el html    
    render() {  
//Establece el contenido del componente dentro del shadow dom para que no este directamente en el DOM pero si se muestre
        this.shadowRoot.innerHTML = ` 
        <nav-bar
            imgiz="https://firebasestorage.googleapis.com/v0/b/juli-3cbcd.appspot.com/o/Screenshot%202024-09-05%20113104.png?alt=media&token=9687bf8e-f0bc-4be0-90bb-dae4d11c548a"
            text="LOGIN"
            text2="JOIN"
            imgcentro="https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg"
            imgder="https://cdn.marvel.com/u/prod/marvel/images/mu/web/2021/icon-mu-shield.png"
            text3="MARVEL UNLIMITED"   
            text4="SUBSCRIBE"
            imglup="https://firebasestorage.googleapis.com/v0/b/juli-3cbcd.appspot.com/o/Screenshot%202024-09-05%20221650.png?alt=media&token=56bc3d68-d153-4d7f-948a-d95aa254abd7"
            imgdisney="https://cnbl-cdn.bamgrid.com/assets/478bf74ef5ffc184e7c96808eef869a4ca967cbcc5a8db8f7e3c4005d93bbfd5/original">
        
        ></nav-bar> 
        <banner-one
            title="CELEBRATING 85 YEARS OF MARVEL"
            text="Celebrate 85 years of Marvel, thanks to you, True Believers."
            buttonone="WATCH NOW"
            buttontwo="MARVEL COMICS THROUGH THE DECADES"
        ></banner-one>  
        <banner-bar
             text1="Celebrating 85 Years of Marvel"
             text2="Marvel At D23 2024"
             text3="The Official Marvel Podcast"
             text4="This Week´s New Comics"
             text5="2024 Marvel unlimited Plus Member Kit"
             iconface="https://firebasestorage.googleapis.com/v0/b/juli-3cbcd.appspot.com/o/Screenshot%202024-09-06%20024938.png?alt=media&token=c350af33-0c80-4ec0-8c28-9546b53fdf6b"
             iconx="https://firebasestorage.googleapis.com/v0/b/juli-3cbcd.appspot.com/o/Screenshot%202024-09-06%20024943.png?alt=media&token=39d2d880-ad0f-4020-a2cc-ca25d7b51b97"
             iconinsta="https://firebasestorage.googleapis.com/v0/b/juli-3cbcd.appspot.com/o/Screenshot%202024-09-06%20024949.png?alt=media&token=63db64ae-93fb-4001-adb9-545c3d999ae7"
             icontwich="https://firebasestorage.googleapis.com/v0/b/juli-3cbcd.appspot.com/o/Screenshot%202024-09-06%20024954.png?alt=media&token=c175450a-fe1d-47ca-a028-9ada49111f37"
             icontik="https://firebasestorage.googleapis.com/v0/b/juli-3cbcd.appspot.com/o/Screenshot%202024-09-06%20024959.png?alt=media&token=4420ee44-20e7-416d-9f49-8db204846eed"
         ></banner-bar>
         <banner-two 
            iconunlimited="https://cdn.marvel.com/content/1x/mulogo_lob_log_eye_01_1.png"
            text1="AVAILABLE NOW"
            title="NEW ON MARVEL UNLIMITED"
            text2="Read these plus 30,000+ digital comics for $9.99 a month!"
            buttonline="GET MARVEL UNLIMITED"
            imgfondo="https://cdn.marvel.com/content/1x/20240124-newtomu_base_set_dsk.jpg"
         ></banner-two>

         <comic-section style="
            display: flex; 
            gap: 1.5vw;
            justify-content: space-between;
            margin-left: 8vw;
            margin-right: 8vw;
            margin-top: 5vh;

            "
        ></comic-section>
        <latest-section
        ></latest-section>
         
         
         
    `;
    }

}
//Exporta el componente "container-web" para que pueda ser usado como etiqueta html
customElements.define('container-web', ContainerWeb);