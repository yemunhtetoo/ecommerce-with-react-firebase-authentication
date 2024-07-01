import React from 'react'
import Data from '../products.json'
const ShopCategory = ({filterItem,setItem,menuItems,setProducts,selectedCategory,setSelectedCategory,paginate}) => {
  return (
    <>
    <div className='widget-header'>
      <h5 className='ms-2'>All Categories</h5>
    </div>
    <div>
      <button 
      onClick={()=>{
        setProducts(Data)
        setSelectedCategory("All")
      }}
      className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`}>All</button>
      {
        menuItems.map((Val,id)=>{
          return (
            <button 
            onClick={()=>{
              filterItem(Val)
              paginate(1)
            }}
            className={`m-2 ${selectedCategory === Val ? "bg-warning" : ""}`} key={id}>{Val}</button>
          )
        })
      }
    </div>
    </>
  )
}

export default ShopCategory