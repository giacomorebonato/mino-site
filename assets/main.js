let mainImage = document.getElementById('main-image')
let counter = 0
let images = [
  require('../images/mino_0.jpg'),
  require('../images/mino_1.jpg'),
  require('../images/mino_2.jpg')
]

if (mainImage) {
  setInterval(() => {
    mainImage.classList.add('shake')

    setTimeout(() => {
      if (counter > 2) {
        counter = 0
      }

      mainImage.src = images[counter]
      mainImage.classList.remove('shake')
      counter++
    }, 1000)
  }, 2500)
}
