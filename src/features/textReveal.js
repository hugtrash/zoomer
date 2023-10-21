import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

function textReveal() {
  // Split text into spans
  new SplitType('[text-split]', {
    types: 'words, lines, chars',
    tagName: 'span',
  })

  // Link timelines to scroll position
  function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top bottom',
      onLeaveBack: () => {
        timeline.progress(0)
        timeline.pause()
      },
    })
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 60%',
      onEnter: () => timeline.play(),
    })
  }

  $('[title-reveal]').each(function () {
    const element = $(this)
    let animationDelay = 1 // delay if already in viewport

    const inViewport = isElementInViewport(this)

    const createAnimationWithDelay = (delay) => {
      const tl = gsap.timeline({ paused: true })
      tl.from($(this).find('.char'), {
        yPercent: 115,
        duration: 0.2,
        ease: 'power1.out',
        stagger: { amount: 0.6 },
        delay: delay,
      })
      createScrollTrigger(element, tl)
    }

    if (inViewport) {
      // Element ist im Viewport, mit Verzögerung abspielen
      createAnimationWithDelay(animationDelay)
    } else {
      // Element ist nicht im Viewport, ohne Verzögerung abspielen
      createAnimationWithDelay(0)
    }
  })

  // $('[paragraph-reveal]').each(function (index) {
  //   let tl = gsap.timeline({ paused: true })
  //   tl.from($(this).find('.word'), {
  //     yPercent: 110,
  //     duration: 0.2,
  //     ease: 'power1.out',
  //     stagger: { amount: 0.6 },
  //     delay: index * 0.75,
  //   })
  //   createScrollTrigger($(this), tl)
  // })

  $('[paragraph-reveal]').each(function (index) {
    const element = $(this)
    let animationDelay = (index + 2) * 0.75 // delay if already in viewport

    // Überprüfen, ob das Element im Viewport ist
    const inViewport = isElementInViewport(this)

    // Erstelle die Animation mit oder ohne Verzögerung basierend auf der Viewport-Prüfung
    const createAnimationWithDelay = (delay) => {
      const tl = gsap.timeline({ paused: true })
      tl.from(element.find('.word'), {
        yPercent: 110,
        duration: 0.2,
        ease: 'power1.out',
        stagger: { amount: 0.6 },
        delay: delay,
      })
      createScrollTrigger(element, tl)
    }

    if (inViewport) {
      // Element ist im Viewport, mit Verzögerung abspielen
      createAnimationWithDelay(animationDelay)
    } else {
      // Element ist nicht im Viewport, ohne Verzögerung abspielen
      createAnimationWithDelay(0)
    }
  })

  $('[label-reveal]').each(function (index) {
    const element = $(this)
    let animationDelay = (index + 2) * 0.15 // delay if already in viewport

    // Überprüfen, ob das Element im Viewport ist
    const inViewport = isElementInViewport(this)
    const createAnimationWithDelay = (delay) => {
      const tl = gsap.timeline({ paused: true })
      tl.from($(this).find('.char'), {
        yPercent: 110,
        duration: 0.2,
        ease: 'power1.out',
        stagger: { amount: 0.1 },
        delay: delay,
      })
      createScrollTrigger(element, tl)
    }

    if (inViewport) {
      // Element ist im Viewport, mit Verzögerung abspielen
      createAnimationWithDelay(animationDelay)
    } else {
      // Element ist nicht im Viewport, ohne Verzögerung abspielen
      createAnimationWithDelay(0)
    }
  })

  // Avoid flash of unstyled content
  gsap.set('[text-split]', { opacity: 1 })
}

export default textReveal
