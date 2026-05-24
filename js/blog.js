const blogs = [
  {
    id: 1,
    slug: "first-Blog",
    title: "10 ways to Live Sustainably",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGV4ZXJjaXNlfGVufDB8fDB8fHww",
    description: "Simple eco-friendly habits you can start today.",
    content: "Living sustainably, means making choices that reduce environmental impact..."
  },
  {
    id: 2,
    slug: "second-Blog",
    title: "Benefits of Organic Products",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1200&auto=format&fit=crop",
    description: "Why organic products are healthier and safer.",
    content: "Organic products are produced without harmful chemicals..."
  },
  {
    id: 3,
    slug: "third-blog",
    title: "Eco-Friendly Home ideas",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop",
    description: "Transform your home into a greener space.",
    content: "There are many ways to create an eco-friendly home..."
  }
]


const blogGrid = document.querySelector("#blogGrid")

if (blogGrid){
  blogs.forEach(blog => {
    blogGrid.innerHTML += `
      <div class="blog-card">
        <img src="${blog.image}" />
        <div class="blog-info">
          <h3>${blog.title}</h3>
          <P>${blog.description}</p>
          <a href="blog-detail.html?slug=${blog.slug}">
            Read More
          </a>
        </div>
      </div>
    `
  })
}