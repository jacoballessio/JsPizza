var size = "";
var topping = [];
var sauce = "";
var specialPizza;
var quantity = 0;
var cartSize = 0;
var sizeChoices;
var sauceChoice;
var totalPrice = 0;
var prevAdd;
var completeOrder = "";

var specialityPizzaArray = [];
var sidesArray = [];
var customPizzaArray = [];

// Function used to select one of multiple options, highlighting the selected choice and un-highlighting the deselected choice
function chooseOne(text) {

    // grabs all elements in each of the size and sauce classes
    sizeChoices = document.querySelectorAll(".size");
    sauceChoice = document.querySelectorAll(".sauce");
    var classType = text.className;

    // Checks if the currently clicked element is a sauce or size class, has different output depending on the answer.
    switch (classType) {
        case "sauce":
            sauce = text.id;
            clearChoice(sauceChoice); 
            break;
        case "size":
            size = text.id;
            clearChoice(sizeChoices);
            break;
    }

    text.style.backgroundColor = 'grey';
}

// Strictly visual
function clearChoice(section) {
    for (var i = 0; i < section.length; i++) {
        section[i].style.backgroundColor = 'white';
    } 
   
}

// Resets all to default
function clearCart() {
    if (confirm("Do you wish to empty your cart?")) {
        cartSize = 0;
        quantity = 0;
        document.getElementById("cartamount").innerHTML = cartSize;
        document.getElementById("cartamount").style.color = 'black';
        cartArray = [];
        specialityPizzaArray = [];
        sidesArray = [];
        customPizzaArray = [];
        document.getElementById("invoice").innerHTML = "";
        totalPrice = 0;
        size = "";
        sauce = "";
        clearChoice(document.querySelectorAll(".size"));
        clearChoice(document.querySelectorAll(".sauce"));
        clearChoice(document.querySelectorAll(".topping"));
    }   
}

// Allows the current element group to have multiple selections, used for toppings on pizza or sides to be added to the order
function chooseMultiple(text) {
    var color = text.style.backgroundColor;

    // Strictly visual, if it is a topping the current topping gets added to the topping array
    if (text.className == "side") {
        if (color == 'grey') {
            text.style.backgroundColor = 'white';
        }
        else {
            text.style.backgroundColor = 'grey';
        }
    }
    else {
        if (color == 'grey') {
            text.style.backgroundColor = 'white';
        }
        else {
            text.style.backgroundColor = 'grey';
            topping.push(text.id);
        }
    }
}

// function called when speciality pizza picture is clicked, parses the current picture clicked, combines this with the size,
// determines the price then adds to the order at the bottom of the screen
function addSpeciality(picture) {
    var userSize;
    var userChoice;
    specialPizza = picture.id;

    if (size != "") {
        switch (size) {
            case "small":
                userSize = "Small";
                break;
            case "medium":
                userSize = "Medium";
                break;
            case "large":
                userSize = "Large";
                break;
            case "xlarge":
                userSize = "Extra Large";
                break;
        }
    
        switch (specialPizza) {
            case "meat":
                userChoice = "Meat Lovers";
                break;
            case "veggie":
                userChoice = "Vegetarian";
                break;
            case "bbq":
                userChoice = "BBQ Chicken";
                break;
            case "hawaiian":
                userChoice = "Hawaiian";
                break;
        }
    
        if (confirm("Add a " + userSize + " " + userChoice + " Speciality Pizza?")){
            addToOrder(true);
        }
    }
    else {
        alert("Choose a size");
    }
    
}

function addToOrder(isSpecial) {
    var order = document.getElementById("invoice");

    if (isSpecial && size != "") {
        specialityPizzaArray = {pizzasize:size, pizzatype:specialPizza};

        totalPrice += calcPrice(specialityPizzaArray, true);
        order.innerHTML += (specialityPizzaArray.pizzasize + " " + specialityPizzaArray.pizzatype + " speciality $" + calcPrice(specialityPizzaArray, true).toFixed(2) + "\n");

        completeOrder += specialityPizzaArray.pizzasize + " " + specialityPizzaArray.pizzatype + "\n";
        clearChoice(document.querySelectorAll(".size"));
        specialPizza = "";
    }
    else if (size != "" && sauce != "") {
        if (topping.length == 0) {
            topping.push("cheese");
        }
        customPizzaArray = {pizzasize:size, pizzatoppings:topping, pizzasauce:sauce};
        totalPrice += calcPrice(customPizzaArray, false);

        order.innerHTML += (customPizzaArray.pizzasize + " " + customPizzaArray.pizzatoppings + " " + 
                            customPizzaArray.pizzasauce + " $" + calcPrice(customPizzaArray, false).toFixed(2) + "\n");

        completeOrder += customPizzaArray.pizzasize + " " + customPizzaArray.pizzatoppings + " " + customPizzaArray.pizzasauce + "\n";

        clearChoice(document.querySelectorAll(".size"));
        clearChoice(document.querySelectorAll(".sauce"));
        clearChoice(document.querySelectorAll(".topping"));
    }
    else {
        alert("Please select a size/sauce");
    }

    cartSize++;
    document.getElementById("cartamount").innerHTML = cartSize;
    document.getElementById("cartamount").style.color = 'red';
}

// Self-explanatory
function calcPrice(items, isSpecial) {
    var price = 0;

    switch (items.pizzasize) {
        case "small":
            price += 5.99;
            break;
        case "medium":
            price += 7.99;
            break;
        case "large":
            price += 9.99;
            break;
        case "xlarge":
            price += 11.99;
            break;
    }

    switch (specialPizza) {
        case "meat":
            price += 10.99;
            break;
        case "veggie":
            price += 5.99;
            break;
        case "bbq":
            price += 8.99;
            break;
        case "hawaiian":
            price += 7.99;
            break;
    }
    
    if (!isSpecial) {
        for (var i = 0; i < items.pizzatoppings.length; i++) {
            switch (items.pizzatoppings[i]) {
                case "pepperoni":
                    price += 1.49;
                    break;
                case "sausage":
                    price += 1.49;
                    break;
                case "chicken":
                    price += 1.49;
                    break;
                case "beef":
                    price += 1.99;
                    break;
                case "onions":
                    price += 0.99;
                    break;
                case "peppers":
                    price += 0.99;
                    break;
                case "olives":
                    price += 0.99;
                    break;
                case "jalapenos":
                    price += 0.99;
                    break;
                default:
                    break;
            }
        }
    }
    return price;
}

// Returns the sum of order in form of totalPrice var
function printFinal() {
    var order = document.getElementById("invoice");
    order.innerHTML += ("\n\nTotal Cost: $" + totalPrice.toFixed(2) + "\n\n\n");
}


// adds currently selected side to order, adds that price to the total price as well
function addSide(text) {
    var order = document.getElementById("invoice");
    var side = text.id;

    if (confirm("Do you wish to add " + side + " to the order?")) {
        switch (side) {
            case "breadsticks":
                order.innerHTML += (side + " $3.99\n");
                totalPrice += 3.99;
                break;
            case "pasta":
                order.innerHTML += (side + " $7.99\n");
                totalPrice += 7.99;
                break;
            case "soda":
                order.innerHTML += (side + " $1.99\n");
                totalPrice += 1.99;
                break;
        }
        cartSize++;
        document.getElementById("cartamount").innerHTML = cartSize;
        document.getElementById("cartamount").style.color = 'red';
        completeOrder += side + "\n";
    }
    
}

// Fills the form text with the order info to be submitted to the kitchen staff
function produceOrder() {
    document.getElementById("order").value = completeOrder;
}


