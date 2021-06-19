import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'

const storeSlice = createSlice({
  name: 'store',
  initialState: {
    products: [],
    cart: [],
    user: '',
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.ProductID !== action.payload
      )
    },
    setCart: (state, action) => {
      state.cart = action.payload
    },
    increaseQty: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.ProductID === action.payload)
          return { ...item, quantity: item.quantity + 1 }
        else return item
      })
    },
    decreaseQty: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.ProductID === action.payload)
          return { ...item, quantity: item.quantity - 1 }
        else return item
      })
    },
  },
})
export const {
  setProducts,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  setCart,
} = storeSlice.actions
export const fetchData = () => async (dispatch) => {
  const { data } = await axios.get('http://localhost:5000/products')
  dispatch(setProducts(data))
}
export default storeSlice.reducer
