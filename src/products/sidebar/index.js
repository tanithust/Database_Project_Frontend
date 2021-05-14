import React from 'react'
import data from '../item/data'
import './style.scss'
const Sidebar = () => {
  const brand = data.map((item) => {
    return item.by
  })
  return (
    <>
      <div className='filter mx-3 my-2'>
        <div className='range-filter'>
          <div className='range-filter-name'>Price Range</div>
          <ul className='list-unstyled price-range'>
            <li>
              <input
                className='form-check-input'
                type='radio'
                name='flexRadioDefault'
                id='flexRadioDefault1'
              />
              Default radio
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
