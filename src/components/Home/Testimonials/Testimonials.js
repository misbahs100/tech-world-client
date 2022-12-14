import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import wilson from '../../../images/document.png';
import TestimonialCard from '../TestimonialCard/TestimonialCard';
import gif from '../../../images/giphy.gif';
import { Fade } from 'react-reveal';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('https://tech-world-web.herokuapp.com/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])

    return (
        <section className="testimonial-container p-5">
            <div className="text-center mb-5 mt-5">
                <h4 className="text-warning text-uppercase">Happy Client's</h4>
                <Fade top>
                <h1 className="text-secondary text-uppercase">testimonials</h1>
                </Fade>
            </div>

            <div className="row mb-5 mt-5">
                {
                    testimonials.length === 0 && <div className="m-auto"><img src={gif} alt="" /></div>
                }
                {
                    testimonials.map(testimonial => <TestimonialCard testimonial={testimonial}></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonials;