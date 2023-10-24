import {
    Box,
    Button,
    Card,
    CardBody,
    Flex,
    Heading,
    Image,
    Stack,
    Tag,
    TagLabel,
} from '@chakra-ui/react';
import { FC } from 'react';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { ACCENT_COLOR, GRADIENT_ACCENT_COLOR } from '../../styles/consts';
import { OpenSourceProject } from '../../types/open-source';
import ProjectTechList from '../work/project-tech-list';

interface OpenSourceCardProps {
    project: OpenSourceProject;
    idx: number;
    isLast: boolean;
}

const OpenSourceCard: FC<OpenSourceCardProps> = ({ project, idx, isLast }) => {
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
                    <Flex
                        gap={2}
                        justifyContent={idx % 2 === 0 ? 'start' : 'end'}>
                        {project.tags.map((tag, idx) => (
                            <Tag
                                key={idx}
                                size={'md'}
                                colorScheme={
                                    tag.type === 'feature'
                                        ? 'green'
                                        : tag.type === 'bug fix'
                                        ? 'red'
                                        : tag.type === 'test'
                                        ? 'blue'
                                        : 'gray'
                                }
                                borderRadius={'md'}>
                                <TagLabel>{tag.text}</TagLabel>
                            </Tag>
                        ))}
                    </Flex>
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
                        display={'flex'}
                        flexDirection={'column'}
                        gap={3}
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
                            // mb={4}
                            fontSize={'3xl'}
                            fontWeight='bold'
                            color={'gray.300'}
                            transition='all 0.2s ease-in-out'
                            _hover={{ color: ACCENT_COLOR }}
                            cursor={'pointer'}>
                            {project.name}
                        </Heading>
                        <Flex
                            gap={3}
                            display={['flex', 'flex', 'flex', 'flex', 'none']}
                            justifyContent={'start'}>
                            {project.tags.map((tag, idx) => (
                                <Tag
                                    key={idx}
                                    size={'md'}
                                    colorScheme={
                                        tag.type === 'feature'
                                            ? 'green'
                                            : tag.type === 'bug fix'
                                            ? 'red'
                                            : tag.type === 'test'
                                            ? 'blue'
                                            : 'gray'
                                    }
                                    borderRadius={'md'}>
                                    <TagLabel>{tag.text}</TagLabel>
                                </Tag>
                            ))}
                        </Flex>
                        {project.work}
                        <Stack w={'full'}>
                            <ProjectTechList
                                isOdd={idx % 2 !== 0}
                                techList={project.tech}
                                isInsideProjectCard={true}
                            />
                            <Button
                                variant='solid'
                                bgColor={'#591090fb'}
                                display={[
                                    'block',
                                    'block',
                                    'block',
                                    'block',
                                    'none',
                                ]}
                                mt={3}
                                _hover={{
                                    bgColor: GRADIENT_ACCENT_COLOR,
                                    opacity: 0.8,
                                }}>
                                <Box
                                    display={'flex'}
                                    alignItems='center'
                                    justifyContent={'center'}
                                    textColor={'white'}
                                    gap={4}>
                                    <span>View Contribution</span>
                                    <BsBoxArrowUpRight />
                                </Box>
                            </Button>
                        </Stack>
                    </CardBody>
                </Card>
                <ProjectTechList
                    isOdd={idx % 2 !== 0}
                    techList={project.tech}
                    isInsideProjectCard={false}
                />
                <Button
                    variant='solid'
                    display={['none', 'none', 'none', 'none', 'inline-flex']}
                    bgColor={GRADIENT_ACCENT_COLOR}
                    mt={3}
                    _hover={{
                        bgColor: GRADIENT_ACCENT_COLOR,
                        opacity: 0.8,
                    }}>
                    <Box display={'flex'} alignItems='center' gap={4}>
                        <span>View Contribution</span>
                        <BsBoxArrowUpRight />
                    </Box>
                </Button>
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
                    <Image src={project.imageUrl} alt='project' />
                </Box>
            </Box>
        </Flex>
    );
};

export default OpenSourceCard;

