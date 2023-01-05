import { Box, Card, CardBody, Flex, Heading, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { ACCENT_COLOR, GRADIENT_ACCENT_COLOR } from '../../styles/consts';
import { Project } from '../../types/project';
import ProjectButtonGroup from './project-button-group';
import ProjectTechList from './project-tech-list';

interface IndividualProjectCardProps {
    project: Project;
    idx: number;
    isLast: boolean;
}

const IndividualProjectCard: FC<IndividualProjectCardProps> = ({
    project,
    idx,
    isLast,
}) => {
    return (
        <Flex
            flexDirection={[
                'column-reverse',
                'column-reverse',
                'column-reverse',
                'column-reverse',
                `${idx % 2 === 0 ? 'row' : 'row-reverse'}`,
            ]}
            justifyContent={'space-between'}
            textAlign={[
                'left',
                'left',
                'left',
                'left',
                `${idx % 2 === 0 ? 'left' : 'right'}`,
            ]}
            alignItems={'flex-start'}
            w='full'
            mb={isLast ? 20 : 28}>
            <Box w={['full', 'full', 'full', 'full', '50%']}>
                <Stack
                    spacing={3}
                    display={['none', 'none', 'none', 'none', 'block']}>
                    <Heading
                        fontFamily={'mono'}
                        fontSize='md'
                        color={ACCENT_COLOR}>
                        Featured Project
                    </Heading>
                    <Heading
                        mb={2}
                        fontSize={'3xl'}
                        fontWeight='bold'
                        color={'gray.300'}
                        transition='all 0.2s ease-in-out'
                        _hover={{ color: ACCENT_COLOR }}
                        cursor={'pointer'}>
                        {project.name}
                    </Heading>
                </Stack>

                <Card
                    my={[0, 0, 0, 0, 2]}
                    border='1px'
                    borderColor={GRADIENT_ACCENT_COLOR}
                    borderRadius={'none'}
                    boxShadow={'rgba(132, 59, 206, 0.15) 0px 8px 32px 10px'}
                    bgColor={'transparent'}>
                    <CardBody
                        color={'gray.400'}
                        opacity={0.87}
                        letterSpacing='wide'
                        lineHeight={'base'}>
                        <Heading
                            display={[
                                'block',
                                'block',
                                'block',
                                'block',
                                'none',
                            ]}
                            mb={4}
                            fontSize={'3xl'}
                            fontWeight='bold'
                            color={'gray.300'}
                            transition='all 0.2s ease-in-out'
                            _hover={{ color: ACCENT_COLOR }}
                            cursor={'pointer'}>
                            {project.name}
                        </Heading>
                        {project.description}
                        <Stack w={'full'}>
                            <ProjectTechList
                                isOdd={idx % 2 !== 0}
                                techList={project.technologies}
                                isInsideProjectCard={true}
                            />

                            <ProjectButtonGroup
                                website={project.website}
                                github={project.github}
                                isInsideProjectCard={true}
                            />
                        </Stack>
                    </CardBody>
                </Card>
                <ProjectTechList
                    isOdd={idx % 2 !== 0}
                    techList={project.technologies}
                    isInsideProjectCard={false}
                />
                <ProjectButtonGroup
                    website={project.website}
                    github={project.github}
                    isInsideProjectCard={false}
                />
            </Box>
            <Box
                position={'relative'}
                top={[0, 0, 0, 0, 12, 0, 0]}
                border='1px'
                borderColor={GRADIENT_ACCENT_COLOR}
                w={['full', 'full', 'full', 'full', '50%']}
                transition='all 0.2s ease-in-out'
                boxShadow={'rgba(132, 59, 206, 0.15) 0px 8px 32px 10px'}
                _hover={{
                    boxShadow: 'rgba(152, 67, 237, 0.501) 0px 8px 32px 10px',
                }}
                borderBottomRadius={'none'}>
                <Box>
                    <LiteYouTubeEmbed id={project.videoId} title={''} />
                </Box>
            </Box>
        </Flex>
    );
};

export default IndividualProjectCard;
