import EmailSideLink from '../components/email-side-link';
import SocialLinks from '../components/social-links';
import { HeroSection } from '../sections';

const Home = () => {
    return (
        <>
            <HeroSection />
            <SocialLinks />
            <EmailSideLink />
        </>
    );
};

export default Home;
