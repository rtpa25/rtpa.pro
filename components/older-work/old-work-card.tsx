import {
    Card,
    CardBody,
    CardHeader,
    Flex,
    Heading,
    IconButton,
    ListItem,
    UnorderedList,
    Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { FiGithub } from 'react-icons/fi';
import { ACCENT_COLOR, GRADIENT_ACCENT_COLOR } from '../../styles/consts';
import { SideProject } from '../../types/side-proj';

interface OldWorkCardProps {
    oldProject: SideProject;
}

const OldWorkCard: FC<OldWorkCardProps> = ({ oldProject }) => {
    return (
        <Card
            bgColor={'transparent'}
            border='1px'
            borderColor={GRADIENT_ACCENT_COLOR}
            borderRadius={'none'}
            transition='all 0.2s ease-in-out'
            boxShadow={'rgba(132, 59, 206, 0.15) 0px 8px 32px 10px'}
            _hover={{
                boxShadow: 'rgba(152, 67, 237, 0.501) 0px 8px 32px 10px',
            }}>
            <CardHeader>
                <Flex justifyContent={'space-between'} alignItems='center'>
                    <Heading
                        color={ACCENT_COLOR}
                        fontWeight='normal'
                        fontSize={'2xl'}>
                        {oldProject.name}
                    </Heading>
                    <IconButton
                        aria-label={'github'}
                        variant='outline'
                        icon={<FiGithub />}
                        color={ACCENT_COLOR}>
                        <a
                            href={oldProject.github}
                            target='_blank'
                            rel='noopener noreferrer'
                        />
                    </IconButton>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text
                    color={'gray.400'}
                    opacity={0.87}
                    letterSpacing='wide'
                    lineHeight={'tall'}>
                    {oldProject.description}
                </Text>
                <UnorderedList
                    listStyleType='none'
                    mt={8}
                    ml={0}
                    w={'full'}
                    justifyContent={'flex-start'}
                    display={'flex'}
                    flexWrap={'wrap'}>
                    {oldProject.techList.map((tech) => (
                        <ListItem
                            key={tech}
                            fontFamily={'mono'}
                            mr={2.5}
                            mt={0}
                            mb={2}
                            color={ACCENT_COLOR}
                            fontSize={'sm'}>
                            {tech}
                        </ListItem>
                    ))}
                </UnorderedList>
            </CardBody>
        </Card>
    );
};

export default OldWorkCard;
