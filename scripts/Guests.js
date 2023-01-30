import { getGuests } from "./database.js";

const guestList = getGuests()

export const guestMaker = () => {
    let html = "<ul>"
    for (const guestObj of guestList) {
        html += `<li id="guest--${guestObj.id}">${guestObj.name}</li>`
    }
    html += "</ul>"
    return html
}

