//primeri callback funkcija

let myFunc = callback => { //ova f-ja nam prihvata kao parametar drugu f-ju
    callback();
}

myFunc(() => {
    console.log("Callback okinuta.");
});

////////////////////////////////////

let sum = callback => { //kao parametar je bez zagrada
    callback(5, 7); //ovde pozivamo funkciju i dajemo joj dva parametra
    let br1 = 6;
    let br2 = 4;
    callback(br1, br2);
}

sum((x, y) => {
    console.log(x + y);
});

function printSum(a, b) {
    console.log(a + b);
}
sum(printSum); //ne ubacujemo parametre za printSum, nema printSum() ; JS zna da je printSum funkcija