var path = window.location.pathname;
var page = path.split("/").pop();
document.body.onload = generateNavbar();
function setSpacer(navList) {
    var spacer = document.createElement("div");
    spacer.id = "navSpacer";
    spacer.style.height = navList.offsetHeight + "px";
    document.getElementsByTagName("nav")[0].appendChild(spacer);
    console.log(document.getElementById("navList").offsetHeight);
}

function generateNavbar() {
    var pagesMap = new Map();
    pagesMap.set("home.html", 1); pagesMap.set("henu.html", 2); pagesMap.set("hocation.html", 3); pagesMap.set("contact.html", 4);
    var navbar = document.createElement("div");
    navbar.id = "navbar";
    var navList = document.createElement("ul");
    navList.id = "navList";
    navbar.appendChild(navList);
    var listItems = [document.createElement("li"),
         document.createElement("li"), document.createElement("li"),
         document.createElement("li"), document.createElement("li"), 
         document.createElement("li")];
    var listChildren = [listItems[0].appendChild(document.createElement("h1")),
    listItems[1].appendChild(document.createElement("a")),
    listItems[2].appendChild(document.createElement("a")),
    listItems[3].appendChild(document.createElement("a")),
    listItems[4].appendChild(document.createElement("a"))];
    listChildren[0].innerHTML = "🍕J's PIZZA ";
    listChildren[1].href = "Home.html";
    listChildren[1].innerHTML = "Home";
    listChildren[2].href = "Menu.html";
    listChildren[2].innerHTML = "Menu";
    listChildren[3].href = "Location.html";
    listChildren[3].innerHTML = "Location";
    listChildren[4].href = "Contact.html";
    listChildren[4].innerHTML = "Contact";
    listItems.forEach(element => {
        navList.appendChild(element);
    });
    listItems[pagesMap.get(page.toLowerCase())].className = "selected";
    document.getElementsByTagName("nav")[0].appendChild(navbar);
    setSpacer(navList);
}
