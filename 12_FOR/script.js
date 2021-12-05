/* PRIMER: ispisi brojeve od 1 do 5
A) koriscenjem while
B) koriscenjem for*/

// A)

// let a = 1;
// while (a <= 5) {
//     console.log(`Na redu je broj ${a}`);
//     a++;
// }

// B)

// for (let i = 1; i <= 5; i++) {
//     console.log(`For petlja iteracija ${i}`);
// }

//ili

// i = 1; //ubaci let kad se prvi put deklarise
// for (i; i <= 5; i++) {
//     console.log(`For petlja iteracija ${i}`);
// }

//ili

// i = 1; //ubaci let kad se prvi put deklarise
// for (; i <= 5; i++) {
//     console.log(`For petlja iteracija ${i}`);
// }

// ZADATAK 1

/* Ispisati brojeve od 1 do 20 */

/*let x = 1;
let y = 20;
let i;
for (i=x; i<=y; i++) {
    console.log(i);
}*/


// ZADATAK 2

/* Ispisati brojeve od 20 do 1 */

// for (i = 20; i >= 1; i--) {
//     console.log(i);
// }

// ZADATAK 3

/* Ispisati parne brojeve od 1 do 20 */

//prvi nacin

// for (i = 1; i <= 20; i++) { //ne moze logicki operator ovde
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

//drugi nacin
// for (i = 2; i <= 20; i += 2) { //for (i = 2; i <= 20; i ++ , i++ ) moze i ovo, funkcionise. Takodje, i = i + 2 -> mora da ima i= nesto
//     console.log(`Drugi nacin, rezultat je: ${i}`);
// }

//primer za vise varijabli

/*for (let i=1, k=5; i<=k; i++) {
    console.log(i);
} */

// ZADATAK 4

/* Ispisati dvostruku vrednost brojeva od 5 do 15 */

// let x = 5;
// let y = 15;
// let i;
// for (i = x; i <= y; i++) {
//     console.log(i * 2);
// }

// ZADATAK 5

/* Odrediti sumu brojeva od 1 do n */

// console.log(`Odrediti sumu brojeva od 1 do n`);

// u while smo ovde ubacivali suma = 0, primer kasirke
// let n = 100;
// let suma = 0;
// mozemo i n i sumu u for da stavimo: for (i=1, n=100, suma=0; i<=n; i++)
// for (i = 1; i <= n; i++) {
//     suma += i; //ovo je isto sto i suma = suma + i
// }
// console.log(suma); //mora da bude van for petlje jer bi u suprotnom ispisivao svaku sumu za svaku iteraciju, ispisao bi 100 puta

// ZADATAK 6

/* Odrediti sumu brojeva od n do m  */

/*let n = 5;
let m = 10;
let suma = 0;
for (i = n; i <= m; i++) {
    suma += i; //ovo je isto sto i suma = suma + i
}
console.log(suma); //mora da bude van for petlje jer bi u suprotnom ispisivao svaku sumu za svaku iteraciju, ispisao bi 100 puta */

// ZADATAK 7

/* Odrediti proizvod brojeva od n do m */
// console.log(`Odrediti proizvod brojeva od n do m`);

// let n = 2;
// let m = 6;
// let p = 1; //neutral za mnozenje
// for (i = n; i <= m; i++) {
//     p *= i; //isto kao p = p * i
// }
// console.log(`Proizvod brojeva od ${n} do ${m} je ${p}`);

// ZADATAK 8

/* Odrediti sumu kvadrata brojeva od n do m */

/*let n = 2;
let m = 7;
let suma = 0; //sabiranje
let x;
for (i = n; i <= m; i++) {
    x = i * i;
    suma = suma + x;
}
console.log(`Proizvod brojeva od ${n} do ${m} je ${suma}`);*/

// ZADATAK 9

/*Preuzeti proizvoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3.
For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora). */

// <img src="slike/1.jpg">
// <img src="slike/2.jpg">
// <img src="slike/3.jpg">

// for (let i = 1; i <= 3; i++) {
//     document.body.innerHTML += `<img src="slike/${i}.jpg">`;
// }

// ZADATAK 10

/* Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.  */

/*let br = 0; //kada pocinjemo da brojimo, pocetak je nula
for (let i = 20; i <= 100; i++) {
    if (i % 11 == 0) {
        // console.log(i); //ovim ispisemo sve brojeve deljive sa 11
        br++;
    }
}
console.log(`U intervalu od 20 do 100 ima ${br} brojeva deljivih sa 11.`);*/

// ZADATAK 11

/* Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
 */
/*let br = 0; //kada pocinjemo da brojimo, pocetak je nula
for (let i = 5; i <= 150; i++) {
    if (i % 13 == 0) {
        // console.log(i); //ovim ispisemo sve brojeve deljive sa 13
        br++;
    }
}
console.log(`U intervalu od 5 do 150 ima ${br} brojeva deljivih sa 13.`);*/

// ZADATAK 12

/* Ispisati aritmetičku sredinu brojeva od n do m.
 */

//mora da se sumira i mora da se prebroji koliko ima br

/*let n = 10;
let m = 50;
let suma = 0;
let br = 0;
for (let i = n; i <= m; i++) {
    suma += i;
    br++;
}
let as = suma / br;
console.log(`Aritmeticka sredina brojeva od ${n} do ${m} je ${as}`);*/

// ZADATAK 13

/* Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno.  */
/* let n = -10;
let m = 7;
let br = 0;
let br2 = 0;
for (let i = n; i <= m; i++) {
    if (i < 0) {
        br++;
    }
    else if (i > 0) {
        br2++;
    }
    else {
        console.log(`Napomena: Nula je isljucena iz brojaca jer nije ni pozitivna ni negativna.`);
    }
}
console.log(`Ima ${br} negativnih brojeva i ${br2} pozitivnih brojeva`); */


/* drugi nacin
let n = 0;
let m = 7;
let br = 0;
let br2 = 0;
for (let i = n; i <= m; i++) {
    if (i < 0) {
        br++;
    }
    else {
        br2++;
    }
}
console.log(`Ima ${br} negativnih brojeva i ${br2 - 1} pozitivnih brojeva`); */

// ZADATAK 14

/* Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5. */

/* let n = 5;
let m = 50;
let br = 0;
let a = 3;
let b = 5;
for (i = n; i <= m; i++) {
    if (i % a == 0 || i % b == 0) {
        br++;
    }
}
console.log(`Ima ${br} brojeva koji su deljivi brojevima ${a} ili ${b} u intervalu od ${n} do ${m}`); */


// ZADATAK 15

/* Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.
 */
/*n = 20;
m = 42;
suma = 0;
br = 0; //kada pocinjemo da brojimo, pocetak je nula
for (i = n; i <= m; i++) {
    if (i % 10 == 4) {
        suma += i;
        br++;
    }
}
console.log(`U intervalu od ${n} do ${m} ima ${br} brojeva kojima je poslednja cifra 4, a njihova suma iznosi ${suma}.`);*/

// ZADATAK 16

/* Odrediti sumu brojeva od n do m koji nisu deljivi brojem a */

/*n = 33;
m = 40;
let a = 2;
suma = 0;
for (i = n; i <= m; i++) {
    if (i % a != 0) {
        suma += i;
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji nisu deljivi brojem ${a} iznosi ${suma}.`);*/

// ZADATAK 17

/* Odrediti proizvod brojeva od n do m koji su deljivi brojem a  */

/* let n = 2;
let m = 7;
let a = 2;
let pr = 1;
for (i = n; i <= m; i++) {
    if (i % a == 0) {
        pr *= i;
    }
}
console.log(`Proizvod brojeva od ${n} do ${m} koji su deljivi brojem ${a} iznosi ${pr}.`); */

// ZADATAK 18

/* Odrediti sa koliko brojeva je deljiv uneti broj k */

//FOR petljom
/*let k = 1;
let br = 0;
for (let i = 1; i <= k; i++) {
    if (k % i == 0) {
        br++;
        // console.log(i);
    }
}
console.log(`Broj ${k} je deljiv sa ${br} brojeva.`);*/

//WHILE petljom

/*br = 0;
i = 1;
while (i <= k) {
    if (k % i == 0) {
        br++;
        // console.log(i);
    }
    i++;
}
console.log(`Broj ${k} je deljiv sa ${br} brojeva.`);*/

// ZADATAK 19

/* Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom. */

//samo se nadovezujemo na prethodni zadatak
/*if (br == 1) {
    console.log(`Broj ${k} nije ni prost ni slozen.`);
}
else if (br == 2) {
    console.log(`Broj ${k} je prost broj.`);
}
else {
    console.log(`Broj ${k} je slozen.`);
}*/


// ZADATAK 20

/* Napraviti tabelu sa 6 redova.
Svaki red tabele treba da ima po dve ćelije (dve kolone).
Svakom parnom redu dodati klasu „obojen“.
Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 
 */

// style="border:2px solid black"

let tabela = `<table border="1">`;
for (let red = 1; red <= 6; red++) {
    if (red % 2 == 0) {
        tabela += //dodaje na tabelu, nece dodati <table> nego dodaje red
            `
        <tr class="roze">
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
        `
    }
    else {
        tabela +=
            `
        <tr>
            <td>Tekst</td>
            <td>Tekst</td>
        </tr>
        `
    }
}
tabela += `</table>`;
document.body.innerHTML += tabela;

document.body.innerHTML += `<br>`;

// ZADATAK 21

/* Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.
 */

let lista = `<ul>`;
let el = 0;
for (let elementi = 1; elementi <= 10; elementi++) {
    if (elementi % 3 == 0) {
        el++;
        lista +=
            `
        <li class="purple">Element ${el}</li>
        `
    }
    else {
        el++;
        lista +=
            `
        <li>Element ${el}</li>
        `
    }
}
lista += `</ul>`;
document.body.innerHTML += lista;

document.body.innerHTML += `<br>`;

// ZADATAK 22

/* Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju. */

let tabla = `<p>Zadatak 22</p>`;
for (let elementi = 1; elementi <= 64; elementi++) {
    tabla +=
        `<span class="okvir">${elementi}</span>`;
    if (elementi % 8 == 0) {
        tabla += `<br><br>`;
    }
}
document.body.innerHTML += tabla;


// DRUGI NACIN

/* Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju. */

let tabla3 = `<p>Zadatak 22a</p>`;
for (let red = 1; red <= 64; red += 8) {
    for (let kolona = 1; kolona <= 8; kolona++) {
        tabla3 +=
            `<span class="okvir">${red + kolona - 1}</span>`;
    }
    tabla3 += `<br><br>`;
}
document.body.innerHTML += tabla3;

// ZADATAK 23

/* Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table.
U realizaciji ovog zadatka koristiti for petlju. */


let tabla2 = `<p>Zadatak23</p>`;
let beloPolje = 1;
for (let elementi2 = 1; elementi2 <= 64; elementi2++) {
    if (beloPolje == 1) {
        tabla2 +=
            `<span class="okvir">${elementi2}</span>`;
        if (elementi2 % 8 == 0) {
            tabla2 += `<br><br>`;
        }
        else {
            beloPolje = 0; //menjamo boju samo kada nije 8. Kada dodje do broja deljivim 8, naredni je iste boje, i tada ne menjamo.
        }
    }
    else {
        tabla2 +=
            `<span class="crno">${elementi2}</span>`;
        if (elementi2 % 8 == 0) {
            tabla2 += `<br><br>`;
        }
        else {
            beloPolje = 1;
        }
    }
}
document.body.innerHTML += tabla2;