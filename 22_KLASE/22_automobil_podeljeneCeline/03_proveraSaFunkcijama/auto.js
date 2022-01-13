class Auto {
    constructor(m, b, ik, bv = 5) { //marka, boja, ima krov ; nebitno je sta ovde pise ; broju vrata smo stavili default vrednost
        // da li je bolje linija 4+5 ili linija 6 ?????? (nebitno, fokus je na geter i seter posle)
        //this.postaviMarku(m); //spojimo ga sa metodama koje bi radile i prilikom kreiranja vrednosti i prilikom apdejtovanja vrednosti
        // this._marka = m;
        this._marka = this.postaviMarku(m);
        //e sad ovako bi moglo i za sve ispod
        this._boja = b;
        this._imaKrov = ik;
        this._brojVrata = bv;
    }

    sviraj() {
        console.log("Beep! Beep!");
    }

    vozi(x) {
        console.log(`Auto ${this._marka} vozi ${x} km.`);
    }

    stampaj() {
        console.log(`Auto marke: ${this._marka}, \nboje: ${this._boja}, \nima krov: ${this._imaKrov}, \nbroj vrata: ${this._brojVrata}`);
    }

    //metoda koja postavlja vrednost polja _marka
    postaviMarku(m) {
        let m1 = m.trim(); //da odbaci space sa pocetka, ako je kucan space
        if (m1.length > 0) {
            this._marka = m1;
        }
        else {
            this._marka = "Auto";
        }
    }

    //metoda koja cita vrednost polja
    dohvatiMarku() {
        return this._marka;
    }
    //ovo iznad je funkcionalno ali nije vizuelno lepo, pa zato koristimo geter i seter
}

export default Auto;