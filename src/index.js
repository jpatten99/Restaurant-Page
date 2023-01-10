import { pageLoad }  from "./pageLoad";
import { loadContact }  from "./contact";
import { loadMenu } from "./menu";
import './style.css';
pageLoad(); 

document.getElementById("home").addEventListener("click", pageLoad)
document.getElementById("contact").addEventListener("click", loadContact);
document.getElementById("menu").addEventListener("click", loadMenu);

