import backgroundColorFade from './features/backgroundColorFade'
import './styles/backgroundColorFade.css'
import './styles/customCursor.css'
import bookingCart from './features/bookingCart'
import buttonsDrawline from './features/buttonsDrawline'
import './styles/buttonsDrawline.css'
import customCursor from './features/customCursor'
import insertScript from './utilities/insertScript'

insertScript(
  'https://cdn.jsdelivr.net/npm/@finsweet/attributes-mirrorclick@1/mirrorclick.js',
  'body'
)

customCursor()
backgroundColorFade()
buttonsDrawline()
bookingCart()
