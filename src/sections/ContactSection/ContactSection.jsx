import { socialMedias } from '../../data/db';
import './ContactSection.css';

function ContactSection() {
    return (
        <section className='contact-section' id='contact'>
            <h1 className='title-gradient'>Contact</h1>
            <div className='social-medias'>
                <p>Do you have a project in mind? Let’s discuss how I can help you bring it to life!</p>
                <div className='links'>
                    {socialMedias.map(socialMedia => (
                        <a
                            key={socialMedia.name}
                            href = {socialMedia.url}
                            className={socialMedia.name}
                            target='_blank'
                        >
                            View {socialMedia.name} profile
                        </a>

                    ))}
                </div>
            </div>
            <div className='contact-form'>
                <p>I’m always open to collaborating on innovative projects. Feel free to reach out, and let’s have a virtual coffee.</p>
                <div className='user-info'>
                    <div className='field'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id='name' placeholder='Type your name...'/>
                    </div>
                    <div className='field'>
                        <label htmlFor="email">Your E-mail:</label>
                        <input type="email" id='email' placeholder='Type your E-mail...'/>
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id='subject' placeholder='Reason for the mail...'/>
                </div>
                <div className='field'>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" placeholder='Drop me a line...'></textarea>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;