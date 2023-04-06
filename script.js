document.getElementById("name").innerText = data.name;
document.getElementById("bio").innerText = data.bio;

const portfolioItems = data.portfolio.map(item => {
  return `
    <div class="portfolio-item">
      <h3><a href="${item.url}" target="_blank">${item.title}</a></h3>
      <p>${item.description}</p>
    </div>
  `;
}).join('');
document.getElementById("portfolio-items").innerHTML = portfolioItems;

const blogPosts = data.blogPosts.map(post => {
    return `
    <div class="blog-post">
    <h3><a href="${post.url}" target="_blank">${post.title}</a></h3>
    </div>
    `;
}).join('');
document.getElementById("blog-posts").innerHTML = blogPosts;