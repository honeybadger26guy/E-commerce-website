const params = new URLSearchParams(
  window.location.search
)
const blogId = params.get("slug")

const blogDetail = document.querySelector("#blogDetail")

const singleBlog = blogs.find(
  item => item.slug == blogId
)

if(singleBlog){
  blogDetail.innerHTML = `
    <div class="blog-detail-content">
      <img 
        src="${singleBlog.image}"
        class="blog-detail-image"
      />
      <h1>${singleBlog.title}</h1>
      <p>${singleBlog.content}</p>

      <!-- Comments -->
      <div class="comments">
        <h2>Comments</h2>
        <form id="commentForm">
          <input 
            type="text"
            placeholder="Your Name"
            required
          />
          <textarea
            placeholder="Write Comment"
            required
          ></textarea>
          <button>
            Post Comment
          </button>
        </form>
        <div id="commentList">
        
        </div>
      </div>
    </div>
  `

  const commentForm = document.querySelector("#commentForm")
  const commentList = document.querySelector("#commentList")

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputs = commentForm.querySelectorAll("input, textarea")

    const name = inputs[0].value
    const comment = inputs[1].value
   
    commentList.innerHTML +=`
      <div class="comment-card">
        <h4>${name}</h4>
        <p>${comment}</p>
      </div>
    `

    commentForm.reset()
  })
}