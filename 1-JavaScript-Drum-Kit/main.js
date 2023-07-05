const soundA = new Audio('./sounds/clap.wav')
const soundS = new Audio('./sounds/hihat.wav')
const soundD = new Audio('./sounds/kick.wav')
const soundF = new Audio('./sounds/openhat.wav')
const soundG = new Audio('./sounds/ride.wav')
const soundH = new Audio('./sounds/snare.wav')
const soundJ = new Audio('./sounds/tom.wav')
const soundK = new Audio('./sounds/tink.wav')

const btnA = document.querySelector('.a')
const btnS = document.querySelector('.s')
const btnD = document.querySelector('.d')
const btnF = document.querySelector('.f')
const btnG = document.querySelector('.g')
const btnH = document.querySelector('.h')
const btnJ = document.querySelector('.j')
const btnK = document.querySelector('.k')


function clickEffect(element, audio) {
  element.classList.add('playing')
  audio.play()
  setTimeout(() => {
    element.classList.remove('playing')
  }, 300)
}

document.addEventListener('keydown', function (event) {
  const key = event.key.toUpperCase()
  switch (key) {
    case 'A':
      clickEffect(btnA, soundA)
      break;
    case 'S':
      clickEffect(btnS, soundS)

      break;
    case 'D':
      clickEffect(btnD, soundD)

      break;
    case 'F':
      clickEffect(btnF, soundF)

      break;
    case 'G':
      clickEffect(btnG, soundG)

      break;
    case 'H':
      clickEffect(btnH, soundH)

      break;
    case 'J':
      clickEffect(btnJ, soundJ)

      break;
    case 'K':
      clickEffect(btnK, soundK)
      break;
    default:
      break;
  }
})