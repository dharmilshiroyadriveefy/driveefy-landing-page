import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import AllRoutes from './routes/AllRoutes';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen main-container">
      <div className='nav-container'>
      <Navbar />
      </div>
      <main className="flex-grow main ">
        <AllRoutes />
      </main>
    </div>
  </BrowserRouter>
  )
}

export default App
