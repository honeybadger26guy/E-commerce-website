const checkoutForm = document.querySelector("#checkoutForm")
checkoutForm.addEventListener("submit", function(e){
  e.preventDefault()

  const inputs = checkoutForm.querySelectorAll(
    "input"
  )
  const deliveryAddress =checkoutForm.querySelector("#deliveryAddress").value
  const name = inputs[0].value
  const email = inputs[1].value
  const phone = inputs[2].value
  // const address = input.value

  const cart = JSON.parse(
    localStorage.getItem("cart")
  ) || []

  let message = `
    NEW ORDER

    Customer Name: ${name}
    Email: ${email}
    Phone: ${phone}

    Address:
    ${deliveryAddress}

    ORDER ITMES:
  `

  let total = 0
  cart.forEach(item => {
    total += item.price
    message +=`
      - ${item.name} (${item.price})
    `
  })

  message +=`
    Total: $${total.toFixed(2)}
  `

  const whatsappNumber = "2348129162394"
  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappURL, "_blank")
})