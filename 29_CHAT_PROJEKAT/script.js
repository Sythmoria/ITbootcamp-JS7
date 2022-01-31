import { Chatroom } from "./chat.js";

let chatroom1 = new Chatroom("js", "Stefan");
console.log(chatroom1.username, chatroom1.room); //testing getters
chatroom1.username = "Dusan";
console.log(chatroom1.username, chatroom1.room);
chatroom1.room = "general";
console.log(chatroom1.room);