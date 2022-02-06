import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM, querySelectors
let containerChatList = document.querySelector('ul');
let formInputMessage = document.querySelector('#formInputMessage');
let inputMessage = document.querySelector('#inputMessage');
let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');
let navigationRooms = document.querySelector('nav');
let submitColour = document.querySelector('#submitColour');
let colour = document.querySelector('#colour');
let chatArea = document.querySelector('#chatArea')

// Objects classes
// let chatroom = new Chatroom("js", "Michelle");
let chatUI = new ChatUI(containerChatList);

function checkUsername() {
    if (localStorage.username) {
        return localStorage.username;
    }
    else {
        return "Anonymous";
    }
}

function checkRoom() {
    if (localStorage.room) {
        return localStorage.room;
    }
    else {
        return "general";
    }
}

let chatroom = new Chatroom(checkRoom(), checkUsername());

// option 2:
// let username = "Anonymous"
// if (localStorage.username) {
//     username = localStorage.username;
// }
// let chatroom = new Chatroom("js", username);

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
    chatroom.updateUsername(newUsername);
    formUsername.reset();
});

// checking what room is clicked on:
navigationRooms.addEventListener('click', e => {
    // console.log(e.target);
    // console.log(e.target.id);
    if (e.target.tagName == "BUTTON") {
        // e.target.remove(); //we use this only if we want to remove the buttons
        // 1. clear content
        chatUI.clearContent();
        // 2. change room
        chatroom.updateRoom(e.target.id);
        // 3. show chats
        chatroom.getChats(data => {
            chatUI.templateLI(data);
        });
        localStorage.setItem("room", e.target.id);
    }
});

// checking the selected colours:
submitColour.addEventListener('click', e => {
    e.preventDefault();
    let colourValue = colour.value;
    setTimeout(() => {
        localStorage.setItem(`colour`, `${colourValue}`);
        chatArea.style.backgroundColor = `10 px solid ${localStorage.colour}`;
    }, 500);
});

// let stb = (a) => {
//     a.scrollTop = a.scrollHeight;
// };

