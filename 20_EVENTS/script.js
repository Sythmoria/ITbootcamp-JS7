console.log("Events");

////////////////////////////////////////////////////



//1. dohvati HTML element na koji zelis da postavis osluskivac
let pKlikni = document.getElementById("klikni");

//2. na element poslusamo osluskivac
pKlikni.addEventListener("click", () => {
    console.log("Jednom kliknuto na paragraf.");
});

////////////////////////////////////////////////////

// 1.
let pKlikniDva = document.getElementById("dvaKlika");
// 2.
pKlikniDva.addEventListener("dblclick", () => {
    console.log("Dva puta kliknuto na paragraf.");
});

////////////////////////////////////////////////////

//// ZADATAK 3: Napraviti dugme + i dugme -. 
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

// ZADATAK 4: Dopuniti prethodni zadatak (ZADATAK 3) uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.


// 1.
let btnPlus = document.getElementById("plus");

// 2.
let res = 0;
let spanRes = document.getElementById("res");
btnPlus.addEventListener("click", () => {
    res++;
    // console.log(res);
    spanRes.innerHTML = res; // za += posle nule dodaje brojeve i samo gura dugme udesno
    if (res < 0) {
        spanRes.style.color = "red";
        spanRes.style.display = "none"; //zadatak4, samostalni rad
    }
    else {
        spanRes.style.color = "blue";
        spanRes.style.display = "inline"; //zadatak4, samostalni rad
    }
});

////////////////////////////////////////////////////

let btnMinus = document.getElementById("minus");
btnMinus.addEventListener("click", () => {
    res--;
    spanRes.innerHTML = res;
    if (res < 0) {
        spanRes.style.color = "red";
        spanRes.style.display = "none"; //zadatak4, samostalni rad
    }
    else {
        spanRes.style.color = "blue";
        spanRes.style.display = "inline"; //zadatak4, samostalni rad
    }
});

////////////////////////////////////////////////////
// ZADATAK 5: Napraviti input polje i dugme. U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.

let btnHello = document.getElementById("hello");
let inputIme = document.getElementById("ime");
let pHelloIspis = document.getElementById("helloIspis");

btnHello.addEventListener("click", () => {
    let inputImeValue = inputIme.value;
    pHelloIspis.innerHTML = `Hello ${inputImeValue}`;
});

////////////////////////////////////////////////////
// ZADATAK 6: Dopuniti 5. zadatak dodavanjem radio button polja gde korisnik može odabrati svoj pol (muški, ženski ili neopredeljen). Nakon duplog klika na dugme, u konzoli ispisati pol koji je osoba odabrala.

// DOM
let inputGodinaRodjenja = document.getElementById("godRodj");
let inputPol = document.querySelectorAll("input[name='pol']");
//selektuj sva input polja ciji je name pol
let btnPosalji = document.getElementById("posalji");
let pIspis = document.getElementById("ispis");

btnPosalji.addEventListener("click", (e) => { //bice (e) a e se odnosi na stranicu i reloaduje je
    e.preventDefault();
    // console.log("test");
    let date = new Date();
    let tekucaGodina = date.getFullYear();
    let inputGodinaRodjenjaValue = inputGodinaRodjenja.value;
    // console.log(typeof inputGodinaRodjenjaValue); //problem, jer ga prevodi u string umesto da zadrzi number
    inputGodinaRodjenjaValue = parseInt(inputGodinaRodjenjaValue);
    //inputGodinaRodjenjaValue = parseInt() //radi li?

    let god = tekucaGodina - inputGodinaRodjenjaValue;
    pIspis.innerHTML = `Korisnik ima ${god} godina`; //samo = jer necemo sedamsto puta razlicite stvari na stranici da nam ispise

    let checkedPol = document.querySelector(`input[name="pol"]:checked`); //selektuj mi cekirano input polje ciji je name pol //vraca HTML tag onog input polja na koje je kliknuto, a nama ce trebati u ovom zadatku value tog polja
    // console.log(checkedPol.value);
    let checkedPolValue = checkedPol.value; //vraca vrednost tj value iz selektovanog HTML taga

    if (checkedPolValue == "z") {
        pIspis.innerHTML += " i zenskog je pola."
    }
    else if (checkedPolValue == "m") {
        pIspis.innerHTML += " i muskog je pola."
    }
    else {
        pIspis.innerHTML += " i nije se opredelio za pol."
    }
});


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// samostalni rad

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
// ZADATAK 1: Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
// ZADATAK 2: Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
let btnKonzola = document.getElementById("proba");
let pKonzolaIspis = document.getElementById("ispisK");

let pocetnaVrednost = 1;
btnKonzola.addEventListener("click", () => {
    pocetnaVrednost++;
    console.log(pocetnaVrednost);
    pKonzolaIspis.innerText = pocetnaVrednost;
});

// ZADATAK 7: Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje.

let inputKvadriraj = document.getElementById("kvadriraj");
let btnIzr1 = document.getElementById("izracunaj1");
let ispis1 = document.getElementById("ispis1");

btnIzr1.addEventListener("click", (e) => {
    e.preventDefault();
    let kvadrirajValue = inputKvadriraj.value;
    kvadrirajValue = parseInt(kvadrirajValue);
    let rezultat = kvadrirajValue ** 2;
    ispis1.innerText = `Kvadrirana vrednost iznosi ${rezultat}.`;
});

let inputPrepolovi = document.getElementById("prepolovi");
let btnIzr2 = document.getElementById("izracunaj2");
let ispis2 = document.getElementById("ispis2");

btnIzr2.addEventListener("click", (e) => {
    e.preventDefault();
    let prepolovi = inputPrepolovi.value;
    prepolovi = parseInt(prepolovi);
    let rezultat = prepolovi / 2;
    ispis2.innerText = `Prepolovljena vrednost iznosi iznosi ${rezultat}.`;
});

let inputPovKruga = document.getElementById("povKruga");
let btnIzr3 = document.getElementById("izracunaj3");
let ispis3 = document.getElementById("ispis3");
btnIzr3.addEventListener("click", (e) => {
    e.preventDefault();
    let povrsina = inputPovKruga.value;
    povrsina = parseInt(povrsina);
    let rezultat = ((povrsina ** 2) * Math.PI).toFixed(2);
    ispis3.innerText = `Povrsina kruga sa datim poluprecnikom iznosi ${rezultat}.`;
});