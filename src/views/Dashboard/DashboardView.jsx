import MainSection from '../../sections/MainSection/MainSection';
import ProjectsSection from '../../sections/ProjectsSection/ProjectsSection';
import SkillsSection from '../../sections/SkillsSection/SkillsSection';
import AboutSection from '../../sections/AboutSection/AboutSection';
import ContactSection from '../../sections/ContactSection/ContactSection';

export default function DashboardView() {

    return (
        <>
            <MainSection />
            <SkillsSection />
            <ProjectsSection />
            <AboutSection />
            <ContactSection />
        </>
    )
}
