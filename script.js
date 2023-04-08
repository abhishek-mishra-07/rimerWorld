document.getElementById("name").innerText = data.name;
document.getElementById("bio").innerText = data.bio;

const blogPosts = data.blogPosts.map(post => {
  return `
    <div class="blog-post">
      <h3><a href="${post.url}" target="_blank">${post.title}</a></h3>
    </div>
  `;
}).join('');
document.getElementById("blog-posts").innerHTML = blogPosts;

const rssFeedURL = "https://attentiondeficitworld.substack.com/feed";
const corsProxy = "https://api.allorigins.win/raw?url=";
fetch(corsProxy + rssFeedURL)
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

// Display services
const servicesItems = document.getElementById("services-items");
services.forEach(service => {
  const serviceItem = `
    <div class="service-item">
      <img src="${service.icon}" alt="${service.title}" />
      <h3>${service.title}</h3>
    </div>
  `;
  servicesItems.innerHTML += serviceItem;
});

// Display technologies
const technologiesItems = document.getElementById("technologies-items");
technologies.forEach(technology => {
  const technologyItem = `
    <div class="technology-item">
      <img src="${technology.icon}" alt="${technology.name}" />
      <h3>${technology.name}</h3>
    </div>
  `;
  technologiesItems.innerHTML += technologyItem;
});

// Display experiences
const experiencesItems = document.getElementById("experiences-items");
experiences.forEach(experience => {
  const experienceItem = `
    <div class="experience-item">
      <img src="${experience.icon}" alt="${experience.title}" />
      <h3>${experience.title}</h3>
      <h4>${experience.company_name}</h4>
      <p>${experience.date}</p>
      <ul>
        ${experience.points.map(point => `<li>${point}</li>`).join("")}
      </ul>
    </div>
  `;
  experiencesItems.innerHTML += experienceItem;
});

// Display projects
const projectsItems = document.getElementById("projects-items");
projects.forEach(project => {
  const projectItem = `
    <div class="project-item">
      <img src="${project.image}" alt="${project.name}" />
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div>
        ${project.tags
          .map(tag => `<span class="tag ${tag.color}">${tag.name}</span>`)
          .join("")}
      </div>
      <a href="${project.source_code_link}" target="_blank">Visit</a>
</div>`;
projectsItems.innerHTML += projectItem;
});
