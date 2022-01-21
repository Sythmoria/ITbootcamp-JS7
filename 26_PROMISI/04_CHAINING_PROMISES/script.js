let getTodos = resource => {
    // 1. kreiranje XML objekta
    let request = new XMLHttpRequest();
    // 2. otvaranje kreiranog zahteva
    request.open('GET', resource);
    // 3. saljemo zahtev
    request.send();

    return new Promise((resolve, reject) => {
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                //console.log(request.responseText);
                //callback(); //u nasem primeru dole u pocetku nije ocekivalo od parametara, pa nista nismo upisali u zagradu, ali posle smo dodali dva parametra od kojih prvi preuzima podatke ako je sve ok a drugi je tu za kad se desi greska
                //callback(request.responseText, undefined); //moramo da imamo dva parametra, zato: ovde nam je request.responseText umesto data, a undefined umesto error
                resolve(request.responseText);
            }
            else if (request.readyState === 4) {
                //console.log("Ne mogu da dohvatim podatke.");
                //callback(undefined, "Ne mogu da dohvatim podatke."); //moramo da imamo dva parametra, zato: undefined umesto data, a string umesto error
                reject("Ne mogu da dohvatim podatke.")
            }
        });
    });
    //return p; //vracam objekat Promise -> ne treba nam ako odmah u startu ne napisem let p nego return new Promise odmah
}


// zelim:
// 1. da se ucita todos.json fajl
// 2. da se ucita fruits.json fajl
// 3. da se ucita vegetables.json fajl

getTodos("../JSON/todos.json").then(data => {
    console.log("Promise todos resolved", data);
    return getTodos("../JSON/fruits.json"); //vracam promise da bi opet mogla da odradim then za promise i naredni .then() se odnosi na ovaj promise
}).then(data => { //ovo then se odnosi na return odozgo
    console.log("Promise fruits resolved", data);
    return getTodos("../JSON/vegetables.json"); //vracam promise koji se odnosi na naredni .then()
}).then(data => {
    console.log("Promise vegetables resolved", data);
}).catch(err => { //ovo catch se odnosi na  sve json
    console.log("Promise rejected", err);
});

console.log("KRAJ FAJLA"); //prvo ce se ispisati, jer je bilo potrebno izvesno vreme da se uspostavi zahtev za getTodos -> asinhrono programiranje
