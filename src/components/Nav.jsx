import React, {useState} from 'react';
import {Link} from "../../node_modules/react-router-dom"
import {GiBurningEye, GiHamburgerMenu} from 'react-icons/gi'

function Nav() {
    const [hamburgerIsClicked, setHamburgerIsClicked] = useState(false)

    return (
        <>
            {hamburgerIsClicked ?
            <>
                <nav className="fixed top-0 left-0 right-0 flex items-center bg-secondary text-black h-16 px-8 shadow-lg md:px-16 xl:px-32 2xl:px-52 z-50">
                    <Link to="/" className="mr-auto flex items-center">
                        <GiBurningEye className="text-primary mr-4 text-4xl"/>
                        <h1 className="text-2xl">Oversightly</h1>
                    </Link>
                    <div className="flex items-center">
                        <div 
                            className="text-3xl text-gray-700 cursor-pointer md:hidden hover:text-primary transition ease-in-out delay-100"
                            onClick={() => setHamburgerIsClicked(prev => !prev)}
                        >
                            <GiHamburgerMenu />
                        </div>
                        <div className="hidden md:flex md:justify-between md:items-center md:w-96">
                            <Link to="/about" className="hover:text-primary transition ease-in-out delay-100">About</Link>
                            <Link to="/contact" className="hover:text-primary transition ease-in-out delay-100">Contact</Link>
                            <Link to="/pricing" className="hover:text-primary transition ease-in-out delay-100">Pricing</Link>
                            <Link to="/faq" className="hover:text-primary transition ease-in-out delay-100">FAQ</Link>
                            <Link to="/login" className="text-white text-center bg-primary p-2 w-24 rounded-lg border transition ease-in-out delay-100 border-primary hover:border hover:border-highlight hover:bg-highlight">Login</Link>
                        </div>
                    </div>
                </nav>
                <nav className="fixed top-16 bg-gray-200 bottom-0 left-0 right-0 flex flex-col justify-center items-center z-50 md:hidden">
                    <Link to="/about" className="hover:text-primary transition ease-in-out delay-100 mb-16 text-2xl" onClick={() => setHamburgerIsClicked(false)}>About</Link>
                    <Link to="/contact" className="hover:text-primary transition ease-in-out delay-100 mb-16 text-2xl" onClick={() => setHamburgerIsClicked(false)}>Contact</Link>
                    <Link to="/pricing" className="hover:text-primary transition ease-in-out delay-100 mb-16 text-2xl" onClick={() => setHamburgerIsClicked(false)}>Pricing</Link>
                    <Link to="/faq" className="hover:text-primary transition ease-in-out delay-100 mb-16 text-2xl" onClick={() => setHamburgerIsClicked(false)}>FAQ</Link>
                    <Link to="/login" className="text-white text-center text-2xl bg-primary p-2 w-48 rounded-lg border transition ease-in-out delay-100 border-primary hover:border hover:border-highlight hover:bg-highlight" onClick={() => setHamburgerIsClicked(false)}>Login</Link>
                </nav>
            </>
            :
            <nav className="sticky top-0 flex items-center bg-secondary text-black h-16 px-8 shadow-lg md:px-16 xl:px-32 2xl:px-52 z-50">
                <Link to="/" className="mr-auto flex items-center">
                    <GiBurningEye className="text-primary mr-4 text-4xl"/>
                    <h1 className="text-2xl">Oversightly</h1>
                </Link>
                <div className="flex items-center">
                    <div 
                        className="text-3xl text-gray-700 cursor-pointer md:hidden hover:text-primary transition ease-in-out delay-100"
                        onClick={() => setHamburgerIsClicked(prev => !prev)}
                    >
                        <GiHamburgerMenu />
                    </div>
                    <div className="hidden md:flex md:justify-between md:items-center md:w-[26rem]">
                        <Link to="/about" className="hover:text-primary transition ease-in-out delay-100">About</Link>
                        <Link to="/contact" className="hover:text-primary transition ease-in-out delay-100">Contact</Link>
                        <Link to="/pricing" className="hover:text-primary transition ease-in-out delay-100">Pricing</Link>
                        <Link to="/faq" className="hover:text-primary transition ease-in-out delay-100">FAQ</Link>
                        <Link to="/login" className="text-white text-center bg-primary p-2 w-24 rounded-lg border transition ease-in-out delay-100 border-primary hover:border hover:border-highlight hover:bg-highlight">Login</Link>
                    </div>
                </div>
            </nav>
            }
            
        </>
    );
}

export default Nav;