export class Chatroom {
    constructor(rm, un) {
        this.room = rm;
        this.username = un;
        this.chats = db.collection('chats');
    }
    // get and set for ROOM
    set room(rm) {
        if (rm === "general" || rm === "js" || rm === "homework" || rm === "tests") {
            this._room = rm;
        }
        else {
            this._room = "general";
        }
    }
    get room() {
        return this._room;
    }
    // get and set for USERNAME
    set username(un) {
        un = un.trim();
        if (un.length > 0) {
            // let usernameRegex = /^[a-zA-Z0-9]+$/; //^ is added to ensure username starts with a letter
            // let validUsername = un.match(usernameRegex);
            // this._username = validUsername;
            this._username = un;
        }
        else {
            this._username = "Anonymous";
        }
    }
    get username() {
        return this._username;
    }
}

