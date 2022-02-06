export class ChatUI {
    constructor(listItem) {
        this.list = listItem;
    }
    set list(listItem) {
        this._list = listItem;
    }
    get list() {
        return this._list;
    }
    // formatting the date to a more comprehensive format
    formatDate(date) {
        let day = date.getDate();
        day = String(day).padStart(2, "0");
        let month = (date.getMonth() + 1); //months start with 0, so we need to add 1
        month = String(month).padStart(2, "0");
        let year = date.getFullYear();
        let hour = date.getHours();
        hour = String(hour).padStart(2, "0");
        let minutes = date.getMinutes();
        minutes = String(minutes).padStart(2, "0");
        let today = new Date();
        if (date.getDate() === today.getDate()) {
            return `${day}/${month}/${year}`;
        }
        else {
            return `${day}/${month}/${year} ${hour}:${minutes}`;
        }
    }
    // adding a method for creating list items and print list items on the page 
    templateLI(docData) {
        let date = docData.createdAt.toDate();
        if (docData.username == localStorage.username) {
            let htmlLI =
                `<li class="goRight">
        ${docData.username} 
        <br>
        ${docData.message}
        <br>
        ${this.formatDate(date)}
        <br>
        <i class="fa fa-trash-o" style="font-size:24px"></i>
        </li>`;
            this.list.innerHTML += htmlLI;
        }
        else {
            let htmlLI =
                `<li class="goLeft">
            ${docData.username} 
            <br>
            ${docData.message}
            <br>
        ${this.formatDate(date)}
        <br>
        <i class="fa fa-trash-o" style="font-size:24px"></i>
        </li>`;
            this.list.innerHTML += htmlLI;
        }
    }

    clearContent() {
        this.list.innerHTML = ``;
    }
}