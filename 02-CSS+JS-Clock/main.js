const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secHand = document.querySelector('.sec-hand')


const now = new Date()
const hour = now.getHours()
const min = now.getMinutes()
const sec = now.getSeconds()
hourHand.style.transform = `translate(-50%, -100%) rotate(${hour * 15 + (min / 60) * 15}deg)`
minHand.style.transform = `translate(-50%, -100%) rotate(${min * 6 + (sec / 60) * 6}deg)`
secHand.style.transform = `translate(-50%, -100%) rotate(${sec * 6}deg)`


const setTime = () => {
  const now = new Date()
  const hour = now.getHours()
  const min = now.getMinutes()
  const sec = now.getSeconds()

  hourHand.style.transform = `translate(-50%, -100%) rotate(${hour * 15 + (min / 60) * 15}deg)`
  minHand.style.transform = `translate(-50%, -100%) rotate(${min * 6 + (sec / 60) * 6}deg)`
  secHand.style.transform = `translate(-50%, -100%) rotate(${sec * 6}deg)`

  if (sec === 59) secHand.classList.add('notransition')
  if (sec === 1) secHand.classList.remove('notransition')

  if (min === 59 && sec === 59) minHand.classList.add('notransition')
  if (min === 0 && sec === 1) minHand.classList.remove('notransition')

  if (hour === 23 && min === 59 && sec === 59) hourHand.classList.add('notransition')
  if (hour === 0 && min === 0 && sec === 1) hourHand.classList.remove('notransition')

}

setInterval(setTime, 1000)
