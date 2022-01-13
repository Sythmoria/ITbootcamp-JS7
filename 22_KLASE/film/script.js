import { Film } from "./film.js"; //posto nije default u film.js onda ovde Film ubacujemo u viticaste zagrade

let film1 = new Film("Inception", "Christopher Nolan", 1789, [8.2, 9.3, 7.9]);
// console.log(film1);
film1.stampaj();
let film2 = new Film("Stari film", "nepoznati autor", 1801.5, [8, 9, 7, 6]);
// console.log(film2);
film2.stampaj();
let film3 = new Film("Princess Mononoke", "Hayao Miyazaki", 1997, [7, 6, 7, 7, 8, 7]);
// console.log(film3);
film3.stampaj();

//testiram da li seter za naslov radi:
film1.naslov = "Inception 1";
film1.stampaj();

//testiram da li geter za naslov radi:
console.log(film1.reziser);

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