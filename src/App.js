import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Summary from './components/Summary';
import BookingForm from './components/BookingForm';
import { ShowProvider } from './ContextAPI/context';


function App() {
  return (
    <>
    <nav>
      <div className='logo'>BookMyTicket</div>
    </nav>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/show/:id" element={<Summary/>} />
        <Route path="/book" element={<BookingForm/>} />
      </Routes>
      
    </BrowserRouter>
    </>
    
  );
}

export default App;
