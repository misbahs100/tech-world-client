import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    const { imageURL, name, description, _id, price } = service;  // destructering

    const handleSLA = () =>{
        alert(`Please read the following SERVICE LEVEL AGREEMENT \n 
                 1. We use third parties for checking your authentication and authorization.
                 2. Your name, email, phone no, image will be saved in our database for your next visit.
                 3. We transfer valuable ordered data as JSON object format. No worry, your security of information is provided. Your data is kept safe.
    
                 If you accept these agreements, then click OK 
                 `);
    }
    return (
        <div class="el-wrapper">
            <div class="box-up">
                <img class="img" src={imageURL} alt="" />
                <div class="img-info">
                    <div class="info-inner">
                        <span class="p-name text-warning">{name}</span>
                        <span class="p-company">{description}</span>
                    </div>
                    <div class="a-size">Available at : <span class="size text-warning">Anytime</span></div>
                </div>
            </div>

            <div class="box-down">
                <div class="h-bg">
                    <div class="h-bg-inner"></div>
                </div>

                <Link to={`order/${_id}`}>
                    <button onClick={handleSLA} class="cart btn" >
                        <span class="price text-warning">{price}</span>
                        <span class="add-to-cart">
                            <span class="txt">Add in order</span>
                        </span>
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default ServiceCard;