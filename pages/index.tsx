import { Box } from '@chakra-ui/react';
import EmailSideLink from '../components/email-side-link';
import SEO from '../components/seo';
import SocialLinks from '../components/social-links';
import {
    AboutSection,
    ContactFooterSection,
    EducationSection,
    ExperienceSection,
    HeroSection,
    OlderWorkSection,
    WorkSection,
    TestimonialSection,
    OpenSourceSection,
} from '../sections';
import { GRADIENT_ACCENT_COLOR } from '../styles/consts';

const Home = () => {
    return (
        <>
            <SEO />
            <Box
                bgGradient={`linear(to-r, #000000, ${GRADIENT_ACCENT_COLOR})`}
                overflow='hidden'>
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <TestimonialSection />
                <OpenSourceSection />
                <WorkSection />
                <OlderWorkSection />
                <EducationSection />
                <ContactFooterSection />
                <SocialLinks />
                <EmailSideLink />
            </Box>
        </>
    );
};

export default Home;

