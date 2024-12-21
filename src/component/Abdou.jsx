import React from 'react'

const Abdou = ({isMobile}) => {
  return (
    <div className={`titleContainer ${isMobile?'shownMobile':null}`}>
        <p className='title'>Abdellah Lahboub</p>
        <p className='subTitle'>Full-stack Developer</p>
    </div>
  )
}

export default Abdou;