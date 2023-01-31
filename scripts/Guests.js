import { getGuests } from "./database.js";

const guestList = getGuests()

export const Guests = () => {
    let html = ""
    for (const guestObj of guestList) {
        html += `<div id="guest--${guestObj.id}">${guestObj.name}</div>`
    }
    
    return html
}

