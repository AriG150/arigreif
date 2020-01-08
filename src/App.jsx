import React from 'react';
import { Carousel, CardPanel } from 'react-materialize';
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
import resume from './img/resume.pdf'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
      {/* <div className="spacer"></div>  */}
        <div className="blurb" overflow="hidden">
          <h1 className="header"> Ari Greif </h1>
          <CardPanel className="white">
            <span>
            Full Stack Developer <br/>
            I am a Seattle based web developer shifting from studying Psychology into a career in software.
            Converting my knowledge of people into programming gives me a unique perspective on effective ways to write clean
            code, work in cross-functional teams, and approach technical problems.  <br/>
            Please scroll to see my projects and skills
            </span>
          </CardPanel>
          <div className="icons">
            <a className="link" href="https://www.linkedin.com/in/arigreif/" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-linkedin fa-3x"></i>
            </a>
            <a className="link" href="https://github.com/AriG150" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-github fa-3x"></i>
            </a>
            <a className="link" href={resume} target="_blank" rel="noopener noreferrer">
            <i class="fa fa-file fa-3x"> </i>
            </a>
            <a className="link" href="mailto: arigreif@gmail.com" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-envelope fa-3x"></i>
            </a>
          </div>
        </div>
      </header>
        <div className="projects">
          <h2 className="header">Projects: </h2>
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
            <a className="link" href="https://job-tracker1.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-link fa-2x"> link to live site</i>
            </a>
            <a className="link" href="https://github.com/AriG150/JobTracker" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
          </div>
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
            <a className="link" href="https://limitless-river-75438.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-link fa-2x"> link to live site</i>
            </a>
            <a className="link" href="https://github.com/AriG150/adventure-awaits" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
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
            <a className="link" href="https://guarded-plains-36230.herokuapp.com/homepage" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-link fa-2x"> link to live site</i>
            </a>
            <a className="link" href="https://github.com/AriG150/writingProjects" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-github fa-2x"></i>
            </a>
          </div>
        <section>
          <div className="description">
            <h2 className="header"> Skills </h2>
            <div className="skills">
              <span> This is a list of skills I have and technology I have worked with. </span> <br/>
              <span> Cloudinary </span>
              <span> CSS </span> 
              <span> Express.js </span>
              <span> GraphQL </span>
              <span> HTML </span>
              <span> JavaScript </span>
              <span> Materialize </span>
              <span> MongoDB </span>
              <span> Mongoose </span>
              <span> Node.js </span>
              <span> Postgres(PSQL) </span>
              <span> Python </span>
              <span> React (Hooks) </span>
              <span> Sequelize </span>
              <span> SQL </span>
            </div>
          </div>
        </section>
        <section>
          <div className="description">
          <h2 className="header"> Contact Me </h2>
            Please don't hesitate to reach out via the links below or directly to my email: arigreif@gmail.com 
            <div className="icons">
              <a className="link" href="https://www.linkedin.com/in/arigreif/" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-linkedin fa-1x"></i>
              </a>
              <a className="link" href="https://github.com/AriG150" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-github fa-1x"></i>
              </a>
              <a className="link" href={resume} target="_blank" rel="noopener noreferrer">
              <i class="fa fa-file fa-1x"> </i>
              </a>
              <a className="link" href="mailto: arigreif@gmail.com" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-envelope fa-1x"></i>
              </a>
            </div>
          </div>
            <div className="spacer"></div>  
        </section>
    </div>
  );
}

export default App;

