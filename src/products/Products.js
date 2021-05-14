import React, { useEffect, useState } from 'react'
import axios from 'axios'
import data from './item/data'
import Item from './item/index'
import Sidebar from './sidebar/index'
import './style.scss'

const Products = () => {
  const [products, setProducts] = useState([])
  const getData = async () => {
    const { data } = await axios.get('http://localhost:5000/products')
    setProducts(data)
  }

  useEffect(() => {
    getData()
    console.log(products)
  }, [])

  const newProduct = data.map((item) => {
    return (
      <div key={item.id} className='col-4 item'>
        <Item {...item} />
      </div>
    )
  })
  return (
    <>
      <div className='row justify-content-center bg-light'>
        <div className='col-9 content px-2'>
          <div className='row justify-content-around'>
            <div className='col-2 sidebar'>
              <div className='filter-col'>
                <Sidebar />
              </div>
            </div>
            <div className='col-9 products'>
              <div className='products-wrapper'>
                <div className='row'>{newProduct}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Products
