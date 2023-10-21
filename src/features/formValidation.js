let form = $('[data-name="Booking Form"]')

function validateForm() {
  let currentFormStep = $(this).closest('.form-step')
  let allFields = currentFormStep.find('.form_input[required]')
  let button = currentFormStep.find('[data-cart="button"]')
  if (!currentFormStep.length) {
    // Falls kein passendes .form-step-Element gefunden wurde, abbrechen
    return
  }

  let allFieldsValid = true

  allFields.each(function () {
    let field = $(this)

    if (field.val().trim() === '') {
      allFieldsValid = false
      return false // Exit each() loop early if an empty field is found
    }
  })

  if (allFieldsValid) {
    button.removeClass('is-form-inactive')
    console.log('all fields valid')
  } else {
    button.addClass('is-form-inactive')
    console.log('not all fields valid')
  }
}

form.find('.form_input').trigger('focusout')
$('.form_input').on('focusout input', validateForm)

function animateSuccess() {
  form.submit(() => {
    $('.cart_form-success-trigger').click()
  })
}
animateSuccess()

export default validateForm
