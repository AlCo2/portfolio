import email from '../assets/email.png'
const Contact = () => {
  return (
    <div className="contactSection">
      <div>
        <p className="title">Contact</p>
      </div>
      <div className='contactContainer'>
        
        <div className='contact'>
          <div>
            <input placeholder='Email' type="email" name="email" id="email" />
          </div>
          <div>
            <input placeholder='Subject' type="text" name="subject" id="subject" />
          </div>
          <div>
            <textarea placeholder='Message' type="text" name="message" id="message" />
          </div>
          <div>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;