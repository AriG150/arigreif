import React from 'react';
import './App.css';

function ContactMe(){
  return(
    <section>
          <div className="description">
          <h2 className="header"> Contact Me </h2>
          <span> Please don't hesitate to reach out via the links below or directly to my email: arigreif@gmail.com  </span>
            <div className="icons">
              <a className="link" href="https://www.linkedin.com/in/arigreif/" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-linkedin fa-1x"></i>
              </a>
              <a className="link" href="https://github.com/AriG150" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-github fa-1x"></i>
              </a>
              <a className="link" href="mailto:arigreif@gmail.com" target="_blank" rel="noopener noreferrer">
              <i class="fa fa-file fa-1x"> </i>
              </a>
              <a className="link" href="mailto: arigreif@gmail.com" target="_blank" rel="noopener noreferrer">
                <i class="fa fa-envelope fa-1x"></i>
              </a>
            </div>
          </div>
            <div className="spacer"></div>  
        </section>
  )
}

export default ContactMe;