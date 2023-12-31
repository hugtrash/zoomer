function buttonsDrawline() {
  // Select all elements
  var buttons = document.querySelectorAll('.button-drawline')

  buttons.forEach(function (button) {
    // Prüfen, ob das Element bereits ein line-container-Span hat
    var existingLineContainer = button.querySelector('.line-container')

    if (!existingLineContainer) {
      // Speichern Sie den aktuellen Inhalt des .button-drawline-Elements
      var content = Array.from(button.childNodes)

      // Erstellen Sie das <span> Element mit dem angegebenen Code
      var spanElement = document.createElement('span')
      spanElement.className = 'line-container'
      spanElement.innerHTML =
        '<svg viewBox="0 0 300 120"><path class="path" fill="none" stroke="currentColor" stroke-width="4" d="M126.29,10.527c0.427,-0.032 0.84,-0.06 1.239,-0.084c22.685,-1.406 45.884,-0 68.625,-0c2.277,-0 4.492,-0.053 6.667,-0.131c10.822,1.415 21.438,3.326 31.489,5.561c30.615,6.807 43.698,15.978 53.337,44.659c8.756,26.05 -4.108,34.669 -28.346,42.64c-57.526,18.919 -180.763,16.9 -234.014,-12.67c-9.099,-5.053 -17.609,-13.047 -17.609,-23.814c-0,-37.204 90.011,-54.066 118.612,-56.161Z"/></svg>'

      // Löschen Sie alle vorhandenen Inhalte im .button-drawline-Element
      button.innerHTML = ''

      // Fügen Sie die zuvor gespeicherten Inhalte und das <span>-Element in das .button-drawline-Element ein
      content.forEach(function (child) {
        button.appendChild(child)
      })
      button.appendChild(spanElement)

      // check if button is within .video-js and transform to video play button
      if (button.closest('.video-js')) {
        console.log('found a button drawline in video-js')
        spanElement.className = 'line-container circle'
        spanElement.innerHTML =
          '<svg viewBox="0 0 115 115"><path class="path" fill="none" stroke="currentColor" stroke-width="4" d="M112.493,54.162c-0.314,39.071 -23.448,57.012 -52.952,58.264c-35.787,1.518 -53.029,-19.109 -56.415,-49.258c-3.075,-27.384 5.787,-39.786 14.977,-48.083c21.81,-19.695 68.173,-17.201 87.964,14.014c3.382,5.334 6.517,13.755 6.426,25.063Z"/></svg>'
      }
    }
  })
}
export default buttonsDrawline
