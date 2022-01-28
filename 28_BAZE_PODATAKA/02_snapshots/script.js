// console.log(db);
let ul = document.querySelector("ul");
let form = document.querySelector("form");

// db.collection('tasks')
//     .orderBy("startDate", "desc")
//     .get()
//     .then(snapshot => {
//         //hvatamo trenutno stanje, zato smo ga nazvali snapshot
//         if (!snapshot.empty) {
//             snapshot.docs.forEach(doc => {
//                 //za svaki objekat/dokument iz kolekcije
//                 let obj = doc.data();
//                 let li = document.createElement('li');
//                 //timestamp da prebacimo u datum koristimo .toDate()
//                 // li.innerHTML = `${obj.title} (${obj.startDate.toDate()}) [${obj.description}])`;
//                 // timestamp u dan u nedelji + datum:
//                 // li.innerHTML = `${obj.title} (${obj.startDate.toDate().toDateString()}) [${obj.description}])`;
//                 //timestamp u vreme:
//                 // li.innerHTML = `${obj.title} (${obj.startDate.toDate().toLocaleTimeString()}) [${obj.description}])`;
//                 //kombinacija dan, datum i vreme u razumnijem formatu (vremenska zona preuzeta sa kompjutera)
//                 li.innerHTML = `${obj.title} (${obj.startDate.toDate().toDateString()} u ${obj.startDate.toDate().toLocaleTimeString()}) [${obj.description}])`;
//                 ul.appendChild(li);
//                 if (obj.priority === true) {
//                     li.style.color = `red`;
//                 }
//             })
//             console.log();
//         }
//         else {
//             console.log();
//         }
//     })
//     .catch(err => {
//         console.log(`We've encountered an error: ${err}`);
//     });

//dodajemo i formu:
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log(`testing`);
    let title = this.title.value;
    let start_date = this.startDate.value;
    let due_date = this.dueDate.value;
    let priority = this.priority.checked; //bice true ili false
    let description = this.description.value;
    // console.log(title + " " + start_date + " " + due_date + " " + priority + " " + description);
    let start_date_obj = new Date(start_date);
    let due_date_obj = new Date(due_date);
    let start_date_timestamp = firebase.firestore.Timestamp.fromDate(start_date_obj);
    let due_date_timestamp = firebase.firestore.Timestamp.fromDate(due_date_obj);
    let obj = {
        title: title,
        startDate: start_date_timestamp,
        dueDate: due_date_timestamp,
        priority: priority,
        description: description
    };
    db.collection('tasks')
        .add(obj) //izbegli smo doc() jer ne znamo kakvo ime da mu damo
        .then(() => {
            console.log(`New task successfully added!`);
        })
        .catch(error => {
            console.log(`We've encountered an error: ${error}.`);
        })
});

db.collection('tasks')
    .onSnapshot(snapshot => {
        //poziva se svaki put kad dodje do novog snapshot-a tj. neke promene u kolekciji
        //ovde snapshot nije kolekcija dokumenata, drugaciji je -> sadrzi informacije i o promenama koje su se desile
        let changes = snapshot.docChanges();
        // console.log(changes);
        changes.forEach(change => {
            let type = change.type;
            let doc = change.doc;
            let id = doc.id;
            if (type == "added") {
                let obj = doc.data();
                let li = document.createElement('li');
                li.id = id; //vrednost promenljive  let id = doc.id;
                //timestamp da prebacimo u datum koristimo .toDate()
                // li.innerHTML = `${obj.title} (${obj.startDate.toDate()}) [${obj.description}])`;
                // timestamp u dan u nedelji + datum:
                // li.innerHTML = `${obj.title} (${obj.startDate.toDate().toDateString()}) [${obj.description}])`;
                //timestamp u vreme:
                // li.innerHTML = `${obj.title} (${obj.startDate.toDate().toLocaleTimeString()}) [${obj.description}])`;
                //kombinacija dan, datum i vreme u razumnijem formatu (vremenska zona preuzeta sa kompjutera)
                li.innerHTML = `${obj.title} (${obj.startDate.toDate().toDateString()} u ${obj.startDate.toDate().toLocaleTimeString()}) [${obj.description}])`;
                ul.appendChild(li);
                if (obj.priority === true) {
                    li.style.color = `red`;
                }
                let button = document.createElement('button');
                button.innerHTML = "Delete task";
                li.appendChild(button);
            }
            else if (type == "removed") {
                let li = document.getElementById(id);
                li.remove();
            }
        })
    });

ul.addEventListener('click', function (event) {
    // console.log(event.target.tagName); //vraca nam velikim slovima da li smo kliknuli na LI ili UL ili BUTTON
    if (event.target.tagName === "BUTTON") {
        //da proverimo u okviru kog li se nalazi button na koji smo kliknuli:
        let li = event.target.parentElement;
        //proverimo koji je jedinstveni id ovog gore li-ja:
        let id = li.id;
        db.collection('tasks').doc(id).delete()
            .then(() => {
                alert(`Document successfully removed.`);
            })
            .catch(err => {
                alert(`We've encountered an error while deleting the document: ${err}`);
            });
    }
});