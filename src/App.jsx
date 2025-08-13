import Home from './Pages/Home'
import CartSection from './Pages/CartSection'
import FoodSection from './Pages/FoodSection'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartContextProvider from './Utils/CartContext';

function App() {
  return (
    <CartContextProvider>
      <Router basename="/FirstBite-Restaurant/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartSection />} />
          <Route path="/menu" element={<FoodSection />} />
        </Routes>
      </Router>
    </CartContextProvider>
  )
}

export default App;
