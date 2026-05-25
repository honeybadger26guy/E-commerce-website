const products = [
  {
    id: 1,
    slug:"Tooth-brush",
    name: "Bamboo Toothbrush",
    category: "personal-care",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFtYm9vJTIwdG9vdGhicnVzaHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Eco-friendly bamboo tothbrush for sustainable living."
  },
  {
    id: 2,
    slug: "T-shirt",
    name: "Organic T-Shirt",
    category: "fashion",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    description: "Comfortable organic T-Shirt."
  },
  {
    id: 3,
    slug: "Bottle",
    name: "Steel Bottle",
    category: "accessories",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop",
    description: "Reuseable stainless steel water bottle."
  },
  {
    id: 4,
    slug: "Soap",
    name: "Natural Soap",
    category: "personal-care",
    price: 4.99,
    image: "https://plus.unsplash.com/premium_photo-1684471006681-969fce3ae6a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE5hdHVyYWwlMjBzb2FwfGVufDB8fDB8fHww",
    description: "Organic handmade soap with natural ingredients."
  }
]

const storeProducts = document.querySelector("#storeProducts")
const searchInput = document.querySelector("#searchInput")
const categoryFilter = document.querySelector("#categoryFilter")

function displayProducts(items) {
  if(!storeProducts) return
  storeProducts.innerHTML = ""
  items.forEach(product => {
    storeProducts.innerHTML +=`
      <div class="product-card fade-in">
        <a href="product-detail.html?slug=${product.slug}">
          <img src="${product.image}" />
          <div class="product-info">
            <h3>${product.name}</h3>
            <p class="price">
              $${product.price}
            </p>           
          </div>
        </a>
        <div class="product-actions">
          <button onclick="addWishlist(${product.id})">
            💚
          </button>
        </div>
      </div>
    `
  })
}

displayProducts(products)

function filterProducts(){
  const searchValue = searchInput.value.toLowerCase()
  const categoryValue = categoryFilter.value
  const filtered = products.filter(product => {

    const matchesSearch =
      product.name
      .toLowerCase()
      .includes(searchValue)

    const matchesCategory =
      categoryValue === "all" ||
      products.category === categoryValue

      return matchesSearch && matchesCategory
  })

  displayProducts(filtered)
}

if(searchInput) {
  searchInput.addEventListener(
    "keyup", 
    filterProducts
  )
}
if(categoryFilter){
  categoryFilter.addEventListener(
    "change", 
    filterProducts
  )
}