import React from 'react';
import Hero from '../components/Hero'
import ProductDetails from "../components/ProductDetails"
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'
import Nav from "../components/Nav"

function Home() {
    return (
        <>
            <Nav/>
            <Hero />
            <ProductDetails />
            <Reviews />
            <Footer />
        </>
    );
}

export default Home;