// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const selectHeader = document.querySelector('.header-container')

function Header() {

const header = document.createElement('div')
const date = document.createElement('span')
const title = document.createElement('h1')
const temperature = document.createElement('span')

header.appendChild(date)
header.appendChild(title)
header.appendChild(temperature)

header.classList.add("header")
date.classList.add("date")
temperature.classList.add("temperature")

date.textContent = "MARCH 28, 2020"
title.textContent = "Lambda Times"
temperature.textContent = "98°"


selectHeader.appendChild(header)

return header

}

Header()