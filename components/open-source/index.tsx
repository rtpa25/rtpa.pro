import { Box, SimpleGrid } from '@chakra-ui/react';
import { oldProjects } from '../../data/old-projects-data';
import { openSourceProjects } from '../../data/open-source-data';
import SectionHeading from '../misc/section-heading';
import SectionWrapper from '../misc/section-wrapper';
import OpenSourceCard from './open-source-card';
// import OldWorkCard from './old-work-card';

const OpenSource = () => {
    return (
        <SectionWrapper variant='wide'>
            <Box mb={16}>
                <SectionHeading
                    sectionHeadingText={'Open Source'}
                    sectionHeadingNumber={4}
                    showNumber={true}
                />
            </Box>
            <Box mb={40}>
                {openSourceProjects.map((project, idx) => (
                    <OpenSourceCard
                        isLast={idx === openSourceProjects.length - 1}
                        project={project}
                        idx={idx}
                        key={project.name}
                    />
                ))}
            </Box>
        </SectionWrapper>
    );
};

export default OpenSource;

