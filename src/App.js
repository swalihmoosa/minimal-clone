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



export function green(){
  var home = document.getElementById("home")
  // var button = document.querySelector(".button")
  home.classList.add("green");
  home.classList.remove("purple");
  home.classList.remove("cyan");
  home.classList.remove("blue");
  home.classList.remove("orange");
  home.classList.remove("red");
}
export function purple(){
  var home = document.getElementById("home")
  home.classList.add("purple");
  home.classList.remove("green");
  home.classList.remove("cyan");
  home.classList.remove("blue");
  home.classList.remove("orange");
  home.classList.remove("red");
  
}
export function cyan(){
  var home = document.getElementById("home")
  home.classList.add("cyan");
  home.classList.remove("green");
  home.classList.remove("purple");
  home.classList.remove("blue");
  home.classList.remove("orange");
  home.classList.remove("red");
}
export function blue(){
  var home = document.getElementById("home")
  home.classList.add("blue");
  home.classList.remove("green");
  home.classList.remove("cyan");
  home.classList.remove("purple");
  home.classList.remove("orange");
  home.classList.remove("red");
}
export function orange(){
  var home = document.getElementById("home")
  home.classList.add("orange");
  home.classList.remove("green");
  home.classList.remove("cyan");
  home.classList.remove("blue");
  home.classList.remove("purple");
  home.classList.remove("red");
}
export function red(){
  var home = document.getElementById("home")
  home.classList.add("red");
  home.classList.remove("green");
  home.classList.remove("cyan");
  home.classList.remove("blue");
  home.classList.remove("orange");
  home.classList.remove("purple");
}
