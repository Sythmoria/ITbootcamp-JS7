console.log("Ugnjezdeno grananje");

// ZADATAK 19

// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.

let b1 = 5;
let b2 = 3;
let b3 = 4;
//racunamo da su sva tri broja razlicita

if (b1 > b2) {
    if (b1 > b3) {
        console.log(`Broj ${b1} je najveci broj.`);
        if (b2 > b3) {
            console.log(`Broj ${b2} je srednji broj.`);
            console.log(`Broj ${b3} je najmanji broj.`);
        }
        else {
            console.log(`Broj ${b3} je srednji broj.`);
            console.log(`Broj ${b2} je najmanji broj.`);
        }
    }
    else {
        console.log(`Broj ${b1} je srednji broj.`);
        if (b2 > b3) {
            console.log(`Broj ${b2} je najveci broj.`);
            console.log(`Broj ${b3} je najmanji broj.`);
        }
        else {
            console.log(`Broj ${b3} je najveci broj.`);
            console.log(`Broj ${b2} je najmanji broj.`);
        }
    }
}

// ZADATAK 19 U SLUCAJU DA BROJEVI MOGU BITI I ISTI 

// ZADATAK 20

// Učitati dva cela broja i ispitati da li je veći od njih paran. 

//  Primer

// a && b AND Tačno ukoliko su i a i b tačni
// a || b OR Tačno ukoliko je bar jedan od a i b tačan
// ! a NOT Tačno ukoliko a nije tačno


// ZADATAK 21

//Naći koji je najveći od tri uneta broja 
// a, b i c, korišćenjem logičkih operatora. 
// Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

// ZADATAK 22
// Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).

// ZADATAK 23
// Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

// ZADATAK 24
// Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.
