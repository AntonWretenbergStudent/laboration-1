const btn = document.getElementById('btn')
const input = document.getElementById('input')
const order = document.getElementById('complet')
const container = document.getElementById('container')
const oScreen = document.getElementById('order-screen')

btn.addEventListener('click', () => {
  order.textContent = 'hahahaahh'
  order.style.color = 'white'
  container.hidden = true
  oScreen.hidden = false
})

