import React, { useContext, useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import delImageUrl from "../assets/images/shop/del.png"
import CheckOutPage from './CheckOutPage';
import { CartContext } from '../contexts/CartProvider';

const CartPage = () => {
    
    const {cartItems, setCartItems,updateLocalStorage} = useContext(CartContext);

    //calculate price
    const calculateTotalPrice = (item) =>{
        return item.price * item.quantity;
    }

    //handle quantity increase
    const handleIncrease = (item) =>{
        item.quantity += 1;
        setCartItems([...cartItems]);
        updateLocalStorage(cartItems);
    }

    //handle quantity decrease
    const handleDecrease = (item) => {
        if(item.quantity >1){
            item.quantity -=1;
            setCartItems([...cartItems]);
            updateLocalStorage(cartItems);
        }
    }

    //handle item remove 
    const handleRemoveItem = (item) => {
        const updateCart = cartItems.filter((cartItem)=> cartItem.subId !== item.subId);
        //update new cart
        setCartItems(updateCart);
        updateLocalStorage(updateCart);
    }

    

    //cart subtotal
    const cartSubtotal = cartItems.reduce((total,item)=>{
        return total + calculateTotalPrice(item);
    }, 0);
    // order total
    const orderTotal = cartSubtotal;
  return (
    <div>
        <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

        <div className='shop-cart padding-tb'>
            <div className='container'>
                <div className='section-wrapper'>
                    {/* cart top */}
                    <div className='cart-top'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='cat-product'>Products</th>
                                    <th className='cat-name'>Name</th>
                                    <th className='cat-color-size'>Color - Size</th>
                                    <th className='cat-price'>Prices</th>
                                    <th className='cat-quantity'>Quantity</th>
                                    <th className='cat-toprice'>Total</th>
                                    <th className='cat-edit'>Edit</th>
                                </tr>
                            </thead>

                            {/* tbody */}
                            <tbody>
                                {
                                    cartItems.map((item, indx)=> (
                                        <tr key={indx} >
                                            <td className='product-item cat-product'>
                                                <div className='p-thumb'>
                                                    <Link to={`/shop/${item.id}`}><img src={item.img} alt='' /></Link>
                                                </div>
                                            </td>
                                            <td className='p-content'>
                                                <Link to={`/shop/${item.id}`}>{item.name}</Link>
                                            </td>
                                            <td className='p-content'>
                                                <span>{item.color}</span> - 
                                                <span>{item.size}</span>
                                            </td>
                                            <td className='cat-price'>${item.price}</td>
                                            <td className='cat-quantity'>
                                                <div className='cart-plus-minus'>
                                                    <div className='des qtybutton' onClick={()=>handleDecrease(item)}>-</div>
                                                    <input type='text' className='cart-plus-minus-box' name='qtybutton' value={item.quantity} />
                                                    <di className='inc qtybutton' onClick={()=>handleIncrease(item)}>+</di>
                                                </div>
                                            </td>
                                            <td className='cat-toprice'>${calculateTotalPrice(item)}</td>
                                            <td className='cat-edit'>
                                                <button onClick={()=>handleRemoveItem(item)}>
                                                    <img src={delImageUrl} alt='' />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                    {/* cart bottom */}
                    <div className='cart-bottom'>
                        {/* cart checkout box */}
                        <div className='cart-checkout-box'>
                        <form className='coupon'>
                            <input className='cart-page-input-text' type='text' name='coupon' id='coupon' placeholder='Coupon code ....' />
                            <input type='submit' value={"Apply Coupon"} />
                        </form>

                        <form className='cart-checkout'>
                            <input type="submit" value={"Update Cart"} />
                            <div>
                                <CheckOutPage />
                            </div>
                        </form>
                    </div>
                    {/* checkout box end */}

                    {/* shopping box */}
                    <div className='shiping-box'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div className='calculate-shiping'>
                                    <h3>Calculate Shipping</h3>
                                    <div className="outline-select">
                                        <select>
                                            <option value="uk">United Kingdom (UK)</option>
                                            <option value="mm">Myanmar (MM)</option>
                                            <option value="jp">Japan (JP)</option>
                                            <option value="in">India (IN)</option>
                                            <option value="np">Nepal (NP)</option>
                                        </select>
                                        <span className='select-icon'>
                                            <i className='icofont-rounded-down'></i>
                                        </span>
                                    </div>

                                    <div className="outline-select shipping-select">
                                        <select>
                                            <option value="uk">New York (UK)</option>
                                            <option value="mm">Yangon (MM)</option>
                                            <option value="jp">Osaka (JP)</option>
                                            <option value="in">Deli (IN)</option>
                                            <option value="np">New Nepal (NP)</option>
                                        </select>
                                        <span className='select-icon'>
                                            <i className='icofont-rounded-down'></i>
                                        </span>
                                    </div>

                                    <input type='text' name='postalCode' id='postalCode' placeholder='Postcode/ZIP *' className='cart-page-input-text' />
                                    <button type='submit'>Update Address</button>
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='cart-overview'>
                                    <h3>Cart Totals</h3>
                                    <ul className='lab-ul'>
                                        <li>
                                            <span className='pull-left'>Cart Subtotal</span>
                                            <p className='pull-right'>$ {cartSubtotal}</p>
                                        </li>
                                        <li>
                                            <span className='pull-left'>Shipping and Handling</span>
                                            <p className='pull-right'>Free Shipping</p>
                                        </li>
                                        <li>
                                            <span className='pull-left'>Order Total</span>
                                            <p className='pull-right'>$ {orderTotal.toFixed(2)}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage