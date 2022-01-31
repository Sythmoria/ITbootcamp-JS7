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
            // let usernameRegex = /^[a-zA-Z0-9]+$/; //^ is added to ensure username starts with a letter, and $ is added so that we could check the END of the string ; /^[a-zA-Z0-9\s'-]+$/ -> \s is for white spaces -> check this out
            // usernameRegex(un) -> if it's true, it's valis
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

    // async method
    async addChat(message) {
        let currentDate = new Date();

        let chatTemplate = {
            message: message,
            username: this.username,
            room: this.room,
            createdAt: firebase.firestore.Timestamp.fromDate(currentDate)
        }

        //saving the document into the database
        let response = await this.chats.add(chatTemplate); //we added await so we could wait for this to complete
        return response; //returning Promise, and we can add then() and catch() for this response   
    }

}

