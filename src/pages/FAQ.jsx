import React from "react"
import Nav from "../components/Nav"
import Footer from "../components/footer"
import FAQCard from "../components/FAQCard"

export default function FAQ() {
    return (
        <>
            <Nav/>
            <div className="min-h-[800px] flex justify-center mb-8 mt-14">
                <div className="w-[325px] md:w-[425px]">
                    <h1 className="text-2xl text-center">Frequently Asked Questions</h1>
                    <div className="h-[1px] w-[325px] bg-primary mt-2 md:w-[425px]"></div>
                    <FAQCard
                        id="faq 1"        
                        question="How does the software work?"   
                        answer="Oversightly is a cutting-edge software platform designed to empower teachers in managing student AI utilization within the classroom. It provides a user-friendly infrastructure that allows teachers to seamlessly integrate AI tools and applications into their teaching methodologies. Through Oversightly, teachers can monitor and control AI usage, set permissions, and curate a safe and productive AI learning environment for their students."        
                    />
                    <FAQCard
                        id="faq 2"        
                        question="Why should I use this in my classroom?"   
                        answer="Oversightly offers several key benefits for educators and students alike. First and foremost, it enhances student learning by providing access to a wide range of AI-driven educational resources. Teachers can personalize the learning experience, cater to individual student needs, and foster a deeper understanding of complex concepts. Oversightly also promotes digital literacy, critical thinking, and problem-solving skills by encouraging responsible AI usage. Additionally, the platform ensures a secure and controlled environment, safeguarding students from inappropriate content and potential distractions."        
                    />
                    <FAQCard
                        id="faq 3"        
                        question="What types of applications can I manage?"   
                        answer="Oversightly supports a diverse array of AI applications suitable for educational purposes. These include language processing tools for reading comprehension and language learning, AI-based tutors to assist with various subjects, adaptive learning platforms, virtual simulations, and more. The platform's compatibility extends to both pre-existing AI tools and those developed specifically for educational use, giving teachers the flexibility to incorporate the most relevant and effective AI resources into their teaching strategies."        
                    />
                    <FAQCard
                        id="faq 4"        
                        question="Is it easy to set up and use?"   
                        answer="Absolutely! Oversightly is designed with simplicity and user-friendliness in mind. The setup process is straightforward, and our team provides comprehensive onboarding support to ensure a smooth transition. The platform's intuitive interface enables teachers to easily manage student access to AI tools, customize permissions, and track individual progress. Schools and districts can seamlessly integrate Oversightly into their existing educational technology infrastructure, making it hassle-free for educators to embrace AI-powered learning in the classroom."        
                    />
                    <FAQCard
                        id="faq 5"        
                        question="How is privacy and security managed?"   
                        answer="At Oversightly, student data privacy and security are of utmost importance. We adhere to strict data protection protocols and comply with relevant privacy laws and regulations. All student data is encrypted and stored securely on dedicated servers, accessible only to authorized personnel. Oversightly's infrastructure is continuously monitored and updated to defend against potential cyber threats. We also provide schools and teachers with comprehensive guidelines to ensure responsible data handling, empowering them to safeguard their students' privacy while using AI tools."        
                    />
                    <FAQCard
                        id="faq 6"        
                        question="Do you offer analytics for teachers?"   
                        answer="Yes, Oversightly provides robust analytics and reporting capabilities to assist teachers in assessing student performance and AI utilization. Teachers can access detailed insights into individual student progress, identify strengths and areas for improvement, and tailor their instructional approaches accordingly. The platform generates comprehensive reports on AI tool usage, helping teachers measure the effectiveness of various AI resources and optimize their integration into the curriculum. These analytics play a vital role in enhancing the overall learning experience and facilitating data-driven decision-making for educators."        
                    />
                </div>
            </div>
            <Footer/>
        </>
    )
}