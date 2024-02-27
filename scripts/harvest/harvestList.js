import { getHarvest } from '../database.js'

export const harvestList = () => {
    // Invoke the function that you imported from the database module
    const harvestQuotes = getHarvest()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTML representations of each fish here
    for (const harvest of harvestQuotes) {

        // Why is there a backtick used for this string?
        htmlString += `<article class="harvest-card">
            <div class="harvest__fish"><strong>Fish: </strong>${harvest.fish}</div>
            <div class="harvest_quote"><strong>Quote: </strong>"${harvest.quote}"</div>
        </article>`

    }

    return htmlString
}