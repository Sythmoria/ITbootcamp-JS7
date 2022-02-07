import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM, querySelectors
let containerChatList = document.querySelector('ul');
let formInputMessage = document.querySelector('#formInputMessage');
let inputMessage = document.querySelector('#inputMessage');
let formUsername = document.querySelector('#formUsername');
let inputUsername = document.querySelector('#inputUsername');
let messageForChangedUsername = document.querySelector('#successUsername');
let navigationRooms = document.querySelector('nav');
let submitColour = document.querySelector('#submitColour');
let colour = document.querySelector('#colour');
let chatArea = document.querySelector('.chatArea');
let startDate = document.querySelector('#startDate');
let endDate = document.querySelector('#endDate');
let setDate = document.querySelector('#setDate');


// Objects classes
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
    chatArea.scrollTop = chatArea.scrollHeight;
});

// load the colour, if any is saved in Local Storage
function setVisual() {
    if (localStorage.colour) {
        chatArea.style.background = `linear-gradient(180deg, ${localStorage.colour} 0%, rgba(254,254,254,1) 100%)`;
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
    chatroom.addChat(message)
        .then(() => {
            console.log(`Successful.`);
            formInputMessage.reset();
        })
        .catch(error => {
            console.log(`An error has occurred: ${error}`);
        })
    chatArea.scrollTop = chatArea.scrollHeight;
});

// updating username:
formUsername.addEventListener('submit', e => {
    e.preventDefault();
    let newUsername = inputUsername.value;
    chatroom.updateUsername(newUsername);
    formUsername.reset();
    messageForChangedUsername.innerHTML += `You've successfully changed your username to ${newUsername}`;
    messageForChangedUsername.style.visibility = "visible";
    setTimeout(() => {
        messageForChangedUsername.style.visibility = "hidden";
        location.reload();
    }, 3000);

});

// checking the selected colours:
submitColour.addEventListener('click', e => {
    e.preventDefault();
    let colourValue = colour.value;
    console.log(colourValue);
    setTimeout(() => {
        localStorage.setItem(`colour`, `${colourValue}`);
        chatArea.style.background = `linear-gradient(180deg, ${localStorage.colour} 0%, rgba(254,254,254,1) 100%)`;
    }, 500);
});


// deleting messages
chatArea.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.tagName == "I") {
        let parent = e.target.parentElement;
        let username = parent.childNodes[1].innerHTML;
        if (localStorage.username == username) {
            function confirmDelete() {
                let confirmOK = confirm("This will permanently delete the message. Press OK to continue.");
                if (confirmOK) {
                    chatroom.deleteMessage(parent.id);
                    parent.remove();
                }
            }
            confirmDelete();
            chatArea.scrollTop = chatArea.scrollHeight;
        }
        else {
            parent.remove();
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    }
});

let startValueFirebase;
let endValueFirebase;
setDate.addEventListener('click', e => {
    e.preventDefault();
    let startValue = startDate.value;
    let endValue = endDate.value;
    let startValueObj = new Date(startValue);
    let endValueObj = new Date(endValue);
    startValueFirebase = firebase.firestore.Timestamp.fromDate(startValueObj);
    endValueFirebase = firebase.firestore.Timestamp.fromDate(endValueObj);
    chatUI.clearContent();
    chatroom.showMsgsFromTo(doc =>
        chatUI.templateLI(doc));
});

export { startValueFirebase, endValueFirebase }