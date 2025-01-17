import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import AllRoutes from './routes/AllRoutes';

const App = () => {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <AllRoutes />
      </main>
    </div>
  </BrowserRouter>
  )
}

export default App
