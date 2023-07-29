import React, {useState} from "react"
import {Link} from "../../node_modules/react-router-dom"

function SignupForm() {
    
    const [signupForm, setSignupForm] = useState({
        email: "",
        password: "",
    })

    function updateSignupForm(e) {
        const {name, value} = e.target
        setSignupForm(prev => {
            return ({
                ...prev,
                [name]: value
            })
        })
    }

    function submitSignupForm() {
        e.preventDefault()
        setSignupForm({
            email: "",
            password: "",
            confirmPassword: ""
        })
    }

    return (
        <div className="min-h-[465px] w-[325px] bg-secondary border-primary border rounded-md px-4">
            <h1 className="font-serif text-center text-2xl border-b border-alternative pb-6 mt-6">Create Account</h1>
            <form className="flex flex-col font-serif" onSubmit={submitSignupForm}>
                <label htmlFor="email" className="mt-6">Email<span className="text-red-600">*</span></label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={signupForm.email}
                    onChange={updateSignupForm}
                    required
                    className="border border-gray-300 bg-secondary h-10 mt-2 font-serif px-2 mb-6"
                />
                <label htmlFor="password">Password<span className="text-red-600">*</span></label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={signupForm.password}
                    onChange={updateSignupForm}
                    required
                    className="border border-gray-300 bg-secondary h-10 mt-2 font-serif px-2 mb-6"
                />
                <h6 className="text-[12px] mb-8">By clicking submit, I acknowledge receipt of the Oversightly, inc. 
                <Link to='/privacy'>
                    <span className="text-primary cursor-pointer hover:text-highlight "> privacy policy</span>
                </Link>
                </h6>
                        <button className="mx-auto w-56 flex items-center justify-center bg-alternative rounded-2xl h-12 p-2 cursor-pointer text-white transition ease-in-out delay-100 hover:bg-highlight">Submit</button>
            </form>
        </div>
    )
}

export default SignupForm