import { Guests } from "./Guests.js"
import { Services } from "./Services.js"
import { Parks } from "./Parks.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cedar Falls Park</h1>
<article class="details">
    <section class="detail--column list details__guests">
        <h2>Guests</h2>
        ${Guests()}
    </section>
    <section class="detail--column list details__parkss">
        <h2>Parks</h2>
        ${Parks()}
    </section>
</article>
<article class="services">
    <h2>Services</h2>
       ${Services()}
</article>
`

mainContainer.innerHTML = applicationHTML