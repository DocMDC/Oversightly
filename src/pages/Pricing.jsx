import React from 'react';
import {RiArrowRightLine} from 'react-icons/ri'
import PricingCard from "../components/PricingCard"
import {FcFlowChart} from "react-icons/fc"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import {Link} from "../../node_modules/react-router-dom"

function Pricing() {
    return (
        <>
            <Nav/>
            <div className="min-h-screen py-16 px-16 flex flex-col items-center sm:px-20">
                <h1 className="text-4xl text-center font-serif mb-10 mt-6">Supercharge your classroom. Try for 
                    <Link to="/signup">
                        <span className="text-primary cursor-pointer transition ease-in-out delay-100 hover:text-highlight"> free.
                        </span>
                    </Link>
                </h1>
                <Link to="/signup">
                    <div className="w-36 flex items-center bg-primary rounded-2xl h-12 p-2 cursor-pointer mb-14 transition ease-in-out delay-100 hover:bg-highlight">
                        <p className="mr-auto text-white font-serif text-md">Get started</p>
                        <span className="text-white text-xl"><RiArrowRightLine/></span>
                    </div>
                </Link>
                <div className="flex flex-col lg:flex-row lg:gap-x-10 xl:gap-x-16">
                    <PricingCard 
                        id='Standard'
                        type='Standard'
                        price='$5'
                        seat='seat /'
                        month='month'
                        students='Up to 30 students'
                        teachers='1 teacher'
                        dataUse='10 hours of data per user each month'
                    />
                    <PricingCard 
                        id='Pro'
                        type='Pro'
                        price='$8'
                        seat='seat /'
                        month='month'
                        students='Up to 100 students'
                        teachers='5 teachers'
                        dataUse='15 hours of data per user each month'
                    />
                    <PricingCard 
                        id='Enterprise'
                        type='Enterprise'
                        price={<FcFlowChart/>}
                        seat=''
                        month=''
                        students='Unlimited students'
                        teachers='Unlimited teachers'
                        dataUse='20 hours of data per user each month'
                    />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Pricing;