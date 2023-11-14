import backgroundColorFade from './features/backgroundColorFade'
import './styles/backgroundColorFade.css'
import './styles/customCursor.css'
import bookingCart from './features/bookingCart'
import brandMarquee from './features/brandMarquee'
import './styles/brandMarquee.css'
import buttonsDrawline from './features/buttonsDrawline'
import './styles/buttonsDrawline.css'
import customCursor from './features/customCursor'
import './styles/customCursor.css'
import validateForm from './features/formValidation'
import insertScript from './features/insertScript'
import mobileMenu from './features/mobileMenu'
import pageTransition from './features/pageTransition'
import './styles/pageTransition.css'
import textReveal from './features/textReveal'
import './styles/textReveal.css'
import './styles/style.css'

insertScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-mirrorclick@1/mirrorclick.js', 'body', 'defer')

backgroundColorFade()
bookingCart()
pageTransition()
brandMarquee()
mobileMenu()

// run only if not in edit mode
document.addEventListener('DOMContentLoaded', function () {
  var editorElement = document.querySelector('.w-editor')
  if (!editorElement) {
    buttonsDrawline()
    customCursor()
    textReveal()
    validateForm()
  }
})
