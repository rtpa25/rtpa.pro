import { ButtonGroup, IconButton } from '@chakra-ui/react';
import { FC } from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { ACCENT_COLOR } from '../../styles/consts';

interface ProjectButtonGroupProps {
    website: string;
    github: string;
    isInsideProjectCard: boolean;
}

const ProjectButtonGroup: FC<ProjectButtonGroupProps> = ({
    github,
    website,
    isInsideProjectCard,
}) => {
    const display = isInsideProjectCard
        ? ['block', 'block', 'block', 'block', 'none']
        : ['none', 'none', 'none', 'none', 'block'];

    return (
        <ButtonGroup my={2} variant='outline' spacing={4} display={display}>
            <IconButton
                _hover={{ color: ACCENT_COLOR }}
                fontSize='lg'
                aria-label='github'
                icon={<FiGithub />}>
                <a href={github} target='_blank' rel='noopener noreferrer' />
            </IconButton>
            <IconButton
                _hover={{ color: ACCENT_COLOR }}
                fontSize='lg'
                aria-label='github'
                icon={<BiLinkExternal />}>
                <a href={website} target='_blank' rel='noopener noreferrer' />
            </IconButton>
        </ButtonGroup>
    );
};

export default ProjectButtonGroup;
