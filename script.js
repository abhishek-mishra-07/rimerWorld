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
const rssFeedURL = "https://attentiondeficitworld.substack.com/feed";
fetch(rssFeedURL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(xml => {
    const items = xml.getElementsByTagName("item");
    let blogPosts = "";

    for (let i = 0; i < items.length; i++) {
      const title = items[i].getElementsByTagName("title")[0].textContent;
      const link = items[i].getElementsByTagName("link")[0].textContent;

      blogPosts += `
        <div class="blog-post">
          <h3><a href="${link}" target="_blank">${title}</a></h3>
        </div>
      `;
    }

    document.getElementById("blog-posts").innerHTML = blogPosts;
  });