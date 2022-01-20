// SINHRONI JS
// Podrazumevano, JS radi sekvencijalno: Sve komande nekog programa nalaze se na jednoj „niti“ (eng. thread), jedna ispod druge.
// Izvršenje neke komande u toj niti ne može početi pre izvršenja prethodne komande u toj niti.

// primer: idu redom, moze doci i do blokade
// console.log(1);
// console.log(2);
// console.log(3);


//////////////////////////////////////

// Kod asinhronog koda, JS omogućava kreiranje više različitih „niti“ koje rade paralelno i nezavisno jedna od druge.
// Postojanjem niti, omogućuje se rešavanje dela kôda koji blokira drugi deo kôda (eng. Blocking code).

//primer:
// console.log(1); // statement 1
// console.log(2); // statement 2


// setTimeout(() => { // statement 3
//     console.log('callback function fired');
// }, 2000);


// console.log(3); // statement 4
// console.log(4); // statement 5
// poslednji je callback, tu ide statement 3

// Svaki deo koda koji oduzima neko vreme može da ide u posebnu nit, čime sprečava blokiranje ostatka kôda.

// Različite stvari mogu prouzrokovati potrebu za stvaranjem niti u programu:
// 1) Zahtevi unutar programa, na primer, tajming događaji (setTimeout, setInterval),
// 2) Zahtevi ka drugim računarima – na primer, nekim serverima (HTTP zahtevi).

//////////////////////////////////////
//////////////////////////////////////

// HTTP ZAHTEV
// Klijent šalje HTTP zahtev da bi dobio podatke sa drugog servera.
// Server nudi takozvani „API endpoint“ na koji klijent šalje HTTP zahtev.
// Klijent dobija odgovor od servera preko tog API endpoint-a. Odgovor je u obliku stringa koji lako može da se formatira u JS.

//prvo moramo da izguglamo json placeholder
// https://jsonplaceholder.typicode.com
// https://jsonplaceholder.typicode.com/posts //oni izgledaju kao javascript-ov niz objekata
// https://jsonplaceholder.typicode.com/posts/1 //dobijamo samo jedan objekat, i to onaj koji je imao id 1

// let request = new XMLHttpRequest();
// request.addEventListener('readystatechange', () => {
//     //console.log(request.responseText, request.readyState); // 4 puta ga je ispisalo, prva dva puta kao skroz prazno a druga dva puta kao string
//     // zasto?

//     // Value ---------- State ---------- Description
//     // 0 ---------- UNSENT ---------- Client has been created. open() not called yet.
//     // 1 ---------- OPENED ---------- open() has been called.
//     // 2 ---------- HEADERS_RECEIVED ---------- send() has been called, and headers and status are available.
//     //dok je readyState 1 i 2 ne mozemo da pristupimo tom polju
//     // 3 ---------- LOADING ---------- Downloading; responseText holds partial data.
//     // 4 ---------- DONE ---------- The operation is complete.
//     if (request.readyState == 1) {
//         console.log("Uspostavljena konekcija");
//     } else if (request.readyState == 2) {
//         console.log("Poslat je zahtev serveru"); //send je poslat
//     } else if (request.readyState == 3) {
//         console.log("Prihvata se odgovor - u statusu preuzimanja");
//     } else if (request.readyState == 4) {
//         console.log("Odgovor je preuzet: ", request.responseText); //tek ovde je kompletan odgovor sa servera
//         //proveri sliku iz ovog foldera
//     }
// });

// HTTP Response Status Codes
// Range -> Description
// 100–199 -> Informational responses
// 200–299 -> Successful responses
// 300–399 -> Redirects 
// 400–499 -> Client errors
// 500–599 -> Server errors
// Full list: 
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
// https://www.w3schools.com/tags/ref_httpmessages.asp


// request.addEventListener('readystatechange', () => { //ako ne koristimo arrow nego function () onda mozemo da koristimo this.readyState
//     if (request.readyState === 4 && request.status === 200) { //bez greske plus stigao odgovor od servera
//         console.log(request.responseText);
//     }
//     else if (request.readyState === 4) { //desila se greska ali je stigao odgovor od servera
//         console.log("could not fetch data");
//         //console.log(request.responseText); //bice prazan string, iako je readyState 4, jer je doslo do greske
//     }
// });
// request.addEventListener('readystatechange', function () { //ako ne koristimo arrow nego function () onda mozemo da koristimo this.readyState
//     if (this.readyState === 4 && this.status === 200) { //bez greske plus stigao odgovor od servera
//         //console.log(this.responseText); //vraca string
//         let data = JSON.parse(this.responseText);
//         console.log(data); //e sad je ovo JavaScript objekat
//         console.log(data[4]);
//     }
//     else if (this.readyState === 4) { //desila se greska ali je stigao odgovor od servera
//         console.log("could not fetch data");
//         //console.log(this.responseText); //bice prazan string, iako je readyState 4, jer je doslo do greske
//     }
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//request.open('GET', 'https://jsonplaceholder.typicode.com/postsss'); //u ovom slucaju bi izbacilo "could not fetch data" jer je greska nastala.Greska moze nastati kod lose unetog linka ili kod 
// request.send();
// send metoda radi sporije od console.log -> ako bi sad ispod dodali console.log, iako je ispisano posle prvo ce ti console.log da se odrade jer je request.send() sporiji
//otkomentarisi ovo i proveri log na browser-u:
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);

///////////////////////////////////////
///////////////////////////////////////

// Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users

// let request = new XMLHttpRequest();
// request.send();
// moze za narednih 5 zadataka da se ide 5 razlicitih request.addEventListener a da im je ime (request) objekta isto, i da na kraju svih njih stoji send i open, ILI da se napravi 5 razlicitih objekata tj. request1-5
// request.open('GET', 'https://jsonplaceholder.typicode.com/users');

// Ispisati u konzoli one korisnike čiji website ima domen „.com“.
let request1 = new XMLHttpRequest();
request1.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) { //bez greske plus stigao odgovor od servera
        let data = JSON.parse(this.responseText); //vratice nam JS objekat koji mozemo da koristimo
        console.log("\n\tIspisati u konzoli one korisnike čiji website ima domen „.com“.\n\t");
        data.forEach(element => {
            // console.log(element);
            if (element.website.slice(-4) == ".com") { //ili includes(".com") ili slice(".com", -4)
                console.log(element.name);
            }
        });
    }
    else if (this.readyState === 4) { //desila se greska ali je stigao odgovor od servera
        console.log("could not fetch data");
    }
});
request1.open('GET', 'https://jsonplaceholder.typicode.com/users');
request1.send();

// Ispisati korisnike čije ime sadrži reč „Clementin“.

let request2 = new XMLHttpRequest();
request2.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) { //bez greske plus stigao odgovor od servera
        let data = JSON.parse(this.responseText); //vratice nam JS objekat koji mozemo da koristimo
        console.log("\n\tIspisati korisnike čije ime sadrži reč „Clementin“.\n\t");
        data.forEach(element => {
            // console.log(element);
            if (element.name.slice(0, 9) == "Clementin") { // ili element.name.includes("Clementin")
                console.log(element.name);
            }
        });
    }
    else if (this.readyState === 4) { //desila se greska ali je stigao odgovor od servera
        console.log("could not fetch data");
    }
});
request2.open('GET', 'https://jsonplaceholder.typicode.com/users');
request2.send();

// Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“.

let request3 = new XMLHttpRequest();
request3.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) { //bez greske plus stigao odgovor od servera
        let data = JSON.parse(this.responseText); //vratice nam JS objekat koji mozemo da koristimo
        console.log("\n\tIspisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“.\n\t");
        data.forEach(element => {
            // console.log(element);
            if (element.company.name.includes("LLC") || element.company.name.includes("Group")) {
                console.log(element.name);
            }
        });
    }
    else if (this.readyState === 4) { //desila se greska ali je stigao odgovor od servera
        console.log("could not fetch data");
    }
});
request3.open('GET', 'https://jsonplaceholder.typicode.com/users');
request3.send();

// Ispisati sve različite gradove u kojima rade ovi korisnici.

let request4 = new XMLHttpRequest();
request4.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) { //bez greske plus stigao odgovor od servera
        let data = JSON.parse(this.responseText); //vratice nam JS objekat koji mozemo da koristimo
        console.log("\n\tIspisati sve različite gradove u kojima rade ovi korisnici.\n\t");
        let array = []
        data.forEach(element => {
            array.push(element.address.city);
        });
        // da ubacim duplikate pa da isprobam:
        array.push(1);
        array.push(1);
        array.push(1);
        array.push(1);
        // console.log(array); //ako treba da ispisem niz
        //zanimljivo, originalni niz nema duplikate...nevermind
        let newArray = removeDuplicatesArray(array);
        //za ispis pojedinacnih elemenata:
        // newArray.forEach(element => {
        //     console.log(element);
        // });
        console.log(newArray);
        //drugi nacin: umesto ove funkcije moglo je da se ispita indexOf i da on bude -1 pa da pushuje elemente iz starog u novi niz
        let novo = []; //potpuno nov niz
        array.forEach(element => {
            if (novo.indexOf(element) === -1) { //ako ih nema, index im je -1
                novo.push(element);
                // console.log("drugi nacin: ", element);
            }
        });
        console.log(novo); //ako treba da ispisem niz
        //treci nacin
        let grad = [];
        data.forEach(el => {
            if (!grad.includes(el.address.city)) {
                grad.push(el.address.city);
            }
        });
        console.log("treci nacin: ", grad);
    }
    else if (this.readyState === 4) { //desila se greska ali je stigao odgovor od servera
        console.log("could not fetch data");
    }
});
request4.open('GET', 'https://jsonplaceholder.typicode.com/users');
request4.send();

function removeDuplicatesArray(arr) {
    return [...new Set(arr)];
}

// Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.

let request5 = new XMLHttpRequest();
request5.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) { //bez greske plus stigao odgovor od servera
        let data = JSON.parse(this.responseText); //vratice nam JS objekat koji mozemo da koristimo
        console.log("\n\tIspisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.\n\t");
        let br = 0;
        data.forEach(element => {
            if (parseFloat(element.address.geo.lat) < 0 && parseFloat(element.address.geo.lng) < 0) { //parseFloat jer imamo decimalne brojeve (tj. realne brojeve)
                // console.log(element.name);
                br++;
            }
        });
        console.log(br);
    }
    else if (this.readyState === 4) { //desila se greska ali je stigao odgovor od servera
        console.log("could not fetch data");
    }
});
request5.open('GET', 'https://jsonplaceholder.typicode.com/users');
request5.send();

//sve ovo mozemo krace da odradimo, ako napravimo zasebne funkcije, pogledaj ispod

///////////////////////////////////////
///////////////////////////////////////

let getUsers = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {
        if (this.readyState === 4 && this.status === 200) {
            //radi nesto kad je sve u redu
            let data = JSON.parse(this.responseText); //kovertovanje iz stringa u niz objekata
            //callback(data); //ovde ide poziv f-ja koje su ispisane dole
            resolve(data);
        }
        else if (this.readyState === 4) {
            //radi nesto kad je doslo do greske
            reject("Doslo je do greske")
        }
    });
    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    //da napravimo gresku namerno:
    // request.open('GET', 'https://jsonplaceholder.typicode.com/usersss');
    request.send();
}

let zad2 = (niz) => {
    niz.forEach(kor => {
        if (kor.website.includes(".com")) {
            console.log("\n\tPreko funkcije zad2: ", kor.name);
        }
    });
}

let zad3 = (niz) => {
    niz.forEach(kor => {
        if (kor.name.includes("Clementin")) {
            console.log("\n\tPreko funkcije zad3: ", kor.name);
        }
    });
}

let zad5 = (niz) => {
    let gradovi = [];
    niz.forEach(kor => {
        if (!gradovi.includes(kor.address.city)) {
            gradovi.push(kor.address.city);
        }
    });
    console.log("\n\tPreko funkcije zad5: ", gradovi);
}

let ispisPorukeStranica = (poruka) => {
    document.body.innerHTML += `<p class='error'>${poruka}</p>`
}

let ispisPorukeKonzola = (poruka) => {
    console.log(poruka);
}

//kada pozivamo, posto je asinhrono ne znamo kojim redosledom ce izaci u konzoli
getUsers(zad2, ispisPorukeStranica);
getUsers(zad3, ispisPorukeKonzola);
getUsers(zad5, ispisPorukeStranica);

// getUsers(
//     (niz) => {
//         niz.forEach(kor => {
//             if (kor.company.name.includes("Group") || kor.company.name.includes("LLC")) {
//                 console.log(kor.name);
//             }
//         });
//     },
//     (poruka) => {
//         document.body.innerHTML += `<p class='error'>${poruka}</p>`
//     }
// );

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////


// Kreirati fajl sportisti.json, koji sadrži niz objekata, pri čemu svaki objekat sadrži sledeće atribute: imePrezime (string), visina (broj), timovi (niz stringova).
// Uspostaviti konekciju ka fajlu sportisti.json.


let getSportisti = (resolve, reject) => {
    let zahtev = new XMLHttpRequest();
    zahtev.addEventListener('readystatechange', function () {
        if (this.readyState === 4 && this.status === 200) {
            //radi nesto kad je sve u redu
            let data = JSON.parse(this.responseText); //kovertovanje iz stringa u niz objekata
            resolve(data);
        }
        else if (this.readyState === 4) {
            //radi nesto kad je doslo do greske
            reject("Doslo je do greske")
        }
    });
    zahtev.open('GET', 'sportisti.json'); //pozivamo fajl
    zahtev.send();
}


// Ispisati prosečnu visinu svih sportista.

let prosecnaVisinaSportista = (niz) => {
    let suma = 0;
    niz.forEach(igrac => {
        suma += igrac.visina;
    });
    let prosek = niz.length != 0 ? suma / niz.length : 0;
    prosek = +(Math.round(prosek + "e+2") + "e-2"); //zaokruzivanje na do dve decimale, ukoliko je potrebno
    console.log("\n\tProsecna visina sportista: ", prosek);
}

getSportisti(prosecnaVisinaSportista, ispisPorukeStranica);

// Ispisati ime i prezime sportiste sa najmanje transfera (bilo kog ako ima više takvih sportista).

let najmanjeTransfera = (niz) => {
    let min = niz[0].timovi.length;
    let index = 0;
    for (let i = 1; i < niz.length; i++) {
        if (niz[i].timovi.length < min) {
            min = niz[i].timovi.length;
            index = i;
        }
    }
    console.log("\n\tIme i prezime sportiste sa najmanje transfera: ", niz[index].imePrezime);
}
getSportisti(najmanjeTransfera, ispisPorukeStranica);

// Ispisati imena i prezimena svih sportista koji su igrali za „Lakers“-e.

let igraciLakersa = (niz) => {
    let imeTima = "Lakers";
    niz.forEach(element => {
        element.timovi.forEach(el => {
            if (el === imeTima) {
                console.log("\n\tIme i prezime sportiste koji je igrao u : ", element.imePrezime);
            }
        });
    });
}
getSportisti(igraciLakersa, ispisPorukeStranica);