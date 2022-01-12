class Auto {
    constructor(m, b, ik, bv = 5) { //marka, boja, ima krov ; nebitno je sta ovde pise ; broju vrata smo stavili default vrednost
        this._marka = m; //jedan nacin definisanja
        this._boja = b;
        this._imaKrov = ik;
        this._brojVrata = bv;
    }

    sviraj() {
        console.log("Beep! Beep!");
    }

    vozi(x) {
        let m = this._marka;
        // console.log(`Auto ${m} vozi ${x} km.`);
        console.log(`Auto ${this._marka} vozi ${x} km.`);
        //posto nemamo nikvu validaciju, this._marka i m nam je fakticki isto, isto ce ispisati
    }

    stampaj() {
        console.log(`Auto marke: ${this._marka}, \nboje: ${this._boja}, \nima krov: ${this._imaKrov}, \nbroj vrata: ${this._brojVrata}`);
    }
}

export default Auto;