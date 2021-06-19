import React from 'react'
import { useSelector } from 'react-redux'
import Item from './item/index'
import data from '../../products/item/data'
import './style.css'

const Cart = () => {
  const cart = useSelector((state) => state.store.cart)
  // const increaseQty = (id) => {
  //   const cart = cart.map((item) => {
  //     if (item.ProductID == id) return { ...item, quantity: item.quantity + 1 }
  //     else return item
  //   })
  //   console.log(cart)
  // }
  // const decreaseQty = (id) => {
  //   const cart = cart.map((item) => {
  //     if (item.ProductID == id) return { ...item, quantity: item.quantity - 1 }
  //     else return item
  //   })
  // }
  const items = data.map((item) => {
    return <Item {...item} />
  })
  return (
    <div className='cart-container'>
      <div className='process'>
        <i className='fas fa-shopping-cart active'></i>
        <h4 className='active'>Cart</h4>
        <h4 className='process-seperate'>{'>'}</h4>
        <i className='fas fa-home'></i>
        <h4>Address</h4>
      </div>
      <div className='cart-content'>
        <div className='cart-product'>
          <ul>
            <li>{items}</li>
          </ul>
        </div>
        <div className='options'>
          <h4 className='title'>Options</h4>
          <div className='coupon'>
            <h4>Coupons</h4>
            <h4>
              <a href='#'>Apply</a>
            </h4>
          </div>
          <h4>Price Details</h4>
          <div className='opt-detail'>
            <p>Total MRP</p>
            <p>$598</p>
          </div>
          <div className='opt-detail'>
            <p>Bag Discount</p>
            <p className='secondary'>-25$</p>
          </div>
          <div className='opt-detail'>
            <p>Estimated Tax</p>
            <p>$1.3</p>
          </div>
          <div className='opt-detail bottom-line'>
            <p>Delivery Charges</p>
            <p className='secondary'>Free</p>
          </div>
          <div className='opt-detail'>
            <h4>Total</h4>
            <h4>$574</h4>
          </div>
          <button className='btn btn-wishlist'>Place Order</button>
        </div>
      </div>
    </div>
  )
}
export default Cart
