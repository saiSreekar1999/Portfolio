/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sai Sreekar Nelakonda",
  title: "Hi, I'm Sai Sreekar",
  subTitle: emoji(
    "A passionate Data Engineer | Data Analyst | Business Analyst 🚀 Expert in AWS, Azure, PySpark, and SparkSQL for building data pipelines. Proficient in Python and SQL for data analysis and skilled in creating dashboards with Tableau and Power BI. Experienced in developing web and mobile apps using JavaScript, Angular, React, and Node.js."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saiSreekar1999",
  linkedin: "https://www.linkedin.com/in/sai-sreekar-nelakonda/",
  gmail: "nssreekar@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DATA ENTHUSIAST PROFICIENT IN SQL, CLOUD TECHNOLOGIES (AWS, AZURE) WANTS TO BUILD DATA PIPELINES AND SERVE THE CUSTOMERS WITH HIGH QUALITY DATA FOR DATA ANALYSIS AND MACHINE LEARNING TASKS",
  skills: [
    emoji(
      "🚀 Building high-quality data pipelines with PySpark, SparkSQL and cloud technologies to empower data analysis and machine learning"
    ),
    emoji(
      "📊 Performing data analysis and visualization using SQL, Python, Tableau, and Power BI"
    ),

    emoji(
      "💻 Proficient in building dynamic single-page applications using Angular, React, HTML, CSS, JavaScript, and TypeScript"
    )
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PySpark",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "SparkSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-table"
    }, 
    {
      skillName: "Data Analysis",
      fontAwesomeClassname: "fas fa-chart-pie"
    },
    {
      skillName: "ETL",
      fontAwesomeClassname: "fas fa-cogs"
    },   
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California San Diego",
      logo: require("./assets/images/ucsdLogo.png"),
      subHeader: "Master of Science in Business Analytics",
      duration: "August 2023 - June 2024",
      desc: "UCSD Rady Merit Scholarship Awardee",
      descBullets: [
        "Courses: AWS Scalable Analytics, Inferential Statistics, Customer Analytics, Business Intelligence Systems"
      ]
    },
    {
      schoolName: "National Insitute of Technology Calicut",
      logo: require("./assets/images/nitcLogo.png"),
      subHeader: "Bachelor of Science in Electronics and Communication Engineering",
      duration: "June 2016 - June 2020",
      desc: "Achieved top 1 percentile in JEE MAINS entrance test, Ranked top 20% in the program",
      descBullets: ["Courses: Data Structures and Algorithms, Statistics, Principles of Management"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "80%"
    },
    {
      Stack: "Project Management",
      progressPercentage: "75%"
    },
    {
      Stack: "Software Development",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer / Software Engineer",
      company: "Amadeus Software Labs",
      companylogo: require("./assets/images/amadeus.jpeg"),
      date: "August 2020 – June 2023",
      desc: "As a Data Engineer and Software Developer, I have significantly contributed to data-driven solutions and user-centric software enhancements.",
      descBullets: [
        "Engineered an AWS data pipeline processing 50M records, boosting website traffic by 15% and user engagement by 12% using Lambda, S3, RDS (MySQL), and Glue",
        "Developed and tested UI features for Air Canada, including self-reaccommodation of flights and payment system revamp, enhancing user experience"
      ]
    },
    {
      role: "Data Scientist",
      company: "AlphaTrAI",
      companylogo: require("./assets/images/alphaTrAI.jpeg"),
      date: "Mar 2024 – June 2024",
      desc: "At AlphaTrAi, I led a project to enhance Large Language Models (LLMs) for legal analysis, significantly optimizing processes and reducing costs.",
      descBullets: [
        "Developed and fine-tuned an advanced system using Langchain for SEC data summarization and entity extraction",
        "Implemented a graph database integration and taxonomy, reducing client workload by 20% and saving $307,000"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "UC San Diego",
      companylogo: require("./assets/images/ucsdLogo.png"),
      date: "Jan 2024 – June 2024",
      desc: "As a Teaching Assistant at the University of California, San Diego, I played a crucial role in delivering comprehensive educational support, mentoring students, and ensuring a deep understanding of the course material.",
      descBullets: [
        "Led and mentored 100 students, simplifying complex statistical concepts, and covered topics such as Data Basics, Graphing, Measures of Central Tendency, Variability, Z Scores, Sampling Error, Confidence Intervals, and t-tests.",
        "Supported professor and managed educational needs of 200 students, designed and executed lab sessions on JavaScript, Power BI, D3, and data visualization techniques."
      ]
    }
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
  title: "Projects",
  subtitle: "Highlights of my notable projects",
  projects: [
    {
      image: require("./assets/images/uniedge.webp"),
      projectName: "UniEdge",
      projectDesc: "As Co-Founder of UniEdge, I led research, designed the React JS landing page, and developed an AI-powered feature using OpenAI's LLM, along with additional web pages and APIs. I built and optimized a data pipeline with Azure services, ensuring robust data storage and smooth API integration, enhancing user experience and job search support for students.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://uniedge.net/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Architecture_Diagram.jpg"),
      projectName: "Real-Time Stock Market DataProcessing Engine",
      projectDesc: "Realtime stock market data pipeline using Kafka and AWS. Python scripts simulate streaming stock data, ingested by Kafka, then stored in S3. AWS Glue and Athena enable analysis of the live data.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/saiSreekar1999/Real-Time-Stock-Market-Data-Processing-Engine-with-Kafka-Python-and-AWS"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "Renowned Certifications I've Achieved",

  achievementsCards: [
    {
      title: "Advanced SQL",
      subtitle:
        "Earned the Advanced SQL Certification from HackerRank, covering topics such as query optimization, data modeling, indexing, window functions, and pivots in SQL.",
      image: require("./assets/images/hackerrank.png"),
      imageAlt: "SQL Certificate Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.hackerrank.com/certificates/1d6409971024"
        }
      ]
    },
    {
      title: "Microsoft Certified Power BI Data Analyst",
      subtitle:
        "As a Microsoft Certified Power BI Data Analyst Associate, I demonstrate advanced methods and best practices for modeling, visualizing, and analyzing data using Microsoft Power BI, aligning with both business and technical requirements.",
      image: require("./assets/images/powerBI.png"),
      imageAlt: "Microsoft Certified Power BI Data Analyst Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/6ea62e35-74e7-480b-a184-d8fc7885b7d8/public_url"
        }
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
  number: "+1 858-319-9602",
  email_address: "nssreekar@gmail.com"
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
