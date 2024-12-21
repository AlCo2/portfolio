
const About = () => {
  return (
    <div className='about'>
        <p className='title'>Who is Abdellah?</p>
        <div className='information'>
        <p>
        I am a passionate and detail-oriented full-stack developer with over three years of experience creating dynamic and user-friendly applications. Skilled in building responsive and engaging front-end interfaces using ReactJS, I also specialize in developing robust, secure, and scalable back-end systems with Laravel and PHP. I thrive on tackling challenges, continuously learning new technologies, and delivering clean, maintainable code that drives impactful results
        </p>
        </div>
        <div style={{display:'flex'}}>
        <img src="abdou.jpeg" className='image' alt="image" />
        <div className='information'>
            <p>I achieved first place in my class and was honored with an award for this accomplishment, showcasing my commitment to excellence and learning</p>
        </div>
        </div>
    </div>
  )
}

export default About;