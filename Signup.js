document.addEventListener('DOMContentLoaded', () => {

    // Definere variablerne
    const homeButton = document.querySelector('.home');

    // Hvis brugeren trykker på hjem knappen bliver de taget til hovedsiden
    if (homeButton) {
        homeButton.addEventListener('click', () => {
            console.log("Home button clicked");
            window.location.pathname = "Index.html"; 
        });
    } else {
        console.error("Home button not found!");
    }
});
