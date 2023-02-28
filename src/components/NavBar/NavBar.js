import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        <ul className='navbar-links'>
            <li>
                <a href='/'>
                    Placar
                </a>
            </li>

            <li>
                Ranking
            </li>

            <li>
                <a href='/Jogadores'>
                    Jogadores
                </a>
            </li>
        </ul>
    </div>
  )
}

export default NavBar