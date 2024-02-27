import { fishList } from './fish/FishList.js'
import { cleaningList } from './cleaning/cleaningList.js'
import { harvestList } from './harvest/harvestList.js'
import { visitedList } from './visited/visitedList.js'

const fishHTML = document.querySelector(".fish")
fishHTML.innerHTML = fishList()

const cleaningHTML = document.querySelector(".cleaning-list")
cleaningHTML.innerHTML = cleaningList()

const harvestHTML = document.querySelector(".harvest-list")
harvestHTML.innerHTML = harvestList()

const visitedHTML = document.querySelector(".visited-list")
visitedHTML.innerHTML = visitedList()
