// Convert location object data into HTML for display

const convertLocationObject = (locationObject) => {
    const locationObjectHTML = `<section class="location">
                        <div class="location__title">
                            <h3>${locationObject.name}</h3>
                        </div>
                        <div class="">
                            <img class="location__picture"
                                src="${locationObject.picture}"
                                alt="Beautiful picture of ${locationObject.name}"/>
                        </div>
                        <div class="location__details">
                            ${locationObject.details}
                        </div>
                    </section>`
    return locationObjectHTML
}