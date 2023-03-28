import React from 'react'
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"
import ContactBlurb from "../components/ContactBlurb"
import Nav from "../components/Nav"

function Contact() {

    return (
        <>
            <Nav/>
            <div className="min-h-screen flex flex-col items-center mt-16 mb-16 md:mx-8 md:justify-center md:mt-6 md:mb-6">
                <section className="flex flex-col items-center md:flex-row md:items-start md:gap-8 xl:w-full xl:justify-center xl:gap-48">
                    <ContactForm/>
                    <ContactBlurb/>
                </section>
            </div>
            <Footer/>            
        </>
    );
}

export default Contact;