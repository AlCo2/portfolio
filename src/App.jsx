
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useSpring } from '@react-spring/web'
import 'react-vertical-timeline-component/style.min.css';
import { useRef, useState } from 'react'
import Skills from './component/Skills'
import Tools from './component/Tools'
import About from './component/About'
import Abdou from './component/Abdou'
import Career from './component/Career'
import Project from './component/Project';


function App() {
  const scrollY = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const styles = useSpring({
    from: {
      width:'50%',
    },
    to: {
      width:isScrolled?'100%':'50%',
    }
  })

  function handleScroll()
  {
    const value = scrollY.current.current
    if (value > 120)
      setIsScrolled(true);
    else
      setIsScrolled(false);
  }
  
  return (
    <Parallax ref={scrollY} pages={window.innerWidth>1100?3.2:window.innerWidth>700?3.6:4.4} onScrollCapture={handleScroll}>
      <ParallaxLayer 
      sticky={{start:0, end:0.1}}
      style={{display:'flex', alignItems:'center',justifyContent:'center', height:'90%', ...styles}}
      className='hiddenMobile'
      >
        <Abdou isMobile={false}/>
      </ParallaxLayer>
      <ParallaxLayer
        style={{display:'flex',alignItems:'center', justifyContent:'center', flexWrap:'wrap'}}
        offset={0}
        speed={1}
      >
        <Abdou isMobile={true}/>
        <About/>
      </ParallaxLayer>
      <ParallaxLayer
      offset={0.99}
      speed={0.7}
      style={{display:'flex', flexDirection:'column', gap:80}}
      >
        <Skills/>
        <Tools/>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.2}
        speed={1}
      >
        <Career/>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.6}
      >
        <Project/>
      </ParallaxLayer>
    </Parallax>
  )
}

export default App
