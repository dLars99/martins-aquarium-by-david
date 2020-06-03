// Array of fish objects

const fishCollection = [
    {
        picture: "https://i.ytimg.com/vi/y6tdGVTgmm4/maxresdefault.jpg",
        name: "Angus",
        species: "Parrot fish",
        length: 8,
        location: "Sea of Google",
        food: "Popcorn"
    },
    {
        picture: "https://cdn0.wideopenpets.com/wp-content/uploads/2019/10/Fish-Names-770x405.png",
        name: "Dopey",
        species: "Ryukin goldfish",
        length: 6,
        location: "Sea of Surprise",
        food: "Bonito flakes"
    },
    {
        picture: "https://images.theconversation.com/files/299379/original/file-20191030-154716-1wc4d64.jpg?ixlib=rb-1.1.0&rect=18%2C3%2C2026%2C1355&q=45&auto=format&w=496&fit=clip",
        name: "Schnauzer",
        species: "Unicorn fish",
        length: 25,
        location: "Scented Sea",
        food: "Kelp"
    }, 
    {
        picture: "https://www.nationalgeographic.com/content/dam/animals/pictures/hero/fish-hero.adapt.1900.1.jpg",
        name: "Carole Baskin",
        species: "Lionfish",
        length: 12,
        location: "Sea of Seas",
        food: "Gazelle"
    },
    {
        picture: "https://i2.wp.com/fishingbooker.com/blog/media/Anglerfish-1-e1540224525672.jpg?fit=718%2C507&ssl=1&resize=1200%2C900",
        name: "Gozer",
        species: "Warm and Fuzzy Fish",
        length: 137,
        location: "Sea of Qo'noS",
        food: "Sleeping minnows"
    },
    {
        picture: "https://vignette.wikia.nocookie.net/disney/images/6/60/Profile_-_Flounder.jpeg/revision/latest?cb=20191026173646",
        name: "Jim",
        species: "Orion Fish",
        length: 9,
        location: "Percy Priest",
        food: "Lettuce"
    },
    {
        picture: "https://www.spotmydive.com/media/cache/my_thumb_article_img/uploads/images/1460384757_ca8.jpg",
        name: "Major Major",
        species: "Flatfish",
        length: 20,
        location: "Marianas Trench",
        food: "Leftover Pizza"
    },
    {
        picture: "https://i.dailymail.co.uk/i/pix/2015/11/10/00/2E48C67200000578-0-image-m-31_1447114400618.jpg",
        name: "Triclops",
        species: "Mutated guppy",
        length: 12,
        location: "Sea of Eternia",
        food: "Plutonium"
    },
    {
        picture: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Still_Life_with_Dead_Fish_-_Muleg%C3%A9_-_Baja_California_Sur_-_Mexico.jpg",
        name: "Willy",
        species: "Pompano",
        length: 13,
        location: "Dead Sea",
        food: "Sand"
    }
]

// Sort fish by length into most holy multiples of 3
const mostHolyFish = () => {
    const holyCarp = []

    for (currentFish of fishCollection) {
        if (currentFish.length % 3 === 0) {
            holyCarp.push(currentFish)
        }
    }
    console.log(holyCarp)
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