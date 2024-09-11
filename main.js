let drinks = [];

$(".order").click(function() {
    let drink = new Drink($(this).attr("data-type"));
    sendOrder(drink);
});