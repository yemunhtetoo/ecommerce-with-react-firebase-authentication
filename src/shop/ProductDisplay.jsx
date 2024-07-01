import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartProvider';
const desc ="We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:";
const ProductDisplay = ({item}) => {
    // console.log(item)
    const {name, id, price, seller, ratingCount, quantity, img} = item;

    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color, setColor] = useState("Select Color");
    const [morePro, setMorePro] = useState([])
    const { prequantity, setQuantity,cartItems,updateLocalStorage} = useContext(CartContext)
    function handleSizeChange(e){
        setSize(e.target.value)
    }

    function handleColorChange(e){
        setColor(e.target.value)
    }
    function handleDecrese(){
        if(prequantity>1){
            setQuantity(prequantity-1)
        }
    }

    function handleIncrease(){
        setQuantity(prequantity+1)
    }

    function handleSubmit(e){
        e.preventDefault();
        const product = {
            id:id,img,name,price,
            quantity:prequantity,size,color,coupon,subId:1000+'-'+Math.floor(Math.random() * 1001011)
        }
        
        // const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = cartItems.findIndex((item)=>item.id === id && item.color === color && item.size === size);
        if(existingProductIndex !== -1 ){
            cartItems[existingProductIndex].quantity += prequantity;
        }else{
            cartItems.push(product)
        }
        //update local storage
        updateLocalStorage(cartItems)

        //reset form fields
        setQuantity(1)
        setSize("Select Size");
        setColor("Select Color");
        setCoupon("")

    }
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className='rating'>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <span>{ratingCount} review</span>
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>{desc}</p>
        </div>
        {/* cart components */}
        <div>
            <form onSubmit={handleSubmit}>
                <div className='select-product size'>
                    <select value={size} onChange={handleSizeChange}>
                        <option>Select Size</option>
                        <option>SM</option>
                        <option>MD</option>
                        <option>LG</option>
                        <option>XL</option>
                        <option>XXL</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>

                <div className='select-product color'>
                    <select value={color} onChange={handleColorChange}>
                        <option>Select Color</option>
                        <option>Pink</option>
                        <option>Ash</option>
                        <option>Red</option>
                        <option>White</option>
                        <option>Black</option>
                    </select>
                    <i className='icofont-rounded-down'></i>
                </div>

                {/* cart plus minus */}
                <div className="cart-plus-minus">
                    <div className="desc qtybutton" onClick={handleDecrese}>-</div>
                    <input className='cart-plus-minus-box' type='text' name="qtybutton" id='qtybutton' value={prequantity} onChange={(e)=>setQuantity(parseInt(e.target.value,10))} />
                    <div className="inc qtybutton"  onClick={handleIncrease}>+</div>
                </div>

                {/* Coupon Field */}
                <div className='discount-coupon mb-2'>
                    <input type='text' placeholder='Enter Discount Code' value={coupon} onChange={(e)=>setCoupon(e.target.value)} />
                </div>

                {/* btn section */}
                <button type='submit' className='lab-btn'>
                    <span>Add To Cart</span>
                </button>
                <Link to="/cart-page" className='lab-btn bg-primary'>
                    <span>Check Out</span>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default ProductDisplay