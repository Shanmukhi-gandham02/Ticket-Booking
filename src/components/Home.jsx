import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import image from '../image.jpg'
import '../App.css'



const Home = () => {
  const [movies, setMovies] = useState([]);
  

  useEffect(()=>{
    async function fetchShows() {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchShows();
  }, []);

  const handleShowSummary = (show) => {
   
    localStorage.setItem('selectedShow', JSON.stringify(show));
  };

  return (
    
    <main>
      <ul>
        {movies.map(({ show }) => (
          <li key={show.id} className='card'>
            <img src={show.image ? show.image.medium: image} alt="" />
            <span className='uppercase'>{show.name}</span>
            <div>GENRE:  
              {show.genres.map((item) => <span> {item} </span>)}
            </div>
            <Link to={`/show/${show.id}`}>
              <button onClick={()=> handleShowSummary(show)}>View</button>
            </Link>
          </li>
        ))}
      </ul>
    </main>
    
    
  )
}

export default Home