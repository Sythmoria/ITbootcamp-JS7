import { zdravo, ime } from "./moduli/zdravo.js"; //mora isto ime f-je i promenljive kao sto je u zdravo.js ; takodje, tacka je OBAVEZNA
// import { ime, zdravo } from "./zdravo.js"; - i ovo je moguce
// jedan model moze da eksportuje vise promenljivih
// import { zdravo } from "./zdravo.js"; - takodje moguce -> u ovom slucaju mozemo da napisemo i let ime = "Glisa"

//ime = "Zdravko"; - nije moguce menjati vrednost promenljivih iz modula
// let ime = "Glisa"; - nije moguce imati "lokalnu" promenljivu sa istim imenom
zdravo("Pera");