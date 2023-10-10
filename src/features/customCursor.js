function customCursor() {
  const cursor = document.querySelector('.cursor_dot')
  const container = document.querySelector('body')

  container.addEventListener(
    'mouseenter',
    function (event) {
      const target = event.target
      if (target.matches('a, button')) {
        cursor.click()
      }
    },
    true
  )

  container.addEventListener(
    'mouseleave',
    function (event) {
      const target = event.target
      if (target.matches('a, button')) {
        cursor.click()
      }
    },
    true
  )

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
