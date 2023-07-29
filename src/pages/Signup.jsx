import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import SignupForm from "../components/SignupForm"

export default function Signup() {
    return (
        <>
            <Nav/>
            <div className="min-h-[800px] flex flex-col items-center justify-center mt-16 mb-16">
                <SignupForm/>
            </div>
            <Footer/>
        </>
    )
}