import { OrgData } from '../types/org';

export const orgData: {
    [key: string]: OrgData;
} = {
    Superkit: {
        org: {
            name: 'Superkit',
            website: 'https://superkit.io',
        },
        joiningMonth: 'Jan 2023',
        leavingMonth: 'Oct 2023',
        position: 'Founding Engineer',
        work: [
            'Extensively worked on our cron jobs workflow that basically inserts/deletes/updates realtime data into our DB with a Redis cache layer, substantially reducing our users wait time paired up with api costs',
            'Added an event bus async communication system between multiple services in our monorepo to communicate between each other and also trigger cron jobs, on variety of runtimes.',
            'implemented variety of long running cron jobs on serverless and edge runtimes with upstash and proper breakdown of big jobs into small ones',
            'Worked extensively on LLMs on variety of projects, which includes a service which runs analysis with various parameters on Vercel edge runtimes with Prisma data proxy, and an admin panel to crawl over variety of urls recursively generating all child urls to create Pinecone embeddings',
            'Added tRPC to the build our APIs making our developer experience improve significantlly, helps us ship 10x faster',
            'Revamped the entire UI for app.superkit.io',
            'Migrated from having separate repositories to a TurboRepo MonoRepo',
            // 'Added a reusable template model in our campaign templates service which enables us share created templates within multiple apps of our monoRepo, which was possible to achieve my embedding required templates with an iframe which also included embedding designs inside the same',
            'Added a consistent design system through out our entire monoRepo',
            'Added a robust CI/CD pipeline to the monoRepo improving dev experience as our CI/CD pipeline is now way faster due to turbo repo and Vercel dependency caching',
            'Added shared schema type validation within variety of apps via a common service with Zod',
            'Transitioned from Firebase -> MongoDB+Typegoose -> Prisma + MongoDB + Prisma data proxy for edge runtimes.',
            'Added tailwind CSS support to existing material ui and chakra ui projects, improving developer experience while creating UI, and helps us being way more productive',
            'Added Zustand state management tooling to our entire app and improved code style',
        ],
    },
    SuperTokens: {
        org: {
            name: 'SuperTokens',
            website: 'https://supertokens.com',
        },
        joiningMonth: 'Jan 2022',
        leavingMonth: 'Jun 2022',
        position: 'Software Engineer',
        work: [
            'Extensively worked on the Golang SDK of SuperTokens. This is one of the many backend SDKs used by SuperTokens to interact with the core which does all the heavy lifting of session management.',
            'Built various dummy implementations of the SuperTokens SDK in Golang with go-fiber, gRPC. And also built an implementation with svelte using the SuperTokens-React-SDK.',
            'Wrote extensive unit tests for the entire Golang SDK and contributed to CI/CD pipelines for the SDK.',
            'Collaborated with other fellow engineers in pair programming sessions and also participated in brainstorming sessions with the management team discussing customer acquisition and growth opportunities.',
        ],
    },
    Ether: {
        org: {
            name: 'Ether',
            website: 'https://github.com/sinhadityaforever/Ether_Frontend',
        },
        joiningMonth: 'Feb 2021',
        leavingMonth: 'Sept 2021',
        position: 'Co-Founder & Software Developer',
        work: [
            'Ether is the start-up that I tried to build in my freshman year of college, it is a platform that connects you with a like-minded college student based on your interests and preferences which basically automates your networking. Worked on that product for some time and further decided to drop it.',
            'Extensively worked on the Mobile App built with Flutter and the backend server built with NodeJS including a Robust REST API and a chat server built with web-socket.',
            'Shipped the entire chat and matching UI for the mobile App including ice-breakers and many other gamification features.',
            'Implemented a blocking feature both on the front and backend where if a user is blocked 3x or reported 2x is removed from the app with all his data and can no longer use the app with the same credentials',
            'During the period we were also able to acquire 1500 users throughout our university via various organic marketing channels.',
        ],
    },
};

export const orgList = ['Superkit', 'SuperTokens', 'Ether'];

