import videojs from 'video.js' // eslint-disable-line no-unused-vars
import 'video.js/dist/video-js.min.css'
import './styles/videojs.css'

// Alle Elemente mit dem Attribut 'data-video-file'
const videoContainers = document.querySelectorAll('[data-video-file]')

// Iteriere durch jedes Element und überprüfe, ob das Attribut einen Wert hat oder nicht
videoContainers.forEach(function (element, index) {
  const videoFileValue = element.getAttribute('data-video-file')

  if (videoFileValue) {
    // Erstelle ein neues Video-Element
    var newVideo = document.createElement('video')
    newVideo.className = 'video-js'
    newVideo.controls = true
    newVideo.preload = 'auto'
    newVideo.width = '100%'
    newVideo.height = '100%'
    newVideo.id = 'project-video-' + (index + 1) // ID für das Video

    // Erstelle eine neue Videoquelle und setze den Wert aus dem data-video-file Attribut
    var source = document.createElement('source')
    source.src = videoFileValue
    source.type = 'application/x-mpegURL'

    // Füge die Videoquelle zum Video-Element hinzu
    newVideo.appendChild(source)

    // Erstelle einen Absatz für den Fall, dass JavaScript deaktiviert ist
    var noJsParagraph = document.createElement('p')
    noJsParagraph.className = 'vjs-no-js'
    noJsParagraph.textContent =
      'To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 Video'

    // Füge den Absatz zum Video-Element hinzu
    newVideo.appendChild(noJsParagraph)

    // Finde das DIV mit der entsprechenden Klasse und füge das Video-Element hinzu
    var videoDiv = document.querySelector('.is-video-' + (index + 1))
    videoDiv.appendChild(newVideo)

    // instanziere den player
    // eslint-disable-next-line no-unused-vars
    var player = videojs('project-video-' + (index + 1), {
      fluid: true,
      controlBar: {
        children: {
          fullscreenToggle: true,
          playToggle: true,
        },
      },
    })
  }
})

// reload interactions
Webflow.require('ix2').init()
