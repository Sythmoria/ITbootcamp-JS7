import { generateList, generateListItem } from "./modules/list.js";

let list = generateList(document.body); //parent element
generateListItem(list, "images/01.jpg");
generateListItem(list, "images/02.jpg");
generateListItem(list, "images/03.jpg");
generateListItem(list, "images/04.jpg");