function suma(a, b) {
    return a + b;
}
console.log(suma(4, 5));
console.log(suma(1, 0));

// Anonimne funkcije - funkcije koje nemaju ime vec se smestaju u promenljivi, a poziv funkcije se ostvaruje pozivom promenljive

let suma2 = function (a, b) {
    return a + b;
}

console.log(suma2(6, 6));

// Arrow funkcije - skraćen zapis anonimnih funkcija

let suma3 = (a, b) => {
    return a + b;
}

console.log(suma3(5, 3));

// arrow f-ja za ispis poruke

let hello = () => {
    console.log("Hellow world!");
}

hello();

let pozdrav = (ime, prezime) => {
    console.log(("Zdravo " + ime + " " + prezime));
}

pozdrav("Kristian", "Zdravkovic");
pozdrav("Vladan", "Stojic");

//Arrow f-ja u kojoj se prosledjuje ime i godine korisnika, a ona ispisuje ime i da li je korisnik punoletan ili ne

let ispis = (ime, godine) => {
    if (godine < 18) {
        let poruka = `Korisnik ${ime} je maloletna osoba`;
        document.body.innerHTML += `<p style="color:blue">${poruka}</p>`;
    }
    else {
        let poruka = `Korisnik ${ime} je punoletna osoba`;
        document.body.innerHTML += `<p style="color:green">${poruka}</p>`;
    }
}

ispis("Pera", 28);
ispis("Mika", 16);

// /////////////////////////////////
// da li je broj paran ili ne
let paran = n => (n % 2 == 0);
console.log(paran(8));

/*Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.*/

//prvi nacin BOGDANE ALAL VERA
let neparan = n => n % 2 != 0 ? console.log(`Jeste`) : console.log(`Nije`);


//drugi nacin
// let neparan = n => {
//     if (n % 2 != 0) {
//         console.log(`Tacno!`);
//     }
//     else {
//         console.log(`Netacno!`);
//     }
// }
neparan(6);

/*Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.*/

let maks2 = (a, b) => {
    let max;
    if (a > b) {
        max = a;
    }
    else if (b > a) {
        max = b;
    }
    else {
        max = `Ova dva uneta broja su jednaka`;
    }
    return max;
}
console.log(maks2(5, 9));

//skraceno, al ignorisemo da su jednaki:
//ternarni operator ? :
let max2 = (a, b) => a > b ? a : b;
console.log(max2(6, 9)); //svejedno je koji je veci kad su oba jednaka, ispisace nam tacan svakako, samo ce biti shuntavo da se uklopi poruka u console log

//najkraci nacin

let max4 = (a, b, c, d) => max2(max2(a, b), max2(c, d));
console.log(max4(2, 4, 17, 9));

//ili

let max4DN = (a, b, c, d) => max2(max2(max2(a, b), c), d);

console.log(max4DN(17, 4, 25, 9));

//prvi nacin:
let maks4 = (a, b, c, d) => {
    let max = maks2(maks2(a, b), maks2(c, d));
    return max;
}
console.log(maks4(12, 155555, 1745, 220));

// drugi nacin:
// let maks4 = (a, b, c, d) => {
//     let max = a;
//     if (max < b) {
//         max = b;
//     }
//     if (max < c) {
//         max = c;
//     }
//     if (max < d) {
//         max = d;
//     }
//     if (a == b && a == c && a == d) {
//         max = `ova 4 broja su jednaka`
//     }
//     return max;
// }
// console.log(maks4(12, 15, 1745, 220));


/*Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.*/

// let slika = putanja => {
//     document.body.innerHTML += `<img style="width:200px; height:200px; border-radius:50%;" src=${putanja}>`;
// }

//kraca varijanta: 
let slika = putanja => document.body.innerHTML += `<img style="width:200px; height:200px; border-radius:50%;" src=${putanja}>`;

slika("https://www.looper.com/img/gallery/the-ending-of-sailor-moon-eternal-explained/intro-1623072853.jpg");

let slika2 = putanja => `<img style="width:200px; height:200px; border-radius:50%;" src=${putanja}>`;

document.body.innerHTML += slika2("https://www.looper.com/img/gallery/the-ending-of-sailor-moon-eternal-explained/intro-1623072853.jpg");


/*Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
 */

let paragraf = (boja, tekst) => {
    document.body.innerHTML += `<p style="color:${boja}">${tekst}</p>`
}
paragraf("SteelBlue", "I'm a Barbie girl in a Barbie world");

/* Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
 */

// let sedmiDan = n => {
//     switch (n) {
//         case (n == 0 || n == 7):
//             console.log(`Nedelja`);
//             break;
//         case 1:
//             console.log(`Ponedeljak`);
//             break;
//         case 2:
//             console.log(`Utorak`);
//             break;
//         case 3:
//             console.log(`Sreda`);
//             break;
//         case 4:
//             console.log(`Cetvrtak`);
//             break;
//         case 5:
//             console.log(`Petak`);
//             break;
//         case 6:
//             console.log(`Subota`);
//             break;
//         default:
//             console.log(`Netacan unos. Unesite broj od 1 do 7`);
//     }
// }
// sedmiDan(6);

//drugi nacin:
// let sedmiDan = n => {
//     let dan = n % 7;
//     if (dan == 0) {
//         return "Nedelja";
//     }
//     else if (dan == 1) {
//         return "Ponedeljak";
//     }
//     else if (dan == 2) {
//         return "Utorak";
//     }
//     else if (dan == 3) {
//         return "Sreda";
//     }
//     else if (dan == 4) {
//         return "Cetvrtak";
//     }
//     else if (dan == 5) {
//         return "Petak";
//     }
//     else {
//         return "Subota";
//     }
// }

//treci nacin:
let sedmiDan = n => (n % 7 == 0) ? "Nedelja" : (n % 7 == 1) ? "Ponedeljak" : (n % 7 == 2) ? "Utorak" : (n % 7 == 3) ? "Sreda" : (n % 7 == 4) ? "Cetvrtak" : (n % 7 == 5) ? "Petak" : "Subota";
// za subotu nema ispitivanje jer nam ide u else

// console.log(sedmiDan(7));

for (i = 0; i < 7; i++) {
    console.log(i);
}


// Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.

let deljivSaTri = (n, m) => {
    let br = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            br++;
        }

    }
    console.log(`Broj brojeva u intervalu ${n} do ${m} koji su deljivi brojem 3 iznosi ${br}.`);
}
deljivSaTri(15, 30);

// Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.

let sumiraj = (n, m) => {
    let zbir = 0;
    for (let i = n; i <= m; i++) {
        zbir += i;
    }
    console.log(zbir);
}

sumiraj(1, 5);


// ZADATAK 14: Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

let petPuta = (recenica, boja) => {
    let font;
    for (let i = 10; i <= 50; i += 10) {
        font += `<p style="font-size:${i}px; color:${boja}">${recenica}</p>`;
    }
    return font;
}

document.body.innerHTML += petPuta("In the name of the Moon, I shall punish you.", "red");

/* ZADATAK 15: Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
 Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
 Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća). */

let praksa = (n, a, d) => n * a + (n - 1) * d;
console.log(praksa(3, 5000, 200));

/* ZADATAK 16: Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s */

let igre = (t, p, n) => (t > p || t < p + n) ? `Treba da saceka ${n - (t - p)}s.` : `Prosao.`

console.log(`Ekipa treba da ceka ${igre(15, 20, 25)} sekundi.`);