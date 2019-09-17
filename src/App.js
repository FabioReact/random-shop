import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'
import MenuExampleBasic from './components/MenuExampleBasic'
import Shop from './pages/Shop'

const App = (props) => {
  console.log(props)
  return (
    <Router>
      <MenuExampleBasic />
      <Route path="/shop" component={Shop} />
    </Router>
  );
}

const mapStateToProps = (state) => ({
  panier: state.panier,
  user: state.username
})

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(App)
