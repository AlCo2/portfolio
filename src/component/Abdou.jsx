import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.webp';


gsap.registerPlugin(ScrollTrigger);

const Abdou = () => {
  
  useEffect(()=>{
    if (window.innerWidth > 1000)
    {
      gsap.fromTo('.titleContainer',
        {y:0},
        {
          y:220,
          scrollTrigger: {
            trigger: '.skill',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        })
      gsap.fromTo('.titleContainer',
        {x:0},
        {
          x:'85%',
          scrollTrigger:{
            trigger:'.skill',
            start: 'top center',
            end:'+=150',
            scrub:true,
          }
        })
    }
  }, [])
  return (
    <div>
      <div className="socialMedia">
        <a href="https://github.com/AlCo2"><img src={github} alt="" width={50} height={50} /></a>
        <a href="https://www.linkedin.com/in/abdellahlahboub/"><img src={linkedin} alt="" width={50} height={50} /></a>
      </div>
    <div className={`titleContainer`}>
        <p className='title'>Abdellah Lahboub</p>
        <p className='subTitle'>Full-stack Developer</p>
    </div>
    </div>
  )
}

export default Abdou;