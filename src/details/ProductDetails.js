import axios from 'axios'
import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
      <h1>{product.ProductID}</h1>
      <h1>{product.Name}</h1>
      <h1>ProductDetails</h1>
    </>
  )
}
export default ProductDetails
