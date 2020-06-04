// Array of data objects for location elements

let locationCollection = []

// Retrieve location data from JSON database
const getLocationData = () => {
    return fetch("http://localhost:8088/locations").then(
            (response) => {
                return response.json()
            }
        )
        .then((arrayOfLocations) => {
            locationCollection = arrayOfLocations
        })
}