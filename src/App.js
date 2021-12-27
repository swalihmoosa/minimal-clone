import React from 'react'
import './App.css';
import Clean from './Components/Screens/Clean';
import Dark from './Components/Screens/Dark';
import Footer from './Components/Screens/Footer';
// import Head from './Components/Screens/Head';
import Helps from './Components/Screens/Helps';
import Home from './Components/Screens/Home'
import Interface from './Components/Screens/Interface';
import Pricing from './Components/Screens/Pricing';
import Theme from './Components/Screens/Theme';

export default function App() {
  return (
    <>
      <Home />
      {/* <Head /> */}
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
  var home = document.getElementById("home");
  var price = document.getElementById("pricing");
  var footer = document.getElementById("footer")
  home.classList.add("green");
  home.classList.remove("purple");
  home.classList.remove("cyan");
  home.classList.remove("blue");
  home.classList.remove("orange");
  home.classList.remove("red");

  price.classList.add("green");
  price.classList.remove("purple");
  price.classList.remove("cyan");
  price.classList.remove("blue");
  price.classList.remove("orange");
  price.classList.remove("red");

  footer.classList.add("green");
  footer.classList.remove("purple");
  footer.classList.remove("cyan");
  footer.classList.remove("blue");
  footer.classList.remove("orange");
  footer.classList.remove("red");
}
export function purple(){
  var home = document.getElementById("home")
  var price = document.getElementById("pricing");
  var footer = document.getElementById("footer")
  home.classList.add("purple");
  home.classList.remove("green");
  home.classList.remove("cyan");
  home.classList.remove("blue");
  home.classList.remove("orange");
  home.classList.remove("red");

  price.classList.add("purple");
  price.classList.remove("green");
  price.classList.remove("cyan");
  price.classList.remove("blue");
  price.classList.remove("orange");
  price.classList.remove("red");

  footer.classList.add("purple");
  footer.classList.remove("green");
  footer.classList.remove("cyan");
  footer.classList.remove("blue");
  footer.classList.remove("orange");
  footer.classList.remove("red");
  
}
export function cyan(){
  var home = document.getElementById("home")
  var price = document.getElementById("pricing");
  var footer = document.getElementById("footer")
  home.classList.add("cyan");
  home.classList.remove("green");
  home.classList.remove("purple");
  home.classList.remove("blue");
  home.classList.remove("orange");
  home.classList.remove("red");

  price.classList.add("cyan");
  price.classList.remove("purple");
  price.classList.remove("green");
  price.classList.remove("blue");
  price.classList.remove("orange");
  price.classList.remove("red");

  footer.classList.add("cyan");
  footer.classList.remove("green");
  footer.classList.remove("purple");
  footer.classList.remove("blue");
  footer.classList.remove("orange");
  footer.classList.remove("red");
}
export function blue(){
  var home = document.getElementById("home")
  var price = document.getElementById("pricing");
  var footer = document.getElementById("footer")
  home.classList.add("blue");
  home.classList.remove("green");
  home.classList.remove("cyan");
  home.classList.remove("purple");
  home.classList.remove("orange");
  home.classList.remove("red");

  price.classList.add("blue");
  price.classList.remove("purple");
  price.classList.remove("cyan");
  price.classList.remove("green");
  price.classList.remove("orange");
  price.classList.remove("red");

  footer.classList.add("blue");
  footer.classList.remove("green");
  footer.classList.remove("cyan");
  footer.classList.remove("purple");
  footer.classList.remove("orange");
  footer.classList.remove("red");
}
export function orange(){
  var home = document.getElementById("home")
  var price = document.getElementById("pricing");
  var footer = document.getElementById("footer")
  home.classList.add("orange");
  home.classList.remove("green");
  home.classList.remove("cyan");
  home.classList.remove("blue");
  home.classList.remove("purple");
  home.classList.remove("red");

  price.classList.add("orange");
  price.classList.remove("purple");
  price.classList.remove("cyan");
  price.classList.remove("blue");
  price.classList.remove("green");
  price.classList.remove("red");

  footer.classList.add("orange");
  footer.classList.remove("green");
  footer.classList.remove("cyan");
  footer.classList.remove("blue");
  footer.classList.remove("purple");
  footer.classList.remove("red");
}
export function red(){
  var home = document.getElementById("home")
  var price = document.getElementById("pricing");
  var footer = document.getElementById("footer")
  home.classList.add("red");
  home.classList.remove("green");
  home.classList.remove("cyan");
  home.classList.remove("blue");
  home.classList.remove("orange");
  home.classList.remove("purple");

  price.classList.add("red");
  price.classList.remove("purple");
  price.classList.remove("cyan");
  price.classList.remove("blue");
  price.classList.remove("orange");
  price.classList.remove("green");

  footer.classList.add("red");
  footer.classList.remove("green");
  footer.classList.remove("cyan");
  footer.classList.remove("blue");
  footer.classList.remove("orange");
  footer.classList.remove("purple");
}
