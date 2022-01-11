import generateImage from "./general.js";

// izbacuje i ovako:
// function generateDiv(parent, src) {
//     let div = document.createElement("div");
//     let img = generateImage(src);
//     div.appendChild(img);
//     parent.appendChild(div);
//     return div;
// }
// ali izbacuje jedno ispod drugog

function generateDiv(parent, src) {
    let div = document.createElement("div");
    div.style.overflow = "hidden";
    parent.appendChild(div);
    return div;
}

function generateDivItem(parent, src) {
    let div = document.createElement("div");
    div.style.float = "right";
    let img = generateImage(src);
    div.appendChild(img);
    parent.appendChild(div);
    return img;
}

export { generateDiv, generateDivItem };