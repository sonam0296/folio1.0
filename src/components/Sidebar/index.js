import React from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/logosonam.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faFile, faGears, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMedium, faSkype } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt='Logo' />
                <img className='logoSub' src={LogoSub} alt='LogoSub' />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='skills-link' to='/skills'>
                    <FontAwesomeIcon icon={faGears} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='work-link' to='/work'>
                    <FontAwesomeIcon icon={faEye} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                <a href='FrontendResume.pdf' download="Resume.pdf">
                        <FontAwesomeIcon icon={faFile} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://www.linkedin.com/in/sonam-jha-789b481a9/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://github.com/sonam0296'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://medium.com/@sonam43jha'>
                        <FontAwesomeIcon icon={faMedium} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='skype:live:sonam43jha'>
                        <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SideBar