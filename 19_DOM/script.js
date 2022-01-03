//Programska reprezentacija za HTML.
// Predstavlja stranicu na način koji omogućuje programu da promeni strukturu, stil i sadržaj HTML stranice.
// DOM predstavlja HTML dokument preko objekata povezanih u strukturi koja se zove stablo.
console.log("DOM");

// document.anchors
// Vraća sve <a> tagove koji imaju postavljen name atribut.
// document.URL
// Vraća URL adresu stranice.
// document.body
// Vraća <body> tag.
// document.documentElement
// Vraća <html> tag.
// document.forms
// Vraća sve <form> tagove.
// document.images
// Vraća sve <img> tagove.
// document.links
// Vraća sve <a> tagove koji imaju postaveljen href atribut.

console.log(document);
console.log(typeof document);
console.log(document.body);
console.log(typeof document.body);

//kako pristupiti jednom ili vise elemenata
//selektovanje elemenata

// document.getElementById(‘id’) - Vraća objekat – HTML element sa datim id-em
// document.getElementsByClassName(‘class’) - Vraća HTML kolekciju svih elemenata sa datom klasom
// document.getElementsByTagName(‘tag’) - Vraća HTML kolekciju svih zadatih tagova
// document.getElementsByName(‘name’) - Vraća HTML kolekciju svih elemenata koji imaju zadatu vrednost atributa name

let p1 = document.getElementById("p1"); //procitaj u html belesku -> postoji razlog sto ovde pise Element u JEDNINI
console.log(p1);
console.log(typeof p1);

let cont = document.getElementsByClassName("container");
console.log(cont); //izbacuje HTML collection za rezultat -> niz u objektu
console.log(typeof cont); //objekat (a u sebi sadrzi niz elemenata; objekat tipa HTML kolekcije)

// HTML Collection – kolekcija čijim članovima ne možemo pistupiti forEach petljom, ali može for!

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]); //jedino preko indexa moze da se pristupi
}

// cont.forEach(element => {
//     console.log(element);
// });
//forEach petlja nece moci da se izvrsi

// Na sreću, HTML kolekcija se može konvertovati u niz:
// let k = document.getElementsByClassName('klasa');
// let k1 = Array.from(k);
// k1.forEach(j => {
//     console.log(j);
// });

let contNiz = Array.from(cont)
contNiz.forEach(element => {
    console.log(element);
});

// document.getElementsByTagName(‘tag’) - Vraća HTML kolekciju svih zadatih tagova
let paragrafi = document.getElementsByTagName("p");
for (let i = 0; i < paragrafi.length; i++) {
    console.log(paragrafi[i]);
}

let linkovi = document.getElementsByName("link");
for (let i = 0; i < linkovi.length; i++) {
    console.log(linkovi[i]);
}

//ovo su Node liste:
//  document.querySelector(‘selector’) -> Kao parametar prima bilo koji validan CSS selektor. Kao rezultat vraća objekat – prvi HTML element koji zadovoljava dati selektor.
// document.querySelectorAll(‘selector’) -> Kao parametar prima bilo koji validan CSS selektor. Kao rezultat vraća Node listu svih HTML elemenata koji zadovoljavaju dati selektor.

// Node List – niz čijim članovima možemo pistupiti forEach petljom, kao i for petljom! 

p1 = document.querySelector("#p1"); //mora taraba jer je ID, tako pisemo u CSS
console.log(p1);

cont = document.querySelector(".container"); //imamo dva elementa, ali ce vratiti samo prvi
console.log(cont);

cont = document.querySelectorAll(".container");
console.log(cont);

// Node List – niz čijim članovima možemo pistupiti forEach petljom, kao i for petljom! 

for (let i = 0; i < cont.length; i++) {
    console.log(cont[i]);
}

cont.forEach(element => {
    console.log(element);
});

paragrafi = document.querySelectorAll("p");
console.log(paragrafi);

linkovi = document.querySelectorAll("[name='link']"); //nemoj `` da koristis unutra
console.log(linkovi);

// Sve elemente ispisati u konzoli:
// Dohvatiti prvi paragraf na stranici. -> odradjeno iznad
p1 = document.querySelector("p");
console.log(p1);

// Dohvatiti prvi div tag sa klasom „error“.
let cont2 = document.querySelector(".error");
console.log(cont2);

let div1 = document.getElementsByClassName("error");
console.log(div1[0]); //pristupa prvom
console.log(div1[div1.length - 1]); //pristupa poslednjem
// for petljom mozemo da mu pristupimo -> za jedan element samo index 0

// Dohvatiti poslednji red u tabeli.
cont2 = document.getElementById("tr1"); //nekad se seti da sacuvas fajl, some
console.log(cont2);
//ili
cont2 = document.querySelector("table tr:last-child td:last-child");
console.log(cont2);


// Dohvatiti sve linkove na stranici.
console.log(document.links); //vraca HTML Collection
// for petljom mozemo da mu pristupimo
//ili
cont2 = document.getElementsByTagName("a");
console.log(cont2);

cont2 = document.querySelectorAll("a")
cont2 = document.querySelectorAll("[href]")

// Dohvatiti sve slike na stranici.
console.log(document.images); //vraca HTML Collection
// for petljom mozemo da mu pristupimo
cont2 = document.getElementsByTagName("img"); //vraca jednu sliku
cont2 = document.querySelectorAll("img");
cont2 = document.querySelectorAll("[src]"); //vratilo je i script iz JS
cont2 = document.querySelectorAll("img[src]");
cont2 = document.querySelectorAll("img [src]");//izbacuje sve elemente koji se nalaze unutar img taga a da ti elementi u sebi imaju src podesen -> pazljivo sa razmacima


p1.innerHTML = "Promenjen tekst paragrafa"; //moze ili = ili +=
p1.innerHTML += "Promenjen <span>tekst</span> paragrafa";

let sviLinkovi = document.querySelectorAll("a");

sviLinkovi.forEach(link => {
    //HTML atributi
    link.href = "https://www.google.com";
    link.target = "_blank"; //dodajemo novu stvar u linkove

    // CSS stilovi
    // link.style.color = "green";
    // link.style.textDecoration = "none"; 

    //CSS stilovi - drugi nacin:
    link.style = "color: green; text-decoration:none;" // += ne radi za style
    // ako obrisemo ovde text-decoration:none onda link.style.textDecoration="none" nece raditi jer link.style obrise sve prethodne link.style.stagod i onda je bolje koristiti link.style.stagod nego samo link.style

    //preko metode
    link.setAttribute('name', 'link2'); //isto kao i link.name = "link2"
    link.setAttribute("style", "color: green; text-decoration: none;") //isto kao i link.style = "..."
});

////////////////////////////////////////////////////////////////
// selektovati sve paragrafe i u svakom od njih pridodati tekst "VAZNO!!!"

//imamo i gore paragrafe -> 109 linija, p1, al nema veze
let sviParagrafi = document.querySelectorAll("p");
// sviParagrafi.forEach(tekst => {
//     tekst.innerText += "VAZNO!!!";
//     // tekst.innerHTML += "VAZNO!!!";
// });

// ////////////////////////////////////////////////////////////////
// //svim divovima na stranici sa klasom "error" dodati po jedan naslov najvece velicine sa tekstom "Greska!"
// // let sviError = document.getElementsByClassName("error");
// // //HTML Collections -> ne moze forEach
// // for (let i = 0; i < sviError.length; i++) {
// //     sviError[i].innerHTML += "<h1>Greska!</h1>";
// // }

// let sviError2 = document.querySelectorAll("div.error"); //bez razmaka, jer nas zanima samo div sa klasom error a ne svi elementi unutar diva sa klasom error //obavezne oznake za klasu ili ID kad je tu querySelector
// sviError2.forEach(tekst => {
//     tekst.innerHTML += "<h1>Greska!</h1>";
// });

// ////////////////////////////////////////////////////////////////
// // ZADATAK 3: Neka je n broj paragrafa u datom dokumentu. U svakom i-tom paragrafu dodati broj i na kvadrat, za svako i=1,2,...n //i u postavci zadatka nije isto sto i i index
// let kvadratParagraf = document.querySelectorAll("p");
// for (let i = 0; i < kvadratParagraf.length; i++) {
//     kvadratParagraf[i].innerHTML += ` ${(i + 1) ** 2}`;
// }

// kvadratParagraf.forEach((el, ind) => {
//     el.innerHTML += ` ${(ind + 1) ** 2}`;
// });

// ////////////////////////////////////////////////////////////////
// // ZADATAK 4: svim slikama dodati alternativni tekst

// let altSlike = document.querySelectorAll("img");
// altSlike.forEach(el => {
//     el.setAttribute("alt", "123");
// });

// ////////////////////////////////////////////////////////////////
// // ZADATAK 5: svim paragrafima postaviti atribut style tako da budu obojeni ljubicastom bojom

// sviParagrafi.forEach(el => {
//     el.setAttribute("style", "color:purple;");
// });

// ////////////////////////////////////////////////////////////////
// // ZADATAK 6: svim parnim paragrafima na stranici postaviti pozadinsku zelenu boju, a svim neparnim paragrafima postaviti pozadinsku crvenu boju
// for (let i = 0; i < sviParagrafi.length; i++) {
//     if (i % 2 != 0) { //indexi idu od nula
//         sviParagrafi[i].style.backgroundColor = "green";
//     }
//     else {
//         sviParagrafi[i].style.backgroundColor = "red"
//     }
// };

// // //drugi nacin
// // sviParagrafi.forEach ((par, ind) => {
// //     if (ind % 2 != 0) { //indexi idu od nula
// //         par.style.backgroundColor = "green";
// //     }
// //     else {
// //         par.style.backgroundColor = "red"
// //     }
// // });

// // //treci nacin
// // sviParagrafi = document.querySelectorAll("p:nth-child(even)");
// // sviParagrafi.forEach (el => {
// //     el.style.backgroundColor = "green";
// // });

// ////////////////////////////////////////////////////////////////
// // ZADATAK 7: Svim linkovima na stranici postaviti padding na 5px, font size na 18px i text-decoration na none.
// //Parnim linkovima staviti zelenu pozadinsku boju i ljubicastu boju teksta, a neparnim linkovima plavu pozadinsku boju i belu boju teksta

// for (let i = 0; i < sviLinkovi.length; i++) { //moze i forEach
//     sviLinkovi[i].style.padding = "5px";
//     sviLinkovi[i].style.fontSize = "18px";
//     sviLinkovi[i].style.textDecoration = "none";

//     // sviLinkovi[i].style = "padding: 5px; font-size:18px; text-decoration: none;" //ali ako je bilo jos nesto sem padding, font-size, text-decoration, obrisace to dodatno sto je pre ovog for-a dodavano ---> netacan nacin pisanja
//     if (i % 2 != 0) { //receno je "parni linkovi", a indexi idu od nule, pa zato indexi neparni da budu a length ce se pogoditi
//         sviLinkovi[i].style.backgroundColor = "green";
//         sviLinkovi[i].style.color = "purple";
//         // sviLinkovi[i].style = "background-color:green; color:purple;" //ali ako je bilo jos nesto sem background-color i color, obrisace to dodatno sto je pre ovog for-a dodavano -> obrisace sviLinkovi[i].style = "padding: 5px; font-size:18px; text-decoration: none;" ---> netacan nacin pisanja
//     }
//     else {
//         sviLinkovi[i].style.backgroundColor = "blue";
//         sviLinkovi[i].style.color = "white";
//     }
// };

// ////////////////////////////////////////////////////////////////
// // ZADATAK 8: Svim slikama na stranici koja su sa ekstenzijom .png, postaviti okvir na debljinu 2px i crvenu boju

// //prvi nacin
// let slikePNG = document.querySelectorAll('img[src*=".png"]');
// slikePNG.forEach(el => {
//     el.style.border = "2px solid red";
// });

// //drugi nacin
// // let sveSlike = document.querySelectorAll("img");
// // sveSlike.forEach(slika => {
// //     if (slika.src.indexOf(".png")>-1 || slika.src.indexOf(".PNG")>-1 ) { //index -1 znaci da ne postoji u nizu, znaci da nam bude vece
// //         slika.style.border = "2px solid red";
// //     };
// //     //treci nacin
// //     // if (slika.src.includes(".png")){
// //     //     slika.style.border = "2px solid red";
// //     // };
// // });

// ////////////////////////////////////////////////////////////////
// // ZADATAK 9: Svakom linku na stranici promeniti target svojstvo na sledeci nacin: ako je bilo _blank, postaviti na _top, a ako je bila neka vrednost razlicita od _blank, ili uopste nije bilo postavljeno, tada postaviti na _blank 

// // sviLinkovi.forEach(link => {
// //     if (link.target === "_blank") {
// //         link.target = "_top";
// //     }
// //     else {
// //         link.target = "_blank";
// //     }
// // })

// ////////////////////////////////////////////////////////////////
// // ZADATAK 10: Napraviti niz od najmanje tri imena. Proci nizom i imena ispisati:
// //- Svako u novom linku. Ako ime pocinje na slovo "S", link se otvara u novom tabu, a inace se otvara na istoj stranici.
// //- U listi kao stavke liste. Naizmenicno stavke liste obojiti sa dve razlicite boje.
// //- U jednoj koloni tabele. Postaviti okvir, marginu i pading celijama tabele.

// // let imena = ["Marija", "Milena", "Stefan"];

// // imena.forEach(ime => {
// //     if ((ime.toUpperCase.charAt(0)) === "S") {
// //         document.body.innerHTML += `<a href="https://www.google.com" target="_blank">${ime}</a><br>`;
// //     }
// //     else {
// //         document.body.innerHTML += `<a href="https://www.google.com">${ime}</a><br>`;
// //     }
// // });


// let imena = ["Stefan", "Marija", "Nikola", "Bogdan", "Vladan"];
// imena.forEach(ime => {
//     // if (ime.startsWith("S")) {
//     if (ime[0] == "S") {
//         document.body.innerHTML += `<a href="#" target="_blank">${ime}</a>`;
//     }
//     else {
//         document.body.innerHTML += `<a href="#">${ime}</a>`;
//     }
// });

// //NETACAN NACIN:
// // document.body.innerHTML += "<ul>"; //problem je sto je browser zatvorio ovaj ul tag odmah u startu, a onda je stavke liste dodavao zasebno i poslednje </ul> nije ni registrovao -> nisu celina
// // imena.forEach((ime, index) => {
// //     if (index % 2 == 0) {
// //         document.body.innerHTML += `<li style="color:red">${ime}</li>`;
// //     }
// //     else {
// //         document.body.innerHTML += `<li style="color:blue">${ime}</li>`;
// //     }
// // });
// // document.body.innerHTML += "</ul>";

// let listaString = "<ul>";
// imena.forEach((ime, index) => {
//     if (index % 2 == 0) {
//         listaString += `<li style="color:red">${ime}</li>`;
//     }
//     else {
//         listaString += `<li style="color:blue">${ime}</li>`;
//     }
// });
// listaString += "</ul>";
// document.body.innerHTML += listaString;


// let tabela = "<table>";
// imena.forEach(tab => {
//     tabela += `<tr><td>${tab}</td></tr>`;
// });
// tabela += "</table>";
// document.body.innerHTML += tabela;


// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// //NAVIGACIJA KROZ DOM STABLO
// // obrati paznju je l' mnozina ili jednika! child ili childS!
// // Svojstvo ----------------- Opis
// // parentNode --------------- Roditeljski čvor.
// // childNodes[nodenumber] --- Direktni potomak sa zadatim indeksom.
// // firstChild --------------- Prvi direktni potomak.
// // lastChild ---------------- Poslednji direktni potomak.
// // nextSibling -------------- Sledeći rođak.
// // previousSibling ---------- Prethodni rođak.

// // Svojstva mogu da se lančaju:
// // elem.parentNode ------------------------ vraća roditelja
// // elem.parentNode.parentNode ------------- vraća dedu

// // Svojstvo ------------------------------- Opis
// // element.classList ---------------------- Lista klasa koju element poseduje
// // Metoda --------------------------------- Opis
// // element.classList.add(‘class’) --------- Dodaje zadatu klasu element
// // element.classList.remove(‘class’) ------ Uklanja zadatu klasu element
// // element.classList.toggle(‘class’) ------ Ako element ne poseduje zadatu klasu dodaje je, u suprotnom je briše
// // element.classList.contains(‘class’) ---- Ispituje da li element ima zadatu klasu.

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// SAMOSTALNI RAD:

// //Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success
// //podsetnik: let sviParagrafi = document.querySelectorAll("p");
// //podsetnik2: zakomentarisi ovo iznad do let sviParagrafi, ne vidi se efekat
sviParagrafi.forEach((p, i) => {
    if (i % 2 != 0) { //parni paragrafi, ne indexi
        p.classList.toggle('error');
    }
    else {
        p.classList.toggle('success');
    }
});
// Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
sviParagrafi.forEach((p, i) => {
    if (i % 3 == 0) {
        p.style.fontSize = "15px";
    }
    else if (i % 3 == 1) {
        p.style.fontSize = "20px";
    }
    else {
        p.style.fontSize = "25px";
    }
});

// Svim paragrafima čiji tekst sadrži reč error, postaviti klasu na error, svim paragrafima čiji tekst sadrži reč success, postaviti klasu na success. Ostale klase paragrafa ne modifikovati.

sviParagrafi.forEach(p => {
    if (p.textContent.includes("error")) {
        p.classList.remove('success'); //ako ne ubacim ovo, a paragraf ima klasu success, rezultat bi bio .success.error (dakle, obe klase)
        p.classList.toggle('error');
    }
    if (p.textContent.includes("success")) {
        p.classList.remove('error');
        p.classList.toggle('success');
    }
});

// Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.

sviParagrafi.forEach(p => {
    p.classList.toggle('error');
});



// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////
//
// element.createElement(‘tag’) ------ Kreiranje čvora DOM stabla kao zadatog HTLM taga
// element.removeChild(child) -------- Brisanje zadatog čvora DOM stabla
// element.appendChild(child) -------- Dodavanje čvora(child) DOM stabla kao dete postojećeg čvora(element)
// element.replaceChild(new, old) ---- Zamena „starog“ deteta(old) čvora DOM stable(element) „novim“ detetom(new)
// document.write(text) -------------- Dodavanje teksta



// Dodati novi div tag dokumentu.
let noviDiv = document.createElement("div");
document.body.appendChild(noviDiv);
// samo da proverim pojavljuje li se:
// noviDiv.style.backgroundColor = "yellow";
// noviDiv.innerText += "Dodat novi div tag dokumentu, ne prikazuje se dok se ne ubaci nesto u njega";
// noviDiv.classList.add("poslednji");




// Formirati ul listu sa stavkama čiji je sadržaj proizvoljan tekst, i dodati je div elementu.

// prvi nacin - nepotrebno sve ovo, i pogresno skroz -> innerHTML predstavlja problem za sigurnost, takodje
// let tekst = ["Neki tekst", "Opet neki tekst", "Neki tekst, opet"];
// // let listaString = "<ul>";
// let listaString = "<ul>";
// tekst.forEach(text => {
//     listaString += `<li>${text}</li>`;
// });
// listaString += "</ul>";
// // noviDiv.appendChild(listaString); -> ovo ne radi
// noviDiv.innerHTML += listaString;
// document.body.appendChild(noviDiv);

//testiranje appendChild:
// let noviParagraf = document.createElement("p");
// noviParagraf.innerHTML += "Neki tamo tekst";
// noviDiv.appendChild(noviParagraf);

//1. nacin: boilerplate -> nemoj ovako, bolje je preko funkcije ako imas vise stvari da ubacujes
// let noviUl = document.createElement("ul");
// let noviLi = document.createElement("li");
// noviLi.innerHTML += "Test";
// noviUl.appendChild(noviLi);
// noviLi = document.createElement("li");
// noviLi.innerHTML += "Proba";
// noviUl.appendChild(noviLi);
// noviDiv.appendChild(noviUl);

// sa funkcijom:
let tekst = ["Neki tekst", "Opet neki tekst", "Neki tekst, opet"];
let noviUl = document.createElement("ul");
let noviLi;
tekst.forEach(element => {
    noviLi = document.createElement("li");
    noviLi.innerHTML = element;
    noviUl.appendChild(noviLi);
});
noviDiv.appendChild(noviUl);




// Iz ul liste izbaciti prvu stavku.
noviUl.removeChild(noviUl.childNodes[0]);

// U ul listi zameniti drugu stavku liste.
noviUl.replaceChild(noviUl.childNodes[1], noviUl.childNodes[0]);



// Dodati još jednu stavku ul listi, pri čemu je sadržaj stavke slika.
noviLi = document.createElement("li");
noviLi.innerHTML += `<img src="https://cbaonline.org/wp-content/uploads/2020/10/heart.jpg" style="width:100px;height:100px;">`;
noviUl.appendChild(noviLi);


// document.body.insertBefore(newDiv, currentDiv);