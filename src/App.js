import React from 'react';
import './App.css';
import AddProducts from './components/Addproducts/AddProducts';
import { Row, Col,  Typography } from 'antd';
import Titles from './components/Titles/Titles';




function App() {
  const { Title } = Typography;
  return (
    <div className="App">
      <div>
      <Titles />
      <AddProducts />
      </div>
    
    </div>
  );
}

export default App;
