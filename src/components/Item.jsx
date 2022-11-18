import React from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../actions/cartActions'

export default function Item({product}) {
  const addToCart = {marginTop: "0.8rem",color: "#fff", padding: "5px 15px", fontSize: "1.5rem"}
  const dispatch = useDispatch()
  return (
    <div className='product' >
        <h4>{product.title}</h4>
        <p>{product.price}</p>
        <button style={addToCart} onClick={() => dispatch(addCart({...product, quantity: 1}))}> Add To Cart</button>
      </div>
  )
}
