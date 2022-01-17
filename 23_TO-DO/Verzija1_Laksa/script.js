let listItems = document.querySelectorAll("li");
// console.log(listItems);
// let listItemsArray = Array.from(listItems);

listItems.forEach(element => {
    element.addEventListener("click", () => {
        //prvi nacin:
        if (element.style.textDecoration == `line-through`) {

            element.style.textDecoration = `none`;
        }
        else {
            element.style.textDecoration = `line-through`;
        }
        //drugi nacin: toggle klasu -> verovatno da se da klasa unapred u html, pa da se proveri da li je jednako toj klasi, ako jeste onda line-through i zameniti klasu sa toggle ; u else text-decoration none i vratiti na originalnu klasu
        // u CSS: .lineThrough { text-decoration: line-through}
        // element.classList.toggle("lineThrough"); //ako ne postoji, dodaj ovu klasu, a ako postoji - izbrisi je
    });
});