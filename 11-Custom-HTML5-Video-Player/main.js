// get our elements
const player = document.querySelector('.player')
const video = document.querySelector('.player__video')
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress__filled')
const toggle = document.querySelector('.toggle')
const skipBtns = document.querySelectorAll('[data-skip]')
const ranges = document.querySelectorAll('.player__slider')
const fullscreenBtn = document.querySelector('.fullscreen')

// build out functions
function togglePlay() {
  video.paused ? video.play() : video.pause();
  // if (video.paused) {
  //   video.play()
  //   // player.classList.add('play')
  //   // setTimeout(() => {
  //   //   player.classList.remove('play')
  //   // }, 500)
  // } else {
  //   video.pause()
  //   // player.classList.add('pause')
  //   // setTimeout(() => {
  //   //   player.classList.remove('pause')
  //   // }, 500)
  // }
}

function updateBtn() {
  toggle.textContent = video.paused ? "►" : "❚ ❚";
}

function skip() {
  video.currentTime += +this.dataset.skip;
}

function rangeHandler() {
  video[this.name] = this.value;
}

function progressHandler() {
  let duration = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = duration + '%';
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function fullscreenHandler() {
  const fullscreenElement = document.fullscreenElement;

  if (fullscreenElement) {
    document.exitFullscreen();
    video.style.width = 'auto'
    video.style.height = 'auto'
  } else {
    player.requestFullscreen();
    video.style.width = '100vw'
    video.style.height = '100vh'

  }
}


// hook up with event listener
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
video.addEventListener('timeupdate', progressHandler);

toggle.addEventListener('click', togglePlay);

skipBtns.forEach(btn => {
  btn.addEventListener('click', skip)
});

ranges.forEach(range => {
  range.addEventListener('input', rangeHandler)
});

progress.addEventListener('click', scrub);

let mousedown = false;

progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mouseup', () => mousedown = false)


fullscreenBtn.addEventListener('click', fullscreenHandler)