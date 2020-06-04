// Array of quote data

let quoteCollection = []

const getQuoteData = () => {
    return fetch("http://localhost:8088/quotes").then(
            (response) => {
                return response.json()
            }
        )
        .then((arrayOfQuotes) => {
            quoteCollection = arrayOfQuotes
        })
}