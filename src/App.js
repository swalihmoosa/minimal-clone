import React from 'react'
import './App.css';
import Clean from './Components/Screens/Clean';
import Dark from './Components/Screens/Dark';
import Footer from './Components/Screens/Footer';
import Helps from './Components/Screens/Helps';
import Home from './Components/Screens/Home'
import Interface from './Components/Screens/Interface';
import Pricing from './Components/Screens/Pricing';
import Theme from './Components/Screens/Theme';

export default function App() {
  return (
    <>
      <Home />
      <Helps />
      <Interface />
      <Dark />
      <Theme />
      <Clean />
      <Pricing />
      <Footer />
    </>
  )
}

