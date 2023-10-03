function customCursor() {
  // .cursor class needs to have a mouse click interaction applied
  const anchorsAndButtons = document.querySelectorAll('a, button')
  const cursor = document.querySelector('.cursor_dot')

  anchorsAndButtons.forEach((element) => {
    element.addEventListener('mouseenter', function () {
      cursor.click()
    })

    element.addEventListener('mouseleave', function () {
      cursor.click()
    })
  })

  // make sure cursor hides on specific elements like special buttons
  function handleMouseEnter() {
    cursor.style.opacity = 0
  }

  function handleMouseLeave() {
    cursor.style.opacity = 1
  }

  const hideCursorElements = document.querySelectorAll(
    '.button-drawline, .is-video'
  )

  hideCursorElements.forEach((element) => {
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)
  })
}

export default customCursor
