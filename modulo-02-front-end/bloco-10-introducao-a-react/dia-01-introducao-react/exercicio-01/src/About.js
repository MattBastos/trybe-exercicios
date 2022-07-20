import React, { Component } from 'react';

class About extends Component {
  render() {
    const fullName = 'Matthews Bastos';
    const aboutMe = 'Love videogames, music and code';
    const mySkills = 'My Skills';
    const arrayOfSkills = ['HTML', 'CSS', 'JavaScript', 'React'];
    const jsxSkills = arrayOfSkills.map((skill, index) => <li key={ index }>{ skill }</li>);

    return (
      <section>
        <h1>{ fullName }</h1>
        <p>{ aboutMe }</p>
        <h2>{ mySkills }</h2>
        <ul>{ jsxSkills }</ul>
      </section>
    );
  }
}

export default About;