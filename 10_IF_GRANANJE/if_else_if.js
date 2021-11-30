console.log("IF - ELSE IF");

let ocena = 4;
if (ocena == 5) {
    //dva znaka jednakosti jer nam input polje moze imati type text ali ako je input number i mora number i ovde onda ide ===
    console.log("Odlican 5");
}
else if (ocena == 4) {
    console.log("Vrlo dobar 4");
}
else if (ocena == 3) {
    console.log("Dobar 3");
}
else if (ocena == 2) {
    console.log("Dovoljan 2");
}
else if (ocena == 1) {
    console.log("Nedovoljan 1");
}
else {
    console.log("Unos nije dobar.");
}

console.log("Kod nakon if - else if");


// ZADATAK 7

//Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit. 
// Za više od 50 poena učenik dobija ocenu 6, 
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8, 
// za više od 80 poena učenik dobija ocenu 9 i 
// za više od 90 poena učenik dobija ocenu 10.

let poeni = 76;

if (poeni > 100) {
    console.log("Nemoguce je imati vise od 100 poena.");
}
else if (poeni > 90) {
    console.log("Ocena 10");
}
else if (poeni > 80) {
    console.log("Ocena 9");
}
else if (poeni > 70) {
    console.log("Ocena 8");
}
else if (poeni > 60) {
    console.log("Ocena 7");
}
else if (poeni > 50) {
    console.log("Ocena 6");
}
else {
    console.log("Niste polozili ispit.");
}

//drugi nacin je da koristis manje od <50 do manje od <=100


// ZADATAK 8

// Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 

let datum = new Date();
let DanUNedelji = datum.getDay(); //nedelja je nula

if (DanUNedelji == 0) {
    console.log("Vikend je.");
}
else if (DanUNedelji == 6) {
    console.log("Vikend je.");
}
else {
    console.log("Radni dan je.");
}

// ZADATAK 9

// Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati popodne i u ostalim slučajevima ispisati dobro veče.

let Sati = datum.getHours();
if (Sati > 12) {
    if (Sati < 18) {
        console.log("Dobar dan.");
    }
    else {
        console.log("Dobro vece.");
    }
}
else {
    console.log("Dobro jutro.");
}

// ZADATAK 10

// Uporediti dva uneta datuma i ispisati koji od njih je raniji. 

let godina1 = 2020;
let godina2 = 2021;
let mesec1 = 8;
let mesec2 = 12;
let dan1 = 24;
let dan2 = 14;

if (godina1 < godina2) {
    console.log(`${godina1}/${mesec1}/${dan1} ide pre ${godina2}/${mesec2}/${dan2} `);
}
else if (godina1 == godina2) {
    if (mesec1 < mesec2) {
        console.log(`${godina1}/${mesec1}/${dan1} ide pre ${godina2}/${mesec2}/${dan2} `);
    }
    else if (mesec1 == mesec2) {
        if (dan1 < dan2) {
            console.log(`${godina1}/${mesec1}/${dan1} ide pre ${godina2}/${mesec2}/${dan2} `);
        }
        else if (dan1 == dan2) {
            console.log(`${godina1}/${mesec1}/${dan1} i ${godina2}/${mesec2}/${dan2} su isti datumi.`);
        }
        else {
            console.log(`${godina2}/${mesec2}/${dan2} ide pre ${godina1}/${mesec1}/${dan1} `);
        }
    }
    else {
        console.log(`${godina2}/${mesec2}/${dan2} ide pre ${godina1}/${mesec1}/${dan1} `);
    }
}
else {
    console.log(`${godina2}/${mesec2}/${dan2} ide pre ${godina1}/${mesec1}/${dan1} `);
}

//drugi nacin: if (g1<g2) pa else if (g1>g2) else if (m1<m2) else if (m2>m2) ... else isti su

// ZADATAK 11

// Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.

let Sati2 = datum.getHours();
// radno vreme od 9 do 17
let PocetakRada = 9;
let KrajRada = 17;
if (Sati2 >= PocetakRada) {
    if (Sati2 < KrajRada) {
        console.log("Ova programerska firma je trenutno otvorena.");
    }
    else {
        console.log("Ova programerska firma je trenutno zatvorena.");
    }
}
else {
    console.log("Ova programerska firma je trenutno zatvorena.");
}

// ZADATAK 12

// Za unet sat početka i sat kraja radnog vremena dva lekara,  
// ispisati DA ukoliko se smene lekara preklapaju, u suprotnom ispisati NE.
// (Ne može se desiti da lekar počne smenu pre ponoći, a završi sa smenom nakon ponoći, ovo se podrazumeva i ne ispitivati dodatno)

//uneti sate
let P1 = 8;
let K1 = 17;
let P2 = 15;
let K2 = 22;

if (K1 < P2) {
    console.log(`Smene ova dva lekara se ne preklapaju`);
}
else if (K2 < P1) {
    console.log(`Smene ova dva lekara se ne preklapaju`);
}
else {
    console.log(`Smene ova dva lekara se preklapaju`);
}


// ZADATAK 13

//  Za uneti broj ispitati da li je paran ili nije. 

let UnetiBroj = 16;
if (UnetiBroj % 2 == 0) {
    console.log(`${UnetiBroj} je paran broj.`);
}
else {
    console.log(`${UnetiBroj} je neparan broj.`);
}

// ZADATAK 14

// Za uneti broj ispisati da li je deljiv sa 3 ili ne.

let UnetiBroj1 = 16;
if (UnetiBroj1 % 3 == 0) {
    console.log(`${UnetiBroj1} je deljiv sa 3.`);
}
else {
    console.log(`${UnetiBroj1} nije deljiv sa 3.`);

}//drugi nacin
let k = 19;
if (k % 3 != 0) {
    console.log(`Broj ${k} nije deljiv brojem 3`);
}
else {
    console.log(`Broj ${k} je deljiv brojem 3`);
}

// ZADATAK 15

// Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.

let br1 = 15;
let br2 = 15;

if (br1 > br2) {
    document.body.innerHTML += `<p>Rezultat je ${br1 - br2}</p>`;
}
else if (br1 < br2) {
    document.body.innerHTML += `<p>Rezultat je ${br2 - br1}</p>`;
}
else {
    document.body.innerHTML += `Rezultat je nula jer su brojevi jednaki.`;
}

//ZADATAK 16

// Za uneti broj ispitati da li je on manji od nule, veći od nule ili jednak nuli. 
// Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.


let t = 17;
if (t <= 0) {
    t = t + 1;
    console.log(t);
}
else {
    t = t - 1;
    console.log(t);
}

//ZADATAK 17

// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, korišćenjem if – else if strukture. 

let a1 = 35;
let a2 = 75;
let a3 = 55;

//Najveci broj
let max = a1; //pretpostavka
if (max < a2) {
    max = a2;
}
if (max < a3) {
    max = a3;
}
console.log(`Najveci broj je ${max}`);

//Najmanji broj
let min = a1;
if (min > a2) {
    min = a2;
}
if (min > a3) {
    min = a3;
}
console.log(`Najmanji broj je ${min}`);

//Srednja vrednost
let srednji = a1 + a2 + a3 - max - min;
console.log(`Srednji broj je ${srednji}`);


// ZADATAK 18
// Za učitani broj ispitati da li je ceo.


//1. nacin

let s = 15.3;
if (s % 1 == 0) {
    console.log(`Broj ${s} je ceo broj.`);
}
else {
    console.log(`Broj ${s} nije ceo broj.`);
}

//2. nacin

if (Math.floor(s) == s) {
    console.log(`Broj ${s} je ceo broj.`);
}
else {
    console.log(`Broj ${s} nije ceo broj.`);
}
