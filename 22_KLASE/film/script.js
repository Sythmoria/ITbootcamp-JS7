import { Film } from "./film.js"; //posto nije default u film.js onda ovde Film ubacujemo u viticaste zagrade

let film1 = new Film("A Beautiful Mind", "Ron Howard", 2001, [8.2, 9.3, 7.9]);
// console.log(film1);
film1.stampaj();
let film2 = new Film("Parasite", "Bong Joon Ho", 2019, [8, 9, 7, 6]);
// console.log(film2);
film2.stampaj();
let film3 = new Film("Princess Mononoke", "Hayao Miyazaki", 1997, [7, 6, 7, 7, 8, 7]);
// console.log(film3);
film3.stampaj();

//testiram da li seter za naslov radi:
film1.naslov = "A Beautiful Mind <3";
film1.stampaj();

//testiram da li geter za naslov radi:
console.log(film1.reziser);


// U klasi Film dodati polje ocene koje čini niz ocena koje su korisnici dali filmu
// Kreirati niz od barem tri objekta klase Film
// Napraviti metod prosek koji vraća prosečnu ocenu 

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.
// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.
// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.
// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 
// NNapraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.
// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

//dodavanje ocene u film1:
film1.dodajOcenu(10);
film1.stampaj();

//prikaz svih filmova u tabelici
let tabelica =
    `<table border="1">
        <tr>
            <th>Naziv filma</th>
            <th>Reziser</th>
            <th>Godina Izdanja</th>
            <th>Ocene</th>
            <th>Prosecna Ocena</th>
        </tr>
    `;
let filmovi = [film1, film2, film3];
filmovi.forEach(element => {
    tabelica +=
        `<tr>
    <td>${element.naslov}</td>
    <td>${element.reziser}</td>
    <td>${element.godinaIzdanja}</td>
    <td>${element.ocene}</td>
    <td>${element.prosek()}</td>
</tr>`;
});
tabelica += `</table>`;
document.body.innerHTML = tabelica;

// Napraviti metod prosek koji vraća prosečnu ocenu 

console.log(film1.prosek());
console.log(film2.prosek());
console.log(film3.prosek());
// film1.prosek() + film2.prosek() + film3.prosek() podeljeno sa tri je 7.78 i to ne odgovara globalnom proseku

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

// iz godine u vek: Math.floor((year-1)/100) + 1;

function vekFilmova(array, century) {
    // ignorisi decimalne zareze:
    if (Math.floor(century) != century) {
        century = Math.floor(century);
    }
    //ispis:
    array.forEach(element => {
        if (element.godinaIzdanja >= ((century - 1) * 100 + 1) && element.godinaIzdanja <= century * 100) {
            //(century - 1) * 100 + 1) moze i kao century * 100 - 99
            console.log("U datom veku su snimljeni: " + element.naslov);
        }
    })
}

vekFilmova(filmovi, 21);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

function prosecnaOcena(array) {
    let sum = 0;
    let counter = 0;
    array.forEach(e => {
        e.ocene.forEach(element => {
            sum += element;
            counter++
        });
    });
    let average
    if (counter != 0) {
        average = sum / counter;
        return average = +(Math.round(average + "e+2") + "e-2"); //zaokruzivanje na max dve decimale ( nula decimala, jedna decimala, ili MAX dve) -> da se ne bi koristilo .toFixed(2) jer to vraca string
    }
    else {
        return 0;
    }
}

console.log("Prosecna ocena, globalna: " + prosecnaOcena(filmovi));

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.

function najboljeOcenjeni(array) {
    let maxProsek = array[0].prosek(); //pretpostavka
    let index = 0; //mora ovde nula jer mi for krece od 1
    for (let i = 1; i < array.length; i++) {
        if (maxProsek < array[i].prosek()) {
            maxProsek = array[i].prosek();
            index = i;
        }
    }
    return array[index];
}

console.log(najboljeOcenjeni(filmovi)); //vraca sve o filmu, ne broj -> be careful

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

function osrednjiFilm(array) {
    //apsolutna vrednost od proseka jednog elementa minus globalni prosek -> uporediti proseke
    let globalAverage = prosecnaOcena(array);
    // preko for-a:
    // let localAverage = array[0].prosek();
    // let index = 0; //treba mi nula jer je van for-a
    // for (let i = 1; i < array.length; i++) {
    //     if (Math.abs(localAverage - globalAverage) > Math.abs(array[i].prosek() - globalAverage)) {
    //         localAverage = array[i].prosek();
    //         index = i;
    //     }
    // }
    // return array[index];
    //preko forEach-a:
    let filmNajbliziProseku = array[0]
    let najmanjaRazlikaProseka = Math.abs(globalAverage - filmNajbliziProseku.prosek());
    array.forEach(f => {
        let prosecnaOcenaFilma = f.prosek();
        if (Math.abs(globalAverage - prosecnaOcenaFilma) < najmanjaRazlikaProseka) {
            najmanjaRazlikaProseka = Math.abs(globalAverage - prosecnaOcenaFilma);
            filmNajbliziProseku = f;
        }
    });
    return filmNajbliziProseku;
}
console.log(osrednjiFilm(filmovi));

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

// function najmanjaOcenaNajboljeg(array) {
//     let najbolji = najboljeOcenjeni(array);
//     let min = najbolji.ocene[0]; //pretpostavka
//     najbolji.ocene.forEach(element => {
//         if (min > element) {
//             min = element;
//         }
//     })
//     console.log(min);
// }
// najmanjaOcenaNajboljeg(filmovi);

//preko arrow:
let najmanjaOcenaNajboljeg = arr => {
    let najboljiFilm = najboljeOcenjeni(arr);
    let oceneNajboljegFilma = najboljiFilm.ocene;
    let najslabijaOcena = oceneNajboljegFilma[0];
    oceneNajboljegFilma.forEach(o => {
        if (o < najslabijaOcena) {
            najslabijaOcena = o;
        }
    });
    console.log(najslabijaOcena);
}

najmanjaOcenaNajboljeg(filmovi);

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

function najmanjaOcena(array) {
    let min = array[0].ocene[0]; //pretpostavke
    array.forEach(element => {
        element.ocene.forEach(e => {
            if (min > e) {
                min = e;
            }
        });
    });
    return min;
}
console.log(najmanjaOcena(filmovi));

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.
// function najcescaOcena(arr) {
//     let maxFrequency = 1; //default max frequency
//     let counter = 0; //brojac
//     let item; //da sacuva element sa max frequency (najcesci broj prikazivanja u nizu)
//     // let sveOcene = [...arr[0].ocene, ...arr[1].ocene, ...arr[2].ocene]; //kako ovo sad u for ili forEach?
//     // console.log(sveOcene);
//     let sveOcene = [];
//     arr.forEach(f => {
//         sveOcene = sveOcene.concat(f.ocene);
//     });
//     console.log(sveOcene);
//     // u JEDNOM nizu proveriti:
//     for (let i = 0; i < sveOcene.length; i++) { //odaberi pocetnu vrednost s kojom cemo da poredimo ostatak niza
//         for (let j = i; j < sveOcene.length; j++) { //proveri naredne vrednosti u nizu
//             if (sveOcene[i] == sveOcene[j]) { //proveri da li se ponavlja vrednost
//                 counter++;
//             }
//             if (maxFrequency < counter) {
//                 maxFrequency = counter;
//                 item = sveOcene[i];
//             }
//         }
//         counter = 0 //da counter bude 0 za naredni koji se ispituje, a maxFrequency ce se svakako apdejtovati
//     }
//     console.log(maxFrequency);
//     return item;
// }
// console.log(najcescaOcena(filmovi));

//sa casa: 
// film1 = [8.2, 9.3, 7.9, 10]
// film2 = [8, 9, 7, 6]
// film3 = [7, 6, 7, 7, 8, 7]
// ukupno 14 ocena imamo
// f = [8.2, 9.3, 7.9, 10, 8, 9, 7, 6, 7, 6, 7, 7, 8, 7]
// ne mozemo da napisemo let f = []; pa f = f+f1 jer vraca string
// f = f.concat(f1,f2,f3); // -> moze i pojedinacno: f = f.concat(f1); f = f.concat(f2); f=f.concat(f3)
// console.log(typeof f);

let sveOcene = arr => {
    let arrSveOcene = [];
    arr.forEach(f => {
        arrSveOcene = arrSveOcene.concat(f.ocene);
    });
    return arrSveOcene;
}
console.log(sveOcene(filmovi));

let najcescaOcena = arr => {
    let pretpostavkaElem = arr[0];
    let pretpostavkaElemPojavljivanja = 1; //sigurno se jednom pojavio
    for (let i = 0; i < arr.length; i++) { //odaberi element
        let tekuci = arr[i];
        let tekuciBrPojavljivanja = 0;
        for (let j = 0; j < arr.length; j++) { //prodji kroz sve druge elemente
            if (tekuci == arr[j]) { //poredi odabrani element sa svim drugima i vidi ima li istih
                //naisli smo na isti element
                tekuciBrPojavljivanja++;
            }
        }
        if (pretpostavkaElemPojavljivanja < tekuciBrPojavljivanja) {
            pretpostavkaElemPojavljivanja = tekuciBrPojavljivanja;
            pretpostavkaElem = tekuci;
        }
    }
    // console.log(pretpostavkaElemPojavljivanja);
    return pretpostavkaElem;
}
console.log(najcescaOcena(sveOcene(filmovi)));


// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcene = (o, arr) => {
    let nizFilmova = [];
    arr.forEach(f => {
        if (f.prosek() > o) {
            // console.log(f);
            nizFilmova.push(f);
        }
    });
    return nizFilmova;
}
console.log(iznadOcene(7.4, filmovi));

// metod stampaj() funkcionise samo za jedan objekat, pa to moramo ovako:
let niz = iznadOcene(7.4, filmovi)
niz.forEach(f => {
    f.stampaj();
});

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let iznadOceneNoviji = (o, arr) => {
    //ovaj nacin ne valja jer ce naci najnoviju godinu prvo, treba obrnuto:
    // let nizFilmova = [];
    // let maxGodina = arr[0].godinaIzdanja;
    // // console.log(maxGodina);
    // arr.forEach(f => {
    //     if (f.godinaIzdanja > maxGodina) {
    //         maxGodina = f.godinaIzdanja;
    //     }
    // });
    // //console.log(maxGodina); //moram da izadjem iz prvog forEach-a da bi izbacilo samo jednu vrednost
    // arr.forEach(m => {
    //     if (maxGodina == m.godinaIzdanja) {
    //         if (m.prosek() > o) {
    //             nizFilmova.push(m);
    //         }
    //     }
    // })
    // return nizFilmova;

    //drugi nacin:
    let nizf = iznadOcene(o, arr);
    let noviji = nizf[0];
    nizf.forEach(e => {
        if (noviji.godina < e.godina) {
            noviji = e;
        };
    });
    console.log(noviji);
}
console.log(iznadOceneNoviji(6, filmovi));