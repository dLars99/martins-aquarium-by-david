// Gather HTML from fish module and send it to the DOM

const fishList = () => {
    for (const currentFishObject of fishCollection) {
        const fishCardHTML = convertFishObject(currentFishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishCardHTML
    }
}