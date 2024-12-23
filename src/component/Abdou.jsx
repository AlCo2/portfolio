import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const Abdou = () => {
  
  useEffect(()=>{
    if (window.innerWidth > 1000)
    {
      gsap.fromTo('.titleContainer',
        {y:0},
        {
          y:260,
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
    <div className={`titleContainer`}>
        <p className='title'>Abdellah Lahboub</p>
        <p className='subTitle'>Full-stack Developer</p>
    </div>
  )
}

export default Abdou;