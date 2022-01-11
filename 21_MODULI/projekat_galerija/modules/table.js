// import { generateImage } from "./general.js";
import generateImage from "./general.js"; //ovako jer imamo default
//moze da se ukuca samo generateImage pa Enter

function generateTable(parent) {
    let table = document.createElement("table");
    table.style.border = "0";
    parent.appendChild(table);
    return table;
};

function generateTableRow(parent) {
    let tr = document.createElement("tr");
    parent.appendChild(tr);
    return tr;
};

function generateItem(parent, src) {
    let td = document.createElement("td");
    let img = generateImage(src);
    td.appendChild(img);
    parent.appendChild(td);
    return td;
}

export { generateTable, generateTableRow, generateItem };