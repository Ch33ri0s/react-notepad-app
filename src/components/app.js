import React, { Component } from 'react';
import Navbar from './navigation';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Navbar />
        <main>
          <p>YOU HIT THE LOGO LINK</p>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;