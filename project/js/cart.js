const cartItems = document.querySelector("#cartItems")
const cartTotal = document.querySelector("#cartTotal")

let cart = JSON.parse(
  localStorage.getItem("cart")
) || []

function displayCart() {
  if(cart.length === 0) {
    cartItems.innerHTML =`
      <h2>Your Cart is empty</h2>
    `
    cartTotal.innerHTML =`
      Total: $0
    `

    return
  }
  let total = 0
  cartItems.innerHTML = ""
  cart.forEach((item, index) => {
    total += item.price 
    cartItems.innerHTML += `
      <div class="cart-card">
        <img src="${item.image}" />
        <div class="cart-info">
          <h3>${item.name}</h3>
          <p>$${item.price}</p>
          <button onclick="removeItem(${index})">
            Remove
          </button>
        </div>
      </div>
    `
  })

cartTotal.innerHTML = `
  Total: $${total.toFixed(2)}
`  
}
displayCart()

function removeItem(index) {
  cart.splice(index, 1)
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  )

  displayCart()
}