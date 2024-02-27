// {
//     location: "Kyoto, Japan",
//     travelTip: "Visit Fushimi Inari Shrine early in the morning to avoid crowds."
//   }

import { getVisited } from '../database.js'

export const visitedList = () => {
    // Invoke the function that you imported from the database module
    const visitedTip = getVisited()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTML representations of each fish here
    for (const visited of visitedTip) {

        // Why is there a backtick used for this string?
        htmlString += `<article class="visited-card">
            <div class="visited__loc"><strong>Fish: </strong>${visited.location}</div>
            <div class="visited__tip"><strong>Quote: </strong>"${visited.travelTip}"</div>
        </article>`

    }

    return htmlString
}