import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

let chatroom1 = new Chatroom("js", "Stephen");
console.log(chatroom1.username, chatroom1.room); //testing getters
chatroom1.username = "Jonathan";
console.log(chatroom1.username, chatroom1.room);
chatroom1.room = "general";
console.log(chatroom1.room);

let chatroom2 = new Chatroom("general", "Michelle");
// chatroom2.addChat("Wednesday HR training") //it returned Promise, so we can add .then() and .catch()
//     .then(() => console.log("Chat added successfully."))
//     .catch(error => console.log(`Error has occurred: ${error}`))

// method getChanges -> writing the changes in console
chatroom2.getChats(d => {
    console.log(d);
})

let containerChatList = document.querySelector('ul');
let chat1 = new ChatUI(containerChatList);
// console.log(chat1._list);

// printing the text messages on the page
chatroom2.getChats(d => {
    chat1.templateLI(d);
});