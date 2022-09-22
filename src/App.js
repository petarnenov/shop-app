import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation';
import Home from './routes/Home/Home';
import Auth from './routes/Auth/Auth';
import Shop from './routes/Shop/Shop';
import Checkout from './routes/Checkout/Checkout';

import './styles.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}

export default App;
