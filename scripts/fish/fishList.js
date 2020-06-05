// Store section of the browser into which we insert the fish list
const fishArticleElement = document.querySelector(".fishList")

// Master function to show fish in the browser

const showFish = (currentFishObjectsArray) => {
    for (const currentFishObject of currentFishObjectsArray) {
        const fishCardHTML = convertFishObject(currentFishObject)
        fishArticleElement.innerHTML += fishCardHTML
    }
}

// Show each set of fish in the browser in order: holy, soldiers, and everyone else

const fishList = () => {
    const holyFish = mostHolyFish()
    showFish(holyFish)

    const soldierFishArray = soldierFish()
    showFish(soldierFishArray)

    const commonerFishArray = nonHolyFish()
    showFish(commonerFishArray)
}

const fishTypeDropdown = document.querySelector(".typeChoice")

const clearFishList = () => fishArticleElement.innerHTML = ""

fishTypeDropdown.addEventListener("change", clickEvent => {
    // Get the value of the option chosen by the user
    const userChoice = clickEvent.target.value
    
    // Clear the fish list and show only the fish the user selects
    let fishSelection = []
    clearFishList()
    if (userChoice === "holy") {
        fishSelection = mostHolyFish()
    } else if (userChoice === "soldier") {
        fishSelection = soldierFish()
    } else if (userChoice === "plebs") {
        fishSelection = nonHolyFish()
    } 
    showFish(fishSelection)

    if (userChoice === "all") {
        fishList()
    }
})

// Listen for the Toggle fish button and hide or show
const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".fishList").classList.toggle("hidden")
})