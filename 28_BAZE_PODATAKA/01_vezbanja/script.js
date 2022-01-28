/*Za razvoj moderne veb aplikacije neophodna je baza podataka.
Ukoliko posedujete server, najčešći izbor je MySQL.
Ukoliko želite da vaša baza bude na cloudu, jedan od najboljih izbora je Cloud Firestore, razvijen od strane Firebase-a i Google-a.

Sta je Cloud Firestore?
Prednosti: automatski se održava baza (postavljanje i održavanje servera, skaliranje upita, mnoštvo ugrađenih biblioteka, mogućnost dobijanja podataka u realnom vremenu, podrška za rad u offline režimu, ...)

Kako formirati Cloud Firestore bazu?
Ulogovati se na sajt: https://firebase.google.com/ preko svog Google naloga, i otići u konzolu.
Unutar konzole, kreirati novi projekat, sa imenom itbootcamp.
Prikazaće se prozor, gde sa leve strane možete odabrati stavku „Database“. (Build -> Firestore Database)
*/

/*Cloud Firestore model podataka
Podaci se dele u:
1) na najvisem nivou su: Kolekcije (collections),
2) Dokumente (documents), -> svaki dokument se sastoji od polja
3) Polja (properties, data).

Primer:
1) kolekcija: Cities
2) Dokumenti: city_123, city_456
3) polja: u okviru dokumenta city_123 nalazi polje name: "San Francisco" i polje population: 870887 i polje state: "California" itd.
 */

/*
Cloud Firestore je schemaless – nema ograničenja nad poljima koja se mogu naći u dokumentima, kao i tipu podataka koji mogu biti vrednosti polja.
Dokumenti iz iste kolekcije mogu sadžati različita polja i čuvati različite tipove podataka.
Kolekcije mogu sadržati jedino dokumente.
Naziv dokumenta unutar kolekcije je jedinstven.
Kolekcije ne postoje bez dokumenata.
 */

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
///////////////////// ZADATAK ////////////////////
//////////////////////////////////////////////////

/* 
1) Kreirati kolekciju customers u kojoj svaki dokument sadrži sledeća polja:
- Name (string),
- Age (number – ceo broj),
- Addresses (niz stringova),
- Salary (number – decimalni broj).
2) Kreirati kolekciju tasks u kojoj svaki dokument sadrži sledeća polja:
- Title (string),
- Start Date (timestamp),
- Due Date (timestamp – ne mora svaki dokument da ima ovo polje),
- Priority (boolean),
- Description (string).
*/

/*
u HTML dodajemo:
    <!-- The core Firebase JS SDK is always required and must be listed first -->
    <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.6.7/firebase-firestore.js"></script>
    <script>
        // Your web app's Firebase configuration
        var firebaseConfig = {
            //kopiramo iz projekta sta pise u apiKey,  databaseURL, projectId, storageBucket, messagingSenderId,, appId, measurementId
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        let db = firebase.firestore();
   </script>

   ovo mora da se doda pre script:src[script.js]
 */

console.log(db);
//db je objekat baze -> njega vucemo iz html fajla
// sluzi nam da se povezemo sa bazom

// pristupanje kolekciji customers:
let customers = db.collection('customers');
console.log(customers);
// ovaj objekat customers se povezuje sa kolekcijom customers

//pristupanje dokumentu:
let doc1 = customers.doc('customer001');
console.log(doc1);

let doc2 = db.collection('tasks').doc('task001');
console.log(doc2);


/* za pristup dokumentu:
db.collection('...').doc('...')
kod dokumenata imamo sledece operacije:
    CRUD (create, read, update, delete)
    Create :  doc.set(...) a postoji i add metoda, ovo nije jedini nacin dodavanja
    Read   :  doc.get(...)
    Update :  doc.update(...)
    Delete :  doc.delete(...)
Sve ove 4 operacije kao rezultat vracaju promise (sve 4 su asinhroni promisi)
Sto znaci: nakon njih lancamo .then() i .catch() !!!
*/

let obj = {
    name: "Vesna",
    age: 22,
    addresses: ["Nis", "Leskovac"],
    salary: 470.00
};

//ispod mora ime pod .doc() da ne bi sam generisao random ID-jeve i ubacivao nova dokumenta pri svakom refresh-u stranice
// ako navedemo dokument koji vec postoji, on ce obrisati taj dokument i staviti samo novo

//asinhron poziv:
// db.collection('customers').doc('customer004').set(obj)
//     .then(() => {
//         console.log("Dodat novi dokument u kolekciju customers");
//     })
//     .catch((error) => {
//         console.log("Greska prilikom dodavanja novog dokumenta: " + error);
//     });

/* Ukoliko se dokumentu ne zada id, onda se kreira novi dokument gde se automatski generiše id za taj dokument.
Ukoliko se dokumentu zada id koji ne postoji, onda se kreira novi dokument sa zadatim id-jem, u suprotnom, vrši se ispis preko već postojećeg dokumenta.
Ukoliko želimo da dodamo dodatna polja već postojećem dokumentu, potrebno je koristiti merge komandu:
db.collection("customers").doc("customer-03").set({
    height: 189
}, {merge: true})
*/

//asinhron poziv -> ne znamo hoce li 130 linija stici posle 113:
// db.collection('customers').doc('customer004').set(
//     { height: 180 },
//     { merge: true }
// )
//     .then(() => {
//         console.log("Spojen dokument customer004 u kolekciju customers");
//     })
//     .catch((error) => {
//         console.log("Greska prilikom dodavanja novog dokumenta: " + error);
//     });


//bolje je ovako asinhrone pozive resavati, da znamo da ce definitivno se pozivati odredjenim redosledom:
db.collection('customers')
    .doc('customer004')
    .set(obj) //set vraca promise, i ide then i catch posle
    .then(() => {
        console.log("Dodat novi dokument u kolekciju customers");
        return db.collection('customers')
            .doc('customer004')
            .set(
                { height: 180 },
                { merge: true }
            ); //set vraca promise, i ide then i catch posle
    })
    .then(() => {
        console.log("Spojen dokument customer004 u kolekciju customers");
    })
    .catch((error) => {
        console.log("Greska prilikom dodavanja novog dokumenta: " + error);
    });


//////////////////////////////////////////////////

let datum1 = new Date("2022-01-26 12:00:00");
let datum2 = new Date("2022-01-26 13:00:00");
//kako ubaciti datume StartDate/DueDate preko JS:
let obj2 = {
    title: "fudbal",
    startDate: firebase.firestore.Timestamp.fromDate(datum1),
    dueDate: firebase.firestore.Timestamp.fromDate(datum2),
    priority: false,
    description: "Fudbal sa drugarima iz ITBootcamp-a"
};

db.collection('tasks')
    .doc('task002')
    .set(obj2)
    .then(() => {
        console.log(`Uspesno dodat task!`);
    })
    .catch(msg => {
        console.log(`Neuspesno dodat task: ${msg}`);
    });

//update

db.collection('tasks')
    .doc('task002')
    .update({
        priority: true
    })
    .then(() => {
        console.log(`Uspesno promenjeno polje u dokumentu.`);
    })
    .catch(err => {
        console.log(`Greska prilikom menjanja dokumenta: ${err}`);
    });

// Delete
db.collection('customers')
    .doc('bezimeni')
    .delete()
    .then(() => {
        console.log(`Uspesno izbrisan dokument.`);
    })
    .catch(err => {
        console.log(`Greska prilikom brisanja: ${err}`);
    });

console.log("Test poruka -> prati redosled asinhronih poziva");



////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// drugi nacin za dodavanje dokumenta -> ADD metoda

db.collection('tasks')
    .add({
        title: "Vezba za projekat",
        description: "Vezbanja JS",
        startDate: firebase.firestore.Timestamp.fromDate(new Date("2022-01-29")),
        dueDate: null,
        priority: true
    })
    .then(() => {
        console.log(`Uspesno dodat zadatak u kolekciju tasks.`);
    })
    .catch(err => {
        console.log(`Desila se greska: ${err}.`);
    });

//kod ADD metode nemamo mogucnost da odredimo ime dokumentu, i ADD je zgodno kad nam je nebitan id dokumenta
// db.collection('...').add() je isto sto i db.collection('...').doc().set() tj. add metoda dodaje novi dokument sa random generisanim ID-em
// ako hocemo da sami unesemo ID, onda mora SET metoda:
// db.collection('...').doc(id).set() -> dodaje novi dokument sa zadatim id-em