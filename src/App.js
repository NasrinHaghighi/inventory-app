import React from 'react';
import './App.css';
import AddProducts from './components/Addproducts/AddProducts';
import { Row, Col,  Typography } from 'antd';





function App() {
  const { Title } = Typography;
  return (
    <div className="App">
      <div>

      <AddProducts />
      </div>
    
    </div>
  );
}

export default App;
