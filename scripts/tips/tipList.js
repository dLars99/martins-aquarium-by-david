// Send tip items to convert to HTML, then pass HTML code to the browser

const tipList = () => {
    for (currentTip of tipCollection) {
        tipCardHTML = convertTipItem(currentTip)
        tipSectionElement = document.querySelector(".tipList")
        tipSectionElement.innerHTML += tipCardHTML
    }
}