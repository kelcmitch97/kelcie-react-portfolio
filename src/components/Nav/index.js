import React from 'react';
import './Nav.css';

export default function Nav({ currentTab, handleTabchange}) {

  return (
    <header className='header'>
      <h1>
        <a data-testid='link' href='/'>
          Kelcie Mitchelmore 
        </a>
      </h1>
      <nav>
        <ul>
          <li className='nav-item'>
            <a href='#about' onClick={() => handleTabchange('about')} className={currentTab === 'about' ? 'nav-link active' : 'nav-link'}>
              About Me 
            </a>
          </li>
          <li>
            <a data-testid='project' href='#project'>
              Projects
            </a>
          </li>
          <li>
            <a data-testid='contact' href='#contact'>
              Contact
            </a>
          </li>
          <li>
            <a data-testid='resume' href='#resume'>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
