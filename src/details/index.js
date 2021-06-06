import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import img from '../assets/eCommerce/9.png'
import data from '../products/item/data'
import './style.scss'

const ProductDetails = () => {
  const [product, setProduct] = useState({})
  const { id } = useParams()
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:5000/products/${id}`)
    setProduct(data[0])
  }
  useEffect(() => {
    getData()
    // console.log(product)
  }, [])

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
            <h4 className='item-price mr-1'>{data[id].price}</h4>
            <p>
              Available - <span className='text-success'>In stock</span>
            </p>
            <p>{data[id - 1].desc}</p>
            <ul>
              <li>Free shipping</li>
              <li>EMI Options Available</li>
            </ul>
            <div className='buttons'>
              <button className='btn btn-primary col-sm-3'>View in cart</button>
              <button className='btn btn-primary col-sm-3'>Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ProductDetails
