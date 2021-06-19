import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import data from '../products/item/data'
import './style.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../../redux/storeSlice'

const ProductDetails = () => {
  const { id } = useParams()
  const product = useSelector((state) => state.store.products[id - 1])
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1)
  // const getData = async () => {
  //   const { data } = await axios.get(`http://localhost:5000/products/${id}`)
  //   setProduct(data[0])
  // }
  const order = {
    ...product,
    quantity: qty,
  }

  const increase = () => {
    setQty((prevState) => {
      return prevState + 1
    })
  }
  const decrease = () => {
    setQty((prevState) => {
      if (prevState == 1) return prevState
      else return prevState - 1
    })
  }

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4 div1'>
            <img
              src={data[id - 1].img}
              alt={data[id - 1].name}
              className='img-fluid'
              width='500'
              height='600'
            />
          </div>
          <div className='col-sm div2'>
            <h1>{data[id - 1].name}</h1>
            <p className='card-text item-company mb-0'>
              <span>by </span>
              <a>{data[id - 1].by}</a>
            </p>
            <h4 className='item-price mr-1'>{data[id - 1].price}</h4>
            <p>
              Available - <span className='text-success'>In stock</span>
            </p>
            <p>{data[id - 1].desc}</p>
            <ul>
              <li>Free shipping</li>
              <li>EMI Options Available</li>
            </ul>
            <div className='qty'>
              <p>Qty</p>
              <div className='qty-btn'>
                <button
                  id='qty-dec'
                  className='qty-dec'
                  onClick={() => decrease()}
                >
                  -
                </button>
                <span id='qty'>{qty}</span>
                <button
                  className='qty-inc'
                  id='qty-inc'
                  onClick={() => increase()}
                >
                  +
                </button>
              </div>
            </div>
            <div className='buttons'>
              <button
                className='btn btn-primary col-sm-3'
                onClick={() => dispatch(addToCart(order))}
              >
                Add to cart
              </button>
              <button className='btn btn-primary col-sm-3'>Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDetails
