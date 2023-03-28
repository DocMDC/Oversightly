import React, {useState} from 'react';

function ContactForm() {

    const [contactForm, setContactForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        more: ""
    })

    function updateContactForm(e) {
        const {name, value} = e.target
        setContactForm(prev => {
            return ({
                ...prev,
                [name]: value
            })
        })
    }   

    function submitContactForm(e) {
        e.preventDefault()
        setContactForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            more: ""
        })
    }

    return (
        <div className="min-h-[745px] w-[325px] relative bg-primary shadow-2xl rounded-xl mt-6 md:mt-4 lg:w-[475px]">
            <div className="min-h-[745px] w-[325px] bg-highlight absolute -top-2 -right-2 rounded-xl lg:w-full"></div>
            <div className="min-h-[740px] w-[320px] bg-secondary shadow-2xl p-4 absolute -top-4 -right-4 rounded-xl border-t border-primary lg:w-full">
                <h1 className="text-center text-xl font-serif border-b border-alternative pb-3">Contact Us</h1>
                <form onSubmit={submitContactForm}className="font-serif flex flex-col">
                    <label htmlFor="firstName" className="mt-4">First name <span className="text-red-600">*</span></label>
                    <input 
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={contactForm.firstName}
                        onChange={updateContactForm}
                        required
                        className="border border-gray-300 bg-secondary h-10 mt-2 font-serif px-2 mb-4"
                    />
                    <label htmlFor="lastName">Last name <span className="text-red-600">*</span></label>
                    <input 
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={contactForm.lastName}
                        onChange={updateContactForm}
                        required
                        className="border border-gray-300 bg-secondary h-10 mt-2 font-serif px-2 mb-4"                            
                    />
                    <label htmlFor="email">Work email <span className="text-red-600">*</span></label>
                    <input 
                        type="text"
                        id="email"
                        name="email"
                        value={contactForm.email}
                        onChange={updateContactForm}
                        placeholder="name@company.com"
                        required
                        className="border border-gray-300 bg-secondary h-10 mt-2 font-serif px-2 mb-4" 
                    />
                    <label htmlFor="phone">Phone number <span className="text-red-600">*</span></label>
                    <input 
                        type="tel"
                        id="phone"
                        name="phone"
                        value={contactForm.phone}
                        onChange={updateContactForm}
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="555-555-5555"
                        required
                        className="border border-gray-300 bg-secondary h-10 mt-2 font-serif px-2 mb-4" 
                    />
                    <label htmlFor="more">How can our team help you?</label>
                    <textarea 
                        type="textarea" 
                        rows="5"
                        id="more"
                        name="more"
                        value={contactForm.more}
                        onChange={updateContactForm}
                        placeholder="Tell us more about your school and what you'd like to accomplish with Oversightly"
                        className="border border-gray-300 bg-secondary mt-2 font-serif px-2 mb-4 resize-none" 
                    />
                    <h6 className="text-[12px] mb-8">By clicking submit, I acknowledge receipt of the Oversightly, inc. <span className="text-primary cursor-pointer hover:text-highlight ">privacy policy</span></h6>
                    <button className="mx-auto w-56 flex items-center justify-center bg-alternative rounded-2xl h-12 p-2 cursor-pointer text-white transition ease-in-out delay-100 hover:bg-highlight">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;