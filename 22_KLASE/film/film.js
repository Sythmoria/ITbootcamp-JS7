// Kreirati klasu Film koja od polja sadrži naslov, reziser i godinaIzdanja, kao i metodu stampaj() za prikaz naslova filma.
// Kreirati tri objekta klase Film. 
// Testirati metode klase.
// U klasi Film, dodati po tri setera za sva polja, s tim da se u seteru za godinu izdanja proverava da li je godina veća od 1800. Ukoliko godina izdanja nije veća od 1800, godinu setovati na 1800.

// U klasi Film dodati polje ocene koje čini niz ocena koje su korisnici dali filmu
// Kreirati niz od barem tri objekta klase Film
// Napraviti metod prosek koji vraća prosečnu ocenu 
// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 
// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu




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
        this._ocene.push(novaOcena); //ne treba nam seter i geter, u geteru je return ovoga sto ovde ispisujemo 
    }

    //OSTALE METODE
    stampaj() {
        // console.log(this.naslov);
        console.log(this);
    }

    // Napraviti metod prosek koji vraća prosečnu ocenu 
    prosek() {
        let suma = 0;
        this.ocene.forEach(element => {
            suma += element;
        });
        if ((this.ocene.length != 0)) {
            let prosek = suma / this.ocene.length;
            return prosek = +(Math.round(prosek + "e+2") + "e-2"); //zaokruzivanje na max dve decimale ( nula decimala, jedna decimala, ili MAX dve)
        }
        else {
            return 0;
        }
    }
}

// export default Film;