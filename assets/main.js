let imgURL = 'https://placeimg.com/480/480/people'
let mainImage = document.getElementById('main-image')
let counter = 0

mainImage.src = imgURL

setInterval(() => {
  mainImage.src = `${imgURL}?i=${counter}`

  counter++
}, 5000)
