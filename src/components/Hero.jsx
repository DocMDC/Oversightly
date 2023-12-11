import React from 'react';
import {Link} from "react-router-dom"

function Hero() {
    return (
        <div className="min-h-[900px] flex items-center justify-center">
            <div className="h-1/2 flex flex-col justify-start items-center px-5">
                <h1 className="font-serif text-4xl w-full text-center leading-normal mb-10 md:w-11/12 md:text-5xl md:leading-normal lg:text-6xl lg:leading-normal lg:w-10/12 xl:w-8/12 xl:leading-normal">Safe, monitored, and flexible AI built for the classroom</h1>
                <h2 className="text-xl w-10/12 text-gray-500 text-center mb-10 leading-normal md:w-7/12 md:text-2xl md:leading-normal lg:text-4xl lg:leading-normal">We provide the infrastructure for teachers to easily manage student AI utilization</h2>
                
                <Link to="/pricing">
                <button className="text-white text-lg text-center bg-primary p-2 w-40 h-14 rounded-lg border transition ease-in-out delay-100 border-primary mb-16 hover:border hover:border-highlight hover:bg-highlight"><span>Sign up</span></button>
                </Link>
                
            </div>
        </div>
    );
}

export default Hero;