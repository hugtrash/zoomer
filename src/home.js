import Splide from '@splidejs/splide'

import '@splidejs/splide/css/core'
import './styles/splide.css'

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
