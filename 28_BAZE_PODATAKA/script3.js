// Imamo dve opcije:
// 1) Pristupanje konkretnom dokumentu u kolekciji
// 2) Pristupanje svim ili odredjenim dokumentima iz kolekcije

// 1) Pristupanje konkretnom dokumentu u kolekciji
db.collection('customers')
    .doc('customer001')
    .get() //nema parametara u get metodi
    .then((doc) => { //mora da mu se ubaci dokument kao parametar
        //console.log(doc); //bitno nam je sta pise u exists (true ili false)
        if (doc.exists) {
            console.log(`Postoji dokument ${doc.id}`); //id ubacimo da bi mu ime ispisalo
            let obj = doc.data(); //ova metoda data() ce da konvertuje dokument u JS objekat
            console.log(obj);
        }
        else {
            console.log(`Ne postoji dokument ciji je id ${doc.id}`);
        }
        // Sta nam je najbitnije:
        // Polja: doc.id (bice neki string, naziv dokumenta), doc.exists (bice boolean, true ili false)
        // Metoda: doc.data() konvertuje podatke u JS objekat
    })
    .catch((err) => {
        console.log(`Nemoguce dohvatiti dokument: ${err}.`);
    });

// 2) Pristupanje svim ili odredjenim dokumentima iz kolekcije
db.collection('customers')
    .get() //nema parametara u get metodi, a doc() smo samo preskocili
    .then(snapshot => {
        //nazvali smo ga snapshot jer predstavlja samo sliku trenutnog stanja
        // console.log(snapshot); -> pogledaj da li je empty true ili false -> osim empty, tu imamo i docs (niz dokumenata), size, itd.
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                //znamo da dokumenti postoje, tako da ce doc.exists uvek biti true, tako da nam samo treba da pozovemo data()
                console.log(doc.id, doc.data()); //redosled ce biti isti kao u Cloud Firestore
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji ; kolekcija je prazna.`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumenta iz kolekcije: ${err}.`);
    });

//////////////////////////////////////////////////

// 1) Dohvatanje dokumenata u odredjenom redosledu:
/* Može se postaviti redosled po kojem se prikazuju dokumenti uz pomoć orderBy metode.
orderBy(field, order) prima dva stringa kao parametre, pri čemu je:
field – naziv polja po kojem se vrši sortiranje,
order – opcioni parametar, koji može biti „asc“ – rastući poredak, ili „desc“ – opadajući poredak
Može se pozvati više orderBy metoda, ali se u tom slučaju ručno mora formirati složeni (kompozitni) indeks u bazi za ta polja.*/
// 2) Dohvatanje odredjenog broja dokumenata iz kolekcije -> limit() pre ili posle orderBy()
// 3) Dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume (filtriranje)
/* Ukoliko želimo da prikažemo samo određena dokumenta koji zadovoljavaju određeni uslov, koristimo where metodu:
where(field, comparison, value),
pri čemu je:
-- Field – string, polje po kojem se vrši poređenje,
-- Comparison – jedan od sledećih stringova:
‘<‘, ‘<=‘, ‘==‘, ‘>=‘, ‘>’, ‘array-contains’, ‘in’, ‘array-contains-any’,
(array-contains – kada je polje niz, a traži se jedna vrednost u nizu),
(in – kada se pita da li je vrednost polja element nekog niza),
(array-contains-any, isto kao array-contains, samo više vrednosti),
-- Value – vrednost po kojoj se vrši poređenje.
 */

// 1) Dohvatanje dokumenata u odredjenom redosledu
db.collection('customers')
    .orderBy("age", "desc") //za kombinaciju .orderBy("age", "desc") i orderBy("name") izbacice nam gresku, jer nam trebaju INDEXI -> u konzoli nam izbaci link, klikom stizemo na Firebase, i on ce nam ponuditi da napravimo KOMPOZITNI INDEX (Composite index) i ponuditi da nam on sam napravi indexe, a indexe mozemo i manuelno da napravimo: Firebase Database -> Cloud Firestore -> Indexes -> Composite -> Add index -> barem dva polja se unesu ovde u Field Path
    .orderBy("name") //ako hocemo da sortira, pozivamo ovu metodu, i kao parametar se stavi STRING po kome se vrsi sortiranje -> mozemo da napisemo umesto ovoga i .orderBy("age", "desc") i .orderBy("salary", "asc")  -> orderBy() automatski pravi indexe za pretragu 
    .get() //nema parametara u get metodi, a doc() smo samo preskocili
    .then(snapshot => {
        //nazvali smo ga snapshot jer predstavlja samo sliku trenutnog stanja
        // console.log(snapshot); -> pogledaj da li je empty true ili false -> osim empty, tu imamo i docs (niz dokumenata), size, itd.
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                //znamo da dokumenti postoje, tako da ce doc.exists uvek biti true, tako da nam samo treba da pozovemo data()
                //console.log(doc.id, doc.data()); //redosled ce biti isti kao u Cloud Firestore
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + " " + obj.salary); //oni koji nemaju ova polja nece biti razmatrani, bice undefined -> BITNO je da svi dokumenti u kolekciji imaju ista polja
                // console.log(obj.ime + " " + obj.godine + " " + obj.plata);
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji ; kolekcija je prazna.`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumenta iz kolekcije: ${err}.`);
    });



// 2) Dohvatanje odredjenog broja dokumenata iz kolekcije -> posle order() dodajemo limit() ILI pre order() dodajemo limit()
db.collection('customers')
    // .orderBy("age", "desc") //za kombinaciju .orderBy("age", "desc") i orderBy("name") izbacice nam gresku, jer nam trebaju INDEXI -> u konzoli nam izbaci link, klikom stizemo na Firebase, i on ce nam ponuditi da napravimo KOMPOZITNI INDEX (Composite index) i ponuditi da nam on sam napravi indexe, a indexe mozemo i manuelno da napravimo: Firebase Database -> Cloud Firestore -> Indexes -> Composite -> Add index -> barem dva polja se unesu ovde u Field Path
    // .orderBy("name") //ako hocemo da sortira, pozivamo ovu metodu, i kao parametar se stavi STRING po kome se vrsi sortiranje -> mozemo da napisemo umesto ovoga i .orderBy("age", "desc") i .orderBy("salary", "asc")  -> orderBy() automatski pravi indexe za pretragu
    .orderBy("name")
    .orderBy("age", "desc")
    .orderBy("salary", "desc") //trazimo osobu sa najvecom platom
    .limit(1)
    .get() //nema parametara u get metodi, a doc() smo samo preskocili
    .then(snapshot => {
        //nazvali smo ga snapshot jer predstavlja samo sliku trenutnog stanja
        // console.log(snapshot); -> pogledaj da li je empty true ili false -> osim empty, tu imamo i docs (niz dokumenata), size, itd.
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                //znamo da dokumenti postoje, tako da ce doc.exists uvek biti true, tako da nam samo treba da pozovemo data()
                //console.log(doc.id, doc.data()); //redosled ce biti isti kao u Cloud Firestore
                let obj = doc.data();
                // console.log("Limitirano na 3: " + obj.name + " " + obj.age + " " + obj.salary); //oni koji nemaju ova polja nece biti razmatrani, bice undefined -> BITNO je da svi dokumenti u kolekciji imaju ista polja
                // console.log(obj.ime + " " + obj.godine + " " + obj.plata);
                console.log("Limitirano na 1: " + obj.name + " " + obj.age + " " + obj.salary);
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji ; kolekcija je prazna.`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumenta iz kolekcije: ${err}.`);
    });

// 3) Dohvatanje dokumenata koji zadovoljavaju odredjene kriterijume (filtriranje)
db.collection('customers')
    .where("age", ">=", 28)
    //.where("salary", "==", "300") //moze vise puta where
    //.orderBy("age", "desc")
    //.orderBy("name") //ne moze u proizvoljnom redosledu da se kombinuje where() i orderBy() jer orderBy() mora da se slozi sa onim sto je u where(), pa ubacujemo .orderBy("age") iznad
    // .orderBy("age", "desc")
    // .orderBy("salary", "desc") //trazimo osobu sa najvecom platom
    // .limit(1)
    .get() //nema parametara u get metodi, a doc() smo samo preskocili
    .then(snapshot => {
        //nazvali smo ga snapshot jer predstavlja samo sliku trenutnog stanja
        // console.log(snapshot); -> pogledaj da li je empty true ili false -> osim empty, tu imamo i docs (niz dokumenata), size, itd.
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                //znamo da dokumenti postoje, tako da ce doc.exists uvek biti true, tako da nam samo treba da pozovemo data()
                let obj = doc.data();
                console.log(obj.name + " " + obj.age + " " + obj.salary);
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji ; kolekcija je prazna.`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumenta iz kolekcije: ${err}.`);
    });



////////////////////////////////////////////////
////////////////////////////////////////////////
/////////////////// ZADACI /////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

/*
- Iz kolekcije customers, pročitati sve klijente sortirane po imenu.
- Iz kolekcije customers, pročitati sve klijente koji:
-- Imaju adresu u Nišu,
-- Imaju platu veću ili jednaku od 500,
-- Imaju platu između 300 i 800,
-- Imaju platu manju od 900, i imaju 30 godina,
-- Imaju adresu u Nišu ili Beogradu,
-- Imaju 22, 25 ili 28 godina.
*/

db.collection('customers')
    // 1.7 zadatak
    // Iz kolekcije customers, pročitati sve klijente koji imaju 22, 25 ili 28 godina. -> array napravi sa ove tri vrednosti
    // .where("age", "in", [22, 25, 28])
    // 1.6 zadatak
    // Iz kolekcije customers, pročitati sve klijente koji imaju adresu u Nišu ili Beogradu
    // .where("addresses", "array-contains-any", ["Nis", "Beograd"])
    //ako bi moralo da sadrzi i NIS i BEOGRAD, i jedno i drugo istovremeno, onda bi mogli da dobijemo ideju da koristimo dva where sa "array-contains" ALI OVO NIJE MOGUCE
    // 1.5 zadatak
    // Iz kolekcije customers, pročitati sve klijente koji imaju platu manju od 900, i imaju 30 godina
    // .where("salary", "<", 900)
    // .where("age", "==", 30) //ovde nikad ne bi mogla nejednakost, nejednakost moze samo nad "salary" u ovom slucaju, ako nam je trebala nejednakost za "age" onda bi moralo neko if u forEach-u
    // 1.4 zadatak
    // Iz kolekcije customers, pročitati sve klijente koji imaju platu između 300 i 800
    // .where("salary", ">=", 300) //ne upisuj brojeve kao string
    // .where("salary", "<=", 800)
    // 1.3 zadatak
    // Iz kolekcije customers, pročitati sve klijente koji imaju platu veću ili jednaku od 500
    // .where("salary", ">=", 500)
    // 1.2 zadatak
    // Iz kolekcije customers, pročitati sve klijente koji imaju adresu u Nišu
    // .where("addresses", "array-contains", "Nis")
    // .orderBy("addresses") //ovo mi ne treba, sem ako cu da kombinujem sa name ili jos nekim sortiranjem
    // 1.1 zadatak
    // Iz kolekcije customers, pročitati sve klijente sortirane po imenu:
    // .orderBy("name")
    .get() //nema parametara u get metodi
    .then(snapshot => {
        //nazvali smo ga snapshot jer predstavlja samo sliku trenutnog stanja
        // console.log(snapshot); -> pogledaj da li je empty true ili false -> osim empty, tu imamo i docs (niz dokumenata), size, itd.
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                //znamo da dokumenti postoje, tako da ce doc.exists uvek biti true, tako da nam samo treba da pozovemo data()
                // let obj = doc.data();
                // console.log(obj.name + " " + obj.age + " " + obj.salary);
                //za citav sadrzaj:
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji ; kolekcija je prazna.`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumenta iz kolekcije: ${err}.`);
    });


/*
- Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.
- Iz kolekcije tasks, pročitati sve zadatke, i koji:
-- Su prioritetni,
-- Treba da se izvrše u tekućoj godini,
-- Su završeni,
-- Tek treba da počnu.
 */

let datum = new Date();
let tekucaGodina = datum.getFullYear();
let startYear = firebase.firestore.Timestamp.fromDate(new Date(tekucaGodina + "-01-01"));
let endYear = firebase.firestore.Timestamp.fromDate(new Date(tekucaGodina + "-12-31"));
console.log(endYear);

db.collection('tasks')
    // 1.5 Iz kolekcije tasks, pročitati sve zadatke, i koji tek treba da počnu
    // 1.4 Iz kolekcije tasks, pročitati sve zadatke, i koji su završeni
    // 1.3 Iz kolekcije tasks, pročitati sve zadatke, i koji treba da se izvrše u tekućoj godini
    .where("dueDate", ">=", startYear)
    .where("dueDate", "<=", endYear)
    // 1.2 Iz kolekcije tasks, pročitati sve zadatke, i koji su prioritetni
    // .where("priority", "==", true)
    // 1.1 Iz kolekcije tasks, pročitati sve zadatke, sortirane po nazivu.
    // .orderBy("title")
    .get() //nema parametara u get metodi
    .then(snapshot => {
        //nazvali smo ga snapshot jer predstavlja samo sliku trenutnog stanja
        // console.log(snapshot); -> pogledaj da li je empty true ili false -> osim empty, tu imamo i docs (niz dokumenata), size, itd.
        if (!snapshot.empty) {
            let allDocs = snapshot.docs;
            allDocs.forEach(doc => {
                //znamo da dokumenti postoje, tako da ce doc.exists uvek biti true, tako da nam samo treba da pozovemo data()
                // let obj = doc.data();
                // console.log(obj.description + " " + obj.dueDate + " " + obj.priority " " + obj.startDate " " + obj.title); //upisala sam sve da bi mi bilo lakse da se setim naziva polja
                //za citav sadrzaj:
                console.log(doc.data());
            });
        }
        else {
            console.log(`Nema dokumenata u kolekciji ; kolekcija je prazna.`);
        }
    })
    .catch(err => {
        console.log(`Nemoguce dohvatiti dokumenta iz kolekcije: ${err}.`);
    });

/* 
- Iz kolekcije movies, pročitati sve filmove:
-- Koje je režirao George Lucas,
-- Čija je ocena između 5 i 10,
-- Kojima je žanr komedija, tragedija ili drama,
-- Koji su izašli u 21. veku.
- Prikazati sve informacije o najbolje rangiranom filmu.
- Prikazati sve informacije o najslabije rangiranoj drami.
*/