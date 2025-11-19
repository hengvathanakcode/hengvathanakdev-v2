import React from 'react'
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <>
            <header>
                <div className='header-container'>
                    <div className='ul'>
                        <li>
                            <NavLink to="/" className="menu-item">
                                <i className="fa-regular fa-house"></i>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" className="menu-item">
                                <i className="fa-solid fa-user-gear"></i>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/projects" className="menu-item">
                                <i className="fa-solid fa-diagram-project m-0"></i>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/highlights" className="menu-item">
                                <i className="fa-solid fa-list-check"></i>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/contact" className="menu-item">
                                <i className="fa-regular fa-envelope"></i>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/github" className="menu-item">
                                <i className="fa-brands fa-github-alt"></i>
                            </NavLink>
                        </li>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
