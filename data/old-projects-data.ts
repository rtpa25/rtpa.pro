import { SideProject } from '../types/side-proj';

export const oldProjects: SideProject[] = [
    {
        name: 'GitTix',
        description:
            'A webapp used for selling and buying tickets. Built with micro services architecture, where each service is deployed in a separate docker container and all the containers are managed by kubernetes. ',
        github: 'https://github.com/rtpa25/GitTix',
        techList: [
            'Typescript',
            'Docker',
            'Kubernetes',
            'MongoDB',
            'Express',
            'NextJS',
            'Jest',
            'Nats-Streaming',
            'stripe',
            'Redis',
        ],
    },
    {
        name: 'FriendSpace',
        description:
            'A chat and call app for friends, chat with your friends, call them or make group calls. The chat service is custom build, the entire auth service is custom built with JWT tokens stored in cookies, add friends, send invitations and create groups.',
        github: 'https://github.com/rtpa25/friend-space',
        techList: [
            'NextJS',
            'TypeScript',
            'Socket.io',
            'Express',
            'Mongoose',
            'Docker',
            'Vercel',
            'Digital Ocean',
        ],
    },
    {
        name: 'Ether',
        description:
            'Ether is the startup that I tried to build in my sophomore year of college, it is a platform that connects you with a like-minded college student based on interests and preferences which basically automates networking.',
        github: 'https://github.com/sinhadityaforever/Ether_Frontend',
        techList: [
            'Flutter',
            'Express',
            'Postgres',
            'Socket.io',
            'Javascript',
            'Rest-API',
            'FirebaseAUTH',
            'AWS',
        ],
    },
    {
        name: 'Nykka',
        description:
            'E-Commerce app, with all the basic features like sorting, filtering of products, cart, checkout, a full blown auth with SuperTokens a beautiful and minimal landing page paired up with an admin dashboard',
        github: 'https://github.com/rtpa25/ecomm-web',
        techList: [
            'NextJS',
            'TypeScript',
            'TailwindCSS',
            'Redux-Toolkit',
            'Golang',
            'Gin-Gonic',
            'Postgres',
            'sqlc',
            'Docker',
            'Vercel',
            'Digital-Ocean',
        ],
    },
    {
        name: 'ZenNote',
        description:
            'A note taking app with a beautiful UI, the app is built with NextJS and TailwindCSS, leveraging the tip-tap-editor and built on top of it. Basic notes, Todo Lists, and emoji detection support. Backend is built with Express and MongoDB, hosted on Railway.',
        github: 'https://github.com/rtpa25/remnote-client',
        techList: [
            'NextJS',
            'TypeScript',
            'Tip-Tap-editor',
            'Express',
            'Mongoose',
            'MongoDB',
            'Docker',
            'Vercel',
            'Railway',
        ],
    },
];
