import React from 'react';
import './App.css';

function Skills() {
  return(
    <section>
    <div className="description">
      <h2 className="header"> Skills </h2>
      <div className="list-head" >
      <span> This is a list of skills I have and technology I have worked with. </span> <br/>
      </div>
      <div className="skills">
        <div className="skill-col">
          <span> Cloudinary </span>
          <span> CSS </span> 
          <span> Express.js </span>
          <span> GraphQL </span>
          <span> HTML </span>
          <span> JavaScript </span>
          <span> Materialize </span>
          <span> MongoDB </span>
        </div>
        <div className="skill-col">
          <span> Mongoose </span>
          <span> Node.js </span>
          <span> Postgres(PSQL) </span>
          <span> Python </span>
          <span> React (Hooks) </span>
          <span> Sequelize </span>
          <span> SQL </span>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills;