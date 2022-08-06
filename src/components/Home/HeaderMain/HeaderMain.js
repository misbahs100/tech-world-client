import React from 'react';
import headerBg from '../../../images/header-bg.jpg';
import computer from '../../../images/computer.png';
import cssPic from '../../../images/mobile.jpg';
import bootstrapPic from '../../../images/fan.jpg';
import wordprssPic from '../../../images/hdd.jpeg';
import boxPic from '../../../images/clock.jpg';
import './HeaderMain.css';
import logo from '../../../images/logo-4.png';
import logoo from '../../../images/logoo.png';

const HeaderMain = () => {
    return (
        <div>

            <main style={{ height: '600px' }} className="row d-flex align-items-center w-100 ">
                <div className="col-md-10 col-sm-10 col-10 offset-md-1 offset-1">
                    <div className="logo-container"><img src={logoo} alt="" /></div>
                    <h1 className="text-center mb-5"><span className="text-warning">Tech</span> <span className="text-white">World</span></h1>
                    <h1 className="text-white">Start Finding Here <br /> Your Daily Tech Products</h1>
                    <p className="text-warning" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium libero necessitatibus facere aspernatur non sit nulla, et unde, harum dolore obcaecati tempore suscipit nihil quae. Consequatur quibusdam saepe sequi illum.</p>
                </div>
            </main>
            <div className="text-center d-flex justify-content-center headerMainImages hidden-xs hidden-ms">
                <div><img className=" " src={computer} alt="" /></div>
                <div><img className="" src={cssPic} alt="" /></div>
                <div><img className="" src={bootstrapPic} alt="" /></div>
                <div><img className="" src={wordprssPic} alt="" /></div>
                <div><img className="" src={boxPic} alt="" /></div>
            </div>

        </div>
    );
};

export default HeaderMain;