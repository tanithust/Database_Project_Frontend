import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Item = ({ id, name, price, img, desc, rating }) => {
  const Rating = []

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) Rating.push(<i className='fas fa-star'></i>)
    else Rating.push(<i key={i} className='far fa-star'></i>)
  }

  return (
    <div className='ecommerce-card shadow-sm' key={id}>
      <div className='card-content'>
        <div className='item-img text-center'>
          <Link to={`/products/${id}`}>
            <img src={img} alt={name} className='img-fluid' />
          </Link>
        </div>
        <div className='row'>
          <div className='rating col-8'>
            <span style={{ color: '#FF9F1C' }}>{Rating}</span>
          </div>
          <div className='product-price col-4'>
            <h6 className='item-price'>{price}</h6>
          </div>
        </div>
        <div className='item-name'>
          <Link to={`/products/${id}`}>{name} </Link>
        </div>
        <div className='item-desc'>
          <p className='item-description'>{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Item
