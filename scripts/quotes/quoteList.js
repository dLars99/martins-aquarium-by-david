// Send quote data to convert to HTML, and send converted data to the browser

const quoteList = () => {
    for (const currentQuoteObject of quoteCollection) {
        const quoteHTMLCard = convertQuoteObject(currentQuoteObject)
        const quoteSectionElement = document.querySelector(".quoteList")
        quoteSectionElement.innerHTML += quoteHTMLCard
    }
}