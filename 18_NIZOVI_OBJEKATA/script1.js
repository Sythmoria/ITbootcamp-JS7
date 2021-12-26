let blog1 = {
    title: "Osnovni HTML tagovi",
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: "Osnovni CSS selektori!",
    likes: 70,
    dislikes: 5
};

let blog3 = {
    title: "Napredni CSS selektori",
    likes: 50,
    dislikes: 60
};

let blog4 = {
    title: "Uvod u JS",
    likes: 150,
    dislikes: 50
};

let blog5 = {
    title: "IF naredba grananja",
    likes: 250,
    dislikes: 160
};

let user1 = {
    username: "JelenaMatejic",
    age: 27,
    blogs: [blog1, blog2, blog3],
    myLikes: function () {
        let s = 0;
        this.blogs.forEach(b => {
            s += b.likes;
        });
        return s;
    },
    myDislikes: function () {
        let s = 0;
        this.blogs.forEach(b => {
            s += b.dislikes;
        });
        return s;
    }
};

let user2 = {
    username: "StefanStanimirovic",
    age: 32,
    blogs: [blog4, blog5],
    myLikes: function () {
        let s = 0;
        this.blogs.forEach(b => {
            s += b.likes;
        });
        return s;
    },
    myDislikes: function () {
        let s = 0;
        this.blogs.forEach(b => {
            s += b.dislikes;
        });
        return s;
    }
};

// ispis
console.log(user1.username);

// podaci o prvom blogu korisnika 1
console.log(user1.blogs[0]);

// naslov prvog bloga korisnika 1
console.log(user1.blogs[0].title);

// 1. ZADATAK: Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.

//niz korisnika
let users = [user1, user2];
console.log(users);

// ko su autori blogova
users.forEach(u => {
    console.log(u.username);
});

// ispisati sve blogove koje su napisali autori iz niza users
users.forEach(u => {
    //u je jesan user iz niza
    let blogsU = u.blogs;
    blogsU.forEach(b => {
        console.log(b.title);
    });
});

// 2. ZADATAK: Ispisati imena onih autora koji imaju ispod 18 godina
console.log("Ispisati imena onih autora koji imaju ispod 30 godina");
users.forEach(u => {
    if (u.age < 30) {
        console.log(u.username);
    }
});

// 3. ZADATAK: Ispisati naslove onih blogova koji imaju više od 50 lajkova
console.log("Ispisati naslove onih blogova koji imaju vise od 50 lajkova");
users.forEach(u => {
    let blogsU = u.blogs; //niz blogova tekuceg korisnika u
    blogsU.forEach(b => {
        if (b.likes > 50) {
            console.log(b.title);
        }
    });
});

// 4. ZADATAK: Ispisati sve blogove autora čiji je username ’StefanStanimirovic’
console.log("Ispisati sve blogove autora čiji je username ’StefanStanimirovic’");
users.forEach(u => {
    //prvi nacin:
    // let blogsU = u.blogs; //niz blogova tekuceg korisnika u
    // blogsU.forEach(b => {
    //     if (u.username == "StefanStanimirovic") {
    //         console.log(b.title);
    //     }
    // });
    //drugi nacin:
    if (u.username === "StefanStanimirovic") {
        let blogsU = u.blogs;
        blogsU.forEach(b => {
            console.log(b.title);
        });
    }
});

// 5. ZADATAK: Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
console.log("Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali");

//prvi nacin
users.forEach(u => {
    let suma = 0; //suma lajkova jednog user-a
    u.blogs.forEach(blog => {
        suma += blog.likes; //izbacice po sumu za svakog korisnika -> dva korisnika, dve sume
    });
    //e sad je gore izbacilo razlicite sume, moze dole uslov
    if (suma > 200) {
        console.log(u.username);
    }
});


// sumLajk(users);

//drugi nacin
//dodaj metod u sve user-e, i u user1 i u user2 -> myLikes (za ukupan broj lajkova
users.forEach(u => {
    if (u.myLikes() > 200) {
        console.log(u.username);
    }
});

// 6. ZADATAK: Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
console.log("Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena");

// Jelena, likes: 30,50,70
// Stefan, likes: 150,250
//globalni prosek: (30+50+70+150+250)/5 = 550/5 = 110
// nije isto sto i (Jelenin prosek + Stefanov prosek) / 2 = 250/2 = 125

// prvo da izracunamo globalni prosek lajkova
let globalAvgLikes = array => {
    let globalSum = 0; //suma svih lajkova svih korisnika
    let globalCounter = 0; //broj blogova svih korisnika
    array.forEach(u => {
        globalSum += u.myLikes(); //napravili smo f-ju myLikes u user-ima, da bi sabiralo sve lajkove -> dodaj koliko je pojedinacni korisnik imao ukupno lajkova za sve svoje blogove
        globalCounter += u.blogs.length; //dodaj koliko je pojedinacni korisnik imao blogova
    });
    return globalCounter != 0 ? globalSum / globalCounter : 0;
};
console.log(`Globalan prosek lajkova je ${globalAvgLikes(users)}`);

let blogoviSaNatprosecnoLajkova = array => {
    let globalAvg = globalAvgLikes(array);
    array.forEach(u => {
        u.blogs.forEach(b => {
            if (b.likes > globalAvg) {
                console.log(b.title);
            }
        });
    });
};
console.log(`Ispis naslova sa natprosecnim brojem lajkova`);
blogoviSaNatprosecnoLajkova(users);

// 7. ZADATAK: Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
// prvo da izracunamo globalni prosek lajkova
let globalAvgDislikes = array => {
    let globalSum = 0; //suma svih lajkova svih korisnika
    let globalCounter = 0; //broj blogova svih korisnika
    array.forEach(u => {
        globalSum += u.myDislikes(); //napravili smo f-ju myDislikes u user-ima, da bi sabiralo sve lajkove -> dodaj koliko je pojedinacni korisnik imao ukupno dislajkova za sve svoje blogove
        globalCounter += u.blogs.length; //dodaj koliko je pojedinacni korisnik imao blogova
    });
    return globalCounter != 0 ? globalSum / globalCounter : 0;
};
console.log(`Globalan prosek dislajkova je ${globalAvgDislikes(users)}`);

let blogNatprosLajkIspodprosDislajk = array => {
    let globalAvgL = globalAvgLikes(array);
    let globalAvgDL = globalAvgDislikes(array);
    array.forEach(u => {
        u.blogs.forEach(b => {
            if (b.likes > globalAvgL && b.dislikes < globalAvgDL) {
                console.log(b.title);
            }
        });
    });
};
console.log(`Ispis naslova sa natprosecnim brojem lajkova i ispodprosecnim brojem negativnih ocena`);
blogNatprosLajkIspodprosDislajk(users);

// Zadatak – vremenska prognoza
//Napraviti niz dan objekata (podsetiti se objekta dan sa 14. slajda i kreirati nekoliko takvih objekata)

//14. slajd: Formirati objekat dan koji sadrži:
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).

// Napraviti arrow funkciju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
// Ispisati prvi od njih
// Ispisati poslednji od njih

//  Napraviti arrow funksiju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom

let dan1 = {
    datum: "2021/06/23",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperatura: [14, 12, 10, 9, 2, 5, 6, 10]
};

let dan2 = {
    datum: "2021/08/15",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperatura: [14, 18, 10, 19, 15, 16, 10, 12, 11]
};

let dan3 = {
    datum: "2021/10/24",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperatura: [24, 22, 20, 19, 20, 15, 16, 17, 22, 21]
};

let dan4 = {
    datum: "2021/12/01",
    kisa: false,
    sunce: true,
    oblacno: true,
    temperatura: [24, 22, 20, 19, 20, 15, 16, 17, 22, 21, 30, 32, 33]
};

let dan5 = {
    datum: "2021/12/25",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperatura: [4, 2, 0, 9, 0, 5, 6, 7, 2, 1, 0, 2, 3]
};

let dan6 = {
    datum: "2021/12/31",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperatura: [4, 2, 0, 9, 0, 5, 6, 7, 2, 1, 0, 2, 3]
};

let dan = [dan1, dan2, dan3, dan4, dan5, dan6];
// console.log(dan);


// Napraviti arrow funkciju koja ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma:
// Ispisati prvi od njih
// Ispisati poslednji od njih
let merenjeTemp = array => {
    let maxPrvi = array[0].temperatura.length;
    let ind = 0;
    let indexZadnji = 0;
    array.forEach((element, index) => {
        if (element.temperatura.length > maxPrvi) { //za vece ga zaustavi na prvom, tu je ispunjen uslov ; za >= bi napisao uvek zadnji
            maxPrvi = element.temperatura.length;
            ind = index;
		//ili umesto svega ovoga console.log(array.datum);
        }
        if (element.temperatura.length == maxPrvi) { //za jednako uvek menja dok ne dodje do zadnjeg, i ostaje nam zadnji
            indexZadnji = index;
		//ili umesto svega ovoga console.log(array.datum);
        }
    });
    if (ind == indexZadnji) {
        console.log(array[ind].datum); //uvek prvi
    }
    else {
        console.log(array[ind].datum);
        console.log(array[indexZadnji].datum);
    }
};
merenjeTemp(dan);

//  Napraviti arrow funkciju koja prebrojava i ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana

let DaniKisniSuncaniOblacni = array => {
    let brKisa = 0;
    let brSunce = 0;
    let brOblacno = 0;
    array.forEach(element => {
        if (element.kisa === true) {
            brKisa++;
        }
        if (element.sunce === true) {
            brSunce++;
        }
        if (element.oblacno === true) {
            brOblacno++;
        }
    });
    console.log(`Ima ${brKisa} kisovitih dana, ${brSunce} suncanih dana, i ${brOblacno} oblacnih dana.`);
};
DaniKisniSuncaniOblacni(dan);

// Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom

let prosecnaTemp = array => {
    let sumaTemp = 0;
    let brojacTemp = 0;
    array.forEach(element => {
        element.temperatura.forEach(el => {
            sumaTemp += el;
            brojacTemp++; // ili brojacTemp = element.temperatura.length
        });
    });
    return brojacTemp != 0 ? (sumaTemp / brojacTemp).toFixed(2) : 0;
}
console.log(prosecnaTemp(dan));

let natprosecnaTemp = array => {
    let prosek = prosecnaTemp(array);
    let sumaTemp = 0;
    let brojacTemp = 0;
    let brojacDana = 0;
    array.forEach(element => {
        element.temperatura.forEach(el => {
            sumaTemp += el;
            brojacTemp++; // ili brojacTemp = element.temperatura.length
        });
        if (brojacTemp != 0) {
            if (sumaTemp / brojacTemp > prosek) {
                brojacDana++;
            }
        }
    });
    console.log(brojacDana);
};

natprosecnaTemp(dan);