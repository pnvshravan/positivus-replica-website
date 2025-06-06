import "./navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ROUTE_PATH } from "../../routes/routes";
import navbar_logo from '/src/assets/logo-black.svg'


import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const NavBar=()=>{

    const [toggle, setToggle] = useState(false);

    function openmenu(){
        setToggle(true);
        // Add overflow hidden to body when menu is open to prevent scrolling
        document.body.style.overflow = 'hidden';
    }
    
    function closemenu(){
        setToggle(false);
        // Restore scrolling when menu is closed
        document.body.style.overflow = 'auto';
    }

    // Close menu when clicking outside or on ESC key
    useEffect(() => {
        const handleEsc = (event) => {
        if (event.key === 'Escape') {
            closemenu();
        }
        };
        
        window.addEventListener('keydown', handleEsc);
        
        return () => {
        window.removeEventListener('keydown', handleEsc);
        // Ensure overflow is restored when component unmounts
        document.body.style.overflow = 'auto';
        };
    }, []);


    return(
        <>
            <nav className="navbar-container">
                <div className="navbar container">
                    <div className="logo"><NavLink to={ROUTE_PATH.HOME}><img src={navbar_logo}/></NavLink></div>
                    <div className="nav-links font-p">
                        <ul>
                            <li>
                                <NavLink to={ROUTE_PATH.COMING_SOON} className={({ isActive }) => isActive ? "active" : ""}>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to={ROUTE_PATH.COMING_SOON} className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
                            </li>
                            <li><NavLink to={ROUTE_PATH.COMING_SOON} className={({ isActive }) => isActive ? "active" : ""}>Use Cases</NavLink></li>
                            <li><NavLink to={ROUTE_PATH.COMING_SOON} className={({ isActive }) => isActive ? "active" : ""}>Pricing</NavLink></li>
                            <li><NavLink to={ROUTE_PATH.COMING_SOON} className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink></li>
                        </ul>
                    </div>
                    
                    <NavLink to={ROUTE_PATH.COMING_SOON}><button className="font-p nav-btn">Request a quote</button></NavLink>
                    <div className="menu-btn-mobile">
                            {
                            toggle? (<IoClose onClick={closemenu} className="closebtn" size={30}/>
                            ): 
                            (<IoMenu onClick={openmenu} className="menubtn" size={30}/>)
                            }
                    </div>
                </div>

            </nav> 

            {/* <div className="nav-links-mobile-container"> */}
                { toggle?(
                    <div className="nav-links-mobile font-p">
                        <ul className="container">
                            <li>
                                <NavLink to={ROUTE_PATH.COMING_SOON}>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to={ROUTE_PATH.COMING_SOON}>Services</NavLink>
                            </li>
                            <li><NavLink to={ROUTE_PATH.COMING_SOON}>Use Cases</NavLink></li>
                            <li><NavLink to={ROUTE_PATH.COMING_SOON}>Pricing</NavLink></li>
                            <li><NavLink to={ROUTE_PATH.COMING_SOON}>Blog</NavLink></li>
                        </ul>
                    </div>): (<div></div>)
                }
            {/* </div>  */}
        </>
    );
}

export default NavBar;