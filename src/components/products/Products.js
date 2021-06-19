import React, { useEffect, useState } from 'react'
import data from './item/data'
import Item from './item/index'
import Filter from './products-filter/index'
import Pagination from './pagination/index'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/storeSlice'
import { Link } from 'react-router-dom'
import './style.scss'

const Products = () => {
  const products = useSelector((state) => state.store.products)
  const cart = useSelector((state) => state.store.cart)
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(8)

  useEffect(() => {
    dispatch(fetchData())
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
  console.log(products)
  return (
    <>
      <Link to='/checkout/cart'>
        <button className='btn'>Cart</button>
      </Link>
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
