import React from 'react'
import { Col, Row, Button , Typography } from 'antd';
import "antd/dist/antd.css";
import './Titles.css'
function Titles() {
    const { Title } = Typography;
  return (
    <>
    <Row >
    <Col span={12} offset={6} className='title-conatiner'>
    <Title level={4}>Add New Category</Title>
    <Title level={4}>Add New Product</Title>
    
    </Col>
</Row>
</>
  )
}

export default Titles