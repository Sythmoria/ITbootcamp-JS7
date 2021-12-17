let zbir = 0;
let broj = 0;
let n = 5;
let m = 15;
let i = n;

for (; ;) {
    if (i % 10 == 3) {
        broj++;
    }
    if (i % 2 == 0 && i % 3 == 0) {
        zbir += i;
    }
    i++;
    if (i > m) {
        break;
    }
}

// dakle, moze i ovako, ali ovo ce neko ko dodje sa strane da gleda dugo dok protumaci