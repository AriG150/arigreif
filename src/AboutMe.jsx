import React from 'react';
import './App.css';

function AboutMe(){
  return(
    <header>
        <div className="blurb" overflow="hidden">
          <h1 className="header"> Ari Greif </h1>
          <div className="about">
            Full Stack Developer <br/>
            I am a Seattle based web developer shifting from studying Psychology into a career in software.
            Converting my knowledge of people into programming gives me a unique perspective on effective ways to write clean
            code, work in cross-functional teams, and approach technical problems.  <br/>
            Please scroll to see my projects and skills
          </div>
          <div className="icons">
            <a className="aboutMeLink" href="https://www.linkedin.com/in/arigreif/" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-linkedin fa-3x"></i>
            </a>
            <a className="aboutMeLink" href="https://github.com/AriG150" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-github fa-3x"></i>
            </a>
            <a className="aboutMeLink" href="mailto: arigreif@gmail.com" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-file fa-3x"> </i>
            </a>
            <a className="aboutMeLink" href="mailto: arigreif@gmail.com" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-envelope fa-3x"></i>
            </a>
          </div>
        </div>
      </header>
  )
}

export default AboutMe;