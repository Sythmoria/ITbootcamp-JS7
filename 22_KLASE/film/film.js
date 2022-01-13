// Kreirati klasu Film koja od polja sadrži naslov, reziser i godinaIzdanja, kao i metodu stampaj() za prikaz naslova filma.
// Kreirati tri objekta klase Film. 
// Testirati metode klase.
// U klasi Film, dodati po tri setera za sva polja, s tim da se u seteru za godinu izdanja proverava da li je godina veća od 1800. Ukoliko godina izdanja nije veća od 1800, godinu setovati na 1800.


class Film {
    constructor(a, b, c) {
        this.naslov = a;
        this.reziser = b;
        this.godinaIzdanja = c;
    }
    stampaj() {
        console.log(this.naslov);
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
        if (Math.round(c) != c) {
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
}

export default Film;