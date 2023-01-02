import {
    Box,
    Flex,
    Heading,
    Image,
    Link,
    Text,
    UnorderedList,
} from '@chakra-ui/react';
import { ACCENT_COLOR } from '../../styles/consts';
import SectionHeading from '../misc/section-heading';
import SkillListItem from './skill';

const About = () => {
    const skills = [
        'React',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'PostgreSQL',
        'Microservices',
        'Docker',
        'Kubernetes',
    ];

    return (
        <Flex
            flexDir={'column'}
            justifyContent='center'
            minH={'100vh'}
            maxW={['90%', '80%', '70%', '60%']}
            mx={'auto'}>
            <Box my={10}>
                <SectionHeading
                    sectionHeadingText={'About Me'}
                    sectionHeadingNumber={1}
                />
            </Box>
            <Flex flexDir={['column', 'column', 'column', 'row']}>
                <Box flex={1.3} mr={6}>
                    <Text
                        my={4}
                        fontSize={'lg'}
                        lineHeight={1.5}
                        letterSpacing={'wide'}
                        color={'gray.500'}>
                        Hello! My name is Ronit and I Specialize in building
                        full-stack web apps, being a startup enthusiast I am
                        currently looking to contribute to teams that are trying
                        to make a difference like yours. I have previously
                        worked at{' '}
                        <Link
                            color={ACCENT_COLOR}
                            href='https://supertokens.com'
                            rel='noopener noreferrer'
                            target='_blank'>
                            SuperTokens(YCS20)
                        </Link>
                    </Text>
                    <Text
                        my={4}
                        fontSize={'lg'}
                        lineHeight={1.5}
                        letterSpacing={'wide'}
                        color={'gray.500'}>
                        I have{' '}
                        <Link
                            color={ACCENT_COLOR}
                            href='https://www.linkedin.com/in/rtpa25/'
                            rel='noopener noreferrer'
                            target='_blank'>
                            also been a founder
                        </Link>{' '}
                        and I believe that it makes me more than just a
                        developer, enabling me to{' '}
                        <Link
                            color={ACCENT_COLOR}
                            href='https://github.com/rtpa25'
                            rel='noopener noreferrer'
                            target='_blank'>
                            push all my limits
                        </Link>{' '}
                        to solve the problem that the team is facing.
                    </Text>
                    <Text
                        my={4}
                        fontSize={'lg'}
                        lineHeight={1.5}
                        letterSpacing={'wide'}
                        color={'gray.500'}>
                        Here are few{' '}
                        <Link
                            color={ACCENT_COLOR}
                            href='/resume.pdf'
                            rel='noopener noreferrer'
                            target='_blank'>
                            technologies
                        </Link>{' '}
                        I’ve been working with recently:
                    </Text>
                    <UnorderedList
                        mx={0}
                        display={'grid'}
                        gridTemplateColumns={'repeat(2, minmax(140px, 200px))'}
                        gridRowGap={'2'}
                        gridColumnGap={'2'}
                        listStyleType='none'>
                        {skills.map((skill) => {
                            return <SkillListItem key={skill} skill={skill} />;
                        })}
                    </UnorderedList>
                </Box>
                <Box
                    flex={1}
                    ml={4}
                    mt={6}
                    h={'fit-content'}
                    rounded={'lg'}
                    bgColor={ACCENT_COLOR}>
                    <Image
                        opacity={0.8}
                        width={'100%'}
                        objectFit={'cover'}
                        height={'sm'}
                        transition={'all 0.2s ease-in-out'}
                        _hover={{ opacity: 1 }}
                        rounded={'lg'}
                        alt='ronit'
                        src='ronit.jpg'
                    />
                </Box>
            </Flex>
        </Flex>
    );
};

export default About;
