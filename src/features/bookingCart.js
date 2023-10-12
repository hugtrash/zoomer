import { cursor } from './customCursor'

console.log(cursor)

function bookingCart() {
  let facesInCart = JSON.parse(localStorage.getItem('bookingCart'))

  if (!facesInCart) {
    facesInCart = []
  }

  const cartItemsWrapper = document.querySelector('.cart_items-wrapper')
  const faces = document.querySelectorAll('[data-face="container"]')

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
            <div class="w-embed" style="pointer-events: none"><svg xmlns="http://www.w3.org/2000/svg" style="pointer-events:none" height="100%" viewBox="0 -960 960 960" width="100%"><path fill="currentColor" d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg></div>
            <div class="cart_button-delete-label">löschen</div>
          </a>
        </div>
        `
      })
      cartItemsWrapper.innerHTML = result.join('')
      document
        .querySelector('.cart_startrequest-wrapper')
        .classList.remove('hide')
    } else {
      document.querySelector('.cart_startrequest-wrapper').classList.add('hide')
      cartItemsWrapper.innerHTML =
        '<div class="cart_empty-content"><p class="cart_empty-message">keine Faces auf deiner Liste 🥺</p><a href="/faces" class="cart_empty-link">Faces ansehen</a></div>'
    }
  }

  const hiddenInput = document.getElementById('Faces')
  let nameString = ''

  function updateFormInput() {
    console.log(facesInCart)
    nameString = ''

    for (const item of facesInCart) {
      nameString += item.name + ', '
    }
    hiddenInput.value = nameString
  }

  function updateFacesInCart(face) {
    // 2
    for (let i = 0; i < facesInCart.length; i++) {
      if (facesInCart[i].id == face.id) {
        // ------------> give a message if this face is already in cart
        console.log('face already in cart!')
        return
      }
    }
    facesInCart.push(face)
    updateFormInput()
    updateCartCount()
  }

  function updateCartCount() {
    const cartCount = facesInCart.length
    const cartCountElement = document.querySelector('.navbar_cart-count')
    const cartIcon = document.querySelector('.is-cart')

    cartCountElement.innerHTML = cartCount
    if (cartCount >= 1) {
      cartIcon.style.opacity = '1'
      cartIcon.style.visibility = 'visible'
    } else {
      cartIcon.style.opacity = '0'
      cartIcon.style.visibility = 'hidden'
    }
  }

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
      }
    })
  })

  /*function adjustCartHeight() {
    const cartElement = document.querySelector('.cart')
    if (cartCount === 0) {
      cartElement.style.height = '12rem'
    } elseif (cartCount === 1) {
      cartElement.style.height = '15rem'
    } elseif (cartCount === 2) {
      cartElement.style.height = '18rem'
    } elseif (cartCount === 3) {
      cartElement.style.height = '21rem'
    } elseif (cartCount === 4) {
      cartElement.style.height = '24rem'
    } elseif (cartCount === 5) {
      cartElement.style.height = '27rem'
    } else {
      cartElement.style.height = '30rem'
    }
    
  }*/

  function deleteFaceFromCart(faceID) {
    // Durchsuchen des Arrays facesInCart nach dem zu löschenden Gesicht anhand der ID
    const indexToRemove = facesInCart.findIndex((face) => face.id === faceID)

    if (indexToRemove !== -1) {
      // Wenn das Gesicht gefunden wurde, entfernen Sie es aus dem Array
      facesInCart.splice(indexToRemove, 1)
      updateBookingCartHTML()
      updateFormInput()
      updateCartCount()
    }
  }

  // Event-Delegation: Hören Sie auf Klick-Ereignisse im gesamten Cart-Bereich
  cartItemsWrapper.addEventListener(
    'click',
    (e) => {
      if (e.target.matches('.cart_button-delete')) {
        // Überprüfen, ob der geklickte Button die Klasse 'cart_button-delete' hat
        const faceID = e.target.dataset.id
        deleteFaceFromCart(faceID)
        cursor.click()
      }
    },
    true
  )

  updateBookingCartHTML()
  updateFormInput()
  updateCartCount()
}

export default bookingCart
