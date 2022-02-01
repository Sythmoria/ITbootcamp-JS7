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
    // adding a method for creating list items and print list items on the page 
    templateLI(docData) {
        let htmlLI =
            `<li>
        ${docData.username} : ${docData.message}
        <br>
        ${docData.createdAt}
        </li>`;
        this.list.innerHTML += htmlLI;
    }
}