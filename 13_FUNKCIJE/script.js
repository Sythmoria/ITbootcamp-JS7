console.log(`Funkcije`);

function zdravo() {
    console.log(`Zdravo svete!`);
}

zdravo();
zdravo();
console.log(`Hello!`);
zdravo();

/////////////////////////////////////////////////////////////////////

function stampaj($tekst) { //ovde ubacimo naziv promenljive kako bi funkciji prosledili varijablu
    console.log($tekst);
}

stampaj("Jelena"); //ovde upisemo sta zelimo da stampa, u zagradi
stampaj("Stefan");

let $ime = "Sofija";
stampaj($ime);

////////////////////////////////////////////////////////////////////


function korisnik(ime, prezime) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime}.`)
}
korisnik("Stefan", "Stanimirovic");
korisnik("Jelena", "Matejic");

////////////////////////////////////////

function korisnikGodine(ime, prezime, godine) {
    console.log(`Ulogovani korisnik je ${ime} ${prezime} i ima ${godine} godina.`);
}

korisnikGodine('Jelena', 'Matejic', 27);
korisnikGodine('Pera', 'Peric', 17);

////////////////////////////////////////

function zbirDvaBroja(x, y) {
    let zbir = x + y;
    console.log(zbir);
}
zbirDvaBroja(15, 12);
zbirDvaBroja(3, 9);

////////////////////////////////////////
function vratiZbirDvaBroja(a, b) { //sme opet da se zove x, y, inace
    let zbir = a + b; //ono sto je definisano sa let vazi samo u telu funkcije (lokalne i globalne varijable)
    //console.log(`Vrati zbir`); 
    return zbir; //zelimo da vratimo rezultat iz funkcije -> samo jedna vrednost moze da se navede -> ovde se f-ja prekida, bilo sta sto napisemo posle nece se izvrsiti -> ne mogu dva return-a u jednoj funkciji
}

let rez = vratiZbirDvaBroja(50, 70);
console.log(rez);
rez = vratiZbirDvaBroja(16, 15);
console.log(rez);

let rez1 = vratiZbirDvaBroja(4, 6); //=10
let rez2 = vratiZbirDvaBroja(5, 7); //=12
let rez3 = vratiZbirDvaBroja(rez1, rez2); //=22
console.log(rez3);

let rez4 = vratiZbirDvaBroja(4 + 5, 1 + 3);
console.log(rez4);

let rez5 = vratiZbirDvaBroja(vratiZbirDvaBroja(7, 9), 3);
console.log(rez5);

let rez6 = vratiZbirDvaBroja(vratiZbirDvaBroja(1, 2), vratiZbirDvaBroja(5, 3));
console.log(rez6);

////////////////////////////////////////

function voda(temperatura) {
    console.log(`Uneli ste temperaturu of ${temperatura} stepeni C.`);
    if (temperatura <= 0) {
        console.log(`Voda je u cvrstom agregatnom stanju.`);
    }
    else if (temperatura >= 100) {
        console.log(`Voda je u gasovitom agregatnom stanju.`);
    }
    else {
        console.log(`Voda je u tecnom agregatnom stanju.`);
    }
}

voda(3);

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// ZADATAK 1: 
// Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić. 


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////


// ZADATAK 2: Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
function zbirRB(a, b) {
    let zbir = a + b;
    return zbir;
}
let rezultat = zbirRB(5, 12);
console.log(rezultat);
// slicno je i za ostale racunske operacije


function racunaj(a, b, operacija) {
    if (operacija == "+") {
        let rezultat = a + b;
        console.log(rezultat);
        //drugi nacin
        //if(true){
        //console.log(`Moj rezultat je ${rezultat}.`);
        //}
    }
    else if (operacija == "-") {
        let rezultat = a - b;
        console.log(rezultat);
    }
    else if (operacija == "*") {
        let rezultat = a * b;
        console.log(rezultat);
    }
    else if (operacija == "/") {
        if (b == 0) {
            console.log(`Deljenje nije dozvoljeno.`);
        }
        else {
            let rezultat = a / b;
            console.log(rezultat);
        }
    }
    else {
        console.log(`Pogresan unos.`);
    }
}

racunaj(5, 4, "+");
racunaj(5, 4, "-");
racunaj(5, 4, "*");
racunaj(5, 4, "/");
racunaj(5, 4, "%");
racunaj(5, 0, "/");

// drugi nacin

/* function racunaj(a, b, operacija) {
    let rezultat = ""; //definisemo rezultat u pocetku i posle dodeljujemo mu vrednost i na kraju svega ga ispisemo na ekranu
    if (operacija == "+") {
        rezultat = a + b;
    }
    else if (operacija == "-") {
        rezultat = a - b; 
    }
    else if (operacija == "*") {
        rezultat = a * b; 
    }
    else if (operacija == "/") {
        if (b == 0) {
            rezultat = `Deljenje nije dozvoljeno.`;
        }
        else {
            rezultat = a / b;
        }
    }
    else {
        rezultat = `Pogresan unos.`;
    }
    console.log(rezultat);
}*/


// napomene za let u if tj. primer 1 za scope i let za if

if (true) {
    let test = "Zdravo";
    if (true) {
        console.log(test); //ovde vidi test
    }
}
//console.log(test); // ovde ne vidi test jer je definisan sa let koji je vidljiv samo u if scope jer je tu i definisan

// primer 2 za scope i let
if (true) {
    let test = "Zdravo"; // linija *
    console.log(test); //ispisuje Zdravo koji je dodeljen u *
    if (true) {
        let test = "Hello"; //linija **
        console.log(test); //ovde vidi test iz linije ** jer je u tom scope-u
    }
    console.log(test); //ovde vidi test iz linije * jer je u tom scope-u -> nema pravo da vidi sta je u liniji **
}
//console.log(test); //ovde ne vidi uopste test

// primer 3 za scope i let
if (true) {
    let test = "Zdravo"; // linija *
    console.log(test); //ispisuje Zdravo koji je dodeljen u *
    if (true) {
        test = "ZZZ"; /// linija ***
        console.log(test);
        /*let test = "Hello"; ne moze let sad posle ovog gore*/
    }
    console.log(test); //ovde vidi test iz linije *** jer kad nema nista ispred test racuna ga kao var test
}
//console.log(test); //ovde ne vidi uopste test

// var naspram let

//proba = "Proba" // ovo je var, ne let
if (true) {
    proba = "proba"; //ovo je var
    // moze i: var proba = "proba"
}
console.log(proba);
// let ima lokalno vazenje (samo unutar tog bloka), dok var ima vazenje kroz ceo blok

if (true) {
    var promenljiva = "promenljiva";
    if (true) {
        var promenljiva = "hmmm";
        console.log(promenljiva);
    }
    console.log(promenljiva);
}


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// ZADATAK 3: Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
    if (n % 2 != 0) {
        return true;
        // drugi nacin: n = `Tacno`;
        // return n;
        // treci nacin: return `Tacno`;
    }
    else {
        return false;
        // drugi nacin: n = `Netacno`;
        // return n;
        // treci nacin: return `Netacno`; 
    }
}

let nep = neparan(13);
console.log(nep);

//drugi nacin

function neparan1(n) {
    return n % 2 != 0; //ako je tacno, vratice true
}
let nep1 = neparan1(14);
console.log(nep1);

/*treci nacin:
function neparan2(n) {
    let rez = true;
    if(n%2==0) {
        rez = false;
    }
    return rez
}
nep = neparan2(15);
console.log(nep); */

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// ZADATAK 4: Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(a, b) {
    if (a > b) {
        let max = a;
        return max;
    }
    else if (b > a) {
        let max = b;
        return max;
    }
    else {
        console.log(`Brojevi ${a} i ${b} su jednaki.`);
    }
}

let dvaBroja = maks2(13, 15)
console.log(`Veci broj je ${dvaBroja}`);

function maks4(a, b, c, d) {
    let max1 = a;
    if (max1 < b) {
        max1 = b;
    }
    if (max1 < c) {
        max1 = c;
    }
    if (max1 < d) {
        max1 = d;
    }
    // if (a == b && a==c && a==d) {max1 = `Sva 4 broja su ista.`;}
    return max1;
}

let cetiriBroja = maks4(15, 79, 30, 444);
console.log(`Najveci broj od navedena 4 broja je ${cetiriBroja}.`);


// drugi nacin
function maks4_jelena(a, b, c, d) {
    let max1 = maks2(a, b); //vrati mi koji je veci broj izmedju a i b
    let max2 = maks2(c, d); //vrati mi koji je veci broj izmedju c i d
    let max = maks2(max1, max2);
    return max;
}
let maks4broja = maks4_jelena(5, 7, 2, 9);
console.log(maks4broja);

// treci nacin
function maks4_aleksandar(a, b, c, d) {
    let max = maks2(maks2(a, b), maks2(c, d));
    return max;
    // ili samo jedna linija koda: return maks2(maks2(a, b), maks2(c, d));
}
let maks4brojaa = maks4_aleksandar(5, 17, 2, 9);
console.log(maks4brojaa);

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// ZADATAK 5: Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slika(putanja) {
    document.body.innerHTML += `<img style="width:350px; height:200px;" src=${putanja}>`;
}

slika("https://www.looper.com/img/gallery/the-ending-of-sailor-moon-eternal-explained/intro-1623072853.jpg")

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// ZADATAK 6: Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function oboji(boja) {
    switch (boja) { //ograniceno na primarne boje samo
        case "red":
            document.body.innerHTML += `<p style="color:red";>Text</p>`;
            break;
        case "blue":
            document.body.innerHTML += `<p style="color:blue";>Text</p>`;
            break;
        case "yellow":
            document.body.innerHTML += `<p style="color:yellow";>Text</p>`;
            break;
        default:
            document.body.innerHTML += `<p>Please enter a primary colour.</p>`
    }
}
oboji("red");

function oboji2(boja, tekst) {
    document.body.innerHTML += `<p style="color:${boja}">${tekst}</p>`;
}
oboji2("SteelBlue", "Lorem");

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// ZADATAK 7: Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(n) {
    switch (n) {
        case 0:
            console.log("Nedelja");
            break;
        case 1:
            console.log("Ponedeljak");
            break;
        case 2:
            console.log("Utorak");
            break;
        case 3:
            console.log("Sreda");
            break;
        case 4:
            console.log("Cetvrtak");
            break;
        case 5:
            console.log("Petak");
            break;
        case 6:
            console.log("Subota");
            break;
        case 7:
            console.log("Nedelja");
            break;
        default:
            console.log(`Pogresan unos.`);
    }
}

sedmiDan(3);

function mesec(n) {
    if (n % 12 == 0) {
        console.log(`Januar`);
    }
    else if (n % 12 == 1) {
        console.log(`Februar`);
    }
    else if (n % 12 == 2) {
        console.log(`Mart`);
    }
    else if (n % 12 == 3) {
        console.log(`April`);
    }
    else if (n % 12 == 4) {
        console.log(`Maj`);
    }
    else if (n % 12 == 5) {
        console.log(`Jun`);
    }
    else if (n % 12 == 6) {
        console.log(`Jul`);
    }
    else if (n % 12 == 7) {
        console.log(`Avgust`);
    }
    else if (n % 12 == 8) {
        console.log(`Septembar`);
    }
    else if (n % 12 == 9) {
        console.log(`Oktobar`);
    }
    else if (n % 12 == 10) {
        console.log(`Novembar`);
    }
    else if (n % 12 == 11) {
        console.log(`Decembar`);
    }
    else {
        console.log(`Pogresan unos.`);
    }
}

mesec(4);


///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// ZADATAK 8: Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m

function deljivSaTri(n, m) {
    // za ispisivanje u istom redu? let broj ="";
    let br = 0;
    for (let i = n; i <= m; i++) {
        if (i % 3 == 0) {
            console.log(i);
            br++;
            //u istom redu da ih ispise? broj += i 
        }
    }
    console.log(`Broj brojeva deljivih sa tri u intervalu do ${n} do ${m} je ${br}.`);
}
deljivSaTri(10, 30);

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// ZADATAK 9: Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. 
// Brojeve n i m proslediti kao parametre funkciji.

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// ZADATAK 14: Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

function petPuta(recenica, boja) {
    for (let i = 10; i <= 50; i += 10) {
        document.body.innerHTML += `<p style="font-size:${i}px; color:${boja}">${recenica}</p>`
    }
}
petPuta("In the name of the Moon, I shall punish you.", "red");

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// ZADATAK 15: Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti (RETURN!!!) koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

//ovo je ako treba da se izracuna samo visina poslednje plate nakon povisica tj. sa dodatim povisicama
function praksa(n, a, d) {
    if (Math.floor(n) === n && n > 0) {
        for (let i = 2; i <= n; i++) { //kreni od dvojke jer tek od drugog meseca ide povisica
            a += d;
        }
    }
    else {
        a = `Unesite validan broj meseci (u prvo polje).`
    }
    return a;
}

let praksa1 = praksa(4, 50000, 5000)
console.log(praksa1);

//koliko iznosi suma svih BONUSA (fixno plata + fixni bonus mesecno) i svih plata

function praksaA(n, a, d) {
    let suma = a;
    if (Math.floor(n) === n && n > 0) {
        for (let i = 2; i <= n; i++) { //kreni od dvojke jer tek od drugog meseca ide povisica
            suma += a + d;
        }
    }
    else {
        suma = `Unesite validan broj meseci (u prvo polje).`
    }
    return suma;
}

let praksa2 = praksaA(4, 50000, 5000)
console.log(praksa2);

// ovo je sa POVISICAMA:
function praksaB(n, a, d) {
    let suma;
    if (Math.floor(n) === n && n > 0) {
        suma = n * a + (n - 1) * d;
        // ili let suma = n*(a+d) - d;
        // ili let suma = a + (n-1)*(a+d);
    }
    else {
        suma = `Unesite validan broj meseci (u prvo polje).`
    }
    return suma;
}

let praksa3 = praksaB(3, 5000, 200)
console.log(praksa3);

/* function ukupno_plata (n,a,d) {
 let sum = a;
 for(let i=2; i<=n; i++) {
     a+=d;
     sum+=a;
 }
 return sum
}
let krajPlata1 = ukupno_plata(5,5000,200);
console.log(krajPlata1);
// 5000+5200+5400+5600+5800 = 27000 -> tacno jeeeeeee
*/
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

// ZADATAK 16:   
/*Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
npr: t=15, p=20, n=25, čekanje je 0s
npr: t=15, p=10, n=12, čekanje je 7s*/

function staza(t, p, n) {
    let cekanje;
    if (p <= t || t < p + n) {
        cekanje = n - (t - p);
    }
    else {
        cekanje = 0; //ili ovo da ode u if, kao if (p>t || t>=p+n)
    }
    return cekanje;
}

let x = staza(15, 20, 25);
console.log(`Ekipa treba da ceka ${x} sekundi.`);