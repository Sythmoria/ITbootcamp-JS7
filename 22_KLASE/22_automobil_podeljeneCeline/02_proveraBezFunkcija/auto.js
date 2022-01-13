class Auto {
    constructor(m, b, ik, bv = 5) { //marka, boja, ima krov ; nebitno je sta ovde pise ; broju vrata smo stavili default vrednost
        let m1 = m.trim(); //da odbaci space sa pocetka, ako je kucan space
        if (m1.length > 0) {
            this._marka = m1;
        }
        else {
            this._marka = "Auto";
        }
        //OVO PROVERAVA SAMO KAD DEFINISEMO NOVI OBJEKAT ALI AKO PROMENIMO VREDNOST _MARKA ONDA NECE RADITI VALIDACIJU
        //ovo sto je ispod moze isto da se izmeni
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
}

export default Auto;