// Array of fish objects
let fishCollection = []

// Retrieve fish data from JSON database
const getFishData = () => {
    return fetch("http://localhost:8088/fish").then (
        (response) => {
            return response.json()
        }
    )
    .then ( (arrayOfFish) => {
        fishCollection = arrayOfFish
    })
}

// Sort fish by length into most holy multiples of 3
const mostHolyFish = () => {
    const holyCarp = []

    for (currentFish of fishCollection) {
        if (currentFish.length % 3 === 0) {
            holyCarp.push(currentFish)
        }
    }
    return holyCarp
}

// Sort fish by length into slightly less holy multiples of 5
const soldierFish = () => {
    const soldierFish = []

    for (currentFish of fishCollection) {
        if (currentFish.length % 5 === 0) {
            soldierFish.push(currentFish)
        }
    }

    return soldierFish
}

// Sort the plebian fish
const nonHolyFish = () => {
    const commonerFish = []

    for (currentFish of fishCollection) {
        if (!((currentFish.length % 5 === 0) || (currentFish.length % 3 === 0))) {
            commonerFish.push(currentFish)
        }
    }

    return commonerFish
}
