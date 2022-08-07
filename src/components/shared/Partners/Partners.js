import React from 'react';
import './Partners.css';
import apple from '../../../images/walton.png';
import coca from '../../../images/startech.png';
import samsung from '../../../images/samsung-logo.png';
import nike from '../../../images/daraz-logo.png';
import { Fade } from 'react-reveal';

const Partners = () => {
    return (
        <div className="partners-container bg-warning">
            <div className="row w-100 d-flex align-items-center">
                <div className="col-md-3 p-3 ml-5">
                    <Fade left>
                    <h3 className="text-dark">Our partners <br/> 
                    <span className="text-white">and clients</span> </h3>
                    </Fade>
                </div>
                <div className="col-md-8 d-flex flex-row-reverse">
                    <img style={{height: '80px'}} src={apple} alt=""/>
                    <img style={{height: '80px'}} src={coca} alt=""/>
                    <img style={{height: '80px'}} src={samsung} alt=""/>
                    <img style={{height: '80px'}} src={nike} alt=""/>
                    
                </div>
            </div>
        </div>
    );
};

export default Partners;