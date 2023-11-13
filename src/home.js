import Splide from '@splidejs/splide'

import '@splidejs/splide/css/core'
import './styles/splide.css'
import './styles/videoPlayer.css'

// initialize splide
var splide = new Splide('.splide', {
  type: 'loop',
  autoWidth: true,
  padding: { left: '2.5rem', right: '2.5rem' },
  pagination: false,
  speed: 600,
  easing: 'ease',
  autoplay: true,
  interval: 4000,
  paginationKeyboard: true,
  snap: false,
  breakpoints: {
    767: {
      padding: { left: '1.25rem', right: '1.25rem' },
    },
  },
})
splide.mount()

// hide carticon on home site
$('[data-cart="carticon"]').hide()

// load video only on first click and make sure body doesnt overflow when video modal is up
$('[button-type="showreel"]').click(function () {
  loadVideoPlayer()
  $('body').addClass('overflow-hidden')
})
$('[button-type="hidereel"]').click(function () {
  $('body').removeClass('overflow-hidden')
})

let players

function loadVideoPlayer() {
  // make sure video does not initialize a second time
  if (!window.videoPlayerInitialized)
    // load videoplayer dynamically
    import('./features/videoPlayer').then((videoPlayerModule) => {
      // if loaded, run function to initialize videoplayer
      players = videoPlayerModule.default()
    })
  window.videoPlayerInitialized = true
}

// pause showreel if hide button of modal is clicked
function stopShowreel() {
  players[0].ready(function () {
    players[0].pause()
    //players[0].currentTime(0)
  })
}
$('[button-type="hidereel"]').click(function () {
  stopShowreel()
})
