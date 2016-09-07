import React from 'react'
import logo from './logo.svg'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

export default React.createClass({
  render() {
    return (
      <div className="App">
        <Navbar/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Voter</h2>
        </div>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
})
