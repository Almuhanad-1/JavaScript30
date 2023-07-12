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
  audio.currentTime = 0;
  audio.play()
  element.classList.add('playing')
  element.addEventListener('transitionend', (e) => {
    if (e.propertyName !== 'transform') return
    element.classList.remove('playing')
  })
}

window.addEventListener('keydown', function (event) {
  const key = event.code
  switch (key) {
    case 'KeyA':
      clickEffect(btnA, soundA)
      break;
    case 'KeyS':
      clickEffect(btnS, soundS)

      break;
    case 'KeyD':
      clickEffect(btnD, soundD)

      break;
    case 'KeyF':
      clickEffect(btnF, soundF)

      break;
    case 'KeyG':
      clickEffect(btnG, soundG)

      break;
    case 'KeyH':
      clickEffect(btnH, soundH)

      break;
    case 'KeyJ':
      clickEffect(btnJ, soundJ)

      break;
    case 'KeyK':
      clickEffect(btnK, soundK)
      break;
    default:
      break;
  }
})