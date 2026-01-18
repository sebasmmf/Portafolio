import { projects } from '../../data/db'
import './ProjectsSection.css'

export default function ProjectsSection() {
    
    return (
        <section className='projects-section' id='projects'>
            <h1>Projects</h1>

            <div className='projects-box'>
                {projects.map(project => (
                    <div
                        key={project.name}
                        className='project'
                    >


                        <div>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                        </div>

                        <a href="#">
                            Go to Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}
