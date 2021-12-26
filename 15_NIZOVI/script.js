let cars = ["Toyota", "BMW", "Volvo"];

console.log(cars);
// u konzoli ce pisati Array(3) a onda ce unutar toga pisati 0 Toyota, 1 BMW, itd. Ovi brojevi su im indexi. Uvek idu od 0.

let numbers = [6, -7, 0, 5.5, -3.14];

console.log(numbers);

let random = [6, "Stefan", -8.8, true, [1, 2, 3]];

console.log(random);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

console.log(random[4][1]); //u cetvrtom elementu (a cetvrti je isto niz) trazimo element sa indexom 1

cars[0] = "Peugeot";
console.log(cars);

// cars[0] = undefined; // nacin da se ukloni element iz niza

//iteracija kroz elemente niza
let cars2 = ["Volvo", "BMW", "Toyota"]; //duzina niza je 3, a indexi su od 0 do 2
for (let i = 0; i < cars2.length; i++) {
    console.log(cars2[i]);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// zadatak 1: ispisati sve elemente niza od 5 stringova.
let niz = ["Bobcat", "Lynx", "Tiger", "Lion", "Cheetah"];
for (let i = 1; i < niz.length; i++) {
    console.log(niz[i]);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

// zadatak 2: Odrediti zbir elemenata celobrojnog niza.
let celobrojniNiz = [1, 4, 4, 9, 7, 8];
let suma = 0;
for (let i = 0; i < celobrojniNiz.length; i++) {
    //     //if (Math.floor(i) === i) { //treba li ispitivanje da li je ceo broj?
    suma += niz[i];
}
console.log(suma);

let niz2 = [6, -9, 0, 0, 3];
suma = 0;
for (let i = 0; i < niz2.length; i++) {
    suma = suma + niz2[i];
}
console.log(suma);

// da bi izbegli ovo ponavljanje, trebalo bi da upotrebimo sumu

let sumaElemenata = celobrojniNiz => {
    let suma = 0;
    for (let i = 0; i < celobrojniNiz.length; i++) {
        //     //if (Math.floor(i) === i)  //treba li ispitivanje da li je ceo broj?
        suma += celobrojniNiz[i];
    }
    return (suma);
}

console.log("Suma elemenata prvog niza je: " + sumaElemenata(celobrojniNiz));
console.log("Suma elemenata drugog niza je: " + sumaElemenata(niz2));
let niz3 = [1, 4];
console.log("Suma elemenata treceg niza je: " + sumaElemenata(niz3));

////////////////////////////////////////////////////////////////////////////////////////////////////////

// zadatak 3: Odrediti proizvod elemenata celobrojnog niza.

let proizvodElemenata = celobrojniNiz => {
    let proizvod = 1;
    for (let i = 0; i < celobrojniNiz.length; i++) {
        //     //if (Math.floor(i) === i)  //treba li ispitivanje da li je ceo broj?
        proizvod *= celobrojniNiz[i];
    }
    return (proizvod);
}

console.log("Proizvod elemenata prvog niza je: " + proizvodElemenata(celobrojniNiz));
console.log("Proizvod elemenata drugog niza je: " + proizvodElemenata(niz2));
console.log("Proizvod elemenata treceg niza je: " + proizvodElemenata(niz3));

////////////////////////////////////////////////////////////////////////////////////////////////////////

// zadatak 4: Odrediti srednju vrednost (aritmeticku sredinu) elemenata celobrojnog niza.

let aritmetickaSredina = celobrojniNiz => {
    let suma = 0;
    let brojac = 0;
    //umesto for petlje ispod mozemo da dobijemo sumu pozivom na f-ju za sumu elemenata, a broj elemenata dobijamo sa .length
    for (let i = 0; i < celobrojniNiz.length; i++) {
        suma += celobrojniNiz[i];
        brojac++;
    }
    // let arSredina;
    // if (brojac != 0) {
    //     arSredina = suma / brojac;
    // }
    // else {
    //     arSredina = `Deljenje nulom je nemoguce. / Ovaj niz je prazan.`
    // }
    // return arSredina;
    return (brojac != 0) ? suma / brojac : 0;
}
console.log("Aritmeticka sredina prvog niza je " + aritmetickaSredina(celobrojniNiz));
console.log("Aritmeticka sredina drugog niza je " + aritmetickaSredina(niz2));
console.log("Aritmeticka sredina treceg niza je " + aritmetickaSredina(niz3));
let niz4 = [];
console.log("Aritmeticka sredina cetvrtog niza je " + aritmetickaSredina(niz4));

//drugi nacin

let arSr2 = celobrojniNiz => {
    let suma = sumaElemenata(celobrojniNiz);
    let broj = celobrojniNiz.length;
    return (broj != 0) ? suma / broj : 0;
}

console.log(arSr2(celobrojniNiz));
console.log(arSr2(niz2));
console.log(arSr2(niz3));

// treci nacin

let arSr3 = celobrojniNiz => (celobrojniNiz.length != 0) ? sumaElemenata(celobrojniNiz) / celobrojniNiz.length : 0;

console.log(arSr3(celobrojniNiz));
console.log(arSr3(niz2));
console.log(arSr3(niz3));

////////////////////////////////////////////////////////////////////////////////////////////////////////

//4' varijacija: odrediti srednju vrednost parnih elemenata niza

let arSrParnih = celobrojniNiz => {
    let suma = 0;
    let broj = 0;
    for (let i = 0; i < celobrojniNiz.length; i++) {
        if (celobrojniNiz[i] % 2 == 0) {
            suma += celobrojniNiz[i];
            broj++
        }
    }
    return broj == 0 ? 0 : suma / broj;
    // 0*0 je 0, Marija, stavi rezultat 0
}

console.log(arSrParnih(celobrojniNiz));
console.log(arSrParnih(niz2)); //nula je paran broj, uracunace i nulu
console.log(arSrParnih([1, 2, [1, 2, 3]])); //rezultat je NaN

////////////////////////////////////////////////////////////////////////////////////////////////////////

// zadatak 5: Odrediti maksimalnu vrednost u celobrojnom nizu.

let najveci = celobrojniNiz => {
    let max = celobrojniNiz[0];
    for (let i = 0; i < celobrojniNiz.length; i++) { //i=1 jer se proverava naredni element, ne [0]0], imali bi korak viska da smo stavili i=0
        if (celobrojniNiz[i] > max) {
            max = celobrojniNiz[i];
        }
    }
    return max;
}
console.log("Najveci broj u prvom nizu je " + najveci(celobrojniNiz));
console.log("Najveci broj u drugom nizu je " + najveci(niz2));
console.log("Najveci broj u trecem nizu je " + najveci(niz3));

//drugi nacin

let max = Math.max(...niz2);
console.log(max);

//treci nacin - sa predavanja

let maxVrednost = celobrojniNiz => {
    let max = celobrojniNiz[0];
    for (let i = 1; i < celobrojniNiz.length; i++) { //i=1 jer se proverava naredni element, ne [0]0], imali bi korak viska da smo stavili i=0
        if (celobrojniNiz[i] > max) {
            max = celobrojniNiz[i];
        }
    }
    return max;
}

console.log(maxVrednost(celobrojniNiz));

/*ulaz celobrojniNiz = [1, 4, 4, 9, 7, 8];

max = 1

i # niz [i] # max
------------------
1 #    4    # 4
2 #    4    # 4
3 #    9    # 9
4 #    7    # 9
5 #    8    # 9
*/


/* ulaz: [1,11,6,11] 

max = 1

i # niz [i] # max
------------------
1 #    11   # 11
2 #    6    # 11
3 #    11   # 11
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////

// zadatak 6: Odrediti minimalnu vrednost u celobrojnom nizu

let najmanji = celobrojniNiz => {
    let min = celobrojniNiz[0];
    for (let i = 1; i < celobrojniNiz.length; i++) {
        if (celobrojniNiz[i] < min) {
            min = celobrojniNiz[i];
        }
    }
    return min;
}
console.log("Najmanji broj u prvom nizu je " + najmanji(celobrojniNiz));
console.log("Najmanji broj u drugom nizu je " + najmanji(niz2));
console.log("Najmanji broj u trecem nizu je " + najmanji(niz3));

//drugi nacin

let min = Math.min(...niz2);
console.log(min);

////////////////////////////////////////////////////////////////////////////////////////////////////////

/* zadatak 7: Odrediti indeks maksimalnog elementa celobrojnog niza.
*/

let indexMax = celobrojniNiz => celobrojniNiz.indexOf(najveci(celobrojniNiz)); //ili indexOf(max)

console.log("Zadatak 7: Index maksimalne vrednosti u prvom nizu je " + indexMax(celobrojniNiz));
console.log("Zadatak 7: Index maksimalne vrednosti u drugom nizu je " + indexMax(niz2));
console.log("Zadatak 7: Index maksimalne vrednosti u trecem nizu je " + indexMax(niz3));

//drugi nacin 

let indexMaxVr = celobrojniNiz => {
    let max = celobrojniNiz[0];
    let memorisi = 0;
    for (let i = 1; i < celobrojniNiz.length; i++) {
        if (celobrojniNiz[i] > max) {
            max = celobrojniNiz[i];
            memorisi = i;
        }
    }
    return memorisi;
}
console.log("Zadatak 7: testiranje: " + indexMaxVr(celobrojniNiz));

////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Odredi broj maksimalnih elemenata celobrojnog niza */

let niz5 = [45, 78, 97, 100, 4, 55, 17, -45, -99]

let brojMaxEl = niz => {
    let max = niz[0];
    let br = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i] > max) {
            max = niz[i];
        }
    }
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] == max) {
            br++;
        }
    }
    return br;
}
console.log("Broj maksimalnih elemenata celobrojnog niza je " + brojMaxEl(niz5));



////////////////////////////////////////////////////////////////////////////////////////////////////////

/* zadatak 8: Odrediti indeks minimalnog elementa celobrojnog niza.*/
/* podsetnik: 
celobrojniNiz = [1, 4, 4, 9, 7, 8];
niz2 = [6, -9, 0, 0, 3];
niz3 = [1, 4];
*/
let indexMin = celobrojniNiz => celobrojniNiz.indexOf(najmanji(celobrojniNiz));
console.log("Zadatak 8: Index minimalne vrednosti u prvom nizu je " + indexMin(celobrojniNiz));
console.log("Zadatak 8: Index minimalne vrednosti u drugom nizu je " + indexMin(niz2));
console.log("Zadatak 8: Index minimalne vrednosti u trecem nizu je " + indexMin(niz3));

// drugi nacin

let indexMinVr = celobrojniNiz => {
    let min = celobrojniNiz[0];
    let memorisi = 0;
    for (let i = 1; i < celobrojniNiz.length; i++) {
        if (celobrojniNiz[i] < min) {
            min = celobrojniNiz[i];
            memorisi = i;
        }
    }
    return memorisi;
}
console.log("Zadatak 8: testiranje 2: " + indexMinVr(celobrojniNiz));

////////////////////////////////////////////////////////////////////////////////////////////////////////

/* zadatak 9: Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.*/

let veceOdSredine = celobrojniNiz => {
    let br = 0;
    for (i = 0; i < celobrojniNiz.length; i++) {
        if (celobrojniNiz[i] > arSr3(celobrojniNiz)) {
            br++;
        }
    }
    return br;
}
console.log("Zadatak 9: Broj brojeva u nizu vecih od aritmeticke sredine iznosi " + veceOdSredine(celobrojniNiz));
/* podsetnik: 
celobrojniNiz = [1, 4, 4, 9, 7, 8]; 
arSr3 = 5.5
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////

/* zadatak 10: Izračunati zbir pozitivnih elemenata celobrojnog niza.*/

let pozitivniEl = celobrojniNiz => {
    let suma = 0;
    for (i = 0; i < celobrojniNiz.length; i++) {
        if (celobrojniNiz[i] > 0) {
            suma += celobrojniNiz[i];
        }
    }
    return suma;
}
console.log("Zadatak 10: Suma pozitivnih elemenata u prvom celobrojnom nizu iznosi " + pozitivniEl(celobrojniNiz));

////////////////////////////////////////////////////////////////////////////////////////////////////////

/* zadatak 11: Odrediti broj parnih elemenata u celobrojnom nizu.
*/

let parni = celobrojniNiz => {
    let br = 0;
    for (i = 0; i < celobrojniNiz.length; i++) {
        if (celobrojniNiz[i] % 2 == 0) {
            br++;
        }
    }
    return br;
}

console.log("Zadatak 11: Broj parnih elemenata u prvom nizu iznosi " + parni(celobrojniNiz));

////////////////////////////////////////////////////////////////////////////////////////////////////////

// zadatak 12: Odrediti broj parnih elemenata sa neparnim indeksom.

let neparniIndexParniEl = celobrojniNiz => {
    let br = 0;
    for (i = 0; i < celobrojniNiz.length; i++) {
        if (celobrojniNiz[i] % 2 == 0 && i % 2 != 0) {
            br++;
        }
    }
    return br;
}

console.log("Zadatak 12: Broj parnih elemenata sa neparnim indexom u prvom nizu iznosi " + neparniIndexParniEl(celobrojniNiz));

////////////////////////////////////////////////////////////////////////////////////////////////////////

//zadatak 13: Izračunati sumu elemenata niza sa parnim indeksom.

/* podsetnik: 
celobrojniNiz = [1, 4, 4, 9, 7, 8]; 
arSr3 = 5.5
*/

let parniIndexSuma = celobrojniNiz => {
    let suma = 0;
    for (i = 0; i < celobrojniNiz.length; i++) {
        if (i % 2 == 0) {
            suma += celobrojniNiz[i];
        }
    }
    return suma;
}

console.log("Zadatak 13: Suma elemenata sa parnim indexom (zero included) u prvom nizu iznosi " + parniIndexSuma(celobrojniNiz));

////////////////////////////////////////////////////////////////////////////////////////////////////////

//zadatak 14: Promeniti znak svakom elementu celobrojnog niza.

let MenjaZnak = niz => {
    for (let i = 0; i < niz.length; i++) {
        console.log(-1 * niz[i]);
    }
}
MenjaZnak(celobrojniNiz);

/* podsetnik: 
celobrojniNiz = [1, 4, 4, 9, 7, 8]; 
arSr3 = 5.5
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////

//zadatak 15: Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

let MenjaZnak2 = niz => {
    for (let i = 0; i < niz.length; i++) {
        if (i % 2 == 0 && niz[i] % 2 != 0) {
            //ili da ispise 0 - niz[i];
            console.log(-1 * niz[i]);
        }
    }
}
MenjaZnak2(celobrojniNiz);

////////////////////////////////////////////////////////////////////////////////////////////////////////

//zadatak 16: Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

let shopping = ["mleko", "burek", "cokolada", "jogurt"];
let lista = shopping => {
    let tabela1 = `<ul>`;
    // let tabela1 = `<ul style="border: 1px solid black; width: 50%; padding: 5px; list-style-position: inside">`;
    for (i = 0; i < shopping.length; i++) {
        tabela1 += `<li>${shopping[i]}</li>`;
    }
    tabela1 += `</ul>`;
    return tabela1;
}
// document.body.innerHTML += lista(shopping);
document.getElementById('d1').innerHTML += lista(shopping);

console.log("Zadatak 16 je na ekranu - lista.");
lista(shopping);

////////////////////////////////////////////////////////////////////////////////////////////////////////

// zadatak 17: Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let kosarka = ["Partizan", "Zvezda", "Ne znam xD"];

let tabela = kosarka => {
    let tabela2 = `<table>`;
    // let tabela2 = `<table style="border: 1px solid black; width: 50%; padding: 5px; ">`;
    for (i = 0; i < kosarka.length; i++) {
        tabela2 += `<tr><td>${[i + 1]}. ${kosarka[i]}</td></tr>`;
    }
    tabela2 += `</table>`;
    return tabela2;
}
document.getElementById('d1').innerHTML += tabela(kosarka);
console.log("Zadatak 17 je na ekranu - tabela.");

////////////////////////////////////////////////////////////////////////////////////////////////////////

// zadatak 18: Dat je niz stringova čiji su članovi putanje do slika. Prikazati svaku sliku u html dokumentu sa putanjama navedenim u nizu.

let slike1 = ["https://media.distractify.com/brand-img/NGZNE1pEd/0x0/gojo-satoru-1621289028724.png", "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/10/Gojo-Jujutsu-Kaisen-Eyes-Uncovered.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5", "https://animehunch.com/wp-content/uploads/2021/06/a412b1344e2a1bf02c273854edc370ea-768x437.jpg"];

let putanjeSlika = slike1 => {
    let slika = "";
    for (i = 0; i < slike1.length; i++) {
        slika += `<img src=${slike1[i]}>`; //izbacila width=200>
    }
    return slika;
}

document.getElementById('d1').innerHTML += putanjeSlika(slike1);
console.log("Zadatak 18 je na ekranu - slike.");

////////////////////////////////////////////////////////////////////////////////////////////////////////

// zadatak 19: Ispisati dužinu svakog elementa u nizu stringova.

let string1 = ["Marija", "Djordje", "Boxa"];

let duzinaElementa = string1 => {
    for (i = 0; i < string1.length; i++) {
        console.log(string1[i].length);
    }
}
duzinaElementa(string1);

////////////////////////////////////////////////////////////////////////////////////////////////////////

//zadatak 20: Odrediti element u nizu stringova sa najvećom dužinom.

let string0 = ["Marija", "Djordje", "Boxa", "Bogdan", "Nikola", "Leo", "Som", "Haralampije", "Tea", "Mia", "Tatjana", "Cica"];

let MaxDuzinaElementa = string0 => {
    let max = string0[0].length; //pretpostavka
    // console.log(max);
    let zapamti = string0[0];
    for (i = 1; i < string0.length; i++) { //i=1 jer se proverava naredni element, ne [0]0], imali bi korak viska da smo stavili i=0
        if (string0[i].length > max) {
            max = string0[i].length;
            zapamti = string0[i];
        }
    }
    return zapamti;
}
console.log("Zadatak 20: " + MaxDuzinaElementa(string0));

////////////////////////////////////////////////////////////////////////////////////////////////////////

// zadatak 21: Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

// prosečne dužine svih stringova u nizu. -> aritmeticka sredina
let arSredinaDuzine = niz => {
    let suma = 0;
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i].length;
        brojac++;
    }
    return (brojac != 0) ? suma / brojac : 0;
}

let duzinaIznadProseka = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].length > arSredinaDuzine(niz)) {
            brojac++;
        }
    }
    return brojac;
}

console.log("Zadatak 21: " + duzinaIznadProseka(string0));

////////////////////////////////////////////////////////////////////////////////////////////////////////

//zadatak 22: Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.

let string2 = ["Marija", "Djordje", "Boxa", "Bogdan", "Nikola", "Leo", "Som"];

let sadrziSlovoA = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].includes("a")) {
            brojac++;
        }
    }
    console.log("Zadatak 22: " + brojac);
}

sadrziSlovoA(string2);


//zadatak 22A: Odrediti broj pojavljivanja slova 'a’ u nizu stringova.

let brojKarakteraA = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        //niz[i] je string
        let element = niz[i];
        //sada prolazimo kroz sve karaktere stringa element
        for (let j = 0; j < element.length; j++) {
            if (element[j] == "a" || element[j] == "A") {
                brojac++;
            }
        }
    }
    console.log("Zadatak 22A: " + brojac);
}

brojKarakteraA(string2);

////////////////////////////////////////////////////////////////////////////////////////////////////////

//zadatak 23: Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.

let pocinjeNaA = ["Marija", "Boxa", "Andrija", "Andjela", "Djordje", "I am legend", "avokado", "banana", "uananananananana"];

let prvoSlovoA = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {
        if (niz[i].charAt(0) === "a" || niz[i].charAt(0) === "A") {
            console.log(niz[i]); //ovde samo testiram
            brojac++;
        }
    }
    console.log("Zadatak 23: " + brojac);
}

prvoSlovoA(pocinjeNaA);

////////////////////////////////////////////////////////////////////////////////////////////////////////

/*zadatak 24: Dati su nizovi
a[0],a[1],...a[n-1] i
b[0],b[1],...b[n-1]
Formirati niz c[0],c[1],...c[2n-1] ciji su elementi a[0],b[0],a[1],b[1]...,a[n-1],b[n-1]
*/

//duzina (length) stringa je od 1 do n, a indexi su od 0 do n-1 
// dat je niz a koji ima n elemenata, i dat je niz b koji takodje ima n elemenata. Indexi niza a idu od 0 do n-1, indexi niza b idu od 0 do n-1. 
let a1 = ["Milica", "Jovana", "Stefan", "Djordje"];
let b1 = ["Daniela", "Bogdan", "Maria", "Bojan"];
let spojitiDvaNiza = (a, b) => {
    let c = [];
    //duzina niza a je jednaka duzini niza b... treba li ispitivanje?
    for (let i = 0; i < a.length; i++) {
        // c[i] = [a[i], b[i]]; -> nemoj ovo, nemoj da ga delis u vise objekata
        c[2 * i] = a[i];
        c[2 * i + 1] = b[i];
        //drugi nacin
        //c.push(a[i]);
        //c.push(b[i]);
    }
    return c;
}

console.log("Zadatak 24: " + spojitiDvaNiza(a1, b1));

let zad24DN = (a, b) => {
    let c = [];
    let m = Math.min(a.length, b.lenth); //proveriti duzinu, u slucaju da duzina a nije jednaka duzini b
    for (let i = 0; i < m; i++) {
        c.push(a[i]);
        c.push(b[i]);
    }
    for (let i = m; i < a.length; i++) { //za slucaj da je a duzi niz
        c.push(a[i]);
    }
    for (let i = m; i < b.length; i++) { //za slucaj da je b duzi niz
        c.push(b[i]);
    }
    return c;
}
let res = zad24DN(a, b);
console.log(res);

////////////////////////////////////////////////////////////////////////////////////////////////////////

/*zadatak 25: Dati su nizovi
a[0],a[1],...a[n-1] i
b[0],b[1],...b[n-1]
Formirati niz c[0],c[1],...c[n-1] ciji su elementi a[0]*b[0],a[1]*b[1]...,a[n-1]*b[n-1]*/

//pretpostavka: samo brojevi

//duzina (length) stringa je od 1 do n, a indexi su od 0 do n-1 
// dat je niz a koji ima n elemenata, i dat je niz b koji takodje ima n elemenata. Indexi niza a idu od 0 do n-1, indexi niza b idu od 0 do n-1.

let a2 = [2, 13, 43, 1, 7, 9];
let b2 = [13, 2, 2, 5, 4, 9];
let pomnozitiDvaNiza = (a, b) => {
    let c = [];
    //duzina niza a je jednaka duzini niza b... treba li ispitivanje?
    for (let i = 0; i < a.length; i++) {
        c[i] = [a[i] * b[i]];
    }
    return c;
}

console.log("Zadatak 25: " + pomnozitiDvaNiza(a2, b2));

////////////////////////////////////////////////////////////////////////////////////////////////////////

/*zadatak 26: Na osnovu niza a[0],a[1],...,a[2n-1] formirati niz b[0],b[1],...b[n-1] po formuli:
b[i] = (a[i]+a[2n-1-i])/2
*/

/*
podsetnik:
let a2 = [2, 13, 43, 1, 7, 9]; */

let polaPrvogNiza = a => {
    let b = [];
    //index je uvek od 0 do n-1, duzina od 1 do n, bice korekcije da je 2n-1=a.length-1
    for (let i = 0; i < a.length; i++) {
        if (i < (a.length / 2)) {
            b[i] = (a[i] + a[(a.length - 1) - i]) / 2;
        }
    }
    return b;
}

console.log("Zadatak 26: " + polaPrvogNiza(a2));



///////////////////////////////////////////////
/* Funkcije - vezbanje

Zadatak 7: Programirati funkciju za mašinu za izradu nogara za stolove u jednoj fabrici drveta. Prva noga stola je duža druge noge stola isto koliko druga noga stola od treće noge stola, isto kao i treća noga stola od četvrte noge stola. Dužina prve noge stola i još dve noge stola su poznate, a četvrta nije poznata. Funkcija fabrika određuje i vraća dužinu izostale noge stola ako se funkciji prosleđuju poznate dužine ostale tri noge stola (dužina prve noge stola i dužine neke dve noge stola).*/

/* prva duza od druge za d
druga druza od trece za d
treca duza od cetvrte za d

poznato: tri noge poznate
nepoznato: cetvrta*/

function fabrika(a, b, c) {
    //1. poredjam ih da a>b i b>c, tako da cemo morati da ih ispremestamo
    // analogija: sipanje soka iz jedne case u drugu -> sipamo u trecu casu prvo, da bi sacuvali jedan sok iz jedne case, itd.
    if (a < b) {
        let pomocni = a;
        a = b;
        b = pomocni;
    }
    if (a < c) {
        let pomocni = a;
        a = c;
        c = pomocni;
    }
    //ovim gore smo osigurali da je a najvece
    if (b < c) {
        let pomocni = b;
        b = c;
        c = pomocni;
    }
    // varijanta 1: prosledjeno 40> 30> 20> d -> fali duzina 10
    if (a - b == b - c) {
        return c - (b - c); //od c oduzimamo razliku i dobijemo cetvrti nogar
    }
    // varijanta 2: prosledjeno 40>b>20>10 -> fali 30
    else if (a - b == 2 * (b - c)) {
        return a - (b - c);
    }
    // varijanta 3: prosledjeno 40>30>c>10 -> fali 20
    else if (a - b == (b - c) / 2) {
        return b - (a - b);
    }
    else {
        return 0; //umesto da izbaci gresku
    }
}