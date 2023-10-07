function facesFilterActive() {
  // Funktion um beim laden checked zu prüfen und nötigenfalls active zu setzen
  var radioButtons = document.querySelectorAll(
    'input[data-name="Faces Filter"]'
  )
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      var label = radioButtons[i].closest('label')
      label.classList.add('active')
    }
  }

  // Funktion, um die "active" Klasse beim Klicken auf ein Label zu aktualisieren
  var labels = document.querySelectorAll('label')
  for (var j = 0; j < labels.length; j++) {
    labels[j].addEventListener('click', function () {
      for (var k = 0; k < labels.length; k++) {
        labels[k].classList.remove('active')
      }
      this.classList.add('active')
    })
  }
}

export default facesFilterActive
