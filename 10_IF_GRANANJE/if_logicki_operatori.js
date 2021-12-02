console.log(`Logicki operatori`);


// Napraviti program koji za uneti pol i broj godina korisnika ispisuje da li je korisnik muškarac ili žena i da li je punoletan

let pol = "m";
let god = 27;

if (pol == "m" && god >= 18) {
    console.log(`Osoba je muskog pola i punoletna je.`);
}
else if (pol == "m" && god < 18 && god >= 0) {
    console.log(`Osoba je muskog pola i maloletna je.`);
}
else if (pol == "z" && god >= 18) {
    console.log(`Osoba je zenskog pola i punoletna je.`);
}
else if (pol == "z" && god < 18 && god >= 0) {
    console.log(`Osoba je zenskog pola i maloletna je.`);
}
else {
    console.log(`Pogresan unos.`);
}


//odstampati avatar na stranicu u zavisnosti od pola

pol = "Z";
if (pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") {
    document.body.innerHTML = `<img src="slike/z.jpg" >`;
}
else if (pol == "m" || pol == "M") {
    document.body.innerHTML = ` <img src="slike/m.jpg">`
}
else {
    document.body.innerHTML = `<p>Pogresan unos.</p>`
}


// Napraviti program koji za uneti pol i broj godina korisnika ispisuje da li je korisnik muškarac ili žena i da li je punoletan

pol = "Z";
god = 15;
if ((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god >= 18) {
    console.log(`Osoba je zenskog pola i punoletna je.`);
}
else if ((pol == "z" || pol == "Z" || pol == "ž" || pol == "Ž") && god >= 0 && god < 18) {
    console.log(`Osoba je zenskog pola i maloletna je.`);
}
else if ((pol == "m" || pol == "M") && god >= 18) {
    console.log(`Osoba je muskog pola i punoletna je.`);
}
else if ((pol == "m" || pol == "M") && god < 18 && god >= 0) {
    console.log(`Osoba je muskog pola i maloletna je.`);
}
else {
    console.log(`Pogresan unos.`);
}
