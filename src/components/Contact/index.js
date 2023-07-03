import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'

import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm(
            'service_ft3uemg',
            'template_amfco08',
            refForm.current,
            'a0bZpQo4MsJRKuFMQ'
        ).then((result) => {
            alert('Message successfully sent!!')
            window.location.reload(false)
        }, (error) => {
            alert('Failed to send the message, please try again!z')
        });
    }

    return (
        <>
            <div className='container-box-page contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClassname={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            index={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea type='text' name='message' placeholder='Message' required></textarea>
                                </li>
                                <li >
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Sonam Jha,
                    <br />
                    India,
                    Arihant, 2nd street, <br />
                    Navi Mumabai, 410206
                    <span>sonam43jha@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[18.988952,73.0731572]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[18.988952,73.0731572]}>
                            <Popup>We can meet somewhere near by :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact