// alert("GreenMart Loader");
// const title = "How to Learn JavaScript Fast"

// const slug = title
//   .toLowerCase()
//   .trim()
//   .replace(/\s+/g, "-")

//   console.log(slug, title)
function updateCartCount() {
  const cartCount = document.querySelector("#cartCount")

  const cart = JSON.parse(
    localStorage.getItem("cart")
  ) || []
  if(cartCount){
    cartCount.innerHTML = cart.length
  }
}
updateCartCount()