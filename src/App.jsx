import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <nav className='navbar'>
    <div className='navbar_logo'>Tasty</div>
      <div>
        <ul className='navbar_lists'>
          <li>Home</li>
          <li>Menu</li>
          <li>Specialties</li>
          <li>Reservation</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </div>
      </nav>
      <div className='item'>
        <h1>Book a table for yourself at a time convenient for you</h1>
        <button> Book a table</button>
      </div>
      
    </>
  )
}

export default App
