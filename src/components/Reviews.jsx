import React from 'react';
import {FaQuoteRight} from "react-icons/fa"
import ReviewCard from "./ReviewCard"
import review1 from "../assets/review1.jpg"
import review2 from "../assets/review2.png"
import review3 from "../assets/review3.jpg"

function Reviews() {
    return (
        <div className="min-h-[90vh] flex flex-col items-center px-20 relative">
            <FaQuoteRight className="text-[150px] text-gray-100 absolute z-0 top-0 motion-safe:animate-bounce-slow"/>
            <h1 className="text-4xl font-serif mb-20 mt-14 text-center md:text-5xl z-10">What our customers are saying</h1>
            <div className="lg:flex lg:flex-row">
                <ReviewCard 
                    image={review1}
                    review='Oversightly is a gamechanger! Instead of AI feeling like a threat to education, now it has become an invaluable asset for teaching and learning.'
                    name='Jonathan Smith'
                    grade='9th Grade Teacher'
                    school='Bellevue Middle School'
                />
                <ReviewCard 
                    image={review2}
                    review='I love Oversightly! Now I have the ability to bring AI into the classroom with assurance that my students are using it to improve their education.'
                    name='Emily VanDenBerghe'
                    grade='11th Grade Teacher'
                    school='Riverton High School'
                />
                <ReviewCard 
                    image={review3}
                    review='This has revolutionized the way I teach. Students can now access AI with excellent oversight. If you are a K-12 teacher you have to try this!'
                    name='Raeshun Glover'
                    grade='7th Grade Teacher'
                    school='Westhill Middle School'
                />
            </div>
        </div>
    );
}

export default Reviews;