import { useState } from 'react'

const Navbar = () => {
  const [selected, setSelected] = useState('about');
  return (
    <div className='navbar'>
        <ul className='navbarList'>
            <a href="#about" onClick={()=>{setSelected('about')}} className={`navbarItem ${selected=='about'?'navbarItemSelected':''}`}><li>About</li></a>
            <a href="#skills" onClick={()=>{setSelected('skills')}} className={`navbarItem ${selected=='skills'?'navbarItemSelected':''}`}><li>Skills</li></a>
            <a href="#career" onClick={()=>{setSelected('career')}} className={`navbarItem ${selected=='career'?'navbarItemSelected':''}`}><li>Career</li></a>
            <a href="#projects" onClick={()=>{setSelected('projects')}} className={`navbarItem ${selected=='projects'?'navbarItemSelected':''}`}><li>Projects</li></a>
        </ul>
    </div>
  )
}

export default Navbar;