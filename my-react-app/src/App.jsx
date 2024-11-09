import { Component, useState } from 'react'
import Topbar from './components/topbar';
import './App.css'

import Home from './pages/Home';
import Liked from './pages/Liked';
import Find from './pages/Find';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/Home":
      Component = <Home />
      break
    case "/Liked":
      Component = <Liked />
      break
    case "/Find":
      Component = <Find />
  }
  
  return (
    <>
      <Topbar/>
      {Component}
    </>
  );
}

export default App
