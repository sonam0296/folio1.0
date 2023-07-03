import React from 'react'
import './index.scss'

const AnimatedLetters = ({letterClassname, strArray, index}) => {
  return (
    <span>
        {
            strArray.map((char, i)=>(
                <span key={char + i} className={`${letterClassname} _${i + index}`}>
                    {char}
                </span>
            ))
        }
    </span>
  )
}

export default AnimatedLetters