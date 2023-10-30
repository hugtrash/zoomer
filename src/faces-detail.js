import insertScript from './features/insertScript'
import videoPlayer from './features/videoPlayer'
import './styles/videoPlayer.css'

insertScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsstatic@1/cmsstatic.js', 'body', 'async')

videoPlayer()
