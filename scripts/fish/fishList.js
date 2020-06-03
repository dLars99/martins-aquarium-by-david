// Store section of the browser into which we insert the fish list
const fishArticleElement = document.querySelector(".fishList")

// Master function to show fish in the browser

const fishListParser = (currentFishObjectsArray) => {
    for (const currentFishObject of currentFishObjectsArray) {
        const fishCardHTML = convertFishObject(currentFishObject)
        fishArticleElement.innerHTML += fishCardHTML
    }
}

// Function to show holy fish in the browser
const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()

    fishListParser(fishObjectsArray)
}

// Function to show solder fish in the browser
const showSoldierFish = () => {
    const fishObjectsArray = soldierFish()

    fishListParser(fishObjectsArray)
}

// Function to show remaining fish in the browser
const showCommonerFish = () => {
    const fishObjectsArray = nonHolyFish()

    fishListParser(fishObjectsArray)
}

// Invoke the respective functions to show fish in the browser

const fishList = () => {
    showHolyFish()
    showSoldierFish()
    showCommonerFish()
}