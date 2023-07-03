import React, { useEffect, useState } from 'react'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['o', 'n', 'a', 'm']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className='container-box-page home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoS} alt='developer' />
                    <AnimatedLetters letterClassname={letterClass} strArray={nameArray} index={15} />
                    <br />
                    <AnimatedLetters letterClassname={letterClass} strArray={jobArray} index={19} />
                </h1>
                <h2>Web Developer / MERN Stack Developer / Software Engineer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Home