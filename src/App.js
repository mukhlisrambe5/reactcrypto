import React from 'react'
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import {Navbar,Homepage, Exchanges, Cryptocurrencies, News, CryptoDetails} from './components';

const App = () => {
  return (
    // <BrowserRouter>
    <div className='App'>
       <div className='Navbar'>
       <Navbar />
       </div>
       <div className='main'>
        <Layout>
            <div className='routes'>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/exchanges" element={<Exchanges />} />
                    <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
                    <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                    <Route path="/news" element={<News />} />
                </Routes>
            </div>
        </Layout>
       </div>
       <div className='footer'>
        
       </div>
    </div>
    // </BrowserRouter>

    
  )
}

export default App