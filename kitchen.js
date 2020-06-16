/**
 * Get the URL parameters
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params; //returns object of key value pairs
};

var exampleObj = getParams(url)

// Displays current order number, unsure of how to send multiple orders to this screen however.

for (let key in exampleObj) { 
    if (exampleObj.hasOwnProperty(key)) 
    { 
        value = exampleObj[key]; 
        myFunction(value, key);
    } 
} 

function myFunction(item, index) {
    item = item.replace("+", " ");
    document.getElementById("kitchen").innerHTML += index.toUpperCase() + ":" + item.toUpperCase() + "<br>"; 
}

function clearCurrent() {
    document.getElementById("kitchen").innerHTML = "";
}
