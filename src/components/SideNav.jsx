import React, {useState} from 'react';
import {AiOutlinePlus} from "react-icons/ai"
import {BsTrash3Fill} from "react-icons/bs"
import {FaMoon} from "react-icons/fa"
import {FiSettings, FiLogOut} from "react-icons/fi"
import {Link} from "../../node_modules/react-router-dom"
import {GiHamburgerMenu} from 'react-icons/gi'

function SideNav() {

    const [sideHamburgerIsClicked, setSideHamburgerIsClicked] = useState(true)
    
    return (
        <>
            <div className="bg-gray-700 h-12 w-full flex flex-col items-start justify-start py-4 md:hidden fixed top-0 left-0 right-0">
                <GiHamburgerMenu 
                    className="text-white text-4xl hover:text-gray-300 cursor-pointer"
                    onClick={() => setSideHamburgerIsClicked(prev => !prev)}
                />
            </div>

            {sideHamburgerIsClicked &&
                <>
                    <div className="fixed top-12 bottom-0 right-0 left-[275px] bg-gray-900/[.54] md:hidden"></div>
                    <div className="flex md:hidden w-[275px] bg-[#202123] text-white p-3 flex-col justify-between fixed top-12 bottom-0">
                        <div className="flex flex-row border border-gray-500 p-3 items-center rounded-lg hover:bg-gray-700 cursor-pointer">
                            <AiOutlinePlus className="mr-4"/>
                            <h3>New session</h3>
                        </div>
                        <div className="border-t border-gray-500 py-3">
                            <div className="flex items-center h-12 rounded-lg px-2 hover:bg-gray-700 cursor-pointer">
                                <BsTrash3Fill className="mr-6"/>
                                <h3>Clear conversations</h3>
                            </div>
                            <div className="flex items-center h-12 rounded-lg px-2 hover:bg-gray-700 cursor-pointer">
                                <FaMoon className="mr-6"/>
                                <h3>Dark mode</h3>
                            </div>
                            <div className="flex items-center h-12 rounded-lg px-2 hover:bg-gray-700 cursor-pointer">
                                <FiSettings className="mr-6"/>
                                <h3>Settings</h3>
                            </div>
                            <Link 
                                to="/login"
                                className="flex items-center h-12 rounded-lg px-2 hover:bg-gray-700 cursor-pointer"
                            >
                                <FiLogOut className="mr-6"/>
                                <h3>Log out</h3>
                            </Link>
                        </div>
                        
                        <div 
                            className="absolute h-10 w-10 border border-black top-2 -right-12 ml-2 flex items-center justify-center text-black hover:bg-gray-700 hover:text-white cursor-pointer"
                            onClick={() => setSideHamburgerIsClicked(prev => !prev)}
                        >
                            <button>X</button>
                        </div>
                    </div>
                </>
            }
            
            <div className="hidden md:flex w-[275px] bg-[#202123] h-screen text-white p-3 flex-col justify-between fixed top-0 bottom-0">
                <div className="flex flex-row border border-gray-500 p-3 items-center rounded-lg hover:bg-gray-700 cursor-pointer">
                    <AiOutlinePlus className="mr-4"/>
                    <h3>New session</h3>
                </div>
                <div className="border-t border-gray-500 py-3">
                    <div className="flex items-center h-12 rounded-lg px-2 hover:bg-gray-700 cursor-pointer">
                        <BsTrash3Fill className="mr-6"/>
                        <h3>Clear conversations</h3>
                    </div>
                    <div className="flex items-center h-12 rounded-lg px-2 hover:bg-gray-700 cursor-pointer">
                        <FaMoon className="mr-6"/>
                        <h3>Dark mode</h3>
                    </div>
                    <div className="flex items-center h-12 rounded-lg px-2 hover:bg-gray-700 cursor-pointer">
                        <FiSettings className="mr-6"/>
                        <h3>Settings</h3>
                    </div>
                    <Link 
                        to="/login"
                        className="flex items-center h-12 rounded-lg px-2 hover:bg-gray-700 cursor-pointer"
                    >
                        <FiLogOut className="mr-6"/>
                        <h3>Log out</h3>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default SideNav;