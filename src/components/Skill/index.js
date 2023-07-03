import React, { useState, useEffect } from 'react';
import './index.scss'; // Import the CSS file for styling
import AnimatedLetters from '../AnimatedLetters';
import { faAws, faCss3, faDocker, faGit, faHtml5, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = () => {
  const [skills, setSkills] = useState([
    {name: faHtml5, color: '#F06529'}, 
    {name: faCss3, color: '#28A4D9'}, {name: faJs,color: '#EFD81D'}, {name: faReact, color: '#5ED4F4'}, {name: faNodeJs, color: '#3c873a'}, 
    {name: faGit, color: '#EC4D28'}, {name: faDocker, color: '#0db7ed'}, {name: faPython, color: '#FFEBCD'}, {name: faAws, color: '#FF9900'}]);
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const interval = setInterval(() => {
      const rotatedSkills = [...skills.slice(2), ...skills.slice(0, 2)];
      setSkills(rotatedSkills);
    }, 2000); // Adjust the interval duration as needed

    return () => {
      clearInterval(interval);
    };
  }, [skills]);

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 3000)
}, [])

  return (
    <div className='container-box-page skill-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClassname={letterClass}
            strArray={['S', 'k', 'i', 'l', 'l', 's', ' ', '&', ' ', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
            index={15} />
        </h1>
        <p>
          Experience in developing web applications using front-end technologies like
          <span className='tech-tag'> HTML</span> ,
          <span className='tech-tag'>CSS </span>,
          <span className='tech-tag'> JavaScript </span>
          and frameworks/libraries such as
          <span className='tech-tag'> React</span>,
          <span className='tech-tag'> Bootstrap </span>,
          <span className='tech-tag'> Material UI</span>.
        </p>
        <p align="LEFT">
          Knowledge of server-side languages, frameworks, and technologies such as
          <span className='tech-tag'> Node.js</span> ,
          <span className='tech-tag'>Flask </span> with database knowledge
          <span className='tech-tag'> MongoDB </span> ,
          <span className='tech-tag'> SQL </span> .
          Understanding of RESTful APIs and HTTP protocols.
        </p>
        <p>
          Experience with version control systems like <span className='tech-tag'> GIT </span> and knowledge of branching, merging, and pull requests.
          Knowledge of debugging techniques and tools.
        </p>
      </div>
      <div className="animated-skills">
        <div className="circle">
          {skills.map((skill, index) => (
            <div className={`skill skill-${index}`} key={index}>
              <FontAwesomeIcon icon={skill.name} color={skill.color} size='2xl'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
