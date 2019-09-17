import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import MenuExampleBasic from './components/MenuExampleBasic'
import Shop from './pages/Shop'

function App() {
  return (
    <Router>
      <MenuExampleBasic />
      <Route path="/shop" component={Shop} />
    </Router>
  );
}

export default App;
