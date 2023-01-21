// Declare variables
const billInput = document.getElementById('bill')
const tipInput = document.getElementById('tip')
const calcButton = document.getElementById('calculate')
const total = document.getElementById('total')
const totalWrapper = document.getElementById('total-wrapper')

// Deactivate button if values are invalid
billInput.addEventListener('keypress', (e) => {
  let keyPressed = e.key;
  ( !isFinite(keyPressed) ) ? calcButton.setAttribute( 'disabled', '' ) : calcButton.removeAttribute('disabled')
})

// Calculate
calcButton.addEventListener('click', (e) => {

  e.preventDefault()
  
  const billAmount = billInput.value
  const tipAmount = tipInput.value
  const totalAmount = (billAmount * tipAmount).toFixed(2)

  totalWrapper.style.display = ''
  total.textContent = totalAmount

})