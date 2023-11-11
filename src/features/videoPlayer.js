import videojs from 'video.js/dist/video.min.js'
import 'video.js/dist/video-js.min.css'

import buttonsDrawline from './buttonsDrawline'

function videoPlayer() {
  class CustomPlayButton extends videojs.getComponent('Button') {
    constructor(player, options) {
      super(player, options)

      //this.controlText('Play Video')
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

  videoContainers.forEach(function (videoWrapper, index) {
    const videoFileValue = videoWrapper.getAttribute('data-video-file')
    const aspectRatio = videoWrapper.getAttribute('data-video-ratio')
    let videoPosterValue
    if (videoWrapper.querySelector('img')) {
      videoPosterValue = videoWrapper.querySelector('.video-wrapper_poster-placeholder').getAttribute('src')
    }

    if (videoFileValue) {
      var videoElement = document.createElement('video')
      videoElement.className = 'video-js'
      videoElement.controls = true
      videoElement.preload = 'auto'
      videoElement.width = '100%'
      videoElement.height = '100%'
      videoElement.id = 'video-' + (index + 1)

      var source = document.createElement('source')
      source.src = videoFileValue
      source.type = 'application/x-mpegURL'

      videoElement.appendChild(source)

      var noJsParagraph = document.createElement('p')
      noJsParagraph.className = 'vjs-no-js'
      noJsParagraph.textContent =
        'To view this video please enable JavaScript, and consider upgrading to a web browser that supports HTML5 Video'

      videoElement.appendChild(noJsParagraph)

      videoWrapper.appendChild(videoElement)

      var player = videojs('video-' + (index + 1), {
        fluid: true,
        controlBar: {
          children: {
            fullscreenToggle: true,
            playToggle: true,
          },
        },
        aspectRatio: aspectRatio,
        poster: videoPosterValue,
      })

      player.ready(function () {
        player.removeChild('BigPlayButton') // Entferne den Standard-BigPlayButton
        const customPlayButton = new CustomPlayButton(player)
        player.el().appendChild(customPlayButton.el()) // Füge das benutzerdefinierte Steuerelement außerhalb der Steuerleiste hinzu
        buttonsDrawline()
      })
    }
  })
}

export default videoPlayer
