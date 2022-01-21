let getSomething = () => {
    let object = new Promise((resolve, reject) => {
        resolve("Nesto resolve"); //ako je sve proslo ok, onda je resolve
        // reject("Nesto reject"); //nesto nije ok proslo
    });
    // console.log(object);
    return object; //vraca Promise objekat
}
// .then() se realizuje ako je promise vratio resolve
// .catch() se realizuje ako je Promise vratio reject
getSomething().then(data => { //dobija vrednost one poruke koja se prosledjuje u resolve
    console.log(`Aktivirana je .then() grana ${data}`);
}).catch(err => { //dobija vrednost one poruke koja se prosledjuje u reject
    console.log(`Aktivirana je .catch() grana ${err}`);
}); 