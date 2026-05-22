const products = [
  {
    id: 1,
    name: "Bamboo Toothbrush",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1589365252845-092198ba5334?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFtYm9vJTIwdG9vdGhicnVzaHxlbnwwfHwwfHx8MA%3D%3D",
    description: "Eco-friendly bamboo tothbrush for sustainable living."
  },
  {
    id: 2,
    name: "Organic T-Shirt",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    description: "Comfortable organic T-Shirt."
  },
  {
    id: 3,
    name: "Steel Bottle",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop",
    description: "Reuseable stainless steel water bottle."
  },
  {
    id: 4,
    name: "Natural Soap",
    price: 4.99,
    image: "https://plus.unsplash.com/premium_photo-1684471006681-969fce3ae6a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE5hdHVyYWwlMjBzb2FwfGVufDB8fDB8fHww",
    description: "Organic handmade soap with natural ingredients."
  }
]

const storeProducts = document.querySelector("#storeProducts")

if(storeProducts){
  products.forEach(product => {
    storeProducts.innerHTML += `
      <div class="product-card">
        <img src="${product.image}" />
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="price">
            $${product.price}
          </p>

          <a href="product-detail.html?id=${product.id}">
            <button>
              View Product
            </button>
          </a>
        </div>
      </div>
    `
  })
}
