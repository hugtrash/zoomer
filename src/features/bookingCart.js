function bookingCart() {
  // load faces out of localstorage
  let facesInCart = JSON.parse(localStorage.getItem('bookingCart'))

  // if not present, create empty object
  if (!facesInCart) {
    facesInCart = []
  }

  const cartItemsWrapper = document.querySelector('.cart_items-wrapper') // get wrapper of cart items
  const faces = document.querySelectorAll('[data-face="container"]') // get container which holds face data
  const hiddenInput = document.getElementById('Faces') // get hidden input of request form to load the faces Names in
  const startRequestButton = document.querySelector('[data-cart="startrequest-wrapper"]') // get wrapper of start request button

  if (!cartItemsWrapper || !faces || !hiddenInput || !startRequestButton) {
    // Mindestens eines der erforderlichen HTML-Elemente fehlt
    return
  }

  let facesNameString = '' // define faces Names variable

  // Update the cart HTML
  const updateBookingCartHTML = function () {
    localStorage.setItem('bookingCart', JSON.stringify(facesInCart))
    if (facesInCart.length > 0) {
      let result = facesInCart.map((face) => {
        return `
        <div class="cart_item">
          <div class="cart_model-name">${face.name}</div>
          <div class="cart_model-image-wrapper">
            <img src="${face.image}" alt="${face.name} zoomer face social media agentur model" class="cart_model-image">
          </div>
          <a href="#" data-id="${face.id}" class="cart_button-delete w-inline-block">
            <div class="w-embed"><svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="100%"><path fill="currentColor" d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg></div>
            <div class="cart_button-delete-label">löschen</div>
          </a>
        </div>
        `
      })
      cartItemsWrapper.innerHTML = result.join('')
      if (startRequestButton) {
        startRequestButton.classList.remove('hide')
      }
    } else {
      if (startRequestButton) {
        startRequestButton.classList.add('hide')
      }
      cartItemsWrapper.innerHTML =
        '<div class="cart_empty-content"><p class="cart_empty-message">keine Faces auf deiner Liste 🥺</p><a href="/faces" class="cart_empty-link">Faces ansehen</a></div>'
    }
  }

  // Update the form hidden input
  function updateFormInput() {
    // console.log(facesInCart)
    facesNameString = ''

    for (const item of facesInCart) {
      facesNameString += item.name + ', '
    }
    hiddenInput.value = facesNameString
  }

  // update the faces in cart (add them)
  function updateFacesInCart(face) {
    // 2
    for (let i = 0; i < facesInCart.length; i++) {
      if (facesInCart[i].id == face.id) {
        // ------------> give a message if this face is already in cart
        //console.log('face already in cart!')
        return
      }
    }
    // update local storage
    facesInCart.push(face)
    // update other elements
    updateFormInput()
    updateCartCount()
    adjustCartHeight()
  }

  function updateAddToCartIcons() {
    const addToCartIcons = document.querySelectorAll('[data-cart="list-addtocarticon"]')

    addToCartIcons.forEach((starImage) => {
      const faceId = starImage.getAttribute('data-face-id')
      const isFaceInCart = facesInCart.some((face) => face.id === faceId)

      if (isFaceInCart) {
        // if face is in cart, show filled star
        starImage.src =
          'https://uploads-ssl.webflow.com/65099f8772d10e33e4c7d36a/6535dfe23ca73a3760a165cc_icon-bookingcart-active-star-zoomer-agency.svg'
      } else {
        // if not, show regular star
        starImage.src =
          'https://uploads-ssl.webflow.com/65099f8772d10e33e4c7d36a/6525d25a1b7fd93402398e5e_icon-bookingcart-star-zoomer-agency.svg'
      }
    })
  }

  // update the cart count on top right
  function updateCartCount() {
    const cartCountElement = document.querySelector('[data-cart="cartcount"]')
    const cartIcon = document.querySelector('[data-cart="carticon"]')
    const cartCount = facesInCart.length

    cartCountElement.innerHTML = cartCount
    if (cartCount >= 1) {
      cartIcon.style.opacity = '1'
      cartIcon.style.visibility = 'visible'
    } else {
      cartIcon.style.opacity = '0'
      cartIcon.style.visibility = 'hidden'
    }
  }

  // create listeners for add face buttons, load data of faces
  if (faces) {
    faces.forEach((item) => {
      item.addEventListener('click', (e) => {
        if (e.target.matches('[data-face="addFaceButton"]')) {
          const faceID = item.querySelector('[data-face="name"]').innerHTML // use name as ID! Bad practice, but enough for here. Alternatively could use an id on the add button: e.target.dataset.faceId
          const faceName = item.querySelector('[data-face="name"]').innerHTML
          const faceImage = item.querySelector('[data-face="cart-image"]').src
          let face = {
            name: faceName,
            image: faceImage,
            id: faceID,
          }
          updateFacesInCart(face)
          updateBookingCartHTML()
          updateFormInput()
          updateCartCount()
          updateAddToCartIcons()
        }
      })
    })
  }

  // adjust cart height based on amount of faces in cart
  function adjustCartHeight() {
    const cartElement = document.querySelector('.cart_inner-container')
    const cartCount = facesInCart.length
    let height
    if (cartCount === 0) {
      height = 13
    } else {
      height = 10 + cartCount * 3.5 // Berechne die Höhe basierend auf cartCount
    }
    cartElement.style.height = height + 'rem'
  }

  // delete a face from cart
  function deleteFaceFromCart(faceID) {
    // search for index of face to delete
    const indexToRemove = facesInCart.findIndex((face) => face.id === faceID)

    if (indexToRemove !== -1) {
      // if face is founded, delete it and update everything
      facesInCart.splice(indexToRemove, 1)
      updateBookingCartHTML()
      updateFormInput()
      updateCartCount()
      adjustCartHeight()
      updateAddToCartIcons()
    }
  }
  // add listener to all delete buttons
  if (cartItemsWrapper) {
    cartItemsWrapper.addEventListener(
      'click',
      (e) => {
        if (e.target.matches('.cart_button-delete')) {
          const faceID = e.target.dataset.id
          deleteFaceFromCart(faceID)
        }
      },
      true
    )
  }

  // close cart if it's open, but ignore certain elements to not interfere with webflow interactions
  document.body.addEventListener('click', (e) => {
    const cart = document.querySelector('.cart')
    const cartLink = document.querySelector('[data-cart="cartlink"]')
    const addFaceButton = document.querySelector('[data-face="addFaceButton"]')

    const isCartDeleteButton = e.target.classList.contains('cart_button-delete')
    const isAnyCartDeleteButton = Array.from(cart.querySelectorAll('.cart_button-delete')).includes(e.target)

    // only register the click if not within cart, carticon or add button
    if (
      e.type === 'click' &&
      !cart.contains(e.target) &&
      e.target !== cart &&
      e.target !== cartLink &&
      !cartLink.contains(e.target) &&
      e.target !== addFaceButton &&
      !isCartDeleteButton &&
      !isAnyCartDeleteButton
    ) {
      // check for display: none to find out if cart is visible
      const cartStyle = window.getComputedStyle(cart)
      const cartDisplayStyle = cartStyle.getPropertyValue('display')

      if (cartDisplayStyle != 'none') {
        cartLink.click()
      }
    }
  })
  // update everything on inital load
  updateBookingCartHTML()
  updateFormInput()
  updateCartCount()
  adjustCartHeight()
  updateAddToCartIcons()
}

export default bookingCart
