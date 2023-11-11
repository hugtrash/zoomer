import Splide from '@splidejs/splide'

import '@splidejs/splide/css/core'
import './styles/splide.css'

import videoPlayer from './features/videoPlayer'
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

// initialize video player for showreel
videoPlayer()

// make sure body doesnt overflow when video modal is up
$('[button-type="showreel"]').click(function () {
  $('body').addClass('overflow-hidden')
})
$('[button-type="hidereel"]').click(function () {
  $('body').removeClass('overflow-hidden')
})


// var showreelPlayer = videojs.getPlayer('video-1') // eslint-disable-line

// console.log('video is' + showreelPlayer)

// // Funktion, um das Video zu stoppen und zurückzuspulen
// function stopAndRewind() {
//   showreelPlayer.ready(function () {
//     showreelPlayer.pause()
//     showreelPlayer.currentTime(0)
//   })
// }

// // if showreel modal closed, stop and rewind showreel video
// $('[button-type="hidereel"]').click(function () {
//   stopAndRewind()
// })
