import Elem from "..Tic_tac_Toe/elem.js";


class JatekTer{
    #ElemLista=[]
    szamlalo =0
    constructor(){
        
         let szuloElem=$("article");
         for (let index = 0; index < 9; index++) {
            const elem = new Elem(false,  szuloElem, index)
            this.#ElemLista.push(elem);
         }
         console.log(this.#ElemLista)
         
        $(window).on("kivalaszt",(event)=>{
            
            this.XésOelhelyezese(event.detail,this.szamlalo);
            
        });
    }

    
    XésOelhelyezese(id, szamlalo){
       
        //console.log(id);
            if (szamlalo % 2 == 0) {
                this.#ElemLista[id].setSzimbol('<p>X</p>');
                this.kiiratas("X");
                //console.log(id)
            }else{
                this.#ElemLista[id].setSzimbol('<p>O</p>');
                this.kiiratas("O");
            }
            //console.log(szamlalo)
            szamlalo++;
            //console.log(szamlalo)
            this.szamlalo = szamlalo;
    }

    kiiratas(ertek){
        if (ertek === "X") {
            $('.infopanel').html("O játékos következik")
        }else{
            $('.infopanel').html("X játékos következik")
        }
    }

    
   
}

export default JatekTer;