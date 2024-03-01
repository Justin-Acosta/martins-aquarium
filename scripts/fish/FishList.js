// Import the function that returns a copy of the fish array
import { getFish } from '../database.js'

const fishes = getFish()


// most holy fish
const mostHolyFish = () => {
    const holyFish = []
    const soldiers = []
    const regularFish= []

    for (const fish of fishes) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish)
        } else if (fish.length % 5 === 0) {
            soldiers.push(fish)
        } else {
            regularFish.push(fish)
        }
    }

    const filteredFish = holyFish.concat(soldiers,regularFish)
    return filteredFish
}


const filteredFish = mostHolyFish()


export const fishList = () => {
    // Invoke the function that you imported from the database module

    // Start building a string filled with HTML syntax
    let htmlString = '<h2 class="fish-header">Fish</h2><section class="fish-list">'

    // Create HTML representations of each fish here
    for (const fish of filteredFish) {

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