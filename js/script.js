function selectItem (parentClass, itemClass) {
    // Verify if already has a selected card
    // Search for the selected card
    // If there's a button selected remove the class selected and add hidden to the check button from the card
    const selectedBefore = document.querySelector(parentClass +  " .selected");
    
    console.log(selectedBefore);
    if(selectedBefore !== null) {
        selectedBefore.classList.remove("selected");
           
        const selectedCheck = selectedBefore.querySelector(".check");
        selectedCheck.classList.add("hidden");
    }

    const select = document.querySelector(itemClass);
    select.classList.add("selected");

    const activateCheck = document.querySelector(itemClass + " .check");

    activateCheck.classList.remove("hidden");
}