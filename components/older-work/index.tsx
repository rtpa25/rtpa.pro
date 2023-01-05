import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    IconButton,
    ListItem,
    SimpleGrid,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import SectionHeading from '../misc/section-heading';
import SectionWrapper from '../misc/section-wrapper';
import { FiGithub, FiFolder } from 'react-icons/fi';
import { ACCENT_COLOR, GRADIENT_ACCENT_COLOR } from '../../styles/consts';
import { oldProjects } from '../../data/old-projects-data';
import OldWorkCard from './old-work-card';

const OlderWork = () => {
    const techList = ['React', 'Next.js', 'Chakra UI', 'TypeScript'];

    return (
        <SectionWrapper variant='wide'>
            <Box mb={16}>
                <SectionHeading
                    sectionHeadingText={'Older Projects'}
                    sectionHeadingNumber={4}
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
