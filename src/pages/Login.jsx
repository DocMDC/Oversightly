import React, {useState} from 'react'
import {Link} from "../../node_modules/react-router-dom"
import Nav from "../components/Nav"

function Login() {
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    function updateLoginForm(e) {
        const {name, value} = e.target
        setLoginForm(prev => {
            return ({
                ...prev,
                [name]: value
            })
        })
    }

    function handleSubmitLogin(e) {
        e.preventDefault()
        setLoginForm({
            username: '',
            password: ''
        })
    }

    return (
        <>
            <Nav/>
            <div className="flex flex-col items-center justify-center min-h-[900px] py-8">
                <div className="h-[400px] w-80 bg-alternative rounded-2xl py-4 sm:w-96">
                    <h1 className="text-white text-center text-2xl">Login</h1>
                    <div className="border-b border-primary mt-2"></div>
                    <form onSubmit={handleSubmitLogin} className="flex flex-col items-center p-4 justify-center h-full">
                        <input 
                            type="text" 
                            placeholder="Username"
                            name='username'
                            onChange={updateLoginForm}
                            value={loginForm.username}
                            className="mb-10 w-full rounded-sm px-2 h-11"
                        />
                        <input 
                            type="password" 
                            placeholder="Password"
                            name='password'
                            onChange={updateLoginForm}
                            value={loginForm.password}
                            className="mb-10 w-full rounded-sm px-2 h-11"
                        />                            
                        <button className="text-white bg-primary w-1/2 rounded-2xl h-11 transition ease-in-out delay-100 hover:bg-highlight flex items-center justify-center">Submit</button>
                    </form>
                </div>
                <p className="mt-4">Not a member? 
                    <Link to="/signup">
                        <span className="text-primary cursor-pointer transition ease-in-out delay-100 hover:text-highlight"> Try for free.</span>
                    </Link>
                </p>
                <p className="mt-1">Forgot your 
                    <Link to="/lost-password">
                        <span className="text-primary cursor-pointer transition ease-in-out delay-100 hover:text-highlight"> password?</span>
                    </Link>
                </p>
            </div>
        </>
    )
}

export default Login;