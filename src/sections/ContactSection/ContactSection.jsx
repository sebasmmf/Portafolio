import { socialMedias } from '../../data/db';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import './ContactSection.css';

function ContactSection() {

    const form = useRef();

    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const sendEmail = (data) => {
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            data,
            {publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY}
        )
        .then(()=> {
            toast.success('Message sent successfully!');
            reset();
        })
        .catch(() => toast.error(`Something went wrong. Please try again later.`))
    };

    const onSubmit = (formData) => sendEmail(formData)

    const onError = (errors) => {
        const firstError = Object.values(errors)[0];
        toast.error(firstError.message);
    }


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
            <form ref={form} className='contact-form' onSubmit={handleSubmit(onSubmit, onError)}>
                <p>I’m always open to collaborating on innovative projects. Feel free to reach out, and let’s have a virtual coffee.</p>
                <div className='user-info'>
                    <div className='field'>
                        <label htmlFor="name">Name:</label>
                        <input id='name' placeholder='Type your name...'
                            {...register('name', { required: 'Your name is required'})}
                        />
                    </div>
                    <div className='field'>
                        <label htmlFor="email">E-mail:</label>
                        <input id='email' placeholder='Type your E-mail...'
                            {...register('email', {
                                required: 'The E-mail is required',
                                pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid E-mail"
                                }
                            })}
                        />
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor="subject">Subject:</label>
                    <input id='subject' placeholder='Reason for the mail...'
                        {...register('subject', { required: 'The subject is required'})}

                    />
                </div>
                <div className='field'>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" placeholder='Drop me a line...'
                        {...register('message', { required: 'The message is required'})}
                    ></textarea>
                </div>
                <div className='submit'>
                    <button type="submit">
                        <span>Send</span>
                    </button>
                </div>
            </form>
        </section>
    )
}

export default ContactSection;