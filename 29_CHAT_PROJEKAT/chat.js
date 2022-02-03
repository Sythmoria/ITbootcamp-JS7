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
        // this._username = un.trim();
        if (this.validateUsername(un) === true) {
            this._username = un;
        }
        else {
            alert("Please enter a valid username!");
        }
    }
    get username() {
        return this._username;
    }

    // validation for the username
    validateUsername(a) {
        a = a.trim();
        if (a.length >= 2 && a.length <= 10 && /^[a-zA-Z0-9\s'-]+$/.test(a) == true) {
            //  /^[a-zA-Z0-9\s'-]+$/; //^ is added to ensure username starts with a letter, and $ is added so that we could check the END of the string ; \s is for white spaces -> if it's true, it's valid
            return true;
        }
        else {
            return false;
        }
    }

    updateUsername(newUsername) {
        if (this.validateUsername(newUsername) === true) {
            this.username = newUsername;
        }
        else {
            alert("Please enter a valid username!");
        }
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

    //Method that reacts to changes
    getChats(callback) {
        this.chats
            .where("room", "==", this.room)
            .orderBy("createdAt")
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    // Following changes: -> testing snapshot
                    // console.log(change.type);
                    // if (change.type == "added") {
                    //     console.log("A change has occurred in the dabatase.");
                    // }

                    //Write the documents that are added to the database
                    if (change.type == "added") {
                        callback(change.doc.data());
                        //we're sending data to callback, to choose how we'll print this
                    }
                });
            });
    }
}
