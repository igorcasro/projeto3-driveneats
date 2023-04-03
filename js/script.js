let foodName = '';
let foodValue = '';
let drinkName = '';
let drinkValue = '';
let dessertName = '';
let dessertValue = '';
let name = '';
let address = '';
let totalValue = 0.0;

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

        foodName = checkFood.querySelector('.name').innerHTML;
        foodValue = checkFood.querySelector('.value').innerHTML;
        drinkName = checkDrink.querySelector('.name').innerHTML;
        drinkValue = checkDrink.querySelector('.value').innerHTML;
        dessertName = checkDessert.querySelector('.name').innerHTML;
        dessertValue = checkDessert.querySelector('.value').innerHTML;
    }    
}

function parseValues() {
    const parsedFoodValue = Number(foodValue.substring(2, foodValue.length - 1).replace(",", "."));
    const parsedDrinkValue = Number(drinkValue.substring(2, drinkValue.length - 1).replace(",", "."));
    const parsedDessertValue = Number(dessertValue.substring(2, dessertValue.length - 1).replace(",", "."));

    return (parsedFoodValue + parsedDrinkValue + parsedDessertValue).toFixed(2).replace(".", ",");
}

function openConfirmPanel() {

    const hiddenPanel = document.querySelector(".confirm-order");
    hiddenPanel.classList.toggle("hidden");

    const setPlaneName = document.querySelector(".plate-name");
    setPlaneName.innerHTML = foodName;
    const setPlateValue = document.querySelector(".plate-value");
    setPlateValue.innerHTML = foodValue.substring(2, foodValue.length - 1) + "0";

    const setDrinkName = document.querySelector(".drink-name");
    setDrinkName.innerHTML = drinkName;
    const setDrinkValue = document.querySelector(".drink-value");
    setDrinkValue.innerHTML = drinkValue.substring(2, drinkValue.length - 1) + "0";

    const setDessertName = document.querySelector(".dessert-name");
    setDessertName.innerHTML = dessertName;
    const setDessertValue = document.querySelector(".dessert-value");
    setDessertValue.innerHTML = dessertValue.substring(2, dessertValue.length - 1) + "0";

    totalValue = parseValues();

    const setTotalValue = document.querySelector(".total-value");
    setTotalValue.innerHTML = "R$ " + totalValue;
}

function closeConfirmPanel() {
    const hiddenPanel = document.querySelector(".confirm-order");
    hiddenPanel.classList.toggle("hidden");
}

function sendMessage() {

    name = prompt("Insira seu nome, por favor:");
    address = prompt("Por último, seu endereço:");

    totalValue = parseValues();

    const cellphoneNumber = 5519993027135;

    const textMessage = 'Olá, gostaria de fazer o pedido:';
    
    const foodMessage = '- Prato: ' + foodName;
    const drinkMessage = '- Bebida: ' + drinkName;
    const dessertMessage = '- Sobremesa: ' + dessertName;
    const totalOrder = 'Total: R$ ' + totalValue;
    const endName = 'Nome: ' + name;
    const endAddress = 'Endereço: ' + address;

    let fullMessage = textMessage + '\n' + foodMessage + '\n' + drinkMessage + '\n' + dessertMessage + '\n' + totalOrder + '\n\n' + endName + '\n' + endAddress;
    
    const wppMessage = 'https://wa.me/' + cellphoneNumber + '?text=' + encodeURIComponent(fullMessage) ;

    console.log(wppMessage);

    window.open(wppMessage);
}