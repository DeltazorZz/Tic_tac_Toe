class Elem {
  #jatekos1;
  #jatekos2;
  #index;
  //#kor = false;
  constructor(index, jatekos1, jatekos2, szuloElem) {
    this.#jatekos1 = jatekos1;
    this.#jatekos2 = jatekos2;
    this.#index = index;
    szuloElem.append(`<div class="palya"></div>`);

    this.CharElem = szuloElem.children("div:last-child");

    console.log(this.CharElem);
    //this.Kijon(this.CharElem);
    this.SetErtek(this.CharElem);

    this.CharElem.on("click", () => {
      KattintasTrigger();
      Kijon();
    });
  }

  /*Kijon(elem) {
    if (this.#kor == false) {
      elem.append(this.#jatekos1);
      this.#kor = true;
    } else if (this.#kor == true) {
      elem.append(this.#jatekos2);
      this.#kor == false;
    }
  }*/

   setErtek(elem){
        if (this.szamlalo%2 == 0) {
            elem.append(this.#jatekos1);
        } else{
            elem.append(this.#jatekos2);
        }

    };

  KattintasTrigger() {
    let esemeny = new CustomEvent("divrekatt", { detail: this.#index });
    window.dispatchEvent(esemeny);
  }
}

export default Elem;
