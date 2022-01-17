let lista = document.getElementById("lista");

let tekst = ["Nahrani gladno govedo", "Plati menadzera", "Izvedi govedo u setnju"];
let noviUl = document.createElement("ul");
let noviLi;
tekst.forEach(element => {
    noviLi = document.createElement("li");
    noviLi.innerText = element;
    noviUl.appendChild(noviLi);
});
lista.appendChild(noviUl);

// listItems = document.querySelectorAll("li");
// listItems.forEach(element => {
//     element.addEventListener("click", () => {
//         // u CSS: .lineThrough { text-decoration: line-through}
//         element.classList.toggle("lineThrough"); //ako ne postoji, dodaj ovu klasu, a ako postoji - izbrisi je
//     });
// });

let newListItem = document.getElementById("newTask");
//let btnSubmit = document.getElementById("addNewLi");
let ispisGreska = document.getElementById("error");
let dodajPocetak = document.getElementById("pocetak");
let dodajKraj = document.getElementById("kraj");

newListItem.addEventListener("keyup", (e) => { //promenili smo sa btnSubmit na newListItem, i umesto "click" bice "keyup" da bi se odnosilo na dugme na tastaturi
    e.preventDefault();
    //console.log(e.key, e.keyCode); //kljuc za Enter je 13

    if (e.keyCode == 13) {
        let unosValue = newListItem.value; //samo PAMTI vrednost value, ne moze da izmeni input polje , zato ne moze unosValue = '';
        let unosValue1 = unosValue.trim(); //da odbaci space sa pocetka i kraja, ako je kucan space
        unosValue1 = unosValue1.replaceAll(' ', ' ');
        if (dodajKraj.checked == true) {
            if (unosValue == '' || unosValue == null || unosValue1.length == 0) {
                ispisGreska.innerText = `Unesite tekst u polje.`;
                //ili alert("Morate uneti tekst zadatka")
                newListItem.classList.add("error");
                newListItem.classList.remove("success");
                //drugi nacin: ispisGreska.style.visibility = visible; ali sa ovim mi ostaje prazan prostor za small jer mu upisujem tekst u html
            }
            else {
                if (unosValue1.length > 0) {
                    unosValue = unosValue1;
                    noviLi = document.createElement("li");
                    noviLi.innerText = unosValue;
                    noviUl.appendChild(noviLi);
                    ispisGreska.innerText = ``;
                    newListItem.classList.add("success");
                    newListItem.classList.remove("error");
                }
            }
        }
        else if (dodajPocetak.checked == true) {
            if (unosValue == '' || unosValue == null || unosValue1.length == 0) {
                ispisGreska.innerText = `Unesite tekst u polje.`;
                //ili alert("Morate uneti tekst zadatka")
                newListItem.classList.add("error");
                newListItem.classList.remove("success");
            }
            else {
                if (unosValue1.length > 0) {
                    unosValue = unosValue1;
                    noviLi = document.createElement("li");
                    noviLi.innerText = unosValue;
                    // noviUl.insertBefore(noviLi, noviUl.childNodes[0]);
                    noviUl.prepend(noviLi);
                    ispisGreska.innerText = ``;
                    newListItem.classList.add("success");
                    newListItem.classList.remove("error");
                }
            }
        }
        else {
            ispisGreska.innerText = `Odaberite gde da se doda polje`;
            //ili alert("Morate uneti tekst zadatka")
            newListItem.classList.add("error");
            newListItem.classList.remove("success");
        }
        newListItem.value = '';
    }
});

//ovo ne funkcionise:
// listItems = document.querySelectorAll("li");
// listItems.forEach(element => {
//     element.addEventListener("click", () => {
//         element.remove();
//     });
// });
//pokusacemo event bubbling
//trebace nam roditelj od li tagova, a to je let noviUl = document.createElement("ul");

noviUl.addEventListener("click", e => {
    //console.log("Kliknuto na ul");
    //console.log(e.target); //vraca ceo tag <li>Neki tekst</li> ako se klikne na neki li, a ako se klikne izmedju dva li vraca ceo tag <ul> i njegovu decu
    //console.log(e.target.tagName); //vraca LI ili UL, zavisi gde smo kliknuli tj vraca ime taga na koji je kliknuto
    if (e.target.tagName == "LI") {
        //console.log("kliknuto na LI");
        e.target.remove(); //jer e.target vraca ceo LI tag
    }
});

