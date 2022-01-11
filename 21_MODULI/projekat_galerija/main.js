// import { generateList, generateItem as generateListItem } from "./modules/list.js";
// import { generateTable, generateTableRow, generateItem as generateTableItem } from "./modules/table.js";

// // import { generateList, generateItem } from "./modules/list.js";
// // import { generateTable, generateTableRow, generateItem } from "./modules/table.js"
// //imamo dva puta generateItem i moramo da ih preimenujemo ili u originalnom modulu ili ovde da dodamo "as" i na taj nacin da ih preimenujemo

// let list = generateList(document.body); //parent element
// generateListItem(list, "images/01.jpg");
// generateListItem(list, "images/02.jpg");
// generateListItem(list, "images/03.jpg");
// generateListItem(list, "images/04.jpg");

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// generateTableItem(tr, "images/01.jpg");
// generateTableItem(tr, "images/02.jpg");
// generateTableItem(tr, "images/03.jpg");
// generateTableItem(tr, "images/04.jpg");

import * as List from "./modules/list.js";
import * as Table from "./modules/table.js";