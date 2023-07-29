import React from "react"
import {RiQuestionAnswerFill} from "react-icons/ri"
import {TfiWrite} from "react-icons/tfi"
import {SiFastapi} from "react-icons/si"
import {Link} from "../../node_modules/react-router-dom"

export default function ContactBlurb() {
    return (
        <div className="w-full px-12 mt-16 flex flex-col justify-between h-[762px] sm:w-[500px] md:max-w-[375px] md:px-8 md:mt-0 lg:max-w-[475px]">
        <h1 className="text-gray-800 text-lg text-center font-serif font-bold leading-relaxed lg:text-2xl">Enhance your students' educational experience with monitored and well-regulated AI</h1>
        <div>
            <div className="flex h-24 items-center mt-14">
                <div className="w-48">
                <RiQuestionAnswerFill className="text-alternative text-5xl mx-auto"/>
                <h6 className="text-[12px] text-center text-gray-700 mt-2">Questions or <br/> concerns?</h6>
                </div>
                <div className="h-2/3 w-[1px] bg-gray-400"></div> 
                <div className="w-full px-3">
                <h5 className="text-center">Check out our 
                    <Link to="/faq">
                        <span className="text-primary cursor-pointer hover:text-highlight"> FAQ page</span>
                    </Link>
                </h5>
                </div>
                
            </div>
            <div className="flex h-24 items-center mt-16">
                <div className="w-48">
                <TfiWrite className="text-alternative text-5xl mx-auto"/>
                <h6 className="text-[12px] text-center text-gray-700 mt-2">Still have <br/> questions?</h6>
                </div>
                <div className="h-2/3 w-[1px] bg-gray-400"></div> 
                <div className="w-full">
                <h5 className="text-center px-6">Fill out our contact form and we'll get back to you in less than 24 hours</h5>
                </div>
            </div>

            <div className="flex h-24 items-center mt-16">
                <div className="w-48">
                <SiFastapi className="text-alternative text-5xl mx-auto"/>
                <h6 className="text-[12px] text-center text-gray-700 px-4 mt-2">Lightening fast service <br/> guaranteed.</h6>
                </div>
                <div className="h-2/3 w-[1px] bg-gray-400"></div> 
                <div className="w-full">
                <h5 className="text-center px-6">Didn't hear back in 24 hours? Let us know and we'll give a free month of Oversightly.</h5>
                </div>
            </div>
        </div>
        <div className="mt-14 bg-alternative text-white p-4 rounded-xl text-sm h-32 flex flex-col justify-between md:text-[12px] lg:text-sm">
            <h5>"Oversightly has allowed our school system to embrance AI. We can now utilize it as a well-regulated tool that enhances our students' educational experience."</h5>
            <h5 className="text-right">-John Smith</h5>
        </div>
    </div>
    )
}