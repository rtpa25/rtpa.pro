import { Box, Flex, Image, Link, Text, UnorderedList } from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';
import { skills } from '../../data/skills-data';
import { ACCENT_COLOR } from '../../styles/consts';
import SectionHeading from '../misc/section-heading';
import SectionWrapper from '../misc/section-wrapper';
import SkillListItem from './skill';

const About = () => {
    return (
        <SectionWrapper variant='wide'>
            <Box mt={10}>
                <SectionHeading
                    sectionHeadingText={'About Me'}
                    sectionHeadingNumber={1}
                    showNumber={true}
                />
            </Box>
            <Flex flexDir={['column', 'column', 'column', 'row']}>
                <Box flex={1.3} mr={6}>
                    {/* <Text
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
                        {"I've"} previously worked at{' '}
                        <Link
                            color={ACCENT_COLOR}
                            href='https://supertokens.com'
                            rel='noopener noreferrer'
                            target='_blank'>
                            SuperTokens(YCS20){' '}
                        </Link>
                        as a Software Engineer
                    </Text> */}
                    <Text
                        my={4}
                        fontSize={'lg'}
                        lineHeight={1.5}
                        letterSpacing={'wide'}
                        color={'gray.500'}>
                        {
                            'Wrote my first line of code in late 2020. By early 2021 I built a mobile app that got '
                        }
                        <Link color={ACCENT_COLOR}>
                            1.5k downloads with a 4.9 rating
                        </Link>
                        {
                            ' on play store, Since then I have Worked at 2 startups as a full stack developer, Built '
                        }
                        <Link color={ACCENT_COLOR}>internal UI libraries</Link>
                        {' all the way to '}
                        <Link color={ACCENT_COLOR}>
                            deploying Kubernetes Clusters
                        </Link>
                        {" covering every realm of an app's lifecycle."}
                    </Text>

                    <Text
                        my={4}
                        fontSize={'lg'}
                        lineHeight={1.5}
                        letterSpacing={'wide'}
                        color={'gray.400'}>
                        Here are few{' '}
                        <Link
                            color={ACCENT_COLOR}
                            href='/resume.pdf'
                            rel='noopener noreferrer'
                            target='_blank'>
                            technologies
                        </Link>{' '}
                        That I have mastered:
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
                    ml={[0, 0, 0, 4]}
                    mt={[10, 10, 10, 5]}
                    h={'fit-content'}
                    w={['full', 'full', 'full', '40%']}
                    rounded={'lg'}
                    mb={'40'}
                    bgColor={ACCENT_COLOR}
                    _hover={{ bgColor: 'transparent' }}>
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.9}
                        glareColor={'black'}
                        glarePosition='all'>
                        <Image
                            opacity={0.8}
                            width={['100%']}
                            objectFit={'cover'}
                            height={['xs', 'xs', 'sm', 'sm']}
                            transition={'all 0.2s ease-in-out'}
                            _hover={{ opacity: 1 }}
                            rounded={'lg'}
                            alt='ronit'
                            src='ronit.png'
                        />
                    </Tilt>
                </Box>
            </Flex>
        </SectionWrapper>
    );
};

export default About;

