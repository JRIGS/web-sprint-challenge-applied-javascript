// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card,
// the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const selectCardsContainer = document.querySelector(".cards-container")

function cardMaker(object){
const card = document.createElement('div')
const headline = document.createElement('div')
const authorContainer = document.createElement('div')
const imgContainer = document.createElement('div')
const img = document.createElement('img')
const author = document.createElement('span')

card.appendChild(headline)
card.appendChild(authorContainer)
authorContainer.appendChild(imgContainer)
imgContainer.appendChild(img)
authorContainer.appendChild(author)

card.classList.add("card")
headline.classList.add("headline")
authorContainer.classList.add("author")
imgContainer.classList.add("img-container")

headline.textContent = object.headline
img.src = object.authorPhoto
author.textContent = object.authorName

selectCardsContainer.appendChild(card)

headline.addEventListener('click', event =>{
    // console.log("works");
    console.log(headline.textContent);
})

// return card

}


axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(response => {
    const articles = response.data.articles
    //giving keys of obj ex:bootstrap then node
    for (let entry in articles) {
        articles[entry].forEach(cardData => cardMaker(cardData))
      }
})




// axios.get('https://lambda-times-api.herokuapp.com/articles')
// .then(response => {
//     const entry = response.data.articles
//     entry.forEach( entry => {
//         console.log(entry);
//         entry.forEach(cardData => cardMaker(cardData))
//     })
// })