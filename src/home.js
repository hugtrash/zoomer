import Splide from '@splidejs/splide'

import '@splidejs/splide/css/core'
import './styles/splide.css'
import brandMarquee from './features/brandMarquee'
import './styles/brandMarquee.css'

brandMarquee()

var splide = new Splide('.splide', {
  type: 'slide',
  autoWidth: true,
  padding: { left: '2.5rem', right: '2.5rem' },
  pagination: false,
  speed: 600,
  easing: 'ease',
  autoplay: true,
  interval: 4000,
  paginationKeyboard: true,
  snap: false,
})
splide.mount()