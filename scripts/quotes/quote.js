// Convert quote object into HTML for display

const convertQuoteObject = (quoteObject) => {
    const quoteObjectHTML = `<section class="quote">
                        <blockquote><p>${quoteObject.quote}</p>
                        <cite>--${quoteObject.author}</cite></blockquote>
                    </section>`
    return quoteObjectHTML
}