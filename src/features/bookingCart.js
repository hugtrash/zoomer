function bookingCart() {

  let modelsInCart = JSON.parse(localStorage.getItem('bookingCart'))

  if (!modelsInCart) {
    modelsInCart = []
  }

  const cartItemsWrapper = document.querySelector('.cart_items-wrapper')


  const updateShoppingCartHTML = function () {
    localStorage.setItem('bookingCart', JSON.stringify(modelsInCart));
    if (modelsInCart.length > 0) {
      let result = modelsInCart.map(model => {
        return `
          <div class="cart_item">
            <div class="cart_model-name">${model.name}</div>
            <div class="cart_model-image-wrapper">
              <img class="cart_model-image" src="${model.image}" />
            <div>
            <a class="cart_button-delete" href="#" data-id=${product.id}>löschen</a>
          </div>
        `
      })
      cartItemsWrapper.innerHTML = result.join('')
      //document.querySelector('.checkout').classList.remove('hidden')
    }
    else {
      //document.querySelector('.checkout').classList.add('hidden')
      cartItemsWrapper.innerHTML = '<p class="cart_empty-message">keine Models auf der Liste</h4>'
    }
  }

  function updateModelsInCart(model) {
    for (let i = 0; i < modelsInCart.length; i++) {
      if (modelsInCart[i].id == model.id) {

        // alert if model is already in cart
        console.log('model already in cart!')

        return
      }
    }
    modelsInCart.push(model)
  }











}

export default bookingCart
