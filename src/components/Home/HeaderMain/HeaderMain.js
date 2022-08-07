import React, { useEffect } from 'react';
import headerBg from '../../../images/header-bg.jpg';
import computer from '../../../images/computer.png';
import cssPic from '../../../images/mobile.jpg';
import bootstrapPic from '../../../images/fan.jpg';
import wordprssPic from '../../../images/hdd.jpeg';
import boxPic from '../../../images/clock.jpg';
import './HeaderMain.css';
import logo from '../../../images/logo.png';
import { Fade } from 'react-reveal';
import Typical from 'react-typical'
import TextTransition, { presets } from "react-text-transition";
import { useState } from 'react';
import MovingComponent from 'react-moving-text'

const HeaderMain = () => {
    const TEXTS = [
        'Your Daily Tech Products',
        'Latest Smartphone you wanted',
        'Accessories for your friends and children',
    ];
    // const TEXTS = [
    //     "Forest",
    //     "Building",
    //     "Tree",
    //     "Color"
    //   ];
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            5000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <div>

            <main style={{ height: '600px' }} className="row d-flex align-items-center w-100 ">
                <div className="col-md-10 col-sm-10 col-10 offset-md-1 offset-1">
                    {/* <div className="logo-container"><img src={logo} alt="" /></div> */}
                    <Fade top>
                        <h1 className="text-center mb-5 d-flex justify-content-center"><span className="text-warning">Tech </span>
                            <MovingComponent
                                type="flip"
                                duration="1000ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="3"
                                fillMode="none"
                                className="text-white ml-2">
                                World
                            </MovingComponent>
                            </h1>
                    </Fade>
                    <h1 className="text-white">Start Finding Here <br />
                        <TextTransition springConfig={presets.slow} className="text-white">
                            {TEXTS[index % TEXTS.length]}
                        </TextTransition>
                    </h1>
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