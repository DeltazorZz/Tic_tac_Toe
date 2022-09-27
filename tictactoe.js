
class Elem{
    #allapot;
    #index;
    #ertek;
    constructor(allapot, szuloElem, index){
        this.#allapot=allapot;
        //this.divElem = divElem;
        //this.pElem = pElem;
        this.#index = index;
        szuloElem.append('<div class="elemek"></div>');
        //console.log(szuloElem);
        this.elem = szuloElem.children("div:last-child");
        //console.log(this.elem)

        //eseménykezelő
        this.elem.on("click", ()=>{
           // this.setErtek();
            //console.log(this.#index)
           
            this.kattintasTrigger();
        });
        
    }

    

    // setErtek(){
    //     this.#ertek= !this.#ertek
    //     this.setSzimbol()
    // }
    // setSzimbolum(){
    //     if (this.#ertek) {
    //         setSzimbol(ertek);
    //     }else{
    //         setSzimbol(ertek);
    //     }
    // }
    setSzimbol(ertek){
        this.elem.append(ertek);
        console.log(ertek)
    }

    kattintasTrigger(){
        let esemeny = new CustomEvent("kivalaszt", {
            detail:this.#index
        });
        window.dispatchEvent(esemeny);
    }
}

export default Elem;