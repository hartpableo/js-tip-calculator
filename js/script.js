// Declare variables
const billInput = document.getElementById('bill')
const tipInput = document.getElementById('tip')
const calcButton = document.getElementById('calculate')
const total = document.getElementById('total')
const totalWrapper = document.getElementById('total-wrapper')
const tip = document.getElementById('tip-amount')

// Deactivate button if values are invalid
billInput.addEventListener('keypress', (e) => {
  let keyPressed = e.key;
  ( !isFinite(keyPressed) ) ? calcButton.setAttribute( 'disabled', '' ) : calcButton.removeAttribute('disabled')
})

// Calculate the tip and show total amount to pay
calcButton.addEventListener('click', (e) => {

  e.preventDefault()
  
  const billAmount = billInput.value
  const tipAmount = tipInput.value
  const totalTip = (billAmount * tipAmount).toFixed(2)

  tip.textContent = totalTip
  
  const totalToPay = (Number(billAmount) + Number(totalTip)).toFixed(2)

  totalWrapper.style.display = ''
  total.textContent = totalToPay

})