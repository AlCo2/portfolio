import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import acwapower from '../assets/acwapower.png'
import miage from '../assets/miage.png'
import alx from '../assets/alx.jpg'
import liliana from '../assets/liliana.jpg'

const Career = () => {
  return (
    <div className='careerSection'>
        {/* <p>Career</p> */}
        <div>
            <VerticalTimeline>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#ffb400', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid #ffb400' }}
                date="Oct 2022 - Jul 2024"
                icon={<img src={miage} width={'100%'} height={'100%'} style={{borderRadius:'100%', backgroundColor:'white'}}/>}
                intersectionObserverProps={{triggerOnce: false,}}
                >
                    <h3 className="vertical-timeline-element-title">Information Technology</h3>
                    <h4 className="vertical-timeline-element-subtitle">Morocco, Kenitra</h4>
                    <h4 className="vertical-timeline-element-subtitle">Miage</h4>
                    <p>I studied Information Technology for two years at Miage.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#ffb400', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid #ffb400' }}
                date="Aug 2023 - Oct 2023"
                icon={<img src={acwapower} width={'100%'} height={'100%'} style={{borderRadius:'100%'}}/>}
                intersectionObserverProps={{triggerOnce: false,}}
                >
                    <h3 className="vertical-timeline-element-title">IT</h3>
                    <h4 className="vertical-timeline-element-subtitle">Morocco, Rabat</h4>
                    <h4 className="vertical-timeline-element-subtitle">AcwaPower</h4>
                    <p>I completed a two-month internship at AcwaPower.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#ffb400', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid #ffb400' }}
                date="Aug 2023 - Sep 2024"
                icon={<img src={alx} width={'100%'} height={'100%'} style={{borderRadius:'100%'}}/>}
                intersectionObserverProps={{triggerOnce: false,}}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">AlX Academy</h4>
                    <p>I studied Software Engineering for one year at a ALX.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#ffb400', color: 'white' }}
                contentArrowStyle={{ borderRight: '7px solid #ffb400' }}
                date="Aug 2023 - Oct 2023"
                icon={<img src={liliana} width={'100%'} height={'100%'} style={{borderRadius:'100%'}}/>}
                intersectionObserverProps={{triggerOnce: false,}}
                >
                    <h3 className="vertical-timeline-element-title">Full-stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Morocco, Kenitra</h4>
                    <h4 className="vertical-timeline-element-subtitle">LilianaDev</h4>
                    <p>I completed a two-month internship at LilianaDev.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    </div>
  )
}

export default Career;