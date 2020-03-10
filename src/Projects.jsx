import React from 'react';
import './App.css';
import { Carousel } from 'react-materialize';
import adventurehomepage from './img/AdventureHomepage.png';
import adCreate from './img/AdCreate.png';
import adCategories from './img/AdCategories.png';
import adList from './img/AdList.png';
import jtHomepage from './img/jtHomepage.png';
import jtProfile from './img/jtProfile.png';
import jtDetail from './img/jtDetail.png';
import jtAddNote from './img/jtAddNote.png';
import wpHome from './img/wpHome.png';
import wpProfile from './img/wpProfile.png'
import wpPrompt from './img/wpPrompt.png'


function Projects () {
  return(
    <div className="projects">
      <h2 className="header">Projects: </h2>
        {/* Project 1: Job Tracker */}
        <div className="project">
          <h3 className="projectName">Job Tracker</h3>
          <div className="description"> 
            About to launch your job search and concerned about how you'll keep track of your applications? Job Tracker
            is a full stack application where users can track if they've submitted a resume and cover letter, if they've talked to 
            a recruiter and had an informational interview, and save their notes on those conversations.  
            <br/>
            Technology Used: MongoDB | Mongoose.js | Express.js | React Hooks | Node | HTML | CSS
          </div>
          <Carousel
            images={[
              jtHomepage,
              jtProfile,
              jtAddNote,
              jtDetail
            ]}
            options={{
              dist: -100,
              duration: 200,
              fullWidth: false,
              indicators: true,
              noWrap: false,
              numVisible: 5,
              onCycleTo: null,
              padding: 0,
              shift: 0
            }}
          />
          <div className="spacer"></div> 
          <a className="link" href="https://job-tracker1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-link fa-2x"> </i>
          </a>
          <a className="link" href="https://github.com/AriG150/JobTracker" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-github fa-2x"></i>
          </a>
        </div>
        {/* Project 2: Adventure Awaits */}
        <div className="project">
          <h3 className="projectName">Adventure Awaits</h3>
          <div className="description"> 
            Ever thought you should keep track of your life goals instead of having them float around in your head? Adventure Awaits
            is a full stack application where users can organize their goals via categories, and then upload photos and take notes
            on that activity. 
            <br/>
            Technology Used: MongoDB | Mongoose.js | Express.js | React.js | Node | Cloudinary | React-Materialize
          </div>
          <Carousel
            images={[
              adventurehomepage,
              adCreate,
              adCategories,
              adList
            ]}
            options={{
              dist: -100,
              duration: 200,
              fullWidth: false,
              indicators: true,
              noWrap: false,
              numVisible: 5,
              onCycleTo: null,
              padding: 0,
              shift: 0
            }}
            />
          <div className="spacer"></div> 
          <a className="link" href="https://limitless-river-75438.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-link fa-2x"> </i>
          </a>
          <a className="link" href="https://github.com/AriG150/adventure-awaits" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-github fa-2x"></i>
          </a>
        </div>
        {/* Project 3: Writing Projects */}
        <div className="project">
          <h3 className="projectName">Writing Projects</h3>
          <div className="description"> 
            Writing Project is a full stack app where writers can be inspired by randomly generated writing prompts that are generated
            by the 'I Need A Prompt' API. 
            <br/>
            Technology Used: SQL | Sequelize | Node | Express | JavaScript | HTML| CSS
          </div>
          <Carousel
            images={[
              wpHome,
              wpProfile,
              wpPrompt
            ]}
            options={{
              dist: -100,
              duration: 200,
              fullWidth: false,
              indicators: true,
              noWrap: false,
              numVisible: 5,
              onCycleTo: null,
              padding: 0,
              shift: 0
            }}
            />
          <div className="spacer"></div> 
          <a className="link" href="https://guarded-plains-36230.herokuapp.com/homepage" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-link fa-2x"> </i>
          </a>
          <a className="link" href="https://github.com/AriG150/writingProjects" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-github fa-2x"></i>
          </a>
      </div>
    </div>
  )

}

export default Projects;