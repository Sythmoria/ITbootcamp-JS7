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
let colour1 = document.querySelector('#colour1');
let colour2 = document.querySelector('#colour2');
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

// setting scroll
let scrollDown = (a) => {
    a.scrollTop = a.scrollHeight - a.clientHeight;
};

// printing the text messages on the page
chatroom.getChats(d => {
    chatUI.templateLI(d);
    setVisual();
    setTimeout(() => scrollDown(chatArea), 500);
});

// load the colour, if any is saved in Local Storage
function setVisual() {
    if (localStorage.colour1 == true && localStorage.colour2 == true) {
        chatArea.style.background = `linear-gradient(135deg, ${localStorage.colour1} 0%, ${localStorage.colour2} 58%)`;
        // for (let i = 3; i < containerChatList.childElementCount + 3; i++) {
        //     containerChatList.childNodes[i].style.background = `linear-gradient(180deg, ${localStorage.colour1} 0%, ${localStorage.colour2} 58%)`;
        // }
        colour1.value = `${localStorage.colour1}`;
        colour2.value = `${localStorage.colour2}`;
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
            setTimeout(() => scrollDown(chatArea), 500);
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
    let colour1Value = colour1.value;
    let colour2Value = colour2.value;
    setTimeout(() => {
        localStorage.setItem(`colour1`, `${colour1Value}`);
        localStorage.setItem(`colour2`, `${colour2Value}`);
        chatArea.style.background = `linear-gradient(135deg, ${localStorage.colour1} 0%, ${localStorage.colour2} 58%)`;
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
        }
        else {
            parent.remove();
        }
    }
    setTimeout(() => scrollDown(chatArea), 500);
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