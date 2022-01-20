// U Javascriptu je moguće izvršiti kod u određenim vremenskim intervalima.
// window objekat nudi metode:
// setTimeout(function, miliseconds) -> Izvršava datu funkciju nakon što prođe određeni broj milisekundi,
// setInterval(function, miliseconds) ->  Ponavlja izvršenje funkcije posle određenog broja milisekundi.
// Obe metode se mogu pozvati bez navođena window objekta.

/////////////////////////////////////////////////////////////////
//setTimeout
// setTimeout(function, miliseconds)
// Izvršava JS funkciju tek nakon što prođe određeni broj milisekundi.
// Imajte u vidu da je 1000 ms = 1 second.
// Funkcija se izvršava tačno jedanput nakon zadatog intervala.
// Primer: Klikom na dugme, prikazati poruku u konzoli nakon 2 sekunde.

// console.log("1");
// console.log("2");
//najpravilnije je da upisemo window.setTimeout( funkcije, milisekunde) ali moze i samo setTimeout( funkcije, milisekunde)

// Primer: prikazati poruku u konzoli nakon 2 sekunde. -> PRVI NACIN: arrow funkcije
// setTimeout(() => {
//     console.log("3"); //arrow funkcija je prosledjena kao parametar, i posle 2 sekunde bice izvrsena f-ja
//     //console.log(this); // this = window -> zato se arrow f-je ne koriste u objektima, jer se ne vezuje na objekat koji poziva metodu
// }, 1000 * 2); // 1000*2 ili samo 2000  -> to znaci 2 sekunde
//bez {} arrow funkcija ima return:
// setTimeout( () => console.log("3") , 1000 * 2);

// Primer: prikazati poruku u konzoli nakon 2 sekunde. -> DRUGI NACIN: neimenovane funkcije
// setTimeout(function () {
//     console.log("3");
//     //console.log(this); // this = objekat koji poziva metodu -> window
// }, 4000 / 2);

// Primer: prikazati poruku u konzoli nakon 2 sekunde. -> TRECI NACIN: imenovane funkcije
// function ispis() {
//     console.log("3");
// }
// setTimeout(ispis, 1000 * 4);

// ovo je blokirajuci kod:
// for( let i = 1; i<= 1000000; i++) {
//     console.log(i);
// }
// nece preci na naredni deo sve dok traje for petlja
//zato koristimo setTimeout -> ponasa se asinhrono

// Primer: Klikom na dugme, prikazati poruku u konzoli nakon 2 sekunde.
// let btn1 = document.getElementById("btn1");
// let div = document.getElementById("result");
// btn1.addEventListener('click', function () {
//     let datum = new Date();
//     let sati = datum.getHours();
//     let minuti = datum.getMinutes();
//     let sekunde = datum.getSeconds();
//     //console.log(this); // u arrow this je ceo window, a u function() {} ovde dobijamo <button>
//     setTimeout(() => {
//         // console.log("klik na dugme");
//         div.innerHTML = `${sati}:${minuti}:${sekunde}`;
//     }, 2000)
// });



/////////////////////////////////////////////////////////////////
// Prekid izvrsenja
// Moguće je prekinuti izvršenje funkcije zadate preko setTimeout tako što se pre zadatog intervala pozove metoda clearTimeout.
// let timer = setTimeout(function, miliseconds);
// clearTimeout(timer);
// U prethodnom primeru dodati još jedno dugme i klikom na to dugme, prekinuti ispis poruke u konzoli.

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let div = document.getElementById("result");
let timer = null; //ili samo let timer

btn1.addEventListener('click', function () {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();
    //console.log(this); // u arrow this je ceo window, a u function() {} ovde dobijamo <button>
    if (timer === null) { //ovaj if nam je potreban da ne bi kliknuli 15 puta na btn1, jednom na btn2, jako brzo - pa da razmisljamo koliko puta ce se prikazati (u principu, samo petnaesti klik ce se prekinuti)
        timer = setTimeout(() => {
            // console.log("klik na dugme");
            div.innerHTML = `${sati}:${minuti}:${sekunde}`;
            timer = null; //opet da vratimo timer na null da bi mogli opet da dobijemo rezultat klikom na btn1
        }, 2000);
    }
});

btn2.addEventListener('click', function () {
    clearTimeout(timer);
    timer = null; //resetujemo timer opet na null, da bi mogli da koristimo btn1 opet
});
/////////////////////////////////////////////////////////////////

// setInterval
// setInterval(function, miliseconds)
// Ponavlja izvšenje JS funkcije na svaki zadati period.
// Bez prekida, funkcija se poziva beskonačan broj puta na svaki zadati period.
// Za prekid poziva funkcije pozvati metodu clearInterval.
// let timer = setInterval(function, miliseconds);
// clearInterval(timer);




/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//PRIMER
// Napraviti digitalni sat na stranici koji pokazuje trenutno vreme.

let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let ispis = document.getElementById("ispis");
let clock = null;

btn3.addEventListener('click', function () {
    if (clock === null) {
        clock = setInterval(() => {
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            ispis.innerHTML = `${sati}:${minuti}:${sekunde}`;
        }, 1000);
    }
});

btn4.addEventListener('click', function () {
    clearTimeout(clock);
    clock = null; //resetujemo clock opet na null, da bi mogli da koristimo btn3 opet
});


// Napraviti dva dugmeta i input kao na slici.
// Klikom na dugme „Start count!“, počinje odbrojavanje: Ispisuju se redom brojevi 1, 2, 3, ... svake sekunde.
// Klikom na dugme „Pause count!“ pauzira se odbrojavanje.

let btnStart = document.getElementById("start");
let btnPause = document.getElementById("pause");
let btnStop = document.getElementById("stop");
let ispisCount = document.getElementById("ispisCount");
let counter = 0;
let validation = null;


btnStart.addEventListener('click', function () {
    if (validation === null) {
        validation = setInterval(() => {
            counter++;
            ispisCount.value = counter;
        }, 1000);
    }
});

btnPause.addEventListener('click', function () {
    clearTimeout(validation);
    validation = null;
});

btnStop.addEventListener('click', function () {
    clearTimeout(validation);
    validation = null;
    counter = 0;
});