import React, {useState} from "react"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function LostPassword() {

    const [lostPasswordForm, setLostPasswordForm] = useState("")

    function updateLostPasswordForm(e) {
        setLostPasswordForm(e.target.value)
    }

    function submitLostPassword(e) {
        e.preventDefault()
        setLostPasswordForm("")
    }

    return (
        <>
            <Nav/>
            <div className="min-h-[900px] flex justify-center items-center mt-14">
                <div className="font-serif w-[325px] h-[350px] bg-alternative text-white rounded-md">
                    <h1 className="text-xl text-center mb-6 mt-6 border-b border-primary pb-3">Lost Password</h1>
                    <h2 className="text-center">Please enter your email address below. You will receive a link to create a new password via email.</h2>
                    <form 
                        onSubmit={submitLostPassword}
                        className="mt-6 flex flex-col items-center"
                    >
                        <label htmlFor="email"></label>
                        <input 
                            type="email"
                            placeholder="Email"
                            required
                            value={lostPasswordForm} 
                            onChange={updateLostPasswordForm}
                            className="h-10 w-[305px] mx-2 bg-secondary border border-alternative rounded-md px-2 font-serif text-black"
                        />
                        <button className="text-white bg-primary w-1/2 rounded-2xl h-11 transition ease-in-out delay-100 hover:bg-highlight flex items-center justify-center mt-14">Submit</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}