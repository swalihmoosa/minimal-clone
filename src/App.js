import React from 'react'
import './App.css';
import Dark from './Components/Screens/Dark';
import Helps from './Components/Screens/Helps';
import Home from './Components/Screens/Home'
import Interface from './Components/Screens/Interface';

export default function App() {
  return (
    <>
      <Home />
      <Helps />
      <Interface />
      <Dark />
    </>
  )
}

