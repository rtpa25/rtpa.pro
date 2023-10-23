import { Project } from '../types/project';

export const projects: Project[] = [
    {
        name: 'ShapeShifter',
        description:
            'A highly sophisticated job search portal. Gathers jobs from all job search websites, runs analysis on thousands of jobs your behalf and recommends you the best jobs based on your skills and preferences, straight to your inbox.',
        // github: 'https',
        // videoId: '6zU-NIniW1U',
        loomVideo:
            'https://www.loom.com/embed/3b78b6af89a94303b6605028711edde4?sid=e0b4adb4-266c-4a3a-a8b1-76be2b5fc40c',
        technologies: [
            'NextJS',
            'Typescript',
            'ChakraUI',
            'SWR',
            'MongoDB',
            'NodeJS',
            'ExpressJS',
            'Nats-Streaming-Server',
            'Docker',
            'Kubernetes',
            'Ingress-Nginx',
            'Skaffold',
            'Github-Actions',
            'DigitalOcean',
        ],
        website: 'https://shapeshifter-beta.vercel.app/',
    },
    {
        name: 'Micro Insta',
        description:
            'A social media app on which you can create profile, make friends via friend requests, create posts, like and comment on them.This app is implemented using micro services architecture where each service is deployed in a separate docker container and all the containers are managed by kubernetes.',
        github: 'https://github.com/rtpa25/MicroInsta',
        // videoId: '6zU-NIniW1U',
        loomVideo:
            'https://www.loom.com/embed/3b78b6af89a94303b6605028711edde4?sid=e0b4adb4-266c-4a3a-a8b1-76be2b5fc40c',
        technologies: [
            'NextJS',
            'Typescript',
            'ChakraUI',
            'SWR',
            'MongoDB',
            'NodeJS',
            'ExpressJS',
            'Nats-Streaming-Server',
            'Docker',
            'Kubernetes',
            'Ingress-Nginx',
            'Skaffold',
            'Github-Actions',
            'DigitalOcean',
        ],
        website: 'http://www.insta.nyka.site',
    },
    {
        name: 'Devfolio',
        description:
            'A web app that allows developers to build their own portfolio, without putting extra effort of designing and building it from scratch. Add about yourself, your projects, your tech-stack, your education and your experience and get a portfolio that looks good with a sharable link',
        github: 'https://github.com/rtpa25/portfolio-gen-web',
        videoId: 'bkAFyzbUSjU',
        technologies: [
            'NextJS',
            'ChakraUI',
            'Apollo-Client',
            'Redux-Toolkit',
            'graphql-code-gen',
            'TypeScript',
            'MongoDB',
            'ExpressJS',
            'Apollo-server-express',
            'TypeGraphQL',
            'Redis',
            'TypeGoose',
            'Docker',
            'Digital-Ocean',
            'Vercel',
        ],
        website: 'https://devfolio.ronit.pro/',
    },
    {
        name: 'CodePlay',
        description:
            'A NPM package that lets you make coding cheat sheets and notebooks all from your browser. Code bundling and transpiling on the browser with es-build makes code-play editors blazing fast. CodePlay is a collection of 3 packages a CLI, A local-Client and A local-Server which is an express server which serves the client and stores the users code in the users machine',
        github: 'https://github.com/rtpa25/code-play',
        videoId: 'dWgIhI5jauk',
        technologies: [
            'ReactJS',
            'TypeScript',
            'BulmaCSS',
            'Redux-Toolkit',
            'Lerna',
            'Commander',
            'Express',
            'EsBuild',
            'Monaco Editor',
            'npm',
        ],
        website: 'https://www.npmjs.com/package/code-play-rp',
    },
    {
        name: 'Learnify',
        description:
            'Learnify is a web app that converts distracting youtube playlist into an interactive Udemy like course hence resulting in less distraction and increased productivity. Built with the help of YouTube API, some of the key features are note taking feature with timestamps, progress indicator and the fact that there are no form of distracting popups or non-educational videos.',
        github: 'https://github.com/rtpa25/learnify-client',
        videoId: 'rkh9Q_L64s8',
        technologies: [
            'NextJS',
            'TypeScript',
            'TailwindCSS',
            'Redux-Toolkit',
            'SuperTokens',
            'YouTube-API',
            'Express',
            'Mongoose',
            'Docker',
            'Vercel',
            'Railway',
        ],
        website: 'https://learnify.site/',
    },
];

