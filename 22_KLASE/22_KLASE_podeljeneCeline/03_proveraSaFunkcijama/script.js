import Auto from "./auto.js"

let a1 = new Auto("Citroen C4", "crna", false);
// kao da je let a1 = Auto.constructor() ali se NIKAD ne pise ovako
// a1 je objekat koji ima sledeca polja:
// a1._marka -> vrednost ovog polja je "Citroen C4"
// a1._boja -> vrednost ovog polja je "crna"
// a1._imaKrov -> vrednost ovog polja je false
console.log(a1);
console.log(typeof a1); //objekat, tj preciznije objekat klase Auto

let a2 = new Auto("Skoda Octavia", "plava", true);
let a3 = new Auto("Fiat Punto", "bela", false); //stagod ne upisemo bice undefined, sem ako nema podesenu default vrednost

a1.sviraj();
a2.sviraj();
a3.sviraj();

a1.vozi(50);

// u klasi pisemo polja  i metode
// sva polja klase se definisu u constructor
// mozemo dodavati proizvoljne metode
// svi objeti klase imace polja i metode navedene u klasi
a1._brojVrata = 4; //poljima se pristupa bez zagrada
a1.sviraj(); //metode imaju zagrade, a izmedju zagrada se upisuju parametri, ako ih ima
a1._marka = "         Audi A4";
console.log(a1); //izbacice i space jer ga nismo preko funkcije odradili u liniji 27


a1.postaviMarku("         Audi A4");
console.log(a1);

//da probamo metodu koja cita vrednost polja:
console.log(a1.dohvatiMarku());

//postoji nacin da pisemo a1._marka  a da se ponasa kao a1.postaviMarku()
//uvodimo setere i getere -> folder 04