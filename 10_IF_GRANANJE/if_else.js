console.log("IF - ELSE grananje");

if (true) {
    console.log("Uslov je ispunjen");
}
else {
    console.log("Uslov nije ispunjen");
}

if (false) {
    console.log("Uslov je ispunjen");
}
else {
    console.log("Uslov nije ispunjen");
}

a = 10;
b = 7;
if (a < b) {
    console.log("Broj " + a + " je strogo manji od broja " + b + " .");
}
else {
    console.log(`Broj ${a} je veci ili jednak broju ${b}`);
}

// punoletni ili maloletni
let god = 27;
if (god >= 18) {
    console.log("Osoba je punoletna.");
}
else {
    console.log("Osoba je maloletna.");
}

// zadaci za vezbanje

//  PRVI ZADATAK

let c = 8;
let d = 10;
if (c > d) {
    console.log(`${c} je strogo veci od ${d}`);
}
else {
    console.log(`${c} je manji ili jednak ${d}`);
}

// DRUGI ZADATAK
let Temp = 24;
if (Temp >= 0) {
    document.body.innerHTML = `<p style="color: red">temperatura od ${Temp} stepeni je u plusu.</p>`
    // console.log("Temperatura je u plusu.");
}
else {
    document.body.innerHTML = `<p style="color: blue">temperatura od ${Temp} stepeni je u minusu.</p>`
    // console.log("Temperatura je u minusu.");
}

// TRECI ZADATAK

// CETVRTI ZADATAK

let datum = new Date();
let sati = datum.getHours();
if (sati >= 12) {
    console.log("Trenutno je popodne (ili vece).");
}
else {
    console.log("Trenutno je jutro");
}

// PETI ZADATAK

let godina = datum.getFullYear();
let UnetaGodina = 1989;
if (godina - UnetaGodina >= 18) {
    console.log("Osoba je punoletna.");
}
else {
    console.log("Osoba je maloletna.");
}

// SESTI ZADATAK

// sa logickim operatorom &&
// let e = 5;
// let f = 18;
// let g = 10;
// if (e > f && e > g) {
//     console.log(`${e} je najveci broj`);
// }
// else if (f > e && f > g) {
//     console.log(`${f} je najveci broj`);
// }
// else {
//     console.log(`${g} je najveci broj`);
// }

// bez logickog operatora
let e = 5;
let f = 18;
let g = 110;
let rezultat = 0;
if (e > f) {
    if (e > g) {
        rezultat = e;
    }
    else {
        rezultat = g;
    }
}
else {
    if (f > g) {
        rezultat = f;
    }
    else {
        rezultat = g;
    }
}

console.log(`${rezultat} je najveci broj`);