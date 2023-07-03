import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import projectJson from './project.json'

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [projects, setProjects] = useState(projectJson)

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container-box-page work-page'>
                <div className='text-zone' style={{width: '80%'}}>
                    <h1>
                        <AnimatedLetters
                            letterClassname={letterClass}
                            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                            index={15}
                        />
                    </h1>
                    <div className='row'>
                        {projects.map(proj => (
                            <>
                                <div className='col-lg-6 col-md-6' style={{marginTop: '20px'}}>
                                <h2>{proj.name}:</h2>
                                <p>{proj.description}</p>
                                <div className='project-tags'>
                                    {proj.technologies.map(tech =>
                                        <label className='tag'>{tech}</label>
                                    )}
                                </div>
                            </div >
                        </>
                    ))}
                </div>
            </div>
        </div >
        </>
    )
}

export default Work