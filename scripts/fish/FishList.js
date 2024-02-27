// Import the function that returns a copy of the fish array
import { getFish } from '../database.js'

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<h2 class="fish-header">Fish</h2><section class="fish-list">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<article class="fish-card">
            <div><img  class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name"><strong>Name: </strong>${fish.name}</div>
            <div class="fish__species"><strong>Species </strong>${fish.species}</div>
            <div class="fish__length"><strong>Length: </strong>${fish.length}</div>
            <div class="fish__location"><strong>Location: </strong>${fish.location}</div>
            <div class="fish__diet"><strong>Food: </strong>${fish.food}</div>
        </article>
`
    }
    htmlString += `</section>`

    return htmlString
}