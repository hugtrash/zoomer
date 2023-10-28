import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import './styles/videojs.css'

class CustomPlayButton extends videojs.getComponent('Button') {
  constructor(player, options) {
    super(player, options)

    this.controlText('Play Video')
    this.on('click', this.handleClick)
  }

  createEl() {
    return super.createEl('button', {
      className: 'button-drawline custom-big-play-button',
      innerHTML: 'Play Video',
      title: 'Play Video',
      type: 'button',
    })
  }

  // eslint-disable-next-line no-unused-vars
  handleClick(event) {
    this.player().play()
  }
}

videojs.registerComponent('CustomPlayButton', CustomPlayButton)

const videoContainers = document.querySelectorAll('[data-video-file]')

videoContainers.forEach(function (element, index) {
  const videoFileValue = element.getAttribute('data-video-file')

  if (videoFileValue) {
    var newVideo = document.createElement('video')
    newVideo.className = 'video-js'
    newVideo.controls = true
    newVideo.preload = 'auto'
    newVideo.width = '100%'
    newVideo.height = '100%'
    newVideo.id = 'project-video-' + (index + 1)

    var source = document.createElement('source')
    source.src = videoFileValue
    source.type = 'application/x-mpegURL'

    newVideo.appendChild(source)

    var noJsParagraph = document.createElement('p')
    noJsParagraph.className = 'vjs-no-js'
    noJsParagraph.textContent =
      'To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 Video'

    newVideo.appendChild(noJsParagraph)

    var videoDiv = document.querySelector('.is-video-' + (index + 1))
    videoDiv.appendChild(newVideo)

    var player = videojs('project-video-' + (index + 1), {
      fluid: true,
      controlBar: {
        children: {
          fullscreenToggle: true,
          playToggle: true,
        },
      },
    })

    player.ready(function () {
      player.removeChild('BigPlayButton') // Entferne den Standard-BigPlayButton
      const customPlayButton = new CustomPlayButton(player)
      player.el().appendChild(customPlayButton.el()) // Füge das benutzerdefinierte Steuerelement außerhalb der Steuerleiste hinzu
    })
  }
})

Webflow.require('ix2').init()
