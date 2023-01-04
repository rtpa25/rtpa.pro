import { UnorderedList, ListItem } from '@chakra-ui/react';
import { FC } from 'react';
import { ACCENT_COLOR } from '../../styles/consts';

interface ProjectTechListProps {
    techList: string[];
    isInsideProjectCard: boolean;
    isOdd: boolean;
}

const ProjectTechList: FC<ProjectTechListProps> = ({
    techList,
    isInsideProjectCard,
    isOdd,
}) => {
    const display = isInsideProjectCard
        ? ['flex', 'flex', 'flex', 'flex', 'none']
        : ['none', 'none', 'none', 'none', 'flex'];

    return (
        <UnorderedList
            listStyleType='none'
            mt={4}
            ml={0}
            w={'full'}
            justifyContent={`${isOdd ? 'flex-end' : 'flex-start'}`}
            display={display}
            flexWrap={'wrap'}>
            {techList.map((tech) => (
                <ListItem
                    key={tech}
                    fontFamily={'mono'}
                    mr={2}
                    mt={0}
                    mb={2}
                    color={ACCENT_COLOR}
                    fontSize={'sm'}>
                    {tech}
                </ListItem>
            ))}
        </UnorderedList>
    );
};

export default ProjectTechList;
