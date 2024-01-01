import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      
        <Header />
        <Routes>
  <Route path="/" element={<ProductListing />} />
  <Route path="/product/:productId" element={<ProductDetails />} />
  <Route path="*" element={<div>404 Not Found!</div>} />
</Routes>

    </div>
    </Router>
  );
}

export default App;
