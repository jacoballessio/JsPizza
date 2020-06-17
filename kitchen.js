
// Url parser
var getParams = function() {
    var params = {};
    var parser = location;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    console.log(vars);
    for(var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
 
    return params;
};

var exampleObj = getParams()

for (let key in exampleObj) { 
    if (exampleObj.hasOwnProperty(key)) 
    { 
        value = exampleObj[key]; 
		myFunction(value, key);
    } 
} 

// Display parsed order info to screen
function myFunction(item, index) {
    item = item.replace("+", " ");
    document.getElementById("kitchen").innerHTML += index.toUpperCase() + ":" + item.toUpperCase(); 
}

// yes
function clearCurrent() {
    document.getElementById("kitchen").innerHTML = "ORDER COMPLETE";
}
