
import React, { useContext, useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import Visa from "../assets/images/shop/visa.png"
import Master from "../assets/images/shop/master.png"
import "../components/modal.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartProvider';
const CheckOutPage = () => {
    const [show, setShow] = useState(false);
    const [showThank, setShowThank] = useState(false);
    const [activeTab, setActiveTab] = useState("visa");
    const {removeCartQty} = useContext(CartContext)

    //handle tab change
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    }

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    //direct to home page
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleOrderConfirm = () => {
        setShow(false);
        setShowThank(true);
        removeCartQty();
    }
    function handleFinalClose() {
        setShowThank(false);
        navigate(from, { replace: true })
    }

    return (
        <div className='modalCard'>
            <Button variant="primary" className="py-2" onClick={handleShow}> Proceed to Checkout</Button>

            <Modal
                show={show}
                onHide={handleClose}
                animation={false}
                classname='modal fade'
                centered
            >
                <div className='modal-dialog'>
                    <h5 className='px-3 mb-3'>Select Your Payment Method</h5>
                    <div className='modal-content'>
                        <div className='modal-body'>
                            <div className='tabs mt-3'>
                                <ul className='nav nav-tabs' id='myTab' role='tablist'>
                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "visa" ? "active" : ""}`}
                                            id='visa-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='visa'
                                            aria-selected={activeTab === "visa"}
                                            onClick={() => handleTabChange("visa")}
                                            href='#visa'>
                                            <img src={`${Visa}`} alt='' width='80' />
                                        </a>
                                    </li>

                                    <li className='nav-item' role='presentation'>
                                        <a className={`nav-link ${activeTab === "paypal" ? "active" : ""}`}
                                            id='paypal-tab'
                                            data-toggle="tab"
                                            role='tab'
                                            aria-controls='paypal'
                                            aria-selected={activeTab === "paypal"}
                                            onClick={() => handleTabChange("paypal")}
                                            href='#paypal'>
                                            <img src={`${Master}`} alt='' width='80' />
                                        </a>
                                    </li>
                                </ul>

                                {/* contents */}

                                <div className='tab-content' id="myTabContent">
                                    {/* Visa content */}
                                    <div className={`tab-pane fade ${activeTab === "visa" ? "show active" : ""}`}
                                        id='visa'
                                        role='tabpanel'
                                        aria-labelledby='visa-tab'
                                    >
                                        {/* Visa tab content */}
                                        <div className='mt-4 mx-4'>
                                            <div className='text-center'>
                                                <h5>Credit Card</h5>
                                            </div>
                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type='text' name='name' className='form-control cardholder-zindexInput' required />
                                                    <span className="cardholder-zindex">Cardholder Name</span>
                                                </div>

                                                <div className='inputbox'>
                                                    <input type='text' name='number' id='number' min='1' max='999' className='form-control' required />
                                                    <span>Card Number</span> <i className='fa fa-eye'></i>
                                                </div>
                                                <div className='d-flex flex-row'>
                                                    <div className='inputbox'>
                                                        <input type='text' name='number' id='number' min='1' max='999' className='form-control' required />
                                                        <span>Expiration Date </span>
                                                    </div>
                                                    <div className='inputbox'>
                                                        <input type='text' name='number' id='number' min='1' max='999' className='form-control' required />
                                                        <span>CVV </span>
                                                    </div>
                                                </div>
                                                <div className='px-5 pay'>
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Order Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Paypal content */}
                                    <div className={`tab-pane fade ${activeTab === "paypal" ? "show active" : ""}`}
                                        id='paypal'
                                        role='tabpanel'
                                        aria-labelledby='paypal-tab'
                                    >
                                        {/* Visa tab content */}
                                        <div className='mt-4 mx-4'>
                                            <div className='text-center'>
                                                <h5>Paypal Account Info</h5>
                                            </div>
                                            <div className='form mt-3'>
                                                <div className='inputbox'>
                                                    <input type='text' name='name' className='form-control cardholder-zindexInput' required />
                                                    <span className="cardholder-zindex">Enter your Email</span>
                                                </div>

                                                <div className='inputbox'>
                                                    <input type='text' name='number' id='number' min='1' max='999' className='form-control' required />
                                                    <span>Your name</span>
                                                </div>
                                                <div className='d-flex flex-row'>
                                                    <div className='inputbox'>
                                                        <input type='text' name='number' id='number' min='1' max='999' className='form-control' required />
                                                        <span>Extra Info </span>
                                                    </div>

                                                    <div className='inputbox'>
                                                        <input type='text' name='number' id='number' min='1' max='999' className='form-control' required />
                                                        <span></span>
                                                    </div>
                                                </div>
                                                <div className='px-5 pay'>
                                                    <button className='btn btn-success btn-block' onClick={handleOrderConfirm}>Add Paypal</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* paypal desclaimer */}
                                <p className='mt-3 px-4 p-Disclamer'><em>Payment Disclaimer: </em>
                                    Again, the course video is completely free for you, if you have a burning desire to support my work</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                show={showThank}
                onHide={handleFinalClose}
                animation={false}
                classname='modal fade'
                centered
            >
                <div className='modal-dialog'>
                    <h5 className='px-3 mb-3'>Your Order is Confirmed.</h5>
                    <div className='modal-content border-none-custm'>
                            <div className='px-5 pay text-center'>
                                <button className='btn btn-success btn-block' onClick={handleFinalClose}>Close</button>
                            </div>
                    </div>

                </div>
            </Modal>
        </div>
    )
}

export default CheckOutPage