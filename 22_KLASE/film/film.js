// Kreirati klasu Film koja od polja sadrži naslov, reziser i godinaIzdanja, kao i metodu stampaj() za prikaz naslova filma.
// Kreirati tri objekta klase Film. 
// Testirati metode klase.
// U klasi Film, dodati po tri setera za sva polja, s tim da se u seteru za godinu izdanja proverava da li je godina veća od 1800. Ukoliko godina izdanja nije veća od 1800, godinu setovati na 1800.


export class Film {
    constructor(a, b, c, d) { //d je niz ocena
        this.naslov = a;
        this.reziser = b;
        this.godinaIzdanja = c;
        this.ocene = d;
    }

    set naslov(a) {
        // a = a.trimStart();
        // a = a.trimEnd();
        a = a.trim();
        if (a.length > 0) {
            this._naslov = a;
        }
        else {
            this._naslov = `Default naslov`
        }
    }
    get naslov() {
        return this._naslov;
    }

    set reziser(b) {
        // b = b.trimStart();
        // b = b.trimEnd();
        b = b.trim();
        if (b.length > 0) {
            this._reziser = b;
        }
        else {
            this._reziser = `Default ime i prezime`
        }
    }
    get reziser() {
        return this._reziser;
    }

    set godinaIzdanja(c) {
        //ukloni decimalne zapise:
        if (Math.floor(c) != c) {
            c = Math.floor(c);
        }
        //provera:
        if (c > 1800) {
            this._godinaIzdanja = c;
        }
        else {
            this._godinaIzdanja = 1800;
        }
    }
    get godinaIzdanja() {
        return this._godinaIzdanja;
    }
    // OCENE
    set ocene(d) {
        this._ocene = d;
    }
    get ocene() {
        return this._ocene;
    }

    //DODAVANJE JEDNE OCENE
    dodajOcenu(novaOcena) {
        this._ocene.push(novaOcena); //ne treba nam seter i geter
    }

    //OSTALE METODE
    stampaj() {
        // console.log(this.naslov);
        console.log(this);
    }
}

// export default Film;