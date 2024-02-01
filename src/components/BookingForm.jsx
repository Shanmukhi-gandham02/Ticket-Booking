import React, {useState} from 'react'
import { Link } from 'react-router-dom';


const BookingForm = () =>{

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tickets: 1,
  });

  const [bookingMessage, setBookingMessage] = useState(null);

  const selectedMovie = JSON.parse(localStorage.getItem('selectedShow'));

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault(); 
    localStorage.setItem('userDetails', JSON.stringify(formData));
    setBookingMessage('Tickets have been booked!');
  };
  return (
    
    <main className='summary-card'>
      {bookingMessage ? <div><p>{bookingMessage}</p> <Link to ="/">
          <button style={{float: 'right', marginTop:'20px'}}>Go Home</button>
        </Link> </div> : <>
      <h1>Book Movie Ticket</h1>
      <div>
        <h2>Movie Details</h2>
        <p className='uppercase' style={{fontSize: '20px', fontWeight: 'bold', color: '#ccc' }}>Name: {selectedMovie.name}</p>
        <div style={{fontSize: '18px', fontWeight: '500', color:'#ccc', marginLeft:'5px'}}>GENRE:  
              {selectedMovie.genres.map((item) => <span> {item} </span>)}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label for="name">
          Name
        </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        
        <label for="email">
          Email
        </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        <label for="tickets">
          Number Of Tickets
        </label>
        <input
            type="number"
            name="tickets"
            value={formData.tickets}
            onChange={handleChange}
            min={1}
            required
          />

        <button type="submit" className='submit-btn'>Submit</button>
        <Link to ="/">
          <button style={{float: 'right', marginTop:'20px'}}>Go Home</button>
        </Link>
      </form>     
      </>
}  
    </main>
    
  );
  
}

export default BookingForm
