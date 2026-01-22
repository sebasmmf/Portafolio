import './AboutSection.css';

function AboutSection() {
    return (
        <section className='about-section' id='about'>
            <h1 className='title-gradient'>About Me</h1>

            <div className='info'>
                
                <div className='photograph'>
                    <img src="./Imagen_Carnet.jpg" alt="personal image" />
                </div>

                <div className='description'>
                    <p>
                        My fascination with technology began in school, automating simple tasks, but it evolved into my professional career when I discovered web development. After completing an intensive <span>bootcamp</span> where I learned the fundamentals of HTML, CSS, JavaScript, and Node.js, I decided to continue my journey as a self-taught developer. This phase not only strengthened my technical skills but also taught me something vital in this industry: <span>learning how to learn.</span>
                    </p>

                    <p>
                        I am currently in my <span>4th semester of Software Engineering,</span> combining academic structure with hands-on experience. I specialize in the JavaScript ecosystem and feel equally comfortable working in both <span>Frontend and Backend development.</span>
                    </p>

                    <p>
                        I am naturally curious and <span>forward-thinking</span>. While my current focus is the web, I am passionate about integrating Artificial Intelligence into my projects, exploring game development, and bridging the gap between code and the physical world through electronics (Arduino/Raspberry Pi).
                    </p>
                </div>

            </div>

        </section>
    )
}

export default AboutSection;