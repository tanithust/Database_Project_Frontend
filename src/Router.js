import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import ProductDetails from './details/index'
import Products from './products/Products'
import ErrorPage from './ErrorPage'
const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/products/:id' children={<ProductDetails />} />
        <Route path='*' component={ErrorPage} />
      </Switch>
    </Router>
  )
}
export default AppRouter
