console.log("Pozdrav iz JS datoteke!")

let a = 3, b = 6; //moze u istoj liniji koda vise promenljivih da se uvede tj deklarise
console.log(a * b); /*ne moze samo console.log(a) i da ispise samo a tj samo vrednost a*/
console.log("Pera" + " Stankovic");
console.log("Pera" * " Stankovic"); //ne moze ovo, samo +

b = b / a;
console.log(a, b); //a=3, b=2
a = b * a + a; //2*3+3
console.log(a, b); //a=9, b=2
b = (a - 2 * b) / b;
console.log(a, b); // (9-2*2)/2=5/2=2.5
console.log(a, b); //a je 9, b je 2.5

// a = a + 10; //9+10=19
// console.log(a); //a je 19 

a += 10;
console.log(a); //a = 19

// b /= a; //ovo je b = b / a
// console.log(b); 

// a = a + 1;
// a += 1;
a++;
console.log(a);

++a;
console.log(a);

//bitno je da li je ++a ili a++ u console.log

let c = 5;
console.log(c++); //stara vrednost se ispisala -> prvo se iskoristi stara vrednost promenljive u izrazu pa se onda vrednost promenljive poveca
console.log(c); //tek ovde se menja vrednost c

let d = 3;
console.log(++d); //Ovde ce se ispisati 4 kao rezultat, jer se prvo promenljiva poveca za 1 pa se njena nova vrednost iskoristi u izrazu
console.log(d);

c = 4; //vec je deklarisana u 35.oj liniji, ovde menjamo vrednost
d = 3;
x = (c++) * (--d); // 4*2
console.log(c, d, x); // 5, 2, 8 -> svima se promenila vrednost

console.log(7 % 2); // 7 = 3 * 2 + 1 -> rezultat je 1
console.log(9 % 2); // 9 = 4 * 2 + 1 -> rezultat je 1

console.log(180 % 60); // 180=3*60 + 0 -> rezultat je 0

console.log(4 ** 3); //4 na treci stepen -> 64

c = 3;
d = (c ** 3) + 1; // ( 3 ** 3) + 1 = 28
console.log(d);


// SAMOSTALNO VEZBANJE ZADATAKA

// zadatak1
let sat = 6;
let min = 42;
let odPonoci = sat * 60 + min;
console.log(odPonoci); //rezultat bi trebalo da bude 402

// zadatak2
let uSatima = Math.floor(odPonoci / 60);
console.log(uSatima);
let uMinutima = odPonoci % 60;
console.log(uMinutima);

// zadatak3
let cenaRobe = 1399;
let novcanica = 2000;
let kusur = novcanica - cenaRobe;
console.log(kusur);

// zadatak4
// const datum = new Date();
// let tSat = datum.getHours();
// let tMin = datum.getMinutes();
// odPonoci = tSat * 60 + tMin;
// console.log(odPonoci);

// zadatak5
//yyyy/mm/dd
// let dDatum = datum.getFullYear();
// let dMonth = datum.getMonth() + 1; //meseci krecu od nule
// let dDay = datum.getDate();
// console.log("Danas je " + dDatum + "/" + dMonth + "/" + dDay);

//Trenutno vreme i datum
let datum = new Date(); // datum - objekat koji sadrzi
let godina = datum.getFullYear();
let mesec = datum.getMonth() + 1;
let datumUMesecu = datum.getDate();
let danUNedelji = datum.getDay();
console.log("Danas je " + datumUMesecu + "." + mesec + "." + godina + ".");
console.log(danUNedelji);