import React from 'react'
import data from '../item/data'
import './style.scss'
const Filter = () => {
  const brand = data.map((item) => {
    return item.by
  })
  const brandName = brand.reduce((result, element) => {
    return result.includes(element) ? result : [...result, element]
  }, [])
  console.log(brandName)
  const Brand = brandName.map((b) => {
    return (
      <div className='form-check'>
        <input
          className='form-check-input'
          type='checkbox'
          value={b}
          id='defaultCheck1'
        />
        <label className='form-check-label' for='defaultCheck1'>
          {b}
        </label>
      </div>
    )
  })

  return (
    <>
      <form action='/products'>
        <div className='filter mx-3 my-2'>
          <div className='brand-filter'>
            <div className='brand-filter-name'>Brand</div>
            {Brand}
          </div>
        </div>
      </form>
    </>
  )
}

export default Filter
