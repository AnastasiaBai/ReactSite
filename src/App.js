import React from 'react';
import './App.css';
// import Header from './components/Header';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Reviews from './routes/Reviews';
import DeliveryandPay from './routes/DeliveryandPay';
import Wholesale from './routes/Wholesale';
import Article from './routes/Article';
import Contacts from './routes/Contacts';
import Nav from './components/Nav';
import Layout from './components/Layout';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">
  
      <BrowserRouter><Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/deliveryandpay" element={<DeliveryandPay/>}/>
        <Route path="/wholesale" element={<Wholesale/>}/>
        <Route path="/article" element={<Article/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
