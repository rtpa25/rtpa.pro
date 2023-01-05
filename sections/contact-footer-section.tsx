import React from 'react';
import { Element } from 'react-scroll';
import { Contact, Footer } from '../components/contact-footer';

const ContactFooterSection = () => {
    return (
        <>
            <Element name='contact'>
                <Contact />
            </Element>
            <Footer />
        </>
    );
};

export default ContactFooterSection;
