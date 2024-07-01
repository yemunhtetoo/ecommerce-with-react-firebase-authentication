import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"
import { AuthContext } from '../contexts/AuthProvider';
import { CartContext } from '../contexts/CartProvider';

const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);
    const { user, logout } = useContext(AuthContext);
    const { getCartQty } = useContext(CartContext)

    // console.log(user)

    //add Event Listers
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    });

    //HandleMenuToggle
    function handleMenuToggle() {
        setMenuToggle(!menuToggle)
    }

    //HandleSocailToggler
    function handleSocialToggler() {
        setSocialToggle(!socialToggle)
    }

    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
            {/* header top start */}

            <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                <div className='container'>
                    <div className='header-top-area'>
                        <Link to="/sign-up" className='lab-btn me-3'><span>Create Account</span></Link>
                        <Link to="/login">Login In</Link>
                    </div>
                </div>
            </div>

            {/* header bottom */}
            <div className='container'>
                <div className='header-wrapper'>
                    {/* logo */}
                    <div className='logo-search-acte'>
                        <div className='logo'>
                            <Link to={"/"}>
                                <img src={logo} alt='' />
                            </Link>
                        </div>
                    </div>

                    {/* menu area */}
                    <div className='menu-area'>
                        <div className='menu'>
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/shop">Shop</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li className='d-md-block'><a href={'/cart-page'} className='custom-cart-icn'><i className='icofont-cart-alt'>{getCartQty > 0 ? getCartQty : ''}</i></a></li>
                                {
                                    user && <>
                                        <li><a href='#'>{user.email}</a></li>
                                        <li><Link to="/login" onClick={logout}>Logout</Link></li>
                                    </>
                                }
                            </ul>
                        </div>
                        {
                            user === null && (<>
                                {/* sign in & log in */}
                                <Link to="/sign-up" className='lab-btn me-3 d-none d-md-block'>Create Account</Link>
                                <Link to="/login" className='d-none d-md-block'>Log In</Link>
                            </>)

                        }


                        {/* menu toggler */}
                        <div onClick={handleMenuToggle} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        {/* social toggler */}
                        {
                            user === null &&
                            <div onClick={handleSocialToggler} className='ellepsis-bar d-md-none'>
                                <i className="icofont-info-circle"></i>
                            </div>
                        }

                        <div className='ellepsis-bar d-md-none'>
                            <i className='icofont-cart-alt'>{getCartQty > 0 ? getCartQty : ''}</i>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavItems
