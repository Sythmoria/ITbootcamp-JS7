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
let chatArea = document.querySelector('.chatArea');


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

// printing the text messages on the page
chatroom.getChats(d => {
    chatUI.templateLI(d);
    setVisual();
});

// load the colour, if any is saved in Local Storage
function setVisual() {
    if (localStorage.colour) {
        chatArea.style.backgroundColor = `${localStorage.colour}`;
        colour.value = `${localStorage.colour}`;
    }
};

// checking what room is clicked on and showing the corresponding chat messages:
navigationRooms.addEventListener('click', e => {
    if (e.target.tagName == "BUTTON") {
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
    location.reload();
    let newUsername = inputUsername.value;
    // console.log(newUsername); //testing if the value is good
    chatroom.updateUsername(newUsername);
    formUsername.reset();
});

// checking the selected colours:
submitColour.addEventListener('click', e => {
    e.preventDefault();
    let colourValue = colour.value;
    console.log(colourValue);
    setTimeout(() => {
        localStorage.setItem(`colour`, `${colourValue}`);
        chatArea.style.backgroundColor = `${localStorage.colour}`;
    }, 500);
});

// deleting messages
chatArea.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.tagName == "I") {
        confirm("Are you sure you want to remove this message?");
        e.target.parentElement.remove();
        chatroom.deleteMessage(e.target.parentElement.id);
    }
});

// let stb = (a) => {
//     a.scrollTop = a.scrollHeight;
// };