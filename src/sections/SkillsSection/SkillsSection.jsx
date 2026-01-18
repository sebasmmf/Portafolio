import { skills } from '../../data/db'
import './SkillsSection.css'

export default function SkillsSection() {
    return (
        <section className='skills-section' id='skills'>
            <h1 className='title-gradient'>Skills</h1>

            <div className='skills-box'>
                {skills.map(skill => (
                    <div key={skill.name}>
                        <img src={skill.image_src} alt={skill.image_alt} />
                        <h3>{skill.name}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
