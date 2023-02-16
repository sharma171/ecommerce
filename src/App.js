
//import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
//import Component
import Header from './components/Header';

const App = ()=> {
  return (
  <div className="overflow-hidden">
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/portfolio' element={<ProductDetails />} />
    </Routes>
  </Router>
  </div>
  );
}

export default App;
