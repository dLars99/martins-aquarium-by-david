// Send tip items to convert to HTML, then pass HTML code to the browser

const tipList = () => {
    for (currentTip of tipCollection) {
        tipCardHTML = convertTipItem(currentTip)
        tipSectionElement = document.querySelector(".tipList")
        tipSectionElement.innerHTML += tipCardHTML
    }
}


// Listen for the Toggle Tips button and hide or show
const tipVisibilityButton = document.querySelector(".toggleTips")

tipVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".tipList").classList.toggle("hidden")
})