let foodName = '';
let foodValue = '';
let drinkName = '';
let drinkValue = '';
let dessertName = '';
let dessertValue = '';

function selectItem (parentClass, itemClass) {
    // Verify if already has a selected card
    // Search for the selected card
    // If there's a button selected remove the class selected and add hidden to the check button from the card
    const selectedBefore = document.querySelector(parentClass +  " .selected");
    if(selectedBefore !== null) {
        selectedBefore.classList.remove("selected");
           
        const selectedCheck = selectedBefore.querySelector(".check");
        selectedCheck.classList.add("hidden");
    }

    const select = document.querySelector(itemClass);
    select.classList.add("selected");

    const activateCheck = document.querySelector(itemClass + " .check");

    activateCheck.classList.remove("hidden");

    checkIfAllActive('.food', '.drinks', '.desserts');
}

function checkIfAllActive(food, drink, dessert) {

    const checkFood = document.querySelector(food + " .selected");
    const checkDrink = document.querySelector(drink + " .selected");
    const checkDessert = document.querySelector(dessert + " .selected");

    


    if(checkFood !== null && checkDrink !== null && checkDessert !== null) {
        const selectButton = document.querySelector(".select-button");
        selectButton.classList.add("hidden");
    
        const selectedButton = document.querySelector(".selected-button");
        selectedButton.classList.remove("hidden");

        foodName = checkFood.querySelector('.name');
        foodValue = checkFood.querySelector('.value');
        drinkName = checkDrink.querySelector('.name');
        drinkValue = checkDrink.querySelector('.value');
        dessertName = checkDessert.querySelector('.name');
        dessertValue = checkDessert.querySelector('.value');
    }    
}

function sendMessage() {

}