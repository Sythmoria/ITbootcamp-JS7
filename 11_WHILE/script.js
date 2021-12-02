//iskljuci Auto Save u File ovde pre nego sto nastavis

// let i = 1;
// console.log(i); //1
// i++;
// console.log(i); //2
// i++;
// console.log(i); //3
// i++;
// console.log(i); //4
// i++;
// console.log(i); //5
// i++;

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log(`Vrednost promenljive i nakon petlje je: ${i}`);

// ZADATAK 1

// Ispisati brojeve od 1 do 20:
// Svaki u istom redu
// Svaki u novom redu

// 1A
let rez = "";
let j = 1;
while (j <= 20) {
    rez += j + " ";
    j++;
}
console.log(rez);

// 1B
let k = 1;
while (k <= 20) {
    console.log(k);
    k++;
}

// ZADATAK 2

// Ispisati brojeve od 20 do 1.

i = 20;
while (i >= 1) {
    console.log(i);
    i--;
}

// ZADATAK 3

// Ispisati parne brojeve od 1 do 20.

i = 1;
while (i <= 20) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++; //i mora da bude van if jer cemo u suprotnom upasti u beskonacnu petlju
}

//Drugi nacin
i = 2;
while (i <= 20) {
    console.log(i);
    i += 2; //uvecaj i za dva : i = i + 2;
}


// ZADATAK 4

// Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

// I nacin

// document.body.innerHTML += "<p style:='color:red'>1. paragraf</p>"; //moraju navodnici da se zamene, nebitno gde ce " " a gde ''
// document.body.innerHTML += "<p style:='color:purple'>2. paragraf</p>";
// document.body.innerHTML += "<p style:='color:green'>3. paragraf</p>";
// document.body.innerHTML += "<p style:='color:red'>4. paragraf</p>";
// document.body.innerHTML += "<p style:='color:purple'>5. paragraf</p>";
// document.body.innerHTML += "<p style:='color:green'>6. paragraf</p>";

//  II nacin

let n = 16;
i = 1;
while (i <= n) {
    //Doda se paragraf
    if (i % 3 == 1) {
        document.body.innerHTML += `<p style:='color:red'>${i} paragraf</p>`;
    }
    else if (i % 3 == 2) {
        document.body.innerHTML += `<p style:='color:purple'>${i} paragraf</p>`;
    }
    else {
        document.body.innerHTML += `<p style:='color:green'>${i} paragraf</p>`;
    }
    i++;
}

// III nacin random boje

// ZADATAK 5

// ZADATAK 6

// Odrediti sumu brojeva od 1 do 100
i = 1;
let suma = 0; //sumu od pocetka imamo , 'pocinjemo da kucamo racun'
while (i <= 100) {
    //iskoristi i tako da se odredi suma
    // zamisli da si na kasi, kako kasa funkcionise
    suma = suma + i;
    i++;
}
console.log(`Suma brojeva od 1 do 100 jednaka je: ${suma}`);


/*
i + 1
suma = suma + i
---------------------------------
iteracije  |    i     |   suma
---------------------------------
    0           1           0
    1           2           1
    2           3           3
    3           4           6
    4           5           10
    ..........................

    100         101         5050
    kad je i=101 izlazi se iz petlje
*/

// ZADATAK 7

// Odrediti sumu brojeva od 1 do n
n = 18;
i = 1;
suma = 0;
while (i <= n) {
    suma += i; //ovo je isto kao suma + i
    i++;
}
console.log(`Suma brojeva od 1 do ${n} jednaka je ${suma}`)

//  ZADATAK 8

//  ZADATAK 9

// Odrediti proizvod brojeva od n do m
n = 4;
let m = 6;

i = n; //ubacujemo ga zbog console log da ne bi promenilo n na kraju u log
let proizvod = 1;

while (i <= m) {
    proizvod = proizvod * i;
    i++;
}
console.log(`Proizvod brojeva od ${n} do ${m} jednak je ${proizvod}.`);


// ZADATAK 10

// Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

n = 2;
m = 7;

i = n;
suma = 0;

while (i <= m) {
    if (i % 2 == 0) {
        suma = suma + (i * i);
    }
    i++;
}
console.log(`Suma kvadrata parnih brojeva od ${n} do ${m} je: ${suma}`);

n = 2;
m = 7;

i = n;
suma = 0;

while (i <= m) {
    if (i % 2 == 1) {
        suma = suma + i * i * i;
    }
    i++;
}
console.log(`Suma kubova neparnih brojeva od ${n} do ${m} je: ${suma}`);