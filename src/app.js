const form = document.getElementById('order-form');
const input = document.getElementById('order-input');
const orderBtn = document.getElementById('order-btn');

const screenOrder = document.getElementById('screen-order');
const screenConfirm = document.getElementById('screen-confirm');

const orderMsg = document.getElementById('order-msg');
const orderValue = document.getElementById('order-value');

const backBtn = document.getElementById('back-btn');
const newOrderBtn = document.getElementById('new-order-btn');

const name = document.getElementById('your-name')

function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

input.addEventListener('input', () => {
  const hasText = input.value.trim().length > 0
  orderBtn.disabled = !hasText

})

function showScreen(idToShow) {
  screenOrder.hidden = idToShow !== 'order';
  screenConfirm.hidden = idToShow !== 'confirm';
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const value = input.value.trim()
  const capValue = capitalizeFirst(value)

  if(!value) {
    orderMsg.textContent = 'Please enter your name'
    return 
  }
  name.textContent = `Welcome ${capValue}!`

  showScreen('confirm')
})

backBtn.addEventListener('click', () => {
  showScreen('order')
  input.focus()
})

newOrderBtn.addEventListener('click', () => {
  showScreen('order')
  orderMsg.textContent = ''
  orderBtn.disable = true
  input.value = ''
  input.focus()
})
