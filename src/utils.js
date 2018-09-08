
import background from './data/background'

export function setBackground() {
  const html = document.querySelector('div#root')
  html.style = `background: url(${getImage()}) no-repeat center center fixed;background-size: cover;`
}

export function getBGImageStyle(image) {
  return {
    backgroundSize: 'cover',
    backgroundImage: `url(${image})`,
  }
}

function getImage(){
  const l = (str) => window.location.href.includes(`${str}.html`)

  switch(true) {
    case l('visa'): return background.visa
    case l('car-rentals'): return background.car
    case l('immigration'): return background.immigration
    default: return background.main
  }
}