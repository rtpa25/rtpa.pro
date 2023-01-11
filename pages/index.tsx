import { Box } from '@chakra-ui/react';
import EmailSideLink from '../components/email-side-link';
import SocialLinks from '../components/social-links';
import {
    AboutSection,
    ContactFooterSection,
    EducationSection,
    ExperienceSection,
    HeroSection,
    OlderWorkSection,
    WorkSection,
} from '../sections';
import { GRADIENT_ACCENT_COLOR } from '../styles/consts';

const Home = () => {
    return (
        <Box
            bgGradient={`linear(to-r, #000000, ${GRADIENT_ACCENT_COLOR})`}
            overflow='hidden'>
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <WorkSection />
            <OlderWorkSection />
            <EducationSection />
            <ContactFooterSection />
            <SocialLinks />
            <EmailSideLink />
        </Box>
    );
};

export default Home;
