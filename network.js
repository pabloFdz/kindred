const ENDPOINT_ADD = "order";
const ENDPOINT_REMOVE = "remove";

function sendRequest(endpoint, drink) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "index.php");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onload = function() {
        if (this.responseText == 200) {
            console.log(ORDER_OK);
            addDrinkToList(drink);
        }
        else if (this.responseText == 429) {
            console.log(ORDER_KO);
            return;
        }
    }
    
    xhttp.send(`endpoint=${endpoint}&drink=${drink.type}`);
}