let a = [1, 9, -6, 5, 0];
/*
function ispis(element) {
    console.log(`Element niza je: ${element}`);
}
a.forEach(ispis);
*/

a.forEach(element => {
    console.log(`Element niza je: ${element}.`);
});



// let x = 5;
// let zbir = niz => {
//  return 5;   
// }; //-> trebalo bi da ubacujemo ; na kraju

// odrediti zbir celobrojnog niza

let zbir = niz => {
    let s = 0; //suma, 0 je neutralan broj za sabiranje
    niz.forEach(el => { // sa forEach pristupamo svim elementima niza
        s += el; //svaki element niza dodajemo na sumu
    });
    return s;
};

console.log("Zbir elemenata je " + zbir(a));


// odrediti zbir parnih elemenata celobrojnog niza

let zbirParnih = niz => {
    let s = 0; //suma, 0 je neutralan broj za sabiranje
    niz.forEach(el => { // sa forEach pristupamo svim elementima niza
        if (el % 2 == 0) {
            s += el; //svaki element niza dodajemo na sumu
        }
    });
    return s;
};

console.log("Zbir parnih elemenata niza je " + zbirParnih(a));

// odrediti zbir elemenata celobrojnog niza sa parnim indexom

let zbirElParniIndex = niz => {
    let s = 0; //suma, 0 je neutralan broj za sabiranje
    niz.forEach((el, index) => { // sa forEach pristupamo svim elementima niza
        if (index % 2 == 0) {
            s += el; //svaki element niza dodajemo na sumu
        }
    });
    return s;
};

console.log("Zbir elemenata niza sa parnim indexom je " + zbirElParniIndex(a));

//////////////////////////////////////////////////

/* 
ZADATAK 3: Odrediti proizvod elemenata celobrojnog niza.*/

let proizvodEl = niz => {
    let p = 1;
    niz.forEach(element => {
        p *= element;
    });
    return p;
};
console.log("Proizvod elemenata niza iznosi " + proizvodEl(a));


/*
ZADATAK 4: Odrediti srednju vrednost elemenata celobrojnog niza.*/

let arSr = niz => {
    let suma = 0;
    // let brojac = 0;
    niz.forEach(element => {
        suma += element;
        // brojac++;
    });
    // return (brojac != 0) ? (suma / brojac) : 0;
    return niz.length != 0 ? suma / niz.length : 0;
};
console.log("Aritmeticka sredina niza iznosi " + arSr(a));

/*
ZADATAK 5: Odrediti maksimalnu vrednost u celobrojnom nizu.*/

let maxEl = niz => {
    let max = niz[0];
    niz.forEach(element => {
        if (max < element) {
            max = element;
        }
    });
    return max;
};

console.log("Maksimalna vrednost u nizu iznosi: " + maxEl(a));

/*
ZADATAK 6: Odrediti minimalnu vrednost u celobrojnom nizu.
*/

let minEl = niz => {
    let min = niz[0];
    niz.forEach(element => {
        if (min > element) {
            min = element;
        }
    });
    return min;
};

console.log("Minimalna vrednost u nizu iznosi: " + minEl(a));

/* ZADATAK 7: Odrediti indeks maksimalnog elementa celobrojnog niza.
*/

//prvi nacin
let indexMax = niz => {
    let max = niz[0];
    let imax = 0; //index maksimalne vrednosti
    niz.forEach((el, i) => { //moramo da pristupimo i elementu i indexu
        if (el > max) {
            max = el; //ako je element veci od prethodne max, nek max uzme vrednost tog novog elementa
            imax = i; //da sacuva index prvog puta kada se pojavi max vrednost konacna (jer moze vise puta da se pojavi u nizu max vrednost)
        }
    });
    return imax;
};

// podsetnik: a = [1, 9, -6, 5, 0];
console.log("Index max vrednosti je " + indexMax(a));

//drugi nacin

let indexMaxCallback = niz => {
    let max = maxEl(niz);
    let imax;
    niz.forEach((el, i) => {
        if (el == max) {
            imax = i;
            //on ce da prodje kroz sve elemente, i on ce poslednju vrednost da podesi kao imax
        }
    });
    return imax;
};


/*ZADATAK 8: Odrediti indeks minimalnog elementa celobrojnog niza.
*/

let indexMin = niz => {
    let min = niz[0];
    let imin = 0; //index minimalne vrednosti
    niz.forEach((el, i) => { //moramo da pristupimo i elementu i indexu
        if (el < min) {
            min = el; //ako je element manji od prethodne min, nek min uzme vrednost tog novog elementa
            imin = i; //da sacuva index prvog puta kada se pojavi min vrednost konacna (jer moze vise puta da se pojavi u nizu min vrednost)
        }
    });
    return imin;
};
// podsetnik: a = [1, 9, -6, 5, 0];
console.log("Index min vrednosti je " + indexMin(a));

//drugi nacin 

let indexMinCallback = niz => {
    let min = minEl(niz);
    let imin;
    niz.forEach((el, i) => {
        if (el == min) {
            imin = i;
            //on ce da prodje kroz sve elemente, i on ce poslednju vrednost da podesi kao imin
        }
    });
    return imin;
};

///////////////////////////////////////////////
let indexSvojstvo = (niz, svojstvo) => {
    let s = svojstvo(niz);
    let index;
    niz.forEach((el, i) => {
        if (el == s) {
            index = i;
        }
    });
    return index;
};

console.log(indexSvojstvo(a, maxEl));
console.log(indexSvojstvo(a, minEl));

/*ZADATAK 9: Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
*/
/*ZADATAK 10: Izračunati zbir pozitivnih elemenata celobrojnog niza.
*/
/*ZADATAK 11: Odrediti broj parnih elemenata u celobrojnom nizu.
*/