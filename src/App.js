import logo from './logo.svg';
import './App.css';
import Title from './Title.js'
import POPOSList from './POPOSList';
import Footer from './Footer'
import { useState } from 'react'

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Footer />
    </div>
  )
}


export default App;
