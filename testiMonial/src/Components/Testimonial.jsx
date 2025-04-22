import React, { useState } from 'react'

export default function Testimonial() {

    const [currentIdex, setCurrentIdex] = useState(0)

    const testimonials = [
        {
            quote: "My fav Language was",
            author: "Java script"
        },
        {
            quote: "fav IPL team Entire Seasone",
            author: "CSK"
        },
        {
            quote: "I highly racommend this product to Everyone",
            author: "John Smith"
        },
        {
            quote: "best car Collection in the World",
            author: "Huxn car's"
        },
    ]


    const handlePrev = () => {
        setCurrentIdex((currentIdex + testimonials.length - 1) % testimonials.length)
    }

    const handleNext = () =>
        setCurrentIdex((currentIdex + 1) % testimonials.length)



    return (
        <div className='testimonials'>
            <div className="testimonials-quote">
                {testimonials[currentIdex].quote}
            </div>
            <div className="testimonials-author">
                {testimonials[currentIdex].author}
            </div>
            <div className="testimonials-nav">
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}
