import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import MenuExampleBasic from './components/MenuExampleBasic'
import Shop from './pages/Shop'

const App = (props) => {
  // console.log(props)
  return (
    <Router>
      <MenuExampleBasic />
      <Route path="/shop" component={Shop} />
    </Router>
  );
}

export default App
