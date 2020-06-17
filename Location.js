let states = new Map();
states.set("washington", ["6100 Carillon Pt Kirkland, Washington(WA), 98033", "4379 E Deer Lake Rd Loon Lake, Washington(WA), 99148", "644 Madison Ave N #7 Bainbridge Island, Washington(WA), 98110"]);
states.set("oregon", ["454 8th St Lake Oswego, Oregon(OR), 97034", "127 NW Dogwood Ave Redmond, Oregon(OR), 97756", "19900 SE 212nd Hwy Clackamas, Oregon(OR), 97015"]);
states.set("california", ["81 David Love Pl Goleta, California(CA), 93117", "67 Tunapuna Ln Coronado, California(CA), 92118", "544 Highlander Ave La Habra, California(CA), 90631"]);
states.set("idaho", ["135 Howard St, American Falls, ID, 83211", "165 Hillcrest Ave #73, American Falls, ID, 83211", "647 Bennett Ave, American Falls, ID, 83211"]);
window.onload = function() {generateNavbar(); updateList()}
function updateList() {
    listLocation = document.getElementById("locationList");
    listLocation.innerHTML = '';
    currentState = document.getElementById("state").selectedOptions[0].value;
    list = states.get(currentState);
    goOnMap(list[0]);
    for(var i = 0; i < list.length; i++){
        var newAddressElement = document.createElement("p");
        let address = list[i];
        newAddressElement.style = "cursor: pointer";
        newAddressElement.onclick = function(){goOnMap(address)};
        newAddressElement.innerHTML = list[i];
        listLocation.appendChild(newAddressElement);

    }
}

function goOnMap(address) {
    var mapIframe = document.getElementById("gMaps");
    var formattedAddress = "q=" + address.replace(/\s/g, "%20").replace(",", "%2C").replace("#", "%23");
    mapIframe.src = "https://maps.google.com/maps?" + formattedAddress + "&t=&z=13&ie=UTF8&iwloc=&output=embed";
}
