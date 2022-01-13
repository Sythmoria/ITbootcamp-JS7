/* Kreirati klasu Pacijent koja od polja sadrži ime, visina i tezina. Od metoda sadrži:
Odgovarajuće getere i setere, s tim što je potrebno da se u odgovarajućim seterima proveri da li je visina između 0 i 250, a težina između 0 i 550. Ukoliko uslovi nisu ispunjeni, odredite proizvoljno vrednosti na koje želite da setujete ove dve vrednosti.
Klasa Pacijent sadrži i sledeće metode:
 - Stampaj() koja ispisuje sve podatke o pacijentu,
 - Bmi(), koja vraća bmi vrednost pacijenta. BMI pacijenta možete računati prema sledećoj formuli: BMI = weight(kg) / height**2(m**2)
 - Kritican(), koja vraća true ukoliko je bmi pacijenta manji od 15 ili veći od 40, a u suprotnom vraća false.

* Kreirati tri objekta ove klase i testirati metode.

* Kreirati niz od barem tri pacijenta.
* Ispisati podatke o pacijentu sa najmanjom težinom.
* Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
* Ispisati sve pacijente čije ime sadrži slovo A.
* Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

*/

export class Pacijent {
    constructor(a, b, c) {
        this.ime = a;
        this.visina = b;
        this.tezina = c;
    }
    //geter i seter za ime:
    set ime(a) {
        a = a.trim();
        if (a.length > 0) {
            this._ime = a;
        }
        else {
            this._ime = "Default ime";
        }
    }
    get ime() {
        return this._ime;
    }
    //geter i seter za visinu:
    set visina(b) {
        //proveri da li je visina između 0 i 250
        //napomena: visina se unosi u metrima!
        // if (Math.floor(b) != b) {
        //     b = Math.floor(b); //ne trebaju nam decimalni zapisi za centimetre
        // }
        if (b > 0 && b < 2.50) {
            this._visina = b;
        }
        else {
            this._visina = 0;
        }
    }
    get visina() {
        return this._visina;
    }
    //geter i seter za tezinu:
    set tezina(c) {
        //težina između 0 i 550
        //tezina je u kg!
        if (c > 0 && c < 550) {
            this._tezina = c;
        }
        else {
            this._tezina = 0;
        }
    }
    get tezina() {
        return this._tezina;
    }
    // - Stampaj() koja ispisuje sve podatke o pacijentu,
    stampaj() {
        console.log(`Ime pacijenta je: ${this.ime}, \ntezina iznosi: ${this.tezina} kg, \nvisina iznosi: ${this.visina} m.`);
        //console.log(this); //moze i samo ovako
    }
    stampajListu() {
        let htmlLista =
            `<ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}</li>
            <li>Tezina: ${this.tezina}</li>
        </ul>`;
        return htmlLista;
    }
    // - Bmi(), koja vraća bmi vrednost pacijenta. BMI pacijenta možete računati prema sledećoj formuli: BMI = weight(kg) / height**2(m**2)
    BMI() {
        let bmi = this.tezina / (this.visina ** 2);
        bmi = +(Math.round(bmi + "e+2") + "e-2");
        return bmi;
    }
    // - Kritican(), koja vraća true ukoliko je bmi pacijenta manji od 15 ili veći od 40, a u suprotnom vraća false.
    Kritican() {
        let kritican = false;
        if (this.BMI() < 15 || this.BMI() > 40) {
            kritican = true;
        }
        return kritican;
    }
}