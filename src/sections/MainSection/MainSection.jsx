import { skills } from '../../data/db';
import './MainSection.css'

export default function MainSection() {
  return (
        <main className="main" id='home'>
            <div className="glass_card">
                <h1>Hello everyone, I'm</h1>
                <h1 className='title-gradient'>Sebastian Martinez</h1>
                <h1>Software Developer</h1>
            </div>
            <div>
                <img
                    className="image_sebastian"
                    src="/Imagen_Sebastian.png"
                    alt="image sebastian"
                />
                <div className="circle"></div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <div className="skills_icons">
                    {skills.map(skill => (
                        <img src={skill.image_src} alt={skill.image_alt} key={skill.name}/>
                    ))}
                </div>
            </div>
        </main>
  );
}
