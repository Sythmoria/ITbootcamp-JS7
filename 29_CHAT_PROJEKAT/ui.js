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
}