import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM, querySelectors
let containerChatList = document.querySelector('ul');
let formInputMessage = document.querySelector('#formInputMessage');
let inputMessage = document.querySelector('#inputMessage');
let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');

// Objects classes
let chatroom = new Chatroom("js", "Michelle");
let chatUI = new ChatUI(containerChatList);

// Demonstration: setting values in Local Storage
localStorage.setItem("keyName", 5);
localStorage.setItem("keyName", 6);
localStorage.setItem("keyName", "Testing");
localStorage.setItem("x", 7);
localStorage.setItem("y", 10);
// in browser > inspect Element > Application > Local Storage > right click on the address to Clear, or right click on specific values to delete them

// Demonstration: getting values from Local Storage
let z = localStorage.x + localStorage.y; //it will add them as strings
console.log(z);
if (localStorage.x) {
    console.log("X exists");
}
else {
    console.log("X doesn't exist");
}

// chatroom.addChat("Wednesday HR training") //it returned Promise, so we can add .then() and .catch()
//     .then(() => console.log("Chat added successfully."))
//     .catch(error => console.log(`Error has occurred: ${error}`))

// method getChanges -> writing the changes in console
chatroom.getChats(d => {
    console.log(d);
})

// printing the text messages on the page
chatroom.getChats(d => {
    chatUI.templateLI(d);
});

// adding new messages by clicking on Send:
formInputMessage.addEventListener('submit', e => {
    e.preventDefault();
    let message = inputMessage.value;
    // console.log(message); //testing if the value is good
    chatroom.addChat(message)
        .then(() => {
            console.log(`Successful.`);
            formInputMessage.reset();
        })
        .catch(error => {
            console.log(`An error has occurred: ${error}`);
        })
});

// updating username:
formUsername.addEventListener('submit', e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    // console.log(newUsername); //testing if the value is good
    // chatroom.updateUsername(newUsername);
    if (chatroom.validateUsername(newUsername) === true) {
        console.log(`Valid username`);
        chatroom.username = newUsername;
    }
    else {
        alert("Please enter a valid username!");
    }
    formUsername.reset();
});