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

import { Pacijent } from "./pacijenti.js";

let pacijent1 = new Pacijent("Petar Peric", 1.74, 80);
let pacijent2 = new Pacijent("Vuk Vukanovic", 2.05, 110);
let pacijent3 = new Pacijent("Jovan Jovanovic Zmaj", 1.55, 45);

pacijent1.stampaj();
pacijent2.stampaj();
pacijent3.stampaj();

console.log(pacijent1.BMI());
console.log(pacijent1.Kritican());

// primeri sa casa:

// * Kreirati niz od barem tri pacijenta.
let p1 = new Pacijent("Jelena", 1.73, 66);
let p2 = new Pacijent("Ana", 1.8, 72);
let p3 = new Pacijent("Pera", 1.9, 140);
let p4 = new Pacijent("Mika", 1.67, 57);
let p5 = new Pacijent("Mila", 1.5, 70);
let p6 = new Pacijent("Mila", 1.5, 70);

if (p5 == p6) {
    console.log(true);
}
else {
    console.log(false);
}
// ovo ce izbaciti false jer gleda referencu u memoriji, a referenca nije ista, p5 nije isto u memoriji kao p6


let pacijenti = [p1, p2, p3, p4, p5];

// * Ispisati podatke o pacijentu sa najmanjom težinom.
let btnMinTez = document.getElementById("minTez");
let spanMinTezRez = document.getElementById("minTezRez");
btnMinTez.addEventListener("click", () => {
    //console.log("Hello"); //testiramo radi li dugme
    let min = pacijenti[0]; //pretpostavka; pacijenti[0].tezina poziva geter tezina, ali ne moramo da gledamo pacijenti[0].tezina ovde jer nam trebaju sve info o ovom pacijentu pa je bolje tezinu da ispitujemo u forEach-u
    pacijenti.forEach(p => {
        if (min.tezina > p.tezina) {
            min = p;
        }
    });
    // console.log(min);
    // min.stampaj();
    spanMinTezRez.innerHTML = min.stampajListu();
});



// * Ispisati podatke o pacijentu sa najvećim bmi vrednošću.

let btnMaxBMI = document.querySelector("#maxBMI");
let maxBMIrez = document.querySelector("#maxBMIrez");
btnMaxBMI.addEventListener("click", () => {
    // console.log("Hello"); //proba
    let maxBMI = pacijenti[0]; //pretpostavka je da prvi pacijent ima max BMI
    for (let i = 1; i < pacijenti.length; i++) { //nulti nam je vec u pretpostavci, zato krecemo od 1
        if (maxBMI.BMI() < pacijenti[i].BMI()) {
            maxBMI = pacijenti[i];
        }
    }
    maxBMIrez.innerHTML = maxBMI.stampajListu();
});

//Za vezbu: ispred spanova (vec napravljenih) da se napravi tabela koja ispisuje sve pacijente iz niza. Naslov moze biti Svi Pacijenti. U th ide: ime, visina, tezina, bmi, kritican (true ili false). Za jednog pacijenta jedan tr -> dva nacina: ili metod stampajRedTabele() ili u scriptu napravi redove pa da se table data unose u to.
// Ispod toga idu dugmad (spanovi iz zadatka).
// Kriticne obojiti u crveno ILI napravi dugme "selektuj kriticne" koje klikom na dugme boji kriticne u tabeli.
//Napomena: promeni Peri visinu u 1.8, da bi bio kritican.

// * Ispisati sve pacijente čije ime sadrži slovo A.

// * Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.