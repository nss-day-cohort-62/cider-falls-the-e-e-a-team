import { getServices, getParks } from "./database.js"

document.addEventListener(
    "click", 
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("service")) {
            const [,servicePrimaryKey] = itemClicked.id.split("--")

            let matchingService = null
             for (const services of service) {
                if (services.id === parseInt(servicePrimaryKey)){
                    matchingService = services
                    }
                }

            let matchingParks = []
                for (const park of parks) {
                    if (matchingService.parkIds.includes(park.id)){
                            matchingParks.push(park.name)
                    }
                }
                window.alert(`This ${matchingService.name} service is supported by these ${matchingParks.join(", ")}`)
            }
            
    }  
)

const parks = getParks()
const service = getServices()

export const Services = () => {
    let html = "<ul>"

    for (const services of service) {
        html += `<li id="service--${services.id}">${services.name}</li>`
    }

    html += "</ul>"

    return html
}