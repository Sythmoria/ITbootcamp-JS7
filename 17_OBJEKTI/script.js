// Primitivni tipovi podataka: stringovi, brojevi, logicki tipovi
// slozeni tipovi podataka: nizovi, objekti
// Objekti u sebi mogu da sadrze vise razlicitih tipova podataka (prostih ili slozenih). Key-value properties

console.log("Objekti");

let blog1 = {
    title: "HTML",
    content: "Ovo je blog o osnovnim HTML tagovima",
    author: "Jelena"
};

console.log(blog1);
console.log(typeof blog1);

//ispis properties na dva nacina
console.log(blog1.title);
console.log(blog1['title']);

//izmene properties na dva nacina
blog1.title = "Osnove HTML-a";
console.log(blog1);
blog1["author"] = "Jelena Matejic";
console.log(blog1);

////////////////////////////////////////

let user = {
    username: "JM",
    age: 27,
    blogs: ["IF naredba grananja", "WHILE petlja", "FOR petlja"],
    login: function () { //ne moze arrow funkcija
        console.log("Ulogovani ste");
    },
    //kada je f-ja u objektu, to se zove METOD
    logout: function () {
        console.log("Izlogovani ste");
    },
    logBlogs: function () {
        console.log(this); //izbacice objekat USER
        console.log(this.blogs);
        //koristi THIS da pristupis propertiju koji je unutar samog objekta
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

console.log(user); //automatski ih redja po abecednom redu u konzoli (browser)
console.log(user.blogs);

//prvi nacin
let nasloviBlogova = user.blogs;
for (let i = 0; i < nasloviBlogova.length; i++) {
    document.body.innerHTML += `<h3>${nasloviBlogova[i]}</h3>`
}
//drugi nacin
for (let i = 0; i < user.blogs.length; i++) {
    document.body.innerHTML += `<h3>${user.blogs[i]}</h3>`
}

//foreach petlja je isto opcija

// poziv metoda
user.login();
user.login();
user.logout();

//poziv metoda koji u sebi sadrzi poziv nekog propertija -> THIS!
user.logBlogs();
console.log(this); //izbacice Windows

//////////////////////////////////////////////////
//////////////////////////////////////////////////

//VEZBANJE
/* Formirati objekat dan koji sadrži:
a) Datum (string u formatu YYYY/MM/DD),
b) Kiša (true/false),
c) Sunce (true/false),
d) Oblačno (true/false),
e) Vrednosti temperature (Niz temperatura tog dana).*/
/*Napisati metode koje:*/
/*1) Određuje i vraća prosečnu temperaturu izmerenu tog dana.*/
/*2) Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.*/
/*3) Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.*/
/*4) Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).*/
/*5) Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. */
/*6) Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false. */
/* 7) Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.*/
/* 8) Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.*/
/* 9) Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
 */

let vreme = {
    datum: "2021/12/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    vrednostiTemperature: [10, 14, 15, 16, 12, 8, 10, 9, 17, 21, 9, 15],
    prosecnaTemp: function () {
        let suma = 0;
        let brojac = 0;
        this.vrednostiTemperature.forEach(element => {
            suma += element;
            brojac++;
        });
        return brojac != 0 ? (suma / brojac).toFixed(2) : 0;
    },
    natprosecnaTemp: function () {
        let brojac = 0;
        // ili ovde da ubacimo novu varijablu koja ce biti jednaka this.prosecnaTemp(this.vrednostiTemperature) -> bolja varijanta -> sama jednom bi se izvrsila ta f-ja onda -> let p = this.prosecnaTemp(this.vrednostiTemperature)
        this.vrednostiTemperature.forEach(element => {
            if (element > this.prosecnaTemp()) {
                brojac++;
            }
        });
        return brojac;
    },
    maksimalnaTemp: function () {
        let max = this.vrednostiTemperature[0];
        this.vrednostiTemperature.forEach(element => {
            if (element > max) {
                max = element;
            }
        });
        return max;
    },
    //ili spoji maksimalnaTemp sa brojMaxTemp
    brojMaxTemp: function () {
        let brojac = 0;
        this.vrednostiTemperature.forEach(element => {
            if (element == this.maksimalnaTemp()) {
                brojac++;
            }
        });
        return brojac;
    },
    /*4) Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).*/
    izmedjuDveTemp: function (a, b) {
        let brojac = 0;
        for (let i = 0; i <= this.vrednostiTemperature.length; i++) {
            if (this.vrednostiTemperature[i] > a && this.vrednostiTemperature[i] < b) {
                brojac++;
            }
        }
        return brojac;
    },
    /*5) Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. */
    iznadProsekaDaNe: function () {
        return (this.natprosecnaTemp() > (this.vrednostiTemperature.length - this.natprosecnaTemp())) ? true : false;
        //ili return (this.vrednostiTemperature.length/2) < this.natprosecnaTemp(); //automatski ce vratiti true ili false
    },
    /*6) Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false. */
    leden: function () {
        let temporary = true;
        this.vrednostiTemperature.forEach(element => {
            if (element > 0) {
                temporary = false;
            }
            //prvi put kad naleti na neku vrednost koja se ne uklapa, promenice u false
        });
        return temporary;
        //drugi nacin:
        // for(let i=0; ){
        // if (this.vrednostiTemperature[i] > 0) {
        //     return false;
        // }
        // return true;
        // }
        //treci nacin:
        //let rez = true;
        //this.temp.forEach(el => {
        // if (el>0) { rez = false }
        // });
        //return rez
    },
    tropski: function () {
        let temporary = true;
        this.vrednostiTemperature.forEach(element => {
            if (element < 24) {
                temporary = false; //prvi put kad naleti na neku vrednost koja se ne uklapa, promenice u false
            }
        });
        return temporary;
        //ako hocu return da mi ne stoji odvojeno na dnu, ne treba da koristim forEach nego samo for

    },
    /* 8) Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.*/
    nepovoljan: function () {
        let temporary = false;
        for (let i = 0; i < this.vrednostiTemperature.length - 1; i++) {
            if (Math.abs(this.vrednostiTemperature[i + 1] - this.vrednostiTemperature[i]) > 8) { //mogu dodati i  || (this.vrednostiTemperature[i] - this.vrednostiTemperature[i + 1] > 8) ali je svejedno da li ce ici prvi index minus drugi ili obrnuto, uslov bespotreban
                temporary = true; //prvi put kad naleti na neku vrednost koja se ne uklapa, promenice u true
            }
        }
        return temporary;
    },
    /* 9) Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    */
    neuobicajen: function () {
        let temporary = false;
        this.vrednostiTemperature.forEach(element => {
            if ((this.kisa == true && element < -5) || (this.oblacno == true && element > 25) || (this.kisa == true && this.oblacno == true && this.sunce == true)) {
                temporary = true;
            }
        });
        return temporary;
    }
};

console.log("Prosecna temperatura, zaokruzena, je: " + vreme.prosecnaTemp());
console.log("Broj merenja sa nadprosecnom temp iznosi: " + vreme.natprosecnaTemp());
console.log("Prebrojan broj pojavljivanja max temp: " + vreme.brojMaxTemp());
// vrednostiTemperature: [10, 14, 15, 16, 12, 8, 10, 9, 17, 21, 9, 15],
console.log(vreme.izmedjuDveTemp(10, 17) + " je broj merenja temp u unetom intervalu"); //trebalo bi da izbaci 5
console.log("Da li je u vecini dana temp bila iznad proseka? " + vreme.iznadProsekaDaNe());
console.log("Da li je dan bio leden? " + vreme.leden());
console.log("Da li je dan bio tropski? " + vreme.tropski());
console.log("Da li je dan bio nepovoljan? " + vreme.nepovoljan());
console.log("Da li je dan bio neuobicajen? " + vreme.neuobicajen()); //bice true jer mi je oblacno a vece temperature


