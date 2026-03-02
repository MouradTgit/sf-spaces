import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title.js'
import POPOSList from './components/POPOSList/POPOSList.js';
import Footer from './Footer'
import { useState } from 'react'
import POPOSDetails from './components/POPOSDetails/POPOSDetails.js'


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
