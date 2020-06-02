// Convert fish objects into HTML

const convertFishObject = (fishObject) => {    
    const fishObjectHTML = `<section class="fish">
                    <div class="fish__title">
                        <h3>${fishObject.name}</h3>
                    </div>
                    <div class="">
                        <img class="fish__picture" src=${fishObject.picture}
                            alt="${fishObject.name} the ${fishObject.species}"/>
                    </div>
                    <div class="fish__details">
                        <ul>
                            <li> Species: ${fishObject.species}</li>
                            <li>Length: ${fishObject.length}</li>
                            <li>Name: ${fishObject.name}</li>
                            <li>Location: ${fishObject.location}</li>
                            <li>Food: ${fishObject.food}</li>
                        </ul>
                    </div>
                </section>`
    return fishObjectHTML
}