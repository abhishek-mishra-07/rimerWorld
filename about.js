const aboutData = {
    introduction: "Introduction",
    title: "Overview",
    content: `I am a man of love and purpose. I love to build stuff (anything in software).<br>
              Reach out for a chat if you like to build stuff or have a bunch of ideas in general.<br>
              I would never say no to an exchange of ideas.<br>
              <a href="https://www.linkedin.com/in/abhishek-harshvardhan-mishra/">LinkedIn 🌐🌐🌐</a><br>
              <a href="https://twitter.com/4evaBehindSOTA">Twitter 🐦🐦🐦</a><br>
              <a href="https://attentiondeficitworld.substack.com">Substack 📰 📰 📰</a>`
  };
  
  const aboutContent = `
    <h3>${aboutData.introduction}</h3>
    <h4>${aboutData.title}</h4>
    <p>${aboutData.content}</p>
  `;
  
  document.getElementById("about-content").innerHTML = aboutContent;
  