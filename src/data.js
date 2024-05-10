import Dinopedia from "./assets/dino.jpg";
import Weather from "./assets/weather.jpg";
import Quizzical from "./assets/quizzical.jpg";
import OnTrack from "./assets/ontrack.jpg";
import Pocketlist from "./assets/Pocketlist.jpg";
import PersonalDashboard from "./assets/dashboard.jpg";
import MoDB from "./assets/modb.jpg";
import iLingual from "./assets/iLingual.jpg";
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
        "title": "Weather App",
        "description": "The Weather App is a web application that provides users with real-time weather information for various locations. With a user-friendly interface and intuitive design, users can easily access current weather conditions, hourly forecasts, and daily forecasts.",
        "live": "https://weather-app-mab.netlify.app/",
        "github": "https://github.com/Hudamabkhoot/weather-app",
        "tools": [ "React", "TypeScript", "API", "Redux", "Framer Motion", "Axios"],
        "image": Weather,
        "id": 2,
    },
    {
        "title": "Pocket List",
        "description": "Pocket List is a Todo Application built with React.js, Redux, and Framer Motion. It offers complete CRUD functionality, allowing users to create, read, update, and delete tasks. With a focus on simplicity and usability, the application features dynamic animations powered by Framer Motion, enhancing the user experience.",
        "live": "https://pocketlist-todo.netlify.app/",
        "github": "https://github.com/Hudamabkhoot/Pocket-List",
        "tools": [ "React", "JavaScrip", "Redux", "Framer Motion", "SCSS", "Axios"],
        "image": Pocketlist,
        "id": 3,
    },
    {
        "title": "Quizzical",
        "description": "Quiz Web App that access trivia questions from the Open Trivia Database API and score players based on their answers. Game options like amount of questions and category are available for the player to change. For questions answered correctly, visual cues highlight the correct responses, reinforcing the player's success.",
        "live": "https://quizzical-scrimba-app.netlify.app/",
        "github": "https://github.com/Hudamabkhoot/quizzical",
        "tools": [ "React", "JavaScrip", "API","Figma"],
        "image": Quizzical,
        "id": 4,
    }
    ,{
        "title": "On Track",
        "description": "On Track is a daily task productivity tool designed to help individuals organize and manage their tasks effectively on a day-to-day basis. It effortlessly organizes tasks from provided JSON files into customizable categories and activity types. It automates the generation of personalized daily checklists and utilizes local storage for persistent data.",
        "live": "https://github.com/chingu-voyages/v47-tier1-team-02",
        "github": "https://chingu-voyages.github.io/v47-tier1-team-02/",
        "tools": [ "JavaScrip", "css", "html", "Figma"],
        "image": OnTrack,
        "id": 5,
    },
    {
        "title": "Chrome extension",
        "description": "This is a personal dashboard chrome extension that provides a user-friendly interface for displaying various information. It utilizes the Unsplash API to fetch random background images, Google API for book search functionality, OpenWeather API to display weather information based on the user's location, and the Ninjas API for fetching random jokes.",
        "github": "https://github.com/Hudamabkhoot/Personal-dashboard",
        "tools": [ "JavaScrip", "css", "html", "API", "Figma"],
        "image": PersonalDashboard,
        "id": 6,
    },
    {
        "title": "MoDB",
        "description": "MoDB is a web application that allows the user to search for movies and add them to their watchlist. It utilizes the OMDb API to fetch movie data and provides a user-friendly interface for searching and managing movies.",
        "live": "https://modbwatchlist.netlify.app/",
        "github": "https://github.com/Hudamabkhoot/MoDB",
        "tools": [ "JavaScrip", "css", "html", "API", "Figma"],
        "image": MoDB,
        "id": 7,
    },
    ,{
        "title": "iLingual",
        "description": "iLingual is a responsive language learning site crafted with a 'mobile-first' approach, a project developed as part of the Scrimba Front-End Career Path. Seamlessly adapt to various screen sizes, from mobile phones to desktops.",
        "live": "https://ilingual.netlify.app/",
        "github": "https://github.com/Hudamabkhoot/iLingual",
        "tools": [ "css", "html", "Figma" ],
        "image": iLingual,
        "id": 8,
    }
]

export const skills = ['React', 'Redux', 'API Integration', 'JavaScrip', 'TypeScript', 'CSS/SCSS', 'Figma']

export const iconsFooter = [
    { icon: LinkedinFooter, link: 'https://www.linkedin.com/in/huda-mabkhoot/' },
    { icon: GithubFooter, link: 'https://github.com/hudamabkhoot/' },
  ];

  export const iconsHome = [
    { icon: LinkedinHome, link: 'https://www.linkedin.com/in/huda-mabkhoot/' },
    { icon: GithubHome, link: 'https://github.com/hudamabkhoot/' },
    { icon: ResumeHome, link: 'https://drive.google.com/file/d/1N4JkapgtpzrJEQnXzi1GOpDG56JdfE4n/view' },
  ];  
export default {ProjectsData};