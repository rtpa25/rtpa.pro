import EmailSideLink from '../components/email-side-link';
import SocialLinks from '../components/social-links';
import { AboutSection, HeroSection } from '../sections';
import ExperienceSection from '../sections/experience-section';

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <SocialLinks />
            <EmailSideLink />
        </>
    );
};

export default Home;
