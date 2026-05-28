const params = new URLSearchParams(window.location.search)
const productSlug = params.get("slug")
const productDetail = document.querySelector("#productDetail")
const singleProduct = products.find(
  item => item.slug == productSlug
)
const addToCarts = document.querySelector("#addToCarts")



if(singleProduct){
 
  productDetail.innerHTML = `
    <div class="product-detail-grid">
      <div>
        <img
          src="${singleProduct.image}"
          class="detail-image" 
        />
      </div>
      <div>
        <h2>${singleProduct.name}</h2>
        <h2 class="price">
          $${singleProduct.price}
        </h2>
        <p>
          ${singleProduct.description}
        </p>
        <button onclick="addToCart(${singleProduct.id})">
          Add To Cart
        </button>
      </div>
    </div>
  `
} 

let product;
function addToCart(id){
  let cart = JSON.parse(
    localStorage.getItem("cart")
  ) || []
  const product = products.find(
    item => item.id == id
  )
  cart.push(product)
  
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  )
  
  showToast("Product added to cart")
  // alert("Product added to cart")
  updateCartCount()
}