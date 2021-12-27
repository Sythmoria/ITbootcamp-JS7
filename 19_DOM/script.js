//Programska reprezentacija za HTML.
// Predstavlja stranicu na način koji omogućuje programu da promeni strukturu, stil i sadržaj HTML stranice.
// DOM predstavlja HTML dokument preko objekata povezanih u strukturi koja se zove stablo.
console.log("DOM");

// document.anchors
// Vraća sve <a> tagove koji imaju postavljen name atribut.
// document.URL
// Vraća URL adresu stranice.
// document.body
// Vraća <body> tag.
// document.documentElement
// Vraća <html> tag.
// document.forms
// Vraća sve <form> tagove.
// document.images
// Vraća sve <img> tagove.
// document.links
// Vraća sve <a> tagove koji imaju postaveljen href atribut.

console.log(document);
console.log(typeof document);
console.log(document.body);
console.log(typeof document.body);

//kako pristupiti jednom ili vise elemenata
//selektovanje elemenata

// document.getElementById(‘id’) - Vraća objekat – HTML element sa datim id-em
// document.getElementsByClassName(‘class’) - Vraća HTML kolekciju svih elemenata sa datom klasom
// document.getElementsByTagName(‘tag’) - Vraća HTML kolekciju svih zadatih tagova
// document.getElementsByName(‘name’) - Vraća HTML kolekciju svih elemenata koji imaju zadatu vrednost atributa name

let p1 = document.getElementById("p1"); //procitaj u html belesku -> postoji razlog sto ovde pise Element u JEDNINI
console.log(p1);
console.log(typeof p1);

let cont = document.getElementsByClassName("container");
console.log(cont); //izbacuje HTML collection za rezultat -> niz u objektu
console.log(typeof cont); //objekat (a u sebi sadrzi niz elemenata; objekat tipa HTML kolekcije)

// HTML Collection – kolekcija čijim članovima ne možemo pistupiti forEach petljom, ali može for!

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]); //jedino preko indexa moze da se pristupi
}

// cont.forEach(element => {
//     console.log(element);
// });
//forEach petlja nece moci da se izvrsi

// Na sreću, HTML kolekcija se može konvertovati u niz:
// let k = document.getElementsByClassName('klasa');
// let k1 = Array.from(k);
// k1.forEach(j => {
//     console.log(j);
// });

let contNiz = Array.from(cont)
contNiz.forEach(element => {
    console.log(element);
});

// document.getElementsByTagName(‘tag’) - Vraća HTML kolekciju svih zadatih tagova
let paragrafi = document.getElementsByTagName("p");
for (let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i]);
}

let linkovi = document.getElementsByName("link");
for (let i = 0; i < linkovi.length; i++) {
    console.log(linkovi[i]);
}

//ovo su Node liste:
//  document.querySelector(‘selector’) -> Kao parametar prima bilo koji validan CSS selektor. Kao rezultat vraća objekat – prvi HTML element koji zadovoljava dati selektor.
// document.querySelectorAll(‘selector’) -> Kao parametar prima bilo koji validan CSS selektor. Kao rezultat vraća Node listu svih HTML elemenata koji zadovoljavaju dati selektor.

// Node List – niz čijim članovima možemo pistupiti forEach petljom, kao i for petljom! 

p1 = document.querySelector("#p1"); //mora taraba jer je ID, tako pisemo u CSS
console.log(p1);

cont = document.querySelector(".container"); //imamo dva elementa, ali ce vratiti samo prvi
console.log(cont);

cont = document.querySelectorAll(".container");
console.log(cont);

// Node List – niz čijim članovima možemo pistupiti forEach petljom, kao i for petljom! 

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

cont.forEach(element => {
    console.log(element);
});

paragrafi = document.querySelectorAll("p");
console.log(paragrafi);

linkovi = document.querySelectorAll("[name='link']"); //nemoj `` da koristis unutra
console.log(linkovi);

// Sve elemente ispisati u konzoli:
// Dohvatiti prvi paragraf na stranici. -> odradjeno iznad
p1 = document.querySelector("p");
console.log(p1);

// Dohvatiti prvi div tag sa klasom „error“.
let cont2 = document.querySelector(".error");
console.log(cont2);

let div1 = document.getElementsByClassName("error");
console.log(div1[0]); //pristupa prvom
console.log(div1[div1.length - 1]); //pristupa poslednjem
// for petljom mozemo da mu pristupimo -> za jedan element samo index 0

// Dohvatiti poslednji red u tabeli.
cont2 = document.getElementById("tr1"); //nekad se seti da sacuvas fajl, some
console.log(cont2);
//ili
cont2 = document.querySelector("table tr:last-child td:last-child");
console.log(cont2);


// Dohvatiti sve linkove na stranici.
console.log(document.links); //vraca HTML Collection
// for petljom mozemo da mu pristupimo
//ili
cont2 = document.getElementsByTagName("a");
console.log(cont2);

cont2 = document.querySelectorAll("a")
cont2 = document.querySelectorAll("[href]")

// Dohvatiti sve slike na stranici.
console.log(document.images); //vraca HTML Collection
// for petljom mozemo da mu pristupimo
cont2 = document.getElementsByTagName("img"); //vraca jednu sliku
cont2 = document.querySelectorAll("img");
cont2 = document.querySelectorAll("[src]"); //vratilo je i script iz JS
cont2 = document.querySelectorAll("img[src]");
cont2 = document.querySelectorAll("img [src]");//izbacuje sve elemente koji se nalaze unutar img taga a da ti elementi u sebi imaju src podesen -> pazljivo sa razmacima
