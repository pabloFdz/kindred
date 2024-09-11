<?php

session_start();

if (!isset($_SESSION["drink_slots"])) {
  $_SESSION["drink_slots"] = 0;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $endpoint = htmlspecialchars($_POST['endpoint']);

  switch ($endpoint) {
    case "remove":
      removeDrinkFromList();
      break;
    case "order":
      orderDrink();
      break;
  }
}

  function orderDrink() {
    $drink = htmlspecialchars($_POST['drink']);
    $value = checkDrinkValue($drink);

    countCurrentDrinks($value);
  }

  function checkDrinkValue($drink) {
    $TYPE_BEER = "beer";
    $TYPE_DRINK = "drink";

    $TYPE_BEER_VALUE = 1;
    $TYPE_DRINK_VALUE = 2;
    $value = 0;

    if ($drink === $TYPE_BEER) {
      $value = $TYPE_BEER_VALUE;
    }
    else if ($drink === $TYPE_DRINK) {
      $value = $TYPE_DRINK_VALUE;
    }

    return $value;
  }

  function countCurrentDrinks($valueCount) {
    $STATUS_ORDER_OK = 200;
    $STATUS_ORDER_KO = 429;

    $_SESSION["drink_slots"] = $valueCount + $_SESSION["drink_slots"];

    if ($_SESSION["drink_slots"] > 2) {
      $_SESSION["drink_slots"] = $_SESSION["drink_slots"] - $valueCount;
      echo $STATUS_ORDER_KO;
    }
    else {
      echo $STATUS_ORDER_OK;
    }
  }

  function removeDrinkFromList() {
    $drink = htmlspecialchars($_POST['drink']);
    $currentValue = checkDrinkValue($drink);
    $_SESSION["drink_slots"] = $_SESSION["drink_slots"] - $currentValue;
  }
?>