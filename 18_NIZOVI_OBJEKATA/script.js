console.log("Nizovi objekata");

let blog1 = {
    title: "Osnovni HTML tagovi",
    likes: 30,
    dislikes: 9
};

let blog2 = {
    title: "Osnovni CSS selektori!",
    likes: 70,
    dislikes: 5
};

let blog3 = {
    title: "Napredni CSS selektori",
    likes: 50,
    dislikes: 60
};

let arrBlogs = [blog1, blog2, blog3];

//ispis objekata iz niza pomocu foreach petlje
arrBlogs.forEach(objekatBlog => {
    console.log(objekatBlog);
});


arrBlogs.forEach(objekatBlog => {
    document.body.innerHTML += `<h3>${objekatBlog.title}</h3>`;
    document.body.innerHTML += `<p>Likes: ${objekatBlog.likes}</p>`;
    document.body.innerHTML += `<p>Dislikes: ${objekatBlog.dislikes}</p>`;
});

//ispis objekata iz niza pomocu for petlje
for (let i = 0; i < arrBlogs.length; i++) {
    console.log(arrBlogs[i].title);
}

//promena vrednosti elementa
// blog3.title = "Napredni HTML tagovi";
// console.log(blog3.title); //na stranici se nece promeniti, zbog linije 29, koja ide pre ove promene iz 41
// arrBlogs[2].title = "HTML5 tagovi";
// console.log(arrBlogs[2].title);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// VEZBANJE

// 1. Napraviti arrow f-ju kojoj se prosledjuje niz objekata, a ona vraca ukupan broj lajkova

let sumLikes = arr => {
    let sum = 0;
    // prvi nacin
    // arr.forEach(blog => {
    //     sum += blog.likes;
    // });

    //drugi nacin
    for (let i = 0; i < arr.length; i++) {
        // arr[i] je objekat
        // arr[i].likes je broj lajkova objekta arr[i]
        sum += arr[i].likes;
    }
    return sum;
};
console.log(`Ukupan broj lajkova: ${sumLikes(arrBlogs)}`);

// lajkovi iz prvog i treceg bloga

let sum13 = arrBlogs[0].likes + arrBlogs[2].likes;
console.log(sum13);

sum13 = arrBlogs[0]["likes"] + arrBlogs[2]["likes"];
console.log(sum13);

// 2. ZADATAK: Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let prosekLajkova = arr => {
    let sum = 0; //let sum = sumLikes(arr)
    let counter = 0;
    arr.forEach(blog => {
        sum += blog.likes; //ako koristim sumLikes, ovde mi ne treba sum
        counter++ //ovo je isto kao i arr.length
    });
    return (counter != 0) ? sum / counter : 0;
    //return sumLikes(arr)/arr.length
}
console.log("Prosecan broj lajkova: " + prosekLajkova(arrBlogs));

// 3 ZADATAK: Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let moreLikes = arr => {
    arr.forEach(elem => {
        if (elem.likes > elem.dislikes) {
            console.log(elem.title);
        }
    });
}
console.log("Blogovi sa vise lajkova nego dislajkova");
moreLikes(arrBlogs);

// 4 ZADATAK: Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let doubleLikesThanDL = arr => {
    arr.forEach(elem => {
        if (elem.likes >= 2 * elem.dislikes) {
            console.log(elem.title);
        }
    });
}
console.log("Blogovi sa duplo vise lajkova nego dislajkova: ");
doubleLikesThanDL(arrBlogs);

// 5 ZADATAK Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let endExclammationMark = arr => {
    arr.forEach(element => {
        if (element.title.charAt(element.title.length - 1) == "!") { // ili element.title.endsWith("!") ili element.title.slice(-1) ili element.title.[element.title.length - 1]
            console.log(element.title);
        }
    });
}
console.log("Ko se zavrsava '!' ? ");
endExclammationMark(arrBlogs);
