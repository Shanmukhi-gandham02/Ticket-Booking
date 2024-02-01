import React, {useState, useEffect} from 'react'
import {Link, } from 'react-router-dom'

import image from '../image.jpg'
import '../App.css';

const Summary = () => {
  
  const movie = JSON.parse(localStorage.getItem('selectedShow'));
  
  return (
    <main>
      <div className='summary-card'>
        <h1 className='uppercase'>{movie.name}</h1>
        <img src={movie.image ? movie.image.medium : image} alt="" />
        <p dangerouslySetInnerHTML={{ __html: movie.summary }} />
        <div>
          <Link to ="/">
            <button>Go Home</button>
          </Link>

          <Link to ="/book">
            <button>Book Ticket</button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Summary