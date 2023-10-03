function backgroundColorFade() {
  // background color fade script
  window.addEventListener('scroll', function () {
    // Selectors
    let window = this,
      body = document.querySelector('.main-wrapper'),
      triggers = document.querySelectorAll(
        '.color-trigger:not(.w-condition-invisible)'
      ) // select .color-trigger but ignore if there is webflow cms driven invisibility present

    triggers.forEach(function (trigger) {
      // Get the data-color-offset value from the trigger element
      var colorOffset = parseFloat(trigger.dataset.colorOffset) || 0 // Default to 0 if not provided

      // Calculate the trigger point as a percentage of the viewport height with the offset
      var triggerPoint = window.innerHeight * (1 - colorOffset / 100)

      // Calculate the trigger's position relative to the viewport
      var triggerPosition =
        trigger.getBoundingClientRect().top +
        trigger.clientHeight -
        window.scrollY

      // Check if the trigger is within the trigger point range
      if (triggerPosition >= 0 && triggerPosition <= triggerPoint) {
        // Remove all classes on body with color-
        body.className = body.className.replace(
          /(^|\s)background-fade-color-\S+/g,
          ''
        )

        // Add class of currently active div
        body.classList.add('background-fade-color-' + trigger.dataset.color)
      }
    })
  })

  // Trigger scroll event to apply initial styles
  window.dispatchEvent(new Event('scroll'))
}

export default backgroundColorFade
