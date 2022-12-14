import React, { useEffect, useState } from 'react';
import responsive from '../../../images/responsive-2.jpg';
import standard from '../../../images/professional.png';
import ecommerce from '../../../images/ecommerce-1.png';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';
import gif from '../../../images/giphy.gif';
import { Fade } from 'react-reveal';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://tech-world-web.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="services-container p-5">
            <div className="text-center mt-5">
                <h4 className="text-warning text-uppercase">Our products</h4>
                <Fade top>
                <h1 className="text-secondary text-uppercase">Explore your favourite products</h1>
                </Fade>
            </div>

            <div className="row w-100 pl-5 pl-md-4 mb-5">
                <div class="container page-wrapper">
                    <div class="page-inner">
                        <div class="row mt-5 pt-5">
                           {
                               services.length === 0 && <div className="m-auto"><img src={gif} alt="" /></div>
                           }
                            {
                                services.map(service => <ServiceCard service={service}></ServiceCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Services;