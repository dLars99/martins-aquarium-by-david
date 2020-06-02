// Send location data to convert to HTML and relay that code to the browser

const locationList = () => {
    for (currentLocationObject of locationCollection) {
        const locationCardHTML = convertLocationObject(currentLocationObject)
        const locationArticleElement = document.querySelector(".locationList")
        locationArticleElement.innerHTML += locationCardHTML
    }
}