const cursor = document.querySelector('.cursor_dot')

function customCursor() {
  const cursor = document.querySelector('.cursor_dot')
  const container = document.querySelector('body')
  const affectedElements = 'a, button, input[type="submit"], .button-drawline'

  // add eventListener and delegate event to target elements
  container.addEventListener(
    'mouseenter',
    function (event) {
      const target = event.target
      if (target.matches(affectedElements)) {
        cursor.click()
      }
    },
    true
  )

  container.addEventListener(
    'mouseleave',
    function (event) {
      const target = event.target
      if (target.matches(affectedElements)) {
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
    '.button-drawline, .is-video, input[type="submit"]'
  )

  hideCursorElements.forEach((element) => {
    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)
  })
}

export { cursor }
export default customCursor
