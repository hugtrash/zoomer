function backgroundColorFade() {
  $(window)
    .scroll(function () {
      // Selectors
      let $window = $(window),
        $body = $('.main-wrapper'),
        $trigger = $('.color-trigger:not(.w-condition-invisible)') // don't select element if there is webflow cms driven invisibility present

      $trigger.each(function () {
        let $this = $(this)

        // Get the data-color-offset value from the trigger element
        var colorOffset = parseFloat($this.data('color-offset')) || 0 // Default to 0 if not provided

        // Calculate the trigger point as a percentage of the viewport height with the offset
        var triggerPoint = $window.height() * (1 - colorOffset / 100)

        // Calculate the trigger's position relative to the viewport
        var triggerPosition = $this.offset().top + $this.height() - $window.scrollTop()

        // Check if the trigger is within the trigger point range
        if (triggerPosition >= 0 && triggerPosition <= triggerPoint) {
          // Remove all classes on body with color-
          $body.removeClass(function (index, css) {
            return (css.match(/(^|\s)background-fade-color-\S+/g) || []).join(' ')
          })

          // Add class of currently active div
          $body.addClass('background-fade-color-' + $this.data('color'))
        }
      })
    })
    .scroll()
}

export default backgroundColorFade
