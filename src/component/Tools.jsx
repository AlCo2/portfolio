import { Slide } from 'react-awesome-reveal'
import git from '../assets/git.png'
import github from '../assets/github.png'
import gitlab from '../assets/gitlab.webp'

const Tools = () => {
  return (
    <div>
        <p className='skillTitle'>Tools I use</p>
        <div className='skillList'>
        <Slide direction="up" cascade>
            <div className="feature">
            <img src={github} alt=""  width={100} height={100}/>
            </div>
            <div className="feature">
            <img src={git} alt=""  width={100} height={100}/>
            </div>
            <div className="feature">
            <img src={gitlab} alt=""  width={100} height={100}/>
            </div>
        </Slide>
        </div>
    </div>
  )
}

export default Tools;