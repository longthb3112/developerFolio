/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 500 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Long Tran",
  title: "Hi all, I'm Long Tran",
  subTitle: emoji(
    "Advanced Software Engineer with over 13 years of experience in full-stack development across the entire SDLC. Skilled in design, analysis, and system planning, with a proven ability to lead teams and implement strategies that improve development efficiency, accuracy, and application performance. Expertise in modern tools and technologies including C#, Java, Angular, React, Node.js, jQuery, Web Forms, .NET Core, ASP.NET MVC Core, ASP.NET Web API, RESTful Services, Sitecore, Spring, Visual Studio Code, Git, Maven, MS SQL, and other frameworks and libraries"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/longthb3112",
  linkedin: "https://www.linkedin.com/in/long-tranhuynhbao/",
  gmail: "long.tranhuynhbao@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
//TODO: Update more from CV
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Design and implement AI-powered Visual Studio extensions and developer tools leveraging OpenAI, Gemini, and Claude to automate unit test generation, accelerate coding workflows, and boost developer productivity"
    ),
    emoji("⚡ Explore and apply emerging AI technologies to enhance software development processes, improve automation, and deliver smarter solutions"),
    emoji(
      "⚡ Develop highly interactive Frontend / User Interfaces with React, TypeScript, Kendo UI, and modern frameworks"
    ),
    emoji(
      "⚡ Create Progressive Web Applications (PWA) and Single Page Applications (SPA) optimized for performance and scalability"
    ),
     emoji(
      "⚡ Build and maintain enterprise-level applications using .NET Framework / .NET Core for healthcare, logistics, and workflow systems"
    ),
       emoji(
      "⚡ Integration of third-party services such as Azure, FedEx, UPS, IronPDF, and prescription monitoring (PDMP) systems"
    ),
      emoji(
      "⚡ Optimize SQL Server stored procedures, functions, and database schemas for performance and reliability"
    ),
     emoji(
      "⚡ Provide end-to-end project support: requirement analysis, solution design, task estimation, implementation, debugging, and deployment"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Maharishi International University",
      logo: require("./assets/images/maharishi_international_university_logo.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "May 2019 - Jun 2021",
      desc: "",
      descBullets: [
       
      ]
    },
    {
      schoolName: "HUFLIT University",
      logo: require("./assets/images/Huflit-logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2006 - September 2010",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "C#/.NET CORE/.NET FRAMEWORK",
      progressPercentage: "90%"
    },
    {
      Stack: "Java/Spring Boot",
      progressPercentage: "80%"
    },
    {
      Stack: "Node.js",
      progressPercentage: "70%"
    },
    {
      Stack: "React",
      progressPercentage: "80%"
    },
     {
      Stack: "Angular",
      progressPercentage: "70%"
    },
    {
      Stack: "Javascript/TypeScript",
      progressPercentage: "70%"
    },
    {
      Stack: "MS SQL Server",
      progressPercentage: "80%"
    },
     {
      Stack: "HTML",
      progressPercentage: "70%"
    },
    {
      Stack: "CSS",
      progressPercentage: "70%"
    },

  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Software Engineer",
      company: "AISHealthcare",
      companylogo: require("./assets/images/AISHealthcare_logo.jpg"),
      date: "June 2021 – Present",
      desc: "A healthcare company committed to advancing quality and improving lives.",
      website : "https://aiscaregroup.com/",
      descBullets: [
        "Developed and maintained the Lynx website, an internal system that supports order workflows, shipping, patients, prescribers, nurses, and more",
        "Maintained and provided support for the PDMP (Prescription Drug Monitoring Program) reporting team"
      ]
    },
    {
      role: "Software Engineer",
      company: "Aperia",
      companylogo: require("./assets/images/Aperia_logo.jpg"),
      date: "July 2020 – Jun 2021",
      website : "https://aperia.com/",
      desc: "A software company committed to solving the complex challenges of the Payment industry.",
      descBullets: [
        "Led multiple teams to develop CRM systems",
        "Implemented and deploy new code/updates to multiple environments",
        "Meeting with client and offshore teams to discuss project progress",
      ]
    },
    {
      role: "Software Engineer",
      company: "Walmart",
      companylogo: require("./assets/images/Walmart_logo.jpg"),
      date: "March 2020 – Jun 2020",
      website: "https://www.walmart.com/",
      desc: "A people-led, tech-powered omnichannel retailer dedicated to helping people save money and live better.",
      descBullets: [
        "Implemented new features and maintained current ABSS (Associate Background Screening System) application",
        "Liaised with customers to gather requirements, design product structures, and provide ongoing support",
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Niteco",
      companylogo: require("./assets/images/niteco_logo.jpg"),
      date: "Jun 2016 – April 2019",
      website: "https://niteco.com/",
      desc: "A digital company creates world-class digital experiences by focusing on the highest standards of technical delivery",
      descBullets: [
        "Built e-commerce website with Episerver platform",
        "Built website with Sitecore 8.2 MVC",
        "Resolved technical issues and conducted code reviews"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "ASW",
      companylogo: require("./assets/images/as_white_global_logo.jpg"),
      date: "Mar 2015 – May 2016",
      website: "https://aswhiteglobal.com/",
      desc: " An Australian company specialising in international staffing solutions",
      descBullets: [
        "Supervised team members, delegated tasks, and supported problem-solving efforts",
        "Designed project structures, estimated resource requirements, and provided customer support",
        "Implemented web APIs to improve performance for payment systems"
      ]
    },
    // {
    //   role: "Software Engineer",
    //   company: "DXC Technology",
    //   companylogo: require("./assets/images/DXC.webp"),
    //   date: "Feb 2012 – Feb 2015",
    //   website: "https://dxc.com/vn/en",
    //   desc: "DXC Technology is a leading global provider of information technology services",
    //   descBullets: [
    //     "Estimated task requirements, delivered assignments on time, and resolved software defects to improve system stability",
    //     "Implemented WCF services for financial reports",
    //     "Built applications and reports"
    //   ]
    // },
    // {
    //   role: "Software Engineer",
    //   company: "Delivery VN",
    //   companylogo: require("./assets/images/deliv_logo.jpg"),
    //   date: "Oct 2010 – Feb 2012",
    //   website: "https://www.deliv.co.jp/",
    //   desc: "A japanese company helps consulting services combine strategy formulation, system delivery, and in-house support to transform companies' business models and develop new services",
    //   descBullets: [
    //     "Implemented recruiting website with ASP .NET Web Forms using three-layer design pattern",
    //     "Supported testing and troubleshooting for improved performance and accuracy",
    //   ]
    // },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Azure Developer Associate",
      subtitle:
        "Build end-to-end solutions in Microsoft Azure to create Azure Functions, implement and manage web apps, develop solutions utilizing Azure storage, and more",
      image: require("./assets/images/azure-developer-associate.png"),
      imageAlt: "Azure Developer Associate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/?practice-assessment-type=certification"
        },
      ]
    },
    {
      title: "Sitecore Developer",
      subtitle:
        "developing and updating a business's Sitecore experience platform and content management system",
      image: require("./assets/images/sitecore.jpg"),
      imageAlt: "Sitecore Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.sitecore.com/"
        }
      ]
    },

    {
      title: "Microsoft Sharepoint developer 2010",
      subtitle: "designs, develops, and customizes Microsoft SharePoint solutions, using programming languages like C# and JavaScript to build custom web parts, workflows, and applications",
      image: require("./assets/images/sharepoint.png"),
      imageAlt: "Sharepoint Logo",
      footerLink: [
        {name: "Certification", 
        url: "https://support.microsoft.com/en-us/office/what-is-sharepoint-97b915e6-651b-43b2-827d-fb25777f446f"},
       
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "long.tranhuynhbao@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
