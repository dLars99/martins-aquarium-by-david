// Send location data to convert to HTML and relay that code to the browser

const locationList = () => {
    for (const currentLocationObject of locationCollection) {
        const locationCardHTML = convertLocationObject(currentLocationObject)
        const locationArticleElement = document.querySelector(".locationList")
        locationArticleElement.innerHTML += locationCardHTML
    }
}

// Listen for the Toggle Locations button and hide or show
const locationVisibilityButton = document.querySelector(".toggleLocations")

locationVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".locationList").classList.toggle("hidden")
})