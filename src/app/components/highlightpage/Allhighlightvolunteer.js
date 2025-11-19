import React from 'react'
import { Link } from "react-router-dom";


const Allhighlightvolunteer = (props) => {
    const { date, logo, link, title, program, position } = props;

    return (
        <>
            <div>
                <Link to={link} className="text-decoration-none text-dark">
                    <div className="apiv-card mb-3 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                            <div>
                                <img src={logo} alt="logo" className="volunteering-img" />
                            </div>

                            <div>
                                <p className="space-font font-s-10 font-w-700 text-secondary m-0">
                                    {program}
                                </p>

                                <p className="font-s-14 font-w-600 m-0">
                                    {title}
                                    <span className="hover-span">
                                        <i className="bi bi-chevron-right font-w-700"></i>
                                    </span>
                                </p>

                                <p className="font-s-10 font-w-500 text-secondary space-font m-0">
                                    {position}
                                </p>

                                <p className="text-secondary font-s-10 font-w-600 m-0 d-lg-none d-md-none d-block">
                                    {date}
                                </p>
                            </div>
                        </div>

                        <div className="d-none d-md-block d-lg-block">
                            <p className="text-secondary font-s-12 font-w-600 m-0">{date}</p>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )

}

export default Allhighlightvolunteer
