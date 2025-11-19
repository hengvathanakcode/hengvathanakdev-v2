import React from 'react'
import info from "../../../db/info/main.json"
import profile from "../../../inc/img/info/profile.jpg";

import Educationcard from "../assets/education/Educationcard";

function Homecard() {
    return (
        <>
            <div>
                <div className='PROFILE d-flex align-items-lg-center align-items-md-center align-items-start justify-content-between '>
                    <div className=''>
                        <h1 className='font-w-700 m-0'>Hi, I'm <span>{info.lastname}</span> </h1>
                        <p className='font-s-16 font-w-500 '>{info.position}</p>
                        <p className='font-s-12 font-w-400'>
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
                        Education
                    </h5>
                    <div className=''>
                        <Educationcard />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homecard
