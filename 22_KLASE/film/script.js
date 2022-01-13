import Film from "./film.js";

let film1 = new Film("Neki naslov", "    Neki reziser", 1915.8);
console.log(film1);
film1.stampaj();
let film2 = new Film("Stari film", "nepoznati autor", 1730);
console.log(film2);
film2.stampaj();
let film3 = new Film("Princess Mononoke", "Hayao Miyazaki", 1997);
console.log(film3);
film3.stampaj();