// Import the function that returns a copy of the fish array
import { getCleaning } from '../database.js'

export const cleaningList = () => {
    // Invoke the function that you imported from the database module
    const cleaningTips = getCleaning()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTML representations of each fish here
    for (const cleaning of cleaningTips) {

        // Why is there a backtick used for this string?
        htmlString += `<article class="cleaning-card">
            <div class="cleaning__tip"><strong>Tip: </strong>${cleaning.tankCleaning}</div>
            <div class="cleaning__salinity"><strong>Salinity: </strong>${cleaning.salinity}</div>
            <div class="cleaning__temperature"><strong>Temperature: </strong>${cleaning.temperature}</div>
        </article>`

    }

    return htmlString
}