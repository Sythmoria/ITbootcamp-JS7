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
// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.
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
</tr>`;
});
tabelica += `</table>`;
document.body.innerHTML = tabelica;

// Napraviti metod prosek koji vraća prosečnu ocenu 

console.log(film1.prosecnaOcena());
console.log(film2.prosecnaOcena());

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

// iz godine u vek: Math.floor((year-1)/100) + 1;

function vekFilmova(array, century) {
    if (Math.floor(century) != century) {
        century = Math.floor(century);
    }
    array.forEach(element => {
        if (element.godinaIzdanja >= ((century - 1) * 100 + 1) && element.godinaIzdanja <= century * 100) {
            console.log(element);
        }
    })
}

vekFilmova(filmovi, 21);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali.

// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni od prosleđene ocene.

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve 