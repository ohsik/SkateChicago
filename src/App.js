import React, { Component } from 'react'
import mainBanner from './imgs/skate-chicago-banner.jpg'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={mainBanner} alt="Skate Chicago 2017" />
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
