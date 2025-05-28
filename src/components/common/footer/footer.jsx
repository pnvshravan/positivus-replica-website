import './footer.css';
import { NavLink } from 'react-router-dom';
import { ROUTE_PATH } from "../../routes/routes";
import footer_logo from '/src/assets/logo-white.svg';
//icons
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

/*
By default, section behaves as a block element, but without a proper layout, it may not wrap its child if there's no content.

Fix: Add display: flex; or display: block; explicitly.
*/

const Footer = ()=>{
    return(
        <>
            <section className='footer-section'> 
              <div className='inner-footer container'>
                <div className='nav-secondary'>
                    <div className='logo-footer'>
                        <NavLink to={ROUTE_PATH.HOME}>
                            <img className='f-logo-img' src={footer_logo}/>
                        </NavLink>
                    </div>
                    <div className="nav-links-footer">
                        <ul>
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
                    </div>
                    <div className='footer-social-links' style={{cursor:'pointer'}}>
                        <FaLinkedin size={30}/>
                        <FaSquareFacebook size={30}/>
                        <FaSquareXTwitter size={30}/>
                    </div>
                </div>
                <div className='contact-info'>
                    <div className='info-left'>
                        <p className='font-p'><mark>Contact us: </mark></p>

                        <ul>
                            <li>Email: info@positivus.com</li>
                            <li>Phone: 555-567-8901</li>
                            <li>
                                Address: 1234 Main St, Moonstone City, 
                                Stardust State. 12345
                            </li>
                        </ul>
                    </div>
                    <div className='info-right'>
                        <input type="email" name="" id="" placeholder='Email'/>
                        <button type="submit">Subsribe to news</button>
                    </div>
                </div>
                <hr className='hr'/>
                <div className='copyright'>
                    
                    <p className='copyright-text'>
                        &copy; 2025 Positivus. All Rights Reversed.
                    </p>
                    {/* <a href="/HOME">Privacy Policy</a> */}
                    <NavLink to={ROUTE_PATH.HOME}>Privacy Policy</NavLink>
                </div>
                <div className='credits'>
                    <p className='credits-line'>Design by <a href="https://olgaaverchenko.gumroad.com/" target='_blank'><i>Olga Averchenko</i></a></p>
                </div>
              </div>
            </section>
        </>
    );
}

export default Footer;