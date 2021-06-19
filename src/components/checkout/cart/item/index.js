import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from '../../../../redux/storeSlice'
import { useSelector, useDispatch } from 'react-redux'

const Item = ({ name, img, rating, by, price, id }) => {
  const [qty, setQty] = useState(1)
  const cart = useSelector((state) => state.store.cart)
  const dp = useDispatch()
  const increase = () => {
    setQty((prevState) => {
      console.log(id)
      dp(increaseQty(id))
      return prevState + 1
    })
  }
  const decrease = () => {
    setQty((prevState) => {
      if (prevState === 1) return prevState
      else {
        console.log(id)
        dp(decreaseQty(id))
        return prevState - 1
      }
    })
  }

  const Rating = []

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) Rating.push(<i className='fas fa-star'></i>)
    else Rating.push(<i key={i} className='far fa-star'></i>)
  }
  return (
    <div className='cart-item'>
      <div className='cart-item-img'>
        <img src={img} alt={name} />
      </div>
      <div className='cart-item-detail'>
        <h4>
          <Link to={`/products/${id}`}>
            <a href='#'>{name}</a>
          </Link>
        </h4>
        <h5>
          By{' '}
          <span>
            <a href='#'>{by}</a>
          </span>
        </h5>
        <div className='cart-item-rating'>
          <span style={{ color: '#FF9F1C' }}>{Rating}</span>
        </div>
        <p className='secondary'>In stock</p>
        <div className='qty'>
          <p>Qty</p>
          <div className='qty-btn'>
            <button className='qty-dec' onClick={decrease}>
              -
            </button>
            <span id='qty'>{qty}</span>
            <button className='qty-inc' onClick={increase}>
              +
            </button>
          </div>
        </div>
        <p className='secondary'>8% off 2 offers Available</p>
      </div>
      <div className='price'>
        <h4>{price}</h4>
        <h6>Free shipping</h6>
        <button
          id='remove'
          className='btn btn-remove'
          onClick={() => {
            console.log(id)
            dp(removeFromCart(id))
          }}
        >
          Remove
        </button>
        <button className='btn btn-wishlist'>Wishlist</button>
      </div>
    </div>
  )
}
export default Item
