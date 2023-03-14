import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chart from './pages/Chart';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
