console.log("IF - naredba grananja");

if (true) {
    console.log("Uslov je ispunjen.");
}

console.log("Neki kod...");

//Operatori poredjenja:
//  ==, !=, <, >, <=, >=

let a = 7;
let b = 7;
// jedno = je dodela vrednosti
if (a == b) {
    console.log("a i b su jednake vrednosti");
}

a = 10;
b = 14;
if (a != b) {
    console.log("a i b nisu jednake vrednosti");
}

a = 4;
b = 4;
if (a < b) {
    console.log("a je strogo manje od b");
}

if (a <= b) {
    console.log("a je manje ili jednako od b");
}

a = 5;
b = "5";
// c = a + b;
// console.log(c);
if (a == b) {
    console.log("a i b su jednake vrednosti");
}

a = 5;
b = 5;
if (a === b) {
    console.log("a i b su jednaki po vrednosti i po tipu");
}

a = 7;
b = "7";
if (a !== b) {
    console.log("a i b nisu jednaki bilo po tipu bilo po vrednosti");
}

let x = 3;
let y = 4;
let z = 5;
if (x + y == z + 2) {
    console.log("x+y je jednako z+2");
}