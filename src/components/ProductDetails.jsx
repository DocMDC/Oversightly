import React from "react"
import {MdOutlineDashboardCustomize} from "react-icons/md" 
import {AiOutlineFlag} from "react-icons/ai"
import {BsFillJournalBookmarkFill} from "react-icons/bs"
import {GiArtificialIntelligence} from "react-icons/gi"

export default function ProductDetails() {

    return (
        <div className="h-[1600px] relative bg-[#ebeff8] flex flex-col items-center justify-center -mt-12 before:content-[' '] before:transform before:rotate-6 before:bg-white before:h-64 before:w-[110%] before:-mx-6 before:absolute before:-top-24 after:content-[' '] after:transform after:rotate-6 after:bg-white after:h-64 after:w-[110%] after:-mx-6 after:absolute after:-bottom-36 md:h-[1200px]">
            <div className="w-screen font-serif px-10 max-w-sm md:max-w-2xl">
                <h4 className="text-xl text-highlight">Why Oversightly</h4>
                <h1 className="text-4xl mt-8 mb-16">A technology-first approach to embracing AI in the classroom</h1>
                
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row md:mb-12 md:space-x-12">
                        <div className="flex flex-col mb-10 space-y-3">
                            <MdOutlineDashboardCustomize className="text-primary text-4xl"/>
                            <h1>Flexible</h1>
                            <h2 className="text-gray-500 max-w-xs">Our dashboard is built with flexibility and customization in mind so that educators can monitor student interactions on their own terms</h2>
                        </div>
                        
                        <div className="flex flex-col mb-10 space-y-3">
                            <AiOutlineFlag className="text-primary text-4xl"/>
                            <h1>Automated</h1>
                            <h2 className="text-gray-500 max-w-xs">Our technology automatically flags inappropriate or questionable utilization, giving more time and more control to the teacher</h2>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:space-x-12">
                        <div className="flex flex-col mb-10 space-y-3">
                            <BsFillJournalBookmarkFill className="text-primary text-4xl"/>
                            <h1>Simple</h1>
                            <h2 className="text-gray-500 max-w-xs">Easily integrated with existing curricula</h2>
                        </div>
                        
                        <div className="flex flex-col mb-10 space-y-3">
                            <GiArtificialIntelligence className="text-primary text-4xl"/>
                            <h1>Powerful</h1>
                            <h2 className="text-gray-500 max-w-xs">Powered by the most cutting edge artificial intelligence technology from Open AI</h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}