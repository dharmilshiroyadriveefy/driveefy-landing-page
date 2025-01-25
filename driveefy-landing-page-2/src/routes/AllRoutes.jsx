
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  );
};

export default AllRoutes;
