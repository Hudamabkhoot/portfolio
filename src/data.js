import Dinopedia from "./assets/dino.jpg";
import Weather from "./assets/weather.jpg";
import Quizzical from "./assets/quizzical.jpg";
import Pocketlist from "./assets/Pocketlist.jpg";
import VanLife from "./assets/VanLife.jpg";
import LinkedinFooter from "./assets/linkedin-footer.svg";
import GithubFooter from "./assets/github-footer.svg";
import LinkedinHome from "./assets/linkedin.png";
import GithubHome from "./assets/github.png";
import ResumeHome from "./assets/cv.svg";


export const ProjectsData = [
    {
        "title": "Dinopedia",
        "description": "Dinopedia is a responsive web application designed to compile fascinating facts about dinosaurs sourced from the collections of London’s Natural History Museum. The main technologies used in the production are React, TypeScript, React Router and React Charts. Developed by a team of six people from different countries, including two designers and four developers as a learning project for Chingu Voyage 48.",
        "live": "https://v48-dinopedia.netlify.app/",
        "github": "https://github.com/chingu-voyages/v48-tier2-team-12",
        "tools": ["React", "React Router", "React Charts", "TypeScript", "API","Figma"],
        "image": Dinopedia,
        "id": 1,
    },
    {
        "title": "Van Life",
        "description": "Van Life is a user-friendly web application revolutionizing van rentals for road trips. Developed with React and React Router, it offers seamless navigation and intuitive functionality. Users can manage rentals, leave reviews, and update profiles effortlessly. With a focus on efficiency and reliability, Van Life ensures a smooth and personalized experience for adventurous travelers.",
        "live": "https://van-life-adventures.netlify.app/",
        "github": "https://github.com/Hudamabkhoot/Van-life",
        "tools": ["React", "React Router", "Firebase", "Redux", "React Charts", "JavaScrip", "Figma"],
        "image": VanLife,
        "id": 2,
    },
    {
        "title": "Weather App",
        "description": "The Weather App is a web application that provides users with real-time weather information for various locations. With a user-friendly interface and intuitive design, users can easily access current weather conditions, hourly forecasts, and daily forecasts.",
        "live": "https://weather-app-mab.netlify.app/",
        "github": "https://github.com/Hudamabkhoot/weather-app",
        "tools": [ "React", "TypeScript", "API", "Redux", "Framer Motion", "Axios"],
        "image": Weather,
        "id": 3,
    },
    {
        "title": "Pocket List",
        "description": "Pocket List is a Todo Application built with React.js, Redux, and Framer Motion. It offers complete CRUD functionality, allowing users to create, read, update, and delete tasks. With a focus on simplicity and usability, the application features dynamic animations powered by Framer Motion, enhancing the user experience.",
        "live": "https://pocketlist-todo.netlify.app/",
        "github": "https://github.com/Hudamabkhoot/Pocket-List",
        "tools": [ "React", "JavaScrip", "Redux", "Framer Motion", "SCSS", "Axios"],
        "image": Pocketlist,
        "id": 4,
    },
    {
        "title": "Quizzical",
        "description": "Quiz Web App that access trivia questions from the Open Trivia Database API and score players based on their answers. Game options like amount of questions and category are available for the player to change. For questions answered correctly, visual cues highlight the correct responses, reinforcing the player's success.",
        "live": "https://quizzical-scrimba-app.netlify.app/",
        "github": "https://github.com/Hudamabkhoot/quizzical",
        "tools": [ "React", "JavaScrip", "API","Figma"],
        "image": Quizzical,
        "id": 5,
    }
]

export const skills = ['React', 'React Router', 'Firebase', 'Redux', 'Charts.js', 'JavaScript', 'TypeScript', 'CSS Modules', 'React Hot Toast', 'API Integration', 'Figma'];
export const iconsFooter = [
    { icon: LinkedinFooter, link: 'https://www.linkedin.com/in/huda-mabkhoot/' },
    { icon: GithubFooter, link: 'https://github.com/hudamabkhoot/' },
  ];

  export const iconsHome = [
    { icon: LinkedinHome, link: 'https://www.linkedin.com/in/huda-mabkhoot/' },
    { icon: GithubHome, link: 'https://github.com/hudamabkhoot/' },
    { icon: ResumeHome, link: 'https://drive.google.com/file/d/1GnnNXUOej_GrpFAfygeV86OVI4Dnu_ax/view?usp=sharing' },
  ];  
export default {ProjectsData};