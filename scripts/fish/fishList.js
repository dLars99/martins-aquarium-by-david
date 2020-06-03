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