function sendOrder(drink = null) {
    if (!drink) {
        return;
    }

    sendRequest(ENDPOINT_ADD, drink);
}

function prepareOrder() {
    if (!drinks[0]) {
        console.log("No drinks to prepare at the moment...")
        return;
    }
    if (drinks[0].type === DRINK_TYPE_DRINK) {
        removeDrinkFromList();
    }
    else if (drinks[0].type === DRINK_TYPE_BEER) {
        removeDrinkFromList();
        if (drinks[0].type === DRINK_TYPE_BEER) {
            removeDrinkFromList();
        }
    }
}


function addDrinkToList(drink) {
    document.getElementById("last-drink").innerHTML = this.responseText;
    drinks.push(drink);
    $("#orders-list").append(`<li>${drink.type}</li>`);

    setTimeout(removeDrinkFromList, TIME_TO_PREPARE_A_DRINK);
}

function removeDrinkFromList() {
    let drink = drinks[0];
    sendRequest(ENDPOINT_REMOVE, drink); 
    drinks.shift();
    $("#orders-list li").first().remove();
}