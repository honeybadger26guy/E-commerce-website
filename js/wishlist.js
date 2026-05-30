const wishlistItems = document.querySelector("#wishlistItems")

const wishlist = JSON.parse(
  localStorage.getItem("wishlist")
) || []

function iteming() {

  if (wishlist.length === 0){
    wishlistItems.innerHTML = `
      <h2>No wishlist items yet</h2>
    `
    return
  } 
    wishlistItems.innerHTML = ""
    wishlist.forEach((product, index) => {
      wishlistItems.innerHTML += `
        <div class="product-card fade-in">
          <img src="${product.image}" />
          <div class="product-info">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <button onclick="moveToCart(${product.id})">
              Move to Cart
            </button>
            <button onclick="removeItem(${index})">
              Remove
            </button>
        </div>
      `
    })
}
iteming()

function moveToCart(id){
  let cart = JSON.parse(
    localStorage.getItem("cart")
  ) || []

  const product = wishlist.find(
    item => item.id == id
  )
  cart.push(product)
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  )
  showToast("Moved to Cart")
}
function removeItem(index) {
  wishlist.splice(index, 1)
  localStorage.setItem(
    "wishlist",
    JSON.stringify(wishlist)
  )

  iteming()
  showToast("Item Removed")
}