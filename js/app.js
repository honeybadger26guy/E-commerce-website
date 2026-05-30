// alert("GreenMart Loader");
// const title = "How to Learn JavaScript Fast"

// const slug = title
//   .toLowerCase()
//   .trim()
//   .replace(/\s+/g, "-")

//   console.log(slug, title)

const menuToggle = document.querySelector(".menu-toggle")
const navLinks = document.querySelector(".nav-links")
const cartCount = document.querySelector("#cartCount")

if(menuToggle){
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active")
  })
}


function updateCartCount() {

  const cart = JSON.parse(
    localStorage.getItem("cart")
  ) || []
  if(cartCount){
    cartCount.innerHTML = cart.length
  }
}
updateCartCount()

const darkModeToogle = document.querySelector("#darkModeToggle")

if(localStorage.getItem("darkMode") === "enabled"){
  document.body.classList.add("dark-mode")
}
if(darkModeToogle){
  darkModeToogle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    
    if(document.body.classList.contains("dark-mode")){
      localStorage.setItem("darkMode", "enabled")
    } else {
      localStorage.removeItem("darkMode")
    }
  })
}

function showToast(message) {
  const toast = document.querySelector("#toast")
  toast.innerHTML = message
  toast.classList.add("show-toast")
  setTimeout(() => {
    toast.classList.remove("show-toast")
  }, 3000)
}

const loginForm = document.querySelector("#loginForm")

if(loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    showToast("Login successful")
    setTimeout(() => {
      window.location.href = "index.html"
    }, 1500);
  })
}

const registerForm = document.querySelector("#registerForm")

if(registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault()
    showToast("Registration successful")
    setTimeout(() => {
      window.location.href = "login.html"
    }, 1500);
  })
}