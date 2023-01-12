import { Box, SimpleGrid } from '@chakra-ui/react';
import { oldProjects } from '../../data/old-projects-data';
import SectionHeading from '../misc/section-heading';
import SectionWrapper from '../misc/section-wrapper';
import OldWorkCard from './old-work-card';

const OlderWork = () => {
    return (
        <SectionWrapper variant='wide'>
            <Box mb={16}>
                <SectionHeading
                    sectionHeadingText={'Other Projects'}
                    sectionHeadingNumber={4}
                    showNumber={false}
                />
            </Box>
            <SimpleGrid
                mb={40}
                spacing={'16'}
                templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                {oldProjects.map((oldProject) => (
                    <OldWorkCard
                        key={oldProject.name}
                        oldProject={oldProject}
                    />
                ))}
            </SimpleGrid>
        </SectionWrapper>
    );
};

export default OlderWork;
