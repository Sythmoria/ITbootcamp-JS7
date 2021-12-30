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

//ubaci span koji treba da se menja i button koji ce dodavati nesto

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
    }
    else {
        spanRes.style.color = "blue";
    }
});

////////////////////////////////////////////////////

let btnMinus = document.getElementById("minus");
btnMinus.addEventListener("click", () => {
    res--;
    spanRes.innerHTML = res;
    if (res < 0) {
        spanRes.style.color = "red";
    }
    else {
        spanRes.style.color = "blue";
    }
});

////////////////////////////////////////////////////

let btnHello = document.getElementById("hello");
let inputIme = document.getElementById("ime");
let pHelloIspis = document.getElementById("helloIspis");

btnHello.addEventListener("click", () => {
    let inputImeValue = inputIme.value;
    pHelloIspis.innerHTML = `Hello ${inputImeValue}`;
});

////////////////////////////////////////////////////

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