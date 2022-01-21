let parentFunction = realisationFunction => { //ova f-ja nam prihvata kao parametar drugu f-ju
    realisationFunction("Prosledjujem stagod");
}

parentFunction(xName => { //on ovde ocekuje realizaciju roditeljske funkcije ; gore definisemo ime (realisationFunction) a kako ce se realizovati ta realisationFunction to definisemo ovde kada pozivamo tu roditeljsku funkciju (parentFunction)
    console.log(`whatever ${xName}`);
})

//i vec je ovo gore ispisao u konzoli

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////


//primeri callback funkcija

let myFunc = callback => { //ova f-ja nam prihvata kao parametar drugu f-ju
    callback();
}

myFunc(() => { //on ovde ocekuje realizaciju roditeljske funkcije ; gore definisemo ime (callback) a kako ce se realizovati ta callback to definisemo ovde kada pozivamo tu roditeljsku funkciju (myFunc)
    console.log("Callback okinuta.");
});

////////////////////////////////////

let sum = callback => { //kao parametar je bez zagrada
    callback(5, 7); //ovde pozivamo funkciju i dajemo joj dva parametra
    let br1 = 6;
    let br2 = 4;
    callback(br1, br2);
}

sum((x, y) => { //on ovde ocekuje realizaciju roditeljske funkcije ; gore definisemo ime (callback) a kako ce se realizovati ta callback to definisemo ovde kada pozivamo tu roditeljsku funkciju (sum)
    console.log(x + y);
});

function printSum(a, b) {
    console.log(a + b);
}
sum(printSum); //ne ubacujemo parametre za printSum, nema printSum() ; JS zna da je printSum funkcija


////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

let racunaj = (string, callbackFunction) => {
    console.log(string);
    callbackFunction(7, 3);
}

racunaj("oduzimanje", (x, y) => { //evo nam je callback, samo smo je odradili kao arrow bez imena i oznacili da prosledjujemo joj dva parametra
    console.log(x - y);
});

racunaj("mnozenje", (x, y) => { //evo nam je callback, samo smo je odradili kao arrow bez imena i oznacili da prosledjujemo joj dva parametra
    console.log(x * y);
});

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////

let racunaj2 = (string, callback) => {
    console.log(string, callback(11, 15));
}
racunaj2("deljenje", (x, y) => { //evo nam je callback, samo smo je odradili kao arrow bez imena i oznacili da prosledjujemo joj dva parametra
    return y != 0 ? +(Math.round(x / y + "e+2") + "e-2") : 0;
});


let racunaj3 = (string, a, b, callback) => {
    console.log(string, callback(a, b));
}
racunaj3("deljenje", 15, 17, (x, y) => { //evo nam je callback, samo smo je odradili kao arrow bez imena i oznacili da prosledjujemo joj dva parametra
    return y != 0 ? +(Math.round(x / y + "e+2") + "e-2") : 0;
});