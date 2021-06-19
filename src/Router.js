import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import ProductDetails from './components/details/index'
import Products from './components/products/Products'
import ErrorPage from './ErrorPage'
import Cart from './components/checkout/cart/index'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:id' children={<ProductDetails />} />
        <Route exact path='/checkout/cart' component={Cart} />
        <Route path='*' component={ErrorPage} />
      </Switch>
    </Router>
  )
}
export default AppRouter
