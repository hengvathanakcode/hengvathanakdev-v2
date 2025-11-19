import React from 'react'
import info from "../../../db/info/main.json"
import profile from "../../../inc/img/info/profile.jpg";

import Educationcard from "../assets/education/Educationcard";
import Skillcard from "../assets/skill/Skillcard";
import Projectcard from "../assets/project/Projectcard";
import Highlightcard from '../highlightpage/uniprogram/Highlightcard';

function Homecard() {
    return (
        <>
            <div>
                <div className='PROFILE d-flex align-items-lg-center align-items-md-center align-items-start justify-content-between '>
                    <div className=''>
                        <h1 className='font-w-700 m-0'>Hi, I'm <span>{info.lastname}</span> </h1>
                        <p className='font-s-16 font-w-500 '>{info.position}</p>
                        <p className='font-s-12 font-w-500'>
                            <sup className='text-primary font-s-16'><i class="fa-solid fa-quote-left"></i></sup>
                            {info.commit}
                            <sub className='text-primary font-s-16'><i class="fa-solid fa-quote-right"></i></sub>
                        </p>
                    </div>
                    <div>
                        <img src={profile} alt="profile" className='profile-img' />
                    </div>
                </div>
                <div className='mt-3 mt-lg-5 mt-md-4'>
                    <h5 className='font-w-700'>
                        About
                    </h5>
                    <p className='font-s-14 text-secondary font-w-500'>
                        {info.moments}.
                    </p>
                </div>
                <div className='mt-3 mt-lg-5 mt-md-4'>
                    <h5 className='font-w-700'>
                        Educations
                    </h5>
                    <div className=''>
                        <Educationcard />
                    </div>
                </div>
                <div className='mt-3 mt-lg-5 mt-md-4'>
                    <h5 className='font-w-700'>
                        Skills
                    </h5>
                    <div className=''>
                        <Skillcard />
                    </div>
                </div>
                <div className='mt-3 mt-lg-5 mt-md-4'>
                    <div className='text-center mb-3'>
                        <span className='font-w-600 font-s-12 project-title-header'>My Projects</span>
                    </div>
                    <h4 className='text-center font-w-700'>Check out my latest work</h4>
                    <p className='text-center font-w-600 font-s-16 text-secondary'>The projects I created to explore Front-end project and put my skills into practice</p>
                    <div className=''>
                        <Projectcard />
                    </div>
                </div>
                <div className='mt-3 mt-lg-5 mt-md-4'>
                    <div className='text-center mb-3'>
                        <span className='font-w-600 font-s-12 project-title-header'>My Highlights</span>
                    </div>
                    <div className='text-center'>
                        <p className='font-s-16 font-w-500 text-secondary'>
                            <span className='text-dark font-w-600'>“My Highlights”</span> 
                            shows the most important and special moments in my life. It is a collection of my achievements, experiences, and milestones that show how I have grown and what matters to me.
                        </p>
                    </div>
                    <div className=''>
                        <Highlightcard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homecard
