import React, {useState} from "react"
import {FaPlus} from "react-icons/fa"
import {FaMinus} from "react-icons/fa"

export default function FAQCard(props) {
    const [cardIsClicked, setCardIsClicked] = useState(false)

    return (
        <>
            <div 
                className="mt-10 w-[325px] h-14 bg-secondary flex justify-between items-center px-3 rounded-t-lg md:w-[425px] cursor-pointer"
                onClick={() => setCardIsClicked(prev => !prev)}
            >
                <h1 className="text-sm font-serif md:text-base">{props.question}</h1>
                <div>
                    {cardIsClicked ? 
                    <FaMinus/> 
                    : 
                    <FaPlus/>
                    }                
                </div> 
            </div>
            {cardIsClicked &&
                <div className="bg-alternative rounded-b-lg py-3 px-3">
                    <h2 className="text-sm font-serif text-white md:text-base">{props.answer}</h2>
                </div>
            }
        </>
    )
}