import React from 'react';
import { Tab } from 'semantic-ui-react';
import Projects from './Project';
import trimfitImage from '../images/trimfit.png';
import burgerimage from '../images/eatburger.png';
import estheteimg from '../images/Esthete.PNG';
import weatherImage from '../images/weatherApp.PNG';
import empdirectoryImage from '../images/empdirectory.png'
import budgettrackerImage from '../images/budgettrackerImage.png';
import gardencroft from '../images/gardencroft.PNG';

const styles = {
    margin: 20,
    border: "solid",
    padding: 35,
    backgroundColor: "whitesmoke",
    borderWidth: "1px",
    borderColor: "darkgray",
    fontSize: '18px'
}


const panes = [
  { menuItem: 'Garden Croft', render: () => <Tab.Pane><Projects imageURL= {gardencroft} name= "Garden Croft" description= "Garden Croft is a plant nursery application that allows users to shop for plants and their favorite plants to a wishlist." technologies="React, React router, Semantic UI, Node.js, Express, Mongoose, BodyParser, Cors, dotenv, Stripe, Nodemailer" deployed= "https://gardencroft.herokuapp.com/" github= "https://github.com/Sumayyahm/GardenCroft" /></Tab.Pane> },
  { menuItem: 'trim(fit)', render: () => <Tab.Pane><Projects imageURL= {trimfitImage} name= "trim(fit)" description= "A fitness app that allows a user to schedule weekly workouts and search for workouts and save them using youtube API" technologies="YouTube API, Google Maps API, Giphy API, Moment.js, HTML, Material Design Bootstrap, jQuery" deployed= "https://sumayyahm.github.io/trim-fit-/" github= "https://github.com/Sumayyahm/trim-fit-" /></Tab.Pane> },
  { menuItem: 'Esthète', render: () => <Tab.Pane><Projects imageURL= {estheteimg} name= "Esthète" description= "Esthete Gallery is an art gallery management system that allows an art gallery owner to maintain details of artists and paintings with great ease. With the help of this app, gallery owners can store, view, and maintain inventory." technologies="bcryptjs, cloudinary, dotenv, Express, mysql2, passport.js, sequelize, express-handlebars, node, express" deployed= "https://esthetegallery.herokuapp.com/" github= "https://github.com/Sumayyahm/Project2" /></Tab.Pane> },
  { menuItem: 'EatDaBurger', render: () => <Tab.Pane><Projects imageURL= {burgerimage} name= "Eat- Da Burger" description= "A burger logger app created with MYSQL, Node, Express, Handlebars and ORM that allows the user to log their favourite burger and then devour it!" technologies="mysql, node, Express, express-handlebars" deployed= "https://stormy-dawn-28068.herokuapp.com/" github= "https://github.com/Sumayyahm/EatDaBurger" /></Tab.Pane> },
  { menuItem: 'Employee Directory', render: () => <Tab.Pane><Projects imageURL= {empdirectoryImage} name= "Employee Directory" description= "An employee directory that allows the user to view the entire employee directory,sort the employee names in descending or ascending order and search for employees by typing their name in the search box." technologies="React, Axios, Bootstrap, React-dom" deployed= "https://ancient-coast-86756.herokuapp.com/" github= "https://github.com/Sumayyahm/employee-directory" /></Tab.Pane> },
  { menuItem: 'Budget Tracker', render: () => <Tab.Pane><Projects imageURL= {budgettrackerImage} name= "Budget Tracker" description= "A budget tracker app that allows user to add expenses and deposits to their budget with or without a connection." technologies="Express, Mongoose, Morgan, Logger, Compression, Lite-Server" deployed= "https://still-ocean-73108.herokuapp.com/" github= "https://github.com/Sumayyahm/BudgetTracker" /></Tab.Pane> },
  { menuItem: 'Weather Dashboard', render: () => <Tab.Pane><Projects imageURL= {weatherImage} name= "Weather Dashboard App" description= "A Weather dashboard that allows the user to display the current and future weather conditions for a searched city as well as display the last searched cities" technologies="HTML, CSS Bootstrap, jQuery, Weather API" deployed= "https://sumayyahm.github.io/WeatherDashboard/" github= "https://github.com/Sumayyahm/WeatherDashboard" /></Tab.Pane> }
]

const PortfolioTab = () => (
  <div className="ui mobile reversed equal width grid">
  <Tab  className="column" style={styles} menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
  </div>
  
)

export default PortfolioTab