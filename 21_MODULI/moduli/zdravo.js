function ispis(poruka) {
    console.log(poruka);
}

function zdravo(ime) {
    ispis(`Zdravo ${ime}!`);
}

let ime = "Marija";
export { zdravo, ime }; //ovo je jedino sto moze da se iskoristi iz celog ovog modula, znaci ne moze da se koristi nista sem zdravo() pa ispis() ne vazi u drugim fajlovima

//moze i ovako da se napise:
// export function zdravo(ime) {
//     ispis(`Zdravo ${ime}!`);
// }
// export let ime = "Marija";