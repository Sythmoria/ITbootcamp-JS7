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
            return `${hour}:${minutes}`;
        }
        else {
            return `${day}/${month}/${year} ${hour}:${minutes}`;
        }
    }
    // adding a method for creating list items and print list items on the page 
    templateLI(data) {
        let id = data.id;
        data = data.data();
        let date = data.createdAt.toDate();
        if (data.username == localStorage.username) {
            let htmlLI =
                `<li class="goRight" id="${id}">
        <strong>${data.username}</strong> 
        <br>
        ${data.message}
        <hr style="background-image: linear-gradient(90deg, transparent, gray);">
        <span style="color:gray">${this.formatDate(date)}</span>  <i class="fa fa-trash-o" style="font-size:16px; color:gray"></i>
        </li>`;
            this.list.innerHTML += htmlLI;
        }
        else {
            let htmlLI =
                `<li class="goLeft" id="${id}">
                <strong>${data.username}</strong>
            <br>
            ${data.message}
            <hr style="background-image: linear-gradient(90deg, gray, transparent);">
            <span style="color:gray">${this.formatDate(date)}</span>  <i class="fa fa-trash-o" style="font-size:16px; color:gray"></i>
        </li>`;
            this.list.innerHTML += htmlLI;
        }
    }

    clearContent() {
        this.list.innerHTML = ``;
    }
}