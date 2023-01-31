import { getParks } from "./database.js"
import { getGuests } from "./database.js"

const parkList = getParks()
const guestList = getGuests()

//Create event listener that displays number of guests in park clicked. 

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("park")) {
            const [, parkId] = itemClicked.id.split("--")

            let matchingPark = null
            for (const park of parkList) {
                if (park.id === parseInt(parkId)) {
                    matchingPark = park
                    const guestCount = matchingPark.guestIds.length

                    window.alert(` ${matchingPark.name} has ${guestCount} guests `)
                }
            }
        }
    }
)


export const Parks = () => {
    let html = ""
    for (const park of parkList) {
        html += `<div class="parkList" id="park--${park.id}">${park.name}</div>`
    }
    return html
}