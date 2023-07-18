import React, { useState } from 'react'
import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/logosonam.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faEye, faFile, faGears, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faMedium, faSkype } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => {
    const [showNav, setShowNav] = useState(false);
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/' onClick={() => setShowNav(false)}>
                <img src={Logo} alt='Logo' />
                <img className='logoSub' src={LogoSub} alt='LogoSub' />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink exact='true' activeclassname='active' to='/' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='skills-link' to='/skills' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faGears} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='work-link' to='/work' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEye} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact' onClick={() => setShowNav(false)}>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon' />
            </nav>
            <ul>
                <li>
                    <a href='FrontendResume.pdf' download="Resume.pdf" className="anchor-icon">
                        <FontAwesomeIcon icon={faFile} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://www.linkedin.com/in/sonam-jha-789b481a9/' className="anchor-icon">
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://github.com/sonam0296' className="anchor-icon">
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='https://medium.com/@sonam43jha' className="anchor-icon">
                        <FontAwesomeIcon icon={faMedium} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' href='skype:live:sonam43jha' className="anchor-icon">
                        <FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon' />
        </div>
    )
}

export default SideBar