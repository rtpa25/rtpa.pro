import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';
import theme from '../styles/theme';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta
                    name='Ronit'
                    content={`
          I’m a software developer specializing in building full stack web apps. Currently, I’m looking for an internship at a seed or series-A stage startup as a Full-Stack developer intern, to be around people like whom I want to be and contribute to teams that are trying to bring a DIFFERENCE 🚀.
        `}
                />
            </Head>
            <body>
                <ColorModeScript
                    initialColorMode={theme.config.initialColorMode}
                />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
