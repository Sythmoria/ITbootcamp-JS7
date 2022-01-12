class Auto {
    constructor(m, b, ik, bv = 5) { //marka, boja, ima krov ; nebitno je sta ovde pise ; broju vrata smo stavili default vrednost
        this.marka = m //poziva se seter marka
        this.boja = b; //poziva se seter _boja
        this.imaKrov = ik; //poziva se seter _imaKrov
        this.brojVrata = bv;
    }

    sviraj() {
        console.log("Beep! Beep!");
    }

    vozi(x) {
        console.log(`Auto ${this.marka} vozi ${x} km.`);
    }

    stampaj() {
        console.log(`Auto marke: ${this.marka}, \nboje: ${this.boja}, \nima krov: ${this.imaKrov}, \nbroj vrata: ${this.brojVrata}`);
    }

    //seter i geter za polje _marka
    set marka(m) { //isti naziv kao naziv polja samo bez _
        let m1 = m.trim(); //da odbaci space sa pocetka, ako je kucan space
        if (m1.length > 0) {
            this._marka = m1;
        }
        else {
            this._marka = "Auto";
        }
    }
    //vrati se u constructor i deklarisi ga tamo

    get marka() {
        return this._marka;
    }

    //seter i geter za polje _boja
    set boja(b) {
        this._boja = b;
        //proveri zasto ovo ne radi:
        // let b1 = b.trim(); //da odbaci space sa pocetka, ako je kucan space
        // if (b1.length > 0) {
        //     this._boja = b1;
        // }
        // else {
        //     this._boja = "Boja";
        // }
    }

    get boja() {
        return this._boja;
    }

    //seter i geter za polje _imaKrov
    set imaKrov(ik) {
        if (ik === true || ik === false) {
            this._imaKrov = ik;
        }
        else {
            this._imaKrov = false;
        }
    }

    get imaKrov() {
        return this._imaKrov;
    }

    //seter i geter za polje _brojVrata
    set brojVrata(bv) {
        if (bv > 0 && Math.round(bv) == bv) {
            this._brojVrata = bv;
        }
        else {
            this._brojVrata = 1; //proizvoljan odabir, neka ga za sad
        }
    }

    get brojVrata() {
        return this._brojVrata;
    }
}

export default Auto;

//ceo fajl smo izmenili i sad je seter npr marka ali i dalje moze console.log(a1._marka) jer je to _marka ubaceno u okviru set marka

//PRAKSA (ne obavezno pravilo):
//jedino geteri i seteri pristupaju poljima, a ostale metode, kao i objekti van klase, zovu getere i setere