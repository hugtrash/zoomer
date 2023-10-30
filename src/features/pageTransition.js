function pageTransition() {
  let transitionTrigger = $('.transition_trigger')
  let introDurationMS = 1000
  let exitDurationMS = 1150
  let excludedClass = 'no-transition'
  let excludePage = document.body.classList.contains(excludedClass)
  //let transitionContainer = document.querySelector('.transition')

  // On Page Load
  if (transitionTrigger.length > 0 && !excludePage) {
    transitionTrigger.click()
    $('body').addClass('no-scroll-transition')
    setTimeout(() => {
      $('body').removeClass('no-scroll-transition')
    }, introDurationMS)
  } else if (excludePage) {
    // console.log('is excluded page')
    // transitionContainer.style.display = 'none'
  }
  // On Link Click
  $('a').on('click', function (e) {
    if (
      $(this).prop('hostname') == window.location.host &&
      $(this).attr('href').indexOf('#') === -1 &&
      !$(this).hasClass(excludedClass) &&
      $(this).attr('target') !== '_blank' &&
      transitionTrigger.length > 0
    ) {
      e.preventDefault()
      $('body').addClass('no-scroll-transition')
      let transitionURL = $(this).attr('href')
      transitionTrigger.click()
      setTimeout(function () {
        window.location = transitionURL
      }, exitDurationMS)
    }
  })
  // On Back Button Tap
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload()
    }
  }
  // Hide Transition on Window Width Resize
  setTimeout(() => {
    $(window).on('resize', function () {
      setTimeout(() => {
        $('.transition').css('display', 'none')
      }, 50)
    })
  }, introDurationMS)
}

export default pageTransition
