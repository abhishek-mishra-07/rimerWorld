const data = {
    "name": "Abhishek Harshvardhan Mishra",
    "bio": `I am a man of love and purpose. I love to build stuff (anything in software).
    Reach out for a chat if you like to build stuff or have a bunch of ideas in general.
    I would never say no to an exchange of ideas. I am also not a UI/UX guy and this website is vanilla HTML/CSS/JS`,
    "blogPosts": [
      {
        "title": "My first blog post",
        "url": "https://your-substack-url.com/p/my-first-blog-post"
      },
      {
        "title": "Another blog post",
        "url": "https://your-substack-url.com/p/another-blog-post"
      }
    ]
  };
  const services = [
    {
      title: "Poetry/writing/blogging",
      icon: "assets/web.png",
    },
    {
      title: "Build apps to solve problems",
      icon: "assets/mobile.png",
    },
    {
      title: "Research Natural Language Processing",
      icon: "assets/backend.png",
    },
    {
      title: "Build mental models",
      icon: "assets/creator.png",
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: "assets/html.svg",
    },
    {
      name: "CSS 3",
      icon: "assets/css.svg",
    },
    {
      name: "JavaScript",
      icon: "assets/javascript.svg",
    },
    {
      name: "git",
      icon: "assets/git.svg",
    },
  ];  
  const experiences = [
    {
      title: "Firmware Integration Tool",
      company_name: "Intel Technologies Pvt. Ltd.",
      icon: "assets/intel.png",
      iconBg: "#E6DEDD",
      date: "Deployed, Dec 2020 - Current",
      points: [
        "Integrated individual firmware payloads submitted by stakeholders into a single entity called the IFWI (Integrated Firmware Image).",
        "Enabled full customization of IFWI to support multiple release flavors and debugging.",
      ],
    },
    {
      title: "Change-based Validation Tool",
      company_name: "Intel Technologies Pvt. Ltd.",
      icon: "assets/intel.png",
      iconBg: "#E6DEDD",
      date: "Deployed, Sep 2020 - Current",
      points: [
        "Utilized natural language processing to parse all BIOS changes going inside the tool and identified features that may be impacted by the changes.",
        "Mapped features to test cases which can be run to capture any possible new bugs.",
      ],
    },
    {
      title: "Left-shift Feature Coverage Enhancement Tool",
      company_name: "Intel Technologies Pvt. Ltd.",
      icon: "assets/intel.png",
      iconBg: "#E6DEDD",
      date: "POC, Jan 2022",
      points: [
        "Identified possible feature coverage gaps in current program.",
        "Consumed previous generation data on internal and external escapes and covered features, and compared it to current coverage to identify any possible enhancements.",
      ],
    },
    {
      title: "HERO - Hierarchy Extraction Recommendation Optimiser",
      company_name: "Intel Technologies Pvt. Ltd.",
      icon: "assets/intel.png",
      iconBg: "#E6DEDD",
      date: "POC, Jan 2020",
      points: [
        "Developed a tool to help recommend existing test cases for reference during new test content development.",
        "Implemented a recommendation system based on identifying the correct category for a given requirement document using hierarchical classification.",
      ],
    },
    {
      title: "DuET - Domain Upgrade and Enhancement Tool",
      company_name: "Intel Technologies Pvt. Ltd.",
      icon: "assets/intel.png",
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Present",
      points: [
        "DuET tool compares the bugs and test cases info and identifies the best strategy on development of test cases and allocation of resources to maximize bug capture per dollar of expenditure.",
      ],
    },
    {
      title: "ARVA - AI-based Requirements Validation Assistant",
      company_name: "Intel Technologies Pvt. Ltd.",
      icon: "assets/intel.png",
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "In SW development life cycle, a significant number of requirements or bugs can be produced for a major program often ranging above 5000.",
        "ARVA identifies each requirement or bug that can be testable and recommends existing test cases or bugs that might be useful in developing test cases for the requirements.",
      ],
    },
  ];
  const projects = [
    {
      name: "Bhagavad Gita GPT",
      description:
        "Ask questions about life and philosophy from the wisdom of Bhagavad Gita.",
      tags: [
        {
          name: "GPT",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI",
          color: "green-text-gradient",
        },
        {
          name: "Streamlit",
          color: "pink-text-gradient",
        },
      ],
      image: "assets/gita.png",
      source_code_link: "https://github.com/abhishek-mishra-07/bhagvad_gita_gpt",
    },
    {
      name: "Attention-Deficit World",
      description:
        "I am Abhishek, an adult ADD guy who finds himself distracted and stimulated more than ever. I start and end projects on a whim. This blog/newsletter is me sharing what I find fascinating or informative regularly",
      tags: [
        {
          name: "Substack",
          color: "blue-text-gradient",
        },
        {
          name: "ADD",
          color: "green-text-gradient",
        },
      ],
      image: "assets/attention_deficit_world.png",
      source_code_link: "https://attentiondeficitworld.substack.com/",
    },
  ];
    
  