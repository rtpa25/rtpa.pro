import { Box } from '@chakra-ui/react';
import { projects } from '../../data/projects-data';
import SectionHeading from '../misc/section-heading';
import SectionWrapper from '../misc/section-wrapper';
import IndividualProjectCard from './individual-project-card';

const Work = () => {
    return (
        <SectionWrapper variant='wide'>
            <Box mb={16}>
                <SectionHeading
                    sectionHeadingText={'Recent Projects'}
                    sectionHeadingNumber={5}
                    showNumber={true}
                />
            </Box>
            <Box mb={40}>
                {projects.map((project, idx) => (
                    <IndividualProjectCard
                        isLast={idx === projects.length - 1}
                        project={project}
                        idx={idx}
                        key={project.name}
                    />
                ))}
            </Box>
        </SectionWrapper>
    );
};

export default Work;

