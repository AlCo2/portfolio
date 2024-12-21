
const ProjectCard = ({title, description, tools, image, link}) => {
  return (
    <a href={link} className='projectCard'>
        <div className='cardImage' style={{backgroundImage:image}}></div>
        <div className='cardInfo'>
        <p className='cardTitle'>{title}</p>
        <p className='cardDescription'>{description}</p>
        <p className='cardTools'>{tools}</p>
        </div>
    </a>
  )
}

export default ProjectCard;