import { useRef } from 'react';
import { skills } from '../../data/db';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import './MainSection.css';

export default function MainSection() {
    const mainContainer = useRef();

    useGSAP(() => {
        const ease = 'power3.in';

        const timeline = gsap.timeline({
            defaults: { ease, duration: 0.8 }
        });

        timeline
        .addLabel('checkpoint')
        .from('.glass_card  h1', {
            opacity: 0,
            stagger: 0.1
        }, 'checkpoint')
        .from(['.circle', '.image_sebastian'], {
            x: -250, 
            opacity: 0, 
            duration: 0.6,
            stagger: 0.1,
            ease: 'circ.out'
        }, '-=0.4')
        .from('.skills h1', { 
            opacity: 0,
        }, 'checkpoint')

        if (skills.length > 0) {
            timeline.from('.skills_icons img', { 
                opacity: 0, 
                scale: 0.9, 
                stagger: 0.075 
            }, 'checkpoint');
        }

    }, {scope: mainContainer, dependencies: [skills]});
    
    return (
            <main className="main" id='home' ref={mainContainer}>
                <div className="glass_card">
                    <h1>Hello everyone, I'm</h1>
                    <h1 className='title-gradient'>Sebastian Martinez</h1>
                    <h1>Software Developer</h1>
                </div>
                <div>
                    <img
                        className="image_sebastian"
                        src="/Imagen_Sebastian.png"
                        alt="Sebastian Martinez Image - Software Developer"
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
