import Head from 'next/head';
import React from 'react';

const SEO = () => {
    return (
        <Head>
            <title>Ronit Panda</title>
            <link
                rel='apple-touch-icon'
                sizes='180x180'
                href='/apple-touch-icon.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='32x32'
                href='/favicon-32x32.png'
            />
            <link
                rel='icon'
                type='image/png'
                sizes='16x16'
                href='/favicon-16x16.png'
            />
            <link rel='manifest' href='/site.webmanifest' />
            <meta property='og:url' content='https://ronit.pro' />
            <meta property='og:type' content='personal portfolio' />
            <meta property='og:title' content='Ronit Panda' />
            <meta name='twitter:card' content='summary_large_image' />
            <meta
                property='og:description'
                content="I'm a software engineer based out of India specializing in building full stack web apps. Currently, I'm an looking to join a team of passionate people to build products that make a difference."
            />
            <meta property='og:image' content={'rtpa-portfolio-hero-seo.png'} />
        </Head>
    );
};

export default SEO;
