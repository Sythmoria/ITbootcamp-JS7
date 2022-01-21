let getTodos = (resource, callback) => {
    // 1. kreiranje XML objekta
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            //console.log(request.responseText);
            //callback(); //u nasem primeru dole u pocetku nije ocekivalo od parametara, pa nista nismo upisali u zagradu, ali posle smo dodali dva parametra od kojih prvi preuzima podatke ako je sve ok a drugi je tu za kad se desi greska
            callback(request.responseText, undefined); //moramo da imamo dva parametra, zato: ovde nam je request.responseText umesto data, a undefined umesto error
        }
        else if (request.readyState === 4) {
            //console.log("Ne mogu da dohvatim podatke.");
            callback(undefined, "Ne mogu da dohvatim podatke."); //moramo da imamo dva parametra, zato: undefined umesto data, a string umesto error
        }
    });

    // 2. otvaranje kreiranog zahteva
    request.open('GET', resource);

    // 3. saljemo zahtev
    request.send();
}

getTodos('../JSON/todos.json', (data, error) => { //dva parametra, jedno za kad je sve ok a drugi parametar za kada nam se desi greska
    console.log("Callback okinuta");
    if (error) { //if od stringa je true, ne moramo da upisujemo if err == true -> ako je err = true, ispisati tu gresku:
        console.log(error); //ispisuje gresku
    }
    else {
        console.log(data); //ispisuje podatke kojima moze dalje da raspolaze
    }
});

// getTodos('../JSON/todosssssssssss.json', (data, error) => {
//     console.log("Callback okinuta");
//     if (error) { //if od stringa je true, ne moramo da upisujemo if err == true -> ako je err = true, ispisati tu gresku:
//         console.log(error); //ispisuje gresku
//     }
//     else {
//         console.log(data); //ispisuje podatke kojima moze dalje da raspolaze
//     }
// });

console.log("KRAJ FAJLA"); //prvo ce se ispisati, jer je bilo potrebno izvesno vreme da se uspostavi zahtev za getTodos -> asinhrono programiranje

/////////////////////////////////////

//Do sada smo pozivali samo po jedan .json fajl
// Postavlja se pitanje – Šta ukoliko želimo da pozivamo više .json fajlova jedan za drugim?
// Fajlove moramo ucitavati nekim redom, da se zna koji prvi, koji drugi, koji treci, itd. jer su mozda povezani