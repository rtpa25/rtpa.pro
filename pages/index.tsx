import EmailSideLink from '../components/email-side-link';
import SocialLinks from '../components/social-links';
import { AboutSection, HeroSection } from '../sections';

const Home = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SocialLinks />
            <EmailSideLink />
        </>
    );
};

export default Home;
