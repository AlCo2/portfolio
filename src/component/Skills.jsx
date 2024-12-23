import { Roll } from "react-awesome-reveal";
import laravel from '../assets/laravel.png'
import react from '../assets/react.png'
import sql from '../assets/sql.png'
import mongo from '../assets/mongo.webp'

const Skills = () => {
  return (
    <div className="skill">
        <p className='title'>Skills</p>
        <div className='skillList'>
        <Roll direction="up" cascade>
            <div className="feature">
            <img src={laravel} alt=""  width={100} height={100}/>
            </div>
            <div className="feature">
            <img src={react} alt=""  width={100} height={100}/>
            </div>
            <div className="feature">
            <img src={sql} alt=""  width={200} height={100}/>
            </div>
            <div className="feature">
            <img src={mongo} alt=""  width={100} height={100}/>
            </div>
        </Roll>
        </div>
    </div>
  )
}

export default Skills;