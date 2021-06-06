import React, { useEffect, useState } from 'react'
import axios from 'axios'
import data from './item/data'
import Item from './item/index'
import Filter from './products-filter/index'
import Pagination from './pagination/index'
import './style.scss'

const Products = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(8)

  const getData = async () => {
    const { data } = await axios.get('http://localhost:5000/products')
    setProducts(data)
  }

  useEffect(() => {
    getData()
    console.log(products)
  }, [])

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const newProduct = currentItems.map((item) => {
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
                <Filter />
              </div>
            </div>
            <div className='col-9 products'>
              <div className='products-wrapper'>
                <div className='row'>{newProduct}</div>
              </div>
              <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Products
