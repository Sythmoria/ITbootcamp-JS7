/* samo zasebne f-je, kako bismo do sad radili: */

// function ispisKonzola(niz) {
//     let rezultat = "";
//     for (let i = 0; i < niz.length; i++) {
//         rezultat += niz[i] + " ";
//     }
//     console.log(rezultat);
// }

// function ispisHTML(niz) {
//     let rezultat = "";
//     for (let i = 0; i < niz.length; i++) {
//         rezultat += niz[i] + " ";
//     }
//     document.body.innerHTML += `<div>${rezultat}</div>`
// }

// let brojevi = [1, 6, -4, 9];
// ispisKonzola(brojevi);
// ispisHTML(brojevi);

/*Napisati funkciju koja ispisuje sve elemente niza u jednom redu, ali sa varijantama:
* U konzoli,
* U nekom div elementu na stranici.
*/

function ispisKonzola(poruka) {
    console.log(poruka);
}
function ispisStranica(poruka) {
    // let div = document.getElementByID('container'); //ako imamo div u HTMLu
    // div.innerHTML = poruka;
    document.body.innerHTML += `<div>${poruka}</div>`; //ako nemamo vec div u HTMLu
}

function ispisNiza(niz, callback) {
    let rezultat = "";
    for (let i = 0; i < niz.length; i++) {
        rezultat += niz[i] + " ";
    }
    callback(rezultat);
    //moze jos jednom callback(rezultat) -> moze vise puta
}

// function test (niz, cb) {
//     //nesto se radi ovde, npr
//     cb(niz, ispisStranica);
//     //ovde trazimo ispis na stranicu, a posle u 55oj liniji probacemo ispis u niz -> moze da se lanca -> kad ih ima previse = "callback hell" tj. tesko za pracenje, nije citljivo
// }

let brojevi = [1, 6, -4, 9];
ispisNiza(brojevi, ispisKonzola); //ne prosledjujemo parametre u ispisKonzola
ispisNiza(brojevi, ispisStranica);
// test(brojevi, ispisNiza);


/*Napisati funkciju koja ispisuje sve elemente niza u jednom redu, ali sa varijantama:
* U konzoli,
* U nekom div elementu na stranici.

KORISTI ANONIMNE FUNKCIJE
*/

ispisNiza(brojevi, function (poruka) {
    console.log(poruka);
});

ispisNiza(brojevi, function (poruka) {
    document.body.innerHTML += `<div>${poruka}</div>`;
});

/*Napisati funkciju koja ispisuje sve elemente niza u jednom redu, ali sa varijantama:
* U konzoli,
* U nekom div elementu na stranici.

KORISTI ARROW (ANONIMNE) FUNKCIJE
*/

ispisNiza(brojevi, poruka => {
    console.log(poruka);
});

ispisNiza(brojevi, poruka => {
    document.body.innerHTML += `<div>${poruka}</div>`;
});

/* 
a) odredi broj maksimalnih elemenata u celobrojnom nizu
b) odredi broj minimalnih elemenata u celobrojnom nizu
 */

function maxEl(niz) {
    let max = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) { // za minimum bi ovde isao znak <
            max = niz[i];
        }
    }
    return max;
}

function minEl(niz) {
    let min = niz[0]; //pretpostavka: prvi u nizu je najmanji
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}



function brojSvojstvoNiz(niz, svojstvo) {
    let s = svojstvo(niz);
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == s) {
            br++;
        }
    }
    return br;
}

let temperature = [0, 0, 1, 2, 2, 1, 2, 1, 0, 0];

console.log(brojSvojstvoNiz(temperature, maxEl));


/*
function maxMinEl(niz) {
    let max = niz[0];
    let min = niz[0];
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) { // za minimum bi ovde isao znak <
            max = niz[i];
        }
        if (niz[i] < min) {
            min = niz[i];
        }
    }
    return [min,max];
}

function brojSvojstvoNiz(niz, svojstvo, index) {
    let temp = svojstvo(niz);
    let s = temp[index];
    let br = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == s) {
            br++;
        }
    }
    return br;
}

const MAX_INDEX = 1;
const MIN_INDEX = 0

let temperature = [0, 0, 1, 2, 2, 1, 2, 1, 0, 0];

console.log(brojSvojstvoNiz(temperature, maxMinEl, MAX_INDEX));
console.log(brojSvojstvoNiz(temperature, maxMinEl, MIN_INDEX));
*/