import 'react-vertical-timeline-component/style.min.css';
import Skills from './component/Skills'
import Tools from './component/Tools'
import About from './component/About'
import Abdou from './component/Abdou'
import Career from './component/Career'
import Project from './component/Project';
import StarsBackground from './component/StarsBackground';

function App() {
  return (
    <>
      <StarsBackground/>
      <div  style={{position: "relative", zIndex: 1,}}>
        <div className='main'>
          <Abdou/>
          <About/>
        </div>
        <Skills/>
        <Tools/>
        <Career/>
        <Project/>
      </div>
    </>
  )
}

export default App
