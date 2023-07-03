import React, { useEffect, useRef } from 'react'
import './index.scss'
import LogosSolid from '../../../assets/images/logo-s.png'

const Logo = () => {

  return (
    <div className='logo-container' >
      <img className='solid-logo' src={LogosSolid} height={500} alt='S' />
    </div>
  )
}

export default Logo 