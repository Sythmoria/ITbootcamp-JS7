/* Robna kuća “Ikea” vas je angažovala da joj pomognete u realizaciji aplikacije koja će omogućiti lakši rad zaposlenima u prodavnici.
Uvidom u način rada svih zaposlenih, zaključili ste da menadžment firme funkcioniše na sledeći način:
- Radnici u magacinu proveravaju stanje artikala, i oni su zaduženi da vode evidenciju o brojnom stanju svakog artikla.
- Ekonomisti na osnovu analize tržišta, kao i troškova firme određuju cene, i oni su zaduženi da vode računa o ceni svakog artikla.
- Radnici u kamionu za prevoz poseduju posebnu vagu koja je u mogućnosti da izmeri svaki proizvod, i oni su zaduženi da vode evidenciju o težini svakog artikla.

Na osnovu ovih informacija, odlučili ste da kreirate tri json fajla, tako da svaki sektor unosi podatke u svoj poseban json fajl. Sadržaj svakog fajla je string u JSON formatu koji odgovara nizu objekata, pri čemu svaki objekat od atributa sadrži:
1) stock.json: id (identifikacioni broj artikla), item (naziv artikla), stock (broj artikala na stanju),
2) prices.json: id (identifikacioni broj artikla), item (naziv artikla), price (cena artikla),
3) weights.json: id (identifikacioni broj artikla), item (naziv artikla), weight (težina artikla izražena u kilogramima).
*/

////////////////////////////////////////////////////
////////////////////////////////////////////////////

//////////////////// ZADATAK 1 ////////////////////
/*Menadžment kompanije je od vas zatražio da radnik u prodavnici može da otvori pretraživač, i na stranici da mu se prikaže sledeće:
1) Jedna forma u kojoj se nalazi input u koji može da se upiše neki broj, koji predstavlja ukupnu težinu u kilogramima koju prihvata kamion za prevoz. Pored inputa, nalazi se i dugme. Klikom na dugme potrebno je da odredite da li u kamion za prevoz može da stane ukupna težina svih proizvoda kojih više nema na stanju. Zapravo, potrebno je uraditi sledeće:
1.1) Odrediti koji proizvodi više nisu na stanju i koje treba poručiti. Pretpostavljamo da se naručuje po jedna količina svakog artikla koji nije na stanju.
1.2) Ako je težina svih proizvoda koje treba poručiti veća od kapaciteta kamiona, ispisati poruku “Not enought capacity in truck!!“.
1.3) U suprotnom, ispisati ukupnu cenu svih artikala koje treba naručiti. 
1.4) BONUS VARIJANTA: Ne ispisati samo ukupnu cenu svih artikala, već tabelu sa dve kolone: U prvoj koloni je ispisan naziv artikla koji se poručuje, u sledećoj je njegova cena. U poslednjem redu tabele, u prvoj ćeliji stoji tekst “UKUPNO”, a u drugoj ćeliji ukupna cena svih artikala.
 */
let divOrder = document.querySelector("#order");
let formOrder = document.querySelector("#order form"); //forma koja se nalazi u elementi koji ima ID order
let inputOrder = document.querySelector("#capacity");

// function getItem(resourse, resolve, reject) {
//     let request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', function () {
//         if (this.readyState === 4 && this.status === 200) {
//             //sve ok
//             let data = JSON.parse(this.responseText);
//             resolve(data);
//         }
//         else if (this.readyState === 4) {
//             //desila se neka greska
//             reject("could not fetch data");
//         }
//     });
//     request.open('GET', resourse);
//     request.send();
// }


// function submitForm1(event) {
//     event.preventDefault();
//     // console.log("Forma je submitovana");
//     let capacity = inputOrder.value;
//     let ids = []; //id-jevi artikala koji nisu na stanju
//     // ubacicemo po tri parametra: string, f-ja, f-ja
//     // probacemo callback hell prvo:
//     // treba da pristupimo stock.json pa weights.json -> asinhroni
//     getItem("./json/stock.json", (data) => {
//         //da vidimo prvo koji item nisu na stanju
//         data.forEach(item => {
//             if (item.stock <= 0) {
//                 ids.push(item.id);
//             }
//         });
//         getItem("./json/weights.json", (data) => {
//             let totalWeight = 0;
//             data.forEach(item => {
//                 if (ids.includes(item.id)) {
//                     totalWeight += item.weight;
//                 }
//             });
//             console.log(`Ukupna tezina proizvoda koji treba da se naruce je: ${totalWeight} kg.`);
//             if (totalWeight > capacity) {
//                 let par = document.createElement('p');
//                 par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona!`;
//                 par.style.color = 'red';
//                 par.style.fontSize = '24px';
//                 par.style.fontWeight = 'bold';
//                 divOrder.appendChild(par);
//             }
//             else {
//                 getItem("./json/prices.json", (data) => {
//                     let totalPrice = 0;
//                     data.forEach(item => {
//                         if (ids.includes(item.id)) {
//                             totalPrice += item.price;
//                         }
//                     });
//                     let par = document.createElement('p');
//                     par.innerHTML = `Ukupna cena porudzbine je: ${totalPrice} RSD.`;
//                     par.style.color = 'green';
//                     par.style.fontSize = '24px';
//                     par.style.fontWeight = 'bold';
//                     divOrder.appendChild(par);
//                 }, (msg) => {
//                     console.log(msg);
//                 });
//             }
//         }, (msg) => {
//             console.log(msg);
//         });
//     }, (msg) => {
//         console.log(msg);
//     });
// }

// formOrder.addEventListener('submit', submitForm1);

/* 
1.ideja: getItems() da se pozove jedan za drugim, i to:
getItems("json/stock.json");
getItems("json/weights.json");
getItems("json/prices.json");
NETACNA IDEJA, jer je svaki getItem asinhron poziv (traje koliko traje zahtev serveru), sto znaci da ne more weights.json da se dohvati pre stock.json. Slicno vazi i za prices.json. 

2.ideja: redosled asinhronih poziva da se odvija preko callback funkcija
TACNA IDEJA, ali neprakticna jer ulazimo u callback hell (callback unutar callbacka unutar callbacka unutar callbacka)

3. ideja: kadgod treba da se upravlja redosledom asinhronih poziva onda je najbolje koristiti JS Promise
*/

function getItemReturnPromise(resourse) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function () {
            if (request.readyState === 4 && request.status === 200) {
                //sve ok
                let data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                //desila se neka greska
                reject("could not fetch data");
            }
        });
        request.open('GET', resourse);
        request.send();
    });
}

function submitForm2(event) {
    event.preventDefault();
    // console.log("Forma je submitovana");
    let capacity = inputOrder.value;
    let ids = []; //id-jevi artikala koji nisu na stanju
    getItemReturnPromise('./json/stock.json')
        .then((data) => {
            data.forEach(item => {
                if (item.stock <= 0) {
                    ids.push(item.id);
                }
            });
            return getItemReturnPromise('./json/weights.json'); //nakon ovoga ubacujemo jos jedan then() koji ce zapravo biti za weights.json
        })
        .then((data) => {
            let totalWeight = 0;
            data.forEach(item => {
                if (ids.includes(item.id)) {
                    totalWeight += item.weight;
                }
            });
            if (totalWeight > capacity) {
                let par = document.createElement('p');
                par.innerHTML = `Ukupna tezina proizvoda je veca od kapaciteta kamiona!`;
                par.style.color = 'red';
                par.style.fontSize = '24px';
                par.style.fontWeight = 'bold';
                divOrder.appendChild(par);
            }
            else {
                return getItemReturnPromise('./json/prices.json'); //posle ovoga dodajemo jos jedan then() koji ce se odnositi na prices.json
            }
        })
        .then((data) => {
            if (data !== undefined) { //moramo da nekako se osiguramo da je gore uslo u else granu, pa tek onda ovo da radi, jer bi u suprotnom usao u ovaj then() bez obzira sto na prethodnom nije uslo u else
                let totalPrice = 0;
                // BONUS VARIJANTA: Ne ispisati samo ukupnu cenu svih artikala, već tabelu sa dve kolone: U prvoj koloni je ispisan naziv artikla koji se poručuje, u sledećoj je njegova cena. U poslednjem redu tabele, u prvoj ćeliji stoji tekst “UKUPNO”, a u drugoj ćeliji ukupna cena svih artikala.
                let tabela = document.createElement('table');
                let naslov = document.createElement('tr');
                let th1 = document.createElement('th');
                th1.innerText = 'Naziv artikla';
                let th2 = document.createElement('th');
                th2.innerText = 'Naziv artikla';
                naslov.appendChild(th1);
                naslov.appendChild(th2);
                tabela.appendChild(naslov);
                data.forEach(item => {
                    if (ids.includes(item.id)) {
                        totalPrice += item.price;
                        let red = document.createElement('tr');
                        let kolona1 = document.createElement('td');
                        kolona1.innerText = item.item;
                        let kolona2 = document.createElement('td');
                        kolona2.innerText = item.price;
                        red.appendChild(kolona1);
                        red.appendChild(kolona2);
                        tabela.appendChild(red);
                    }
                });
                let red = document.createElement('tr');
                let kolona1 = document.createElement('td');
                kolona1.innerText = `UKUPNO`;
                let kolona2 = document.createElement('td');
                kolona2.innerText = totalPrice;
                red.appendChild(kolona1);
                red.appendChild(kolona2);
                tabela.appendChild(red);
                tabela.classList.add("tabela");
                divOrder.appendChild(tabela);
                // let par = document.createElement('p');
                // par.innerHTML = `Ukupna cena porudzbine je: ${totalPrice} RSD.`;
                // par.style.color = 'green';
                // par.style.fontSize = '24px';
                // par.style.fontWeight = 'bold';
                // divOrder.appendChild(par);
            }
        })
        .catch((msg) => {
            console.log(msg);
        });
}

formOrder.addEventListener('submit', submitForm2);



/*Menadžment kompanije je od vas zatražio da radnik u prodavnici može da otvori pretraživač, i na stranici da mu se prikaže sledeće:
2) Jedna forma u kojoj se nalazi jedan tekstualni input (gde se unosi deo naziva proizvoda), kao i dva numerička inputa (gde se unose neke cene). Pored njih nalazi se i dugme. Klikom na dugme potrebno je uraditi sledeće:
2.1) Odrediti sve proizvode koji su na stanju.
2.2) Naći takve proizvode koji u nazivu sadrže reč koju je korisnik uneo.
2.3) Kao i one čija je cena između dve vrednosti zadate u dva numerička inputa.
2.4) Korisniku prikazati u listi nazive tih artikala.
2.5) BONUS VARIJANTA: Ne ispisati samo nazive artikala, već ispis izvršiti u tabeli sa tri kolone: U prvoj koloni staviti naziv artikla, u drugoj stanje u magacinu, u trećoj cenu artikla.
 */

let divOrder2 = document.querySelector("#order2");
let formOrder2 = document.querySelector("#order2 form"); //forma koja se nalazi u elementi koji ima ID order
let inputDeoTeksta = document.querySelector("#deoTeksta");
let inputCena1 = document.querySelector('#cena1');
let inputCena2 = document.querySelector('#cena2');


async function clickGetItem() {
    let naziv = inputDeoTeksta.value;
    let cenaMin = inputCena1.value;
    let cenaMax = inputCena2.value;

    let data1 = await getItemReturnPromise('./json/stock.json');
    let artikliNaStanju = [];
    data1.forEach(item => {
        if (item.stock > 0) {
            artikliNaStanju.push(item.id);
        }
    });

    let data2 = await getItemReturnPromise('./json/prices.json');
    let tabela = document.createElement('table');
    data2.forEach(item => {
        if (artikliNaStanju.includes(item.id) && item.item.includes(naziv) && item.price >= cenaMin && item.price <= cenaMax) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td1.innerHTML = item.item;
            td2.innerHTML = item.price;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tabela.appendChild(tr);
        }
    });

    // return artikliNaStanju;
    return tabela; //vraca Promise, ovo ce gledati kao Promise
}

function akcija(event) {
    event.preventDefault();
    clickGetItem()
        .then(data => {
            divOrder2.appendChild(data); //preuzece tabelu iz clickGetItem()
        })
        .catch(error => {
            console.log(error);
        });
}



formOrder2.addEventListener('submit', akcija);