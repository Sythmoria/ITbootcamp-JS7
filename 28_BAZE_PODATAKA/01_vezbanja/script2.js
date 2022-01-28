// let movies = db.collection('movies');

let objM2 = {
    Name: "A Tale Of Two Sisters",
    Director: {
        name: "Jee-won",
        surname: "Kim"
    },
    Release_year: 2003,
    Genres: ["drama", "horror", "mystery", "thriller"],
    Rating: 7.2
}

let objM3 = {
    Name: "parasite",
    Director: {
        name: "Bong",
        surname: "Joon-ho"
    },
    Release_year: 2019,
    Genres: ["comedy", "drama", "thriller"],
    Rating: 8.6
}

let objM4 = {
    Name: "Good Will Hunting",
    Director: {
        name: "Gus",
        surname: "Van Sant"
    },
    Release_year: 1997,
    Genres: ["drama", "romance"],
    Rating: 8.3
}


//Samostalan rad: upala u hell
db.collection('movies')
    .doc('movie002')
    .set(objM2)
    .then(() => {
        console.log(`Uspesno dodat film 2 u bazu`);
        db.collection('movies')
            .doc('movie003')
            .set(objM3)
            .then(() => {
                console.log(`Uspesno dodat film 3 u bazu`);
                db.collection('movies')
                    .doc('movie004')
                    .set(objM4)
                    .then(() => {
                        console.log(`Uspesno dodat film 4 u bazu`);
                        //napisati skript koji menja podatke o nekim filmovima u bazi: brise zanr nekom filmu
                        db.collection('movies')
                            .doc('movie004')
                            .update({
                                Genres: firebase.firestore.FieldValue.arrayRemove("horror")
                            })
                            .then(() => {
                                console.log(`Unet je novi clan u array Genres`);
                            })
                            .catch(err => {
                                console.log(`Greska pri unosu u array: ${err}`);
                            })
                        //napisati skript koji menja podatke o nekim filmovima u bazi: dodaje zanr nekom filmu
                        db.collection('movies')
                            .doc('movie004')
                            .update({
                                Genres: firebase.firestore.FieldValue.arrayUnion("horror")
                            })
                            .then(() => {
                                console.log(`Unet je novi clan u array Genres`);
                            })
                            .catch(err => {
                                console.log(`Greska pri unosu u array: ${err}`);
                            })
                        //dodati film 5
                        db.collection('movies')
                            .doc('movie005')
                            .set(objM4)
                            .then(() => {
                                console.log(`Uspesno dodat film 5 u bazu`);
                                //napisati skript koji menja podatke o nekim filmovima u bazi: menja ime ili prezime nekom reziseru
                                db.collection('movies').doc('movie005')
                                    .update({
                                        "Director.name": "Testing"
                                    })
                                    .then(() => {
                                        console.log(`Promenjeno ime direktora`);
                                    })
                                    .catch(err => {
                                        console.log(`Greska pri promenu imena direktora: ${err}`);
                                    })
                            })
                    })
            })
    })
    .catch(error => {
        console.log(`Greska pri dodavanju filma: ${error}`);
    });