import { Guests } from "./Guests.js"
import { Services } from "./Services.js"
import { Parks } from "./Parks.js"


const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="details">
    
    <section class="services"> 
    <h2>Services</h2>  
       ${Services()}
       </section>
       
    <article class="parksAndGuests">
   
    <section class="detail--column list details__parks">
    <h2>Parks</h2>
        ${Parks()}
        </section>
        
        <aside class="detail--column list details__guests">
        <h2>Guests</h2>
        ${Guests()}      
        </aside>
    </article>
    </article>
`

mainContainer.innerHTML = applicationHTML